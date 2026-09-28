// Geometry for the home page survey map. Everything is computed at build time:
// time runs along `u` (0 = 2010, SURVEYED = the build date), `v` is the free
// cross axis. Each orientation projects (u, v) into its own viewBox.

export type Orientation = 'landscape' | 'portrait';

export const VIEW: Record<Orientation, { w: number; h: number }> = {
  landscape: { w: 1000, h: 700 },
  // Sized so one unit is roughly one CSS pixel on a phone.
  portrait: { w: 320, h: 900 },
};

const START = 2010.2;
const K = 1; // recency softening: smaller values give recent months more room
export const SURVEYED = 0.94;

export function decimalYear(d: Date): number {
  const y = d.getUTCFullYear();
  const s = Date.UTC(y, 0, 1);
  const e = Date.UTC(y + 1, 0, 1);
  return y + (d.getTime() - s) / (e - s);
}

/** Maps a decimal year to u. The grid widens toward the survey date. */
export function makeScale(present: number) {
  const denom = Math.log(1 + (present - START) / K);
  return (t: number) => {
    const r = Math.max(0, present - t);
    return Math.max(0, SURVEYED * (1 - Math.log(1 + r / K) / denom));
  };
}

function project(o: Orientation, u: number, v: number): [number, number] {
  const { w, h } = VIEW[o];
  return o === 'landscape' ? [u * w, v * h] : [v * w, (1 - u) * h];
}

// ---------------------------------------------------------------- terrain

function hash(ix: number, iy: number, seed: number): number {
  let h = Math.imul(ix, 374761393) ^ Math.imul(iy, 668265263) ^ Math.imul(seed, 144269504);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
}

function valueNoise(x: number, y: number, seed: number): number {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const fx = x - ix;
  const fy = y - iy;
  const sx = fx * fx * (3 - 2 * fx);
  const sy = fy * fy * (3 - 2 * fy);
  const a = hash(ix, iy, seed);
  const b = hash(ix + 1, iy, seed);
  const c = hash(ix, iy + 1, seed);
  const d = hash(ix + 1, iy + 1, seed);
  return a + (b - a) * sx + (c - a) * sy + (a - b - c + d) * sx * sy;
}

function fbm(x: number, y: number): number {
  let sum = 0;
  let amp = 0.5;
  let freq = 1;
  for (let i = 0; i < 4; i++) {
    sum += amp * valueNoise(x * freq, y * freq, 7 + i);
    amp *= 0.5;
    freq *= 2;
  }
  return sum;
}

export function riverV(o: Orientation, u: number): number {
  return o === 'landscape'
    ? 0.77 + 0.05 * Math.sin(u * 7 + 0.6) + 0.018 * Math.sin(u * 19)
    : 0.9 + 0.035 * Math.sin(u * 9 + 0.4) + 0.012 * Math.sin(u * 23);
}

interface Hill {
  u: number;
  v: number;
  a: number;
  s: number;
}

function heightField(o: Orientation, hills: Hill[]) {
  const { w, h } = VIEW[o];
  const aspect = o === 'landscape' ? w / h : h / w;
  return (u: number, v: number) => {
    const px = u * aspect;
    let z = 0.6 * u;
    z += 0.26 * (fbm(px * 2.4 + 3.1, v * 2.4 + 7.7) - 0.5);
    for (const hl of hills) {
      const dx = (u - hl.u) * aspect;
      const dy = v - hl.v;
      z += hl.a * Math.exp(-(dx * dx + dy * dy) / (2 * hl.s * hl.s));
    }
    const dv = v - riverV(o, u);
    z -= 0.14 * Math.exp(-(dv * dv) / (2 * 0.03 * 0.03));
    return z;
  };
}

// ---------------------------------------------------------------- contours

type Pt = [number, number];

function marchingSquares(values: number[][], nu: number, nv: number, level: number): Pt[][] {
  const segs: [Pt, Pt][] = [];
  const edge = (i0: number, j0: number, i1: number, j1: number): Pt => {
    const a = values[i0][j0];
    const b = values[i1][j1];
    const t = (level - a) / (b - a);
    return [(i0 + (i1 - i0) * t) / (nu - 1), (j0 + (j1 - j0) * t) / (nv - 1)];
  };
  for (let i = 0; i < nu - 1; i++) {
    for (let j = 0; j < nv - 1; j++) {
      const tl = values[i][j] > level ? 8 : 0;
      const tr = values[i + 1][j] > level ? 4 : 0;
      const br = values[i + 1][j + 1] > level ? 2 : 0;
      const bl = values[i][j + 1] > level ? 1 : 0;
      const c = tl | tr | br | bl;
      if (c === 0 || c === 15) continue;
      const top = () => edge(i, j, i + 1, j);
      const right = () => edge(i + 1, j, i + 1, j + 1);
      const bottom = () => edge(i, j + 1, i + 1, j + 1);
      const left = () => edge(i, j, i, j + 1);
      const center =
        (values[i][j] + values[i + 1][j] + values[i + 1][j + 1] + values[i][j + 1]) / 4 > level;
      switch (c) {
        case 1: case 14: segs.push([left(), bottom()]); break;
        case 2: case 13: segs.push([bottom(), right()]); break;
        case 3: case 12: segs.push([left(), right()]); break;
        case 4: case 11: segs.push([top(), right()]); break;
        case 6: case 9: segs.push([top(), bottom()]); break;
        case 7: case 8: segs.push([left(), top()]); break;
        case 5:
          if (center) { segs.push([left(), top()]); segs.push([bottom(), right()]); }
          else { segs.push([left(), bottom()]); segs.push([top(), right()]); }
          break;
        case 10:
          if (center) { segs.push([top(), right()]); segs.push([left(), bottom()]); }
          else { segs.push([left(), top()]); segs.push([bottom(), right()]); }
          break;
      }
    }
  }
  return chain(segs);
}

function chain(segs: [Pt, Pt][]): Pt[][] {
  const key = (p: Pt) => `${p[0].toFixed(6)},${p[1].toFixed(6)}`;
  const ends = new Map<string, number[]>();
  segs.forEach(([a, b], i) => {
    for (const p of [a, b]) {
      const k = key(p);
      const list = ends.get(k);
      if (list) list.push(i);
      else ends.set(k, [i]);
    }
  });
  const used = new Uint8Array(segs.length);
  const lines: Pt[][] = [];
  const extend = (line: Pt[]) => {
    for (;;) {
      const tail = line[line.length - 1];
      const next = (ends.get(key(tail)) ?? []).find((i) => !used[i]);
      if (next === undefined) return;
      used[next] = 1;
      const [a, b] = segs[next];
      line.push(key(a) === key(tail) ? b : a);
    }
  };
  segs.forEach(([a, b], i) => {
    if (used[i]) return;
    used[i] = 1;
    const line: Pt[] = [a, b];
    extend(line);
    line.reverse();
    extend(line);
    if (line.length > 3) lines.push(line);
  });
  return lines;
}

function chaikin(line: Pt[], passes = 2): Pt[] {
  let pts = line;
  for (let n = 0; n < passes; n++) {
    const out: Pt[] = [pts[0]];
    for (let i = 0; i < pts.length - 1; i++) {
      const [x0, y0] = pts[i];
      const [x1, y1] = pts[i + 1];
      out.push([0.75 * x0 + 0.25 * x1, 0.75 * y0 + 0.25 * y1]);
      out.push([0.25 * x0 + 0.75 * x1, 0.25 * y0 + 0.75 * y1]);
    }
    out.push(pts[pts.length - 1]);
    pts = out;
  }
  return pts;
}

function toPath(o: Orientation, uvs: Pt[], close = false): string {
  const d = uvs
    .map(([u, v], i) => {
      const [x, y] = project(o, u, v);
      return `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join('');
  return close ? `${d}Z` : d;
}

// ---------------------------------------------------------------- layout

export interface Span {
  from: number;
  to: number;
}

export interface Role {
  id: string;
  name: string;
  title: string;
  from: number;
  to: number | null;
  tone: 'moss' | 'gold' | 'slate';
  range: string;
}

export interface Mark {
  kind: 'experiment' | 'writing' | 'paper';
  label: string;
  detail: string;
  href: string;
  t: number;
  to?: number;
  range: string;
  external?: boolean;
}

export interface PlacedMark extends Mark {
  x: number;
  y: number;
  lx: number;
  ly: number;
  lw: number;
  side: 'left' | 'right';
  leader: boolean;
  span: Span;
}

export interface PlacedRole extends Role {
  path: string;
  lx: number;
  ly: number;
  lw: number;
  span: Span;
}

export interface SurveyMap {
  orientation: Orientation;
  w: number;
  h: number;
  contours: { d: string; index: boolean }[];
  roles: PlacedRole[];
  overlap: string | null;
  unsurveyed: string;
  surveyedAt: number;
  river: string;
  years: { year: number; pos: number; labelled: boolean }[];
  marks: PlacedMark[];
  /** Width of one year, as a fraction of the field, then and now. */
  yearWidth: { then: number; now: number };
}

type Rect = [number, number, number, number];

const overlaps = (a: Rect, b: Rect) =>
  a[0] < b[2] && a[2] > b[0] && a[1] < b[3] && a[3] > b[1];

function wobble(v: number, seed: number) {
  return 0.007 * Math.sin(v * 13 + seed) + 0.004 * Math.sin(v * 31 + seed * 2);
}

export function buildMap(
  o: Orientation,
  opts: { present: number; roles: Role[]; marks: Mark[] },
): SurveyMap {
  const { w, h } = VIEW[o];
  const { present } = opts;
  const scale = makeScale(present);
  const land = o === 'landscape';
  const fs = land ? 15 : 14; // label font size in viewBox units
  const labelW = land ? 190 : 138;
  const placed: Rect[] = [];

  const estimateH = (text: string, detail: string) => {
    const lines = (str: string, size: number, charW: number) =>
      Math.max(1, Math.ceil(str.length / Math.floor(labelW / (size * charW))));
    // Balanced wrapping spends an extra line on longer titles.
    const n = lines(text, fs * 1.12, 0.6);
    return (n > 1 ? n + 1 : n) * fs * 1.35 + fs * 0.95 + fs * 0.6;
  };

  // Keep clear of the survey-date label and the field edges.
  const [sx, sy] = project(o, SURVEYED, 0);
  placed.push(land ? [sx - 70, 0, sx + 70, 34] : [0, sy - 24, w, sy + 6]);

  // Strata: one band per role.
  // Snap a role's start to an earlier role's end when they meet within a
  // couple of months, so adjacent strata share one contact line.
  const edgeSeed = (t: number) => Math.round(t * 4) % 97;
  const roles: PlacedRole[] = opts.roles.map((r) => {
    const meets = opts.roles.find((p) => p.to !== null && Math.abs(p.to - r.from) < 0.2);
    const from = meets?.to ?? r.from;
    const u0 = scale(from);
    const u1 = r.to === null ? SURVEYED : scale(r.to);
    const steps = 40;
    const leftEdge: Pt[] = [];
    const rightEdge: Pt[] = [];
    for (let s = 0; s <= steps; s++) {
      const v = s / steps;
      leftEdge.push([u0 + wobble(v, edgeSeed(from)), v]);
      rightEdge.push([r.to === null ? u1 : u1 + wobble(v, edgeSeed(r.to)), v]);
    }
    const path = toPath(o, [...leftEdge, ...rightEdge.reverse()], true);
    const uc = (u0 + u1) / 2;
    const bandW = (u1 - u0) * (land ? w : h);
    const lw = land ? Math.min(labelW + 30, Math.max(120, bandW - 24)) : 200;
    let lx: number;
    let ly: number;
    if (land) {
      [lx, ly] = project(o, uc, 0.9);
      lx -= lw / 2;
      ly -= fs * 1.1;
    } else {
      [lx, ly] = project(o, u0, 0.05);
      ly -= fs * 3.2;
    }
    placed.push([lx, ly, lx + lw, ly + fs * 2.6]);
    return { ...r, path, lx, ly, lw, span: { from: u0, to: u1 } };
  });

  // Hatched overlap where two roles share time.
  let overlap: string | null = null;
  for (let a = 0; a < roles.length; a++) {
    for (let b = a + 1; b < roles.length; b++) {
      const lo = Math.max(roles[a].span.from, roles[b].span.from);
      const hi = Math.min(roles[a].span.to, roles[b].span.to);
      if (hi > lo) overlap = toPath(o, [[lo, 0], [hi, 0], [hi, 1], [lo, 1]], true);
    }
  }

  // Lettering never sits on the river.
  const water: Pt[] = [];
  for (let s = 0; s <= 200; s++) water.push(project(o, s / 200, riverV(o, s / 200)));

  // Marks, newest first so recent work gets the clearest positions.
  const lanes: Record<Mark['kind'], number[]> = land
    ? {
        experiment: [0.22, 0.12, 0.34, 0.46, 0.56],
        writing: [0.5, 0.38, 0.62, 0.28, 0.16, 0.68],
        paper: [],
      }
    : {
        experiment: [0.05, 0.5],
        writing: [0.5, 0.05, 0.3],
        paper: [],
      };
  const hills: Hill[] = [];
  const marks: PlacedMark[] = [...opts.marks]
    .sort((a, b) => b.t - a.t)
    .map((m) => {
      const u = scale(m.t);
      const span = { from: u, to: m.to === undefined ? u : scale(m.to) };
      const lh = estimateH(m.label, m.detail);
      const rectFor = (v: number, shift = 0) => {
        const [x, y] = project(o, u, v);
        const side: 'left' | 'right' = x + 14 + labelW > w - 6 ? 'left' : 'right';
        const lx = side === 'right' ? x + 14 : x - 14 - labelW;
        const ly = y - fs * 0.7 + shift;
        const r: Rect = [lx, ly, lx + labelW, ly + lh];
        const sym: Rect = [x - 10, y - 10, x + 10, y + 10];
        return { r, sym, x, y, side };
      };
      const clear = (c: ReturnType<typeof rectFor>) =>
        !placed.some((p) => overlaps(p, c.r) || overlaps(p, c.sym)) &&
        !overlaps(c.r, c.sym) &&
        !water.some(([x, y]) => x > c.r[0] - 4 && x < c.r[2] + 4 && y > c.r[1] - 4 && y < c.r[3] + 4);
      const candidates = m.kind === 'paper' ? [riverV(o, u)] : lanes[m.kind];
      let choice = candidates.map((v) => ({ v, ...rectFor(v) })).find(clear);
      let shift = 0;
      if (!choice) {
        // Marks a few weeks apart share a position: nudge the symbol across the
        // free axis and slide its label clear, joined by a leader line.
        const nudges = m.kind === 'paper' ? [0] : [0, -0.08, 0.08, -0.16];
        search: for (let step = fs / 2; step < 600; step += fs / 2) {
          for (const dv of nudges) {
            for (const s of [-step, step]) {
              const v = candidates[0] + dv;
              const c = rectFor(v, s);
              if (v > 0.02 && v < 0.98 && c.r[1] > 4 && c.r[3] < h - 4 && clear(c)) {
                choice = { v, ...c };
                shift = s;
                break search;
              }
            }
          }
        }
        if (!choice) choice = { v: candidates[0], ...rectFor(candidates[0]) };
      }
      placed.push(choice.r, choice.sym);
      if (m.kind !== 'paper') {
        hills.push({ u, v: choice.v, a: m.kind === 'experiment' ? 0.2 : 0.08, s: m.kind === 'experiment' ? 0.06 : 0.035 });
      }
      return {
        ...m,
        x: choice.x,
        y: choice.y,
        lx: choice.r[0],
        ly: choice.r[1],
        lw: labelW,
        side: choice.side,
        leader: shift !== 0,
        span,
      };
    });

  // Contours over the whole field, with hills raised under each mark.
  const z = heightField(o, hills);
  const nu = land ? 110 : 90;
  const nv = land ? 80 : 40;
  const values: number[][] = [];
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < nu; i++) {
    values[i] = [];
    for (let j = 0; j < nv; j++) {
      const val = z(i / (nu - 1), j / (nv - 1));
      values[i][j] = val;
      min = Math.min(min, val);
      max = Math.max(max, val);
    }
  }
  const count = 26;
  const contours: SurveyMap['contours'] = [];
  for (let k = 1; k < count; k++) {
    const level = min + ((max - min) * k) / count;
    for (const line of marchingSquares(values, nu, nv, level)) {
      contours.push({ d: toPath(o, chaikin(line)), index: k % 5 === 0 });
    }
  }

  const riverPts: Pt[] = [];
  for (let s = 0; s <= 120; s++) riverPts.push([s / 120, riverV(o, s / 120)]);

  const years: SurveyMap['years'] = [];
  let lastLabelled = -Infinity;
  const minGap = land ? 0.036 : 0.03;
  for (let y = Math.ceil(START); y <= Math.floor(present); y++) {
    const u = scale(y);
    const labelled = u - lastLabelled >= minGap && SURVEYED - u >= minGap * 0.6;
    if (labelled) lastLabelled = u;
    years.push({ year: y, pos: u, labelled });
  }

  return {
    orientation: o,
    w,
    h,
    contours,
    roles,
    overlap,
    unsurveyed: toPath(o, [[SURVEYED, 0], [1, 0], [1, 1], [SURVEYED, 1]], true),
    surveyedAt: SURVEYED,
    river: toPath(o, riverPts),
    years,
    marks,
    yearWidth: { then: scale(2013) - scale(2012), now: scale(present) - scale(present - 1) },
  };
}
