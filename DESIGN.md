---
name: Guilherme Carvalho
description: A career drawn as a survey sheet. Parchment, brown ink, dated marks on data-bearing terrain.
colors:
  ember: "#a14e08"
  brick: "#b03c3c"
  water: "#336874"
  moss: "#5f6928"
  band-moss: "#c2bf8b"
  band-gold: "#e0c28e"
  band-slate: "#bcc1a8"
  contour: "#b18d61"
  grid: "#dc927c"
  page: "#f2e5bc"
  mantle: "#ecdeb0"
  overlay: "#dcc894"
  ink: "#3f2d23"
  ink-2: "#654735"
  ink-3: "#62574c"
  ink-4: "#9a8878"
  field-muted: "#4e3e30"
  field-water: "#1f4d57"
typography:
  display:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "normal"
    fontVariation: "'wdth' 125"
  display-case:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(2rem, 8vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 0.95
    fontVariation: "'wdth' 125"
  article-title:
    fontFamily: "'Source Serif 4 Variable', 'Source Serif 4', Georgia, serif"
    fontSize: "clamp(2rem, 4.6vw, 3.25rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "'Source Serif 4 Variable', 'Source Serif 4', Georgia, serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.2
  lede:
    fontFamily: "'Source Serif 4 Variable', 'Source Serif 4', Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.45
  title:
    fontFamily: "'Source Serif 4 Variable', 'Source Serif 4', Georgia, serif"
    fontSize: "1.3125rem"
    fontWeight: 600
    lineHeight: 1.3
  reading:
    fontFamily: "'Source Serif 4 Variable', 'Source Serif 4', Georgia, serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "'Source Serif 4 Variable', 'Source Serif 4', Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  caption:
    fontFamily: "'Source Serif 4 Variable', 'Source Serif 4', Georgia, serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.45
  hydrography:
    fontFamily: "'Source Serif 4 Variable', 'Source Serif 4', Georgia, serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    letterSpacing: "0.06em"
  sheet-lettering:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 800
    letterSpacing: "0.2em"
    fontVariation: "'wdth' 125"
  label:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.3
  margin-data:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    letterSpacing: "0.06em"
    fontFeature: "'tnum' 1"
    fontVariation: "'wdth' 88"
  margin-data-small:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.06em"
    fontFeature: "'tnum' 1"
    fontVariation: "'wdth' 82"
  year-label:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    fontFeature: "'tnum' 1"
    fontVariation: "'wdth' 82"
  margin-nav:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.14em"
    fontVariation: "'wdth' 112"
  code:
    fontFamily: "ui-monospace, 'SF Mono', 'Cascadia Code', Menlo, Consolas, monospace"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: "0px"
  focus: "2px"
spacing:
  gutter: "clamp(1rem, 3vw, 2.5rem)"
  column-gap: "clamp(1.5rem, 4vw, 4rem)"
  section-y: "clamp(3rem, 8vh, 5rem)"
  page-top: "clamp(1.5rem, 5vh, 3rem)"
  entry-y: "1.2rem"
  row-y: "0.45rem"
  neat-inset: "5px"
components:
  margin-nav-link:
    textColor: "{colors.ink-3}"
    typography: "{typography.margin-nav}"
    padding: "0.35rem 0"
  margin-nav-link-current:
    textColor: "{colors.ink}"
  contact-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  contact-link-hover:
    textColor: "{colors.ember}"
  back-link:
    textColor: "{colors.ink-3}"
    typography: "{typography.margin-data}"
  legend-item:
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
    padding: "0.45rem 0"
  gazetteer-entry:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    padding: "1.2rem 0 1.3rem"
  gazetteer-entry-compact:
    textColor: "{colors.ink}"
    padding: "1.1rem 0 1.2rem"
  gazetteer-band:
    backgroundColor: "{colors.mantle}"
  year-label:
    textColor: "{colors.brick}"
    typography: "{typography.year-label}"
  facts-row-label:
    textColor: "{colors.ink-3}"
    typography: "{typography.margin-data-small}"
  facts-row-value:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  case-title-block:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.6rem 0.9rem"
  plate:
    backgroundColor: "{colors.mantle}"
    rounded: "{rounded.none}"
  plate-caption:
    textColor: "{colors.ink-2}"
    typography: "{typography.caption}"
  decision:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    padding: "0 0 0 1.9rem"
  cta-box:
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: "clamp(1.75rem, 4vw, 2.75rem)"
  activity-bar:
    backgroundColor: "{colors.moss}"
    height: "7.5rem"
  activity-bar-active:
    backgroundColor: "{colors.ember}"
  code-block:
    backgroundColor: "{colors.mantle}"
    typography: "{typography.code}"
    padding: "1rem 1.2rem"
  survey-field:
    backgroundColor: "{colors.page}"
    rounded: "{rounded.none}"
  stratum-label:
    textColor: "{colors.ink}"
    typography: "{typography.sheet-lettering}"
  map-mark-detail:
    textColor: "{colors.field-muted}"
  paper-mark:
    textColor: "{colors.field-water}"
    typography: "{typography.hydrography}"
---

# Design System: Guilherme Carvalho

## Overview

**Creative North Star: "The Survey Quadrangle"**

The site is a printed survey sheet, tuned for the web. Parchment paper, brown ink, a neatline with coordinates in the collar, a legend that doubles as navigation, and a map field where every feature is data: time runs across the field, roles are tinted strata, shipped work and writing are dated survey marks, research is a slate-blue river lettered in italic. Nothing on the sheet is ornament; terrain that carries no data does not get drawn. Inner pages keep the same vocabulary at reading scale: gazetteers on a brick year grid, a stratigraphic section column for roles, screenshots printed as numbered plates, case facts in a map title block, decisions marked with survey triangles.

Density is cartographic: small, precise lettering in two Archivo widths sits against generous parchment, and reading copy moves into Source Serif 4. The sheet is flat. Depth comes from double neatlines, tinted strata, and a darker mantle parchment for indexes, plates, and code, never from shadows or rounded cards. Light parchment is canonical; an "evening walnut" dark sheet follows the OS preference with the same structure and retuned pigments, and code follows it through Shiki's gruvbox soft themes (light and dark).

This world replaces the earlier dark terminal look and now serves every public route: home, `/who-am-i`, `/writings`, `/experiments`, their detail pages, and `/cases/*`. Only `/pomodoro` and `/signal` still use the legacy layout (Tailwind, dark terminal tokens); they are pending migration, not a second system.

**Key Characteristics:**
- Parchment sheet, brown ink, ember reserved for interaction.
- Terrain is data: strata, year grid, contours raised under marks, a river for research, a single moss series for activity.
- Archivo in two widths (expanded caps for sheet lettering, condensed for margin data); Source Serif 4 for everything read; a system monospace for code only.
- Double neatline frames sheet objects: the map field, title blocks, plates, the call to action.
- One authored motion: the survey sweeps in once, off under reduced motion.
- Hover or focus on any dated feature lights its span of time on the sheet.

## Colors

Earth pigments on parchment: brown inks, moss / autumn gold / slate strata, a brick-red year grid, slate water, and a single ember accent for everything interactive.

### Primary
- **Ember** (evening #e78a4e): the interaction color. Focus outlines (2px, offset 3px), hover and current-page underlines, link underlines, the span highlight on the map (16% ember wash with 1.5px ember edges), the hovered activity bar, caret and accent color. It never fills a region at rest.

### Secondary
- **Slate Water** (evening #7daea3): hydrography. The research river stroke, paper mark symbols, the Research legend entry and section symbol, and the rule beside each paper on `/who-am-i`.
- **Survey Brick** (evening #ea6962): year numerals: the map scale, section column ticks, and gazetteer year labels. Its tinted form, **Grid Brick** (55% into the page), draws year lines in the field and the rule above each gazetteer year.
- **Moss Ink** (evening #a9b665): the single data series in activity charts (4.7:1 on parchment).

### Tertiary
- **Moss Stratum**, **Autumn Gold Stratum**, **Slate Stratum**: role bands, each a pigment mixed into the page (moss 34%, gold 30%, slate 28% in oklab). One tone per role, in career order, on the map, the section column, and role swatches.
- **Contour Umber**: contour lines; every fifth contour is an index contour at double weight.

### Neutral
- **Parchment** (evening walnut #2a2520): the sheet, the field ground, the portrait plate ground, and the halo behind field lettering.
- **Mantle** (evening #322c25): the home gazetteer band, screenshot plate grounds, inline code and code blocks, scrollbar track.
- **Overlay** (evening #4a4034): text selection and code borders.
- **Ink** (evening #efe3c6): names, headings, symbols, neatlines, the survey date line, link text in prose.
- **Ink 2** (evening #e8d9b8): running text, descriptions, captions, legend entries.
- **Ink 3** (evening #c2b294): margin data on parchment and mantle: dates, coordinates, counts, fact labels, plate numbers, back links.
- **Ink 4** (evening #8f8168): hairline rules (mixed 45 to 55% toward transparent), unsurveyed hatching, scrollbar thumb. Never text.
- **Field Muted** (evening #dccdae) and **Field Water** (evening #a8d5ca): lettering where text sits on strata; Field Water also sets paper titles on parchment.

### Named Rules
**The Field Lettering Rule.** Lettering on strata uses Ink, Field Muted, or Field Water, never Ink 3 or Slate Water. The strata drop Ink 3 to 3.7:1 and Slate Water to 3.3:1; the field tokens exist to hold AA (at least 4.9:1) on every stratum in both modes. Any new field token must pass 4.5:1 against all three bands, light and evening.

**The Ember Is Interaction Rule.** Ember appears only in response to the visitor (focus, hover, current page, span highlight, active bar) or as a link underline. A resting surface with an ember fill is wrong.

**The Water Is Research Rule.** Slate blue means academic research. Do not use water for general links or decoration.

## Typography

**Display Font:** Archivo Variable, width axis 80 to 125% (with Archivo, system-ui)
**Body Font:** Source Serif 4 Variable, optical size, roman and italic (with Source Serif 4, Georgia)
**Code Font:** system monospace (ui-monospace, SF Mono, Cascadia Code, Menlo, Consolas)

**Character:** Archivo does the sheet's lettering the way a map does: wide, heavy, tracked capitals for named features and title blocks, narrow tabular figures for data in the margin. Source Serif 4 carries everything a person reads. Code is set in the reader's own system monospace on mantle, colored by gruvbox, and appears nowhere else.

### Hierarchy
The ramp has four families. Sizes that differ by a sixteenth of a rem are treated as one step with a compact and a full size.

- **Display** (Archivo 800, width 125%, uppercase, line-height 0.95 to 1): page names. Page scale clamp(2.25rem, 5vw, 3.5rem) on `/who-am-i` and indexes; the home name uses the same step at clamp(2.25rem, 3.4vw, 3.1rem) to fit the collar; case titles go large at clamp(2rem, 8vw, 4.5rem). One per page.
- **Article Title** (Source Serif 600, clamp(2rem, 4.6vw, 3.25rem), 1.1, balanced): writing and experiment detail pages, where the page name is a sentence.
- **Headline** (Source Serif, 1.375 to 2.25rem fluid, 1.2 to 1.3): the closing line (400, clamp(1.375rem, 2.6vw, 2rem)), role titles (600, clamp(1.5rem, 2.6vw, 1.875rem)), the case call to action (600, clamp(1.5rem, 3vw, 2.25rem)).
- **Lede** (Source Serif 400, 1.25rem, 1.45 to 1.5): the home claim, the article dek (italic), the case summary (fluid up to 1.5rem, max 38ch).
- **Title** (Source Serif 600, 1.3125rem, 1.3): gazetteer entry titles, decision headings. Compact size 1.1875rem in the home index. Map mark names use the sheet's own scale (15 viewBox units, floor 12px; experiments 1.12x).
- **Reading** (Source Serif 400, 1.1875rem, 1.65, max 64 to 66ch): prose, bio, case body, shipped lists, call-to-action text, paper titles (italic), working materials.
- **Body** (Source Serif 400, 1 to 1.125rem, 1.5 to 1.6, max 60 to 62ch): descriptions under titles: gazetteer (1.0625rem), decisions (1.0625rem), role bodies (1.125rem), home index (1rem).
- **Caption** (Source Serif, 0.8125 to 0.9375rem): plate captions (0.9375rem roman); notes in italic at 0.8125rem (map caption, section column, activity source).
- **Hydrography** (Source Serif italic, 15px on the field, 0.06em): the river label and paper mark names.
- **Sheet Lettering** (Archivo 800, width 125%, 0.8125 to 0.875rem, tracked 0.2 to 0.22em, uppercase): section heads on every page (including prose h2 and case section heads), stratum and company names, chart titles. Legend head at 0.6875rem, 0.24em.
- **Label** (Archivo 500 to 700, 0.875 to 0.9375rem): legend entries, contact and case links, fact values, "All ..." links, prose h3 (700, 1.125rem).
- **Margin Data** (Archivo 600 to 700, width 80 to 88%, uppercase where it labels, tabular figures): 0.8125rem for dates, counts, role ranges, back links; 0.75rem for fact labels, plate numbers, paper venues, chart axes; 0.6875rem for coordinates, map years, and article fact labels.
- **Year Label** (Archivo 700, width 82%, 1rem, Survey Brick): the year column in gazetteer indexes.
- **Margin Nav** (Archivo 600, width 112%, 0.75rem, 0.14em, uppercase): the header wordmark and primary nav.
- **Code** (system monospace, 0.9375rem blocks at 1.5; inline 0.84em on mantle with an overlay border and 2px radius).

### Named Rules
**The Two Widths Rule.** Expanded Archivo (125%) names things: people, companies, strata, sections, the sheet. Condensed Archivo (80 to 88%) measures things: dates, coordinates, counts, years, fact labels. Do not set data wide or names narrow.

**The Serif Reads Rule.** Anything longer than a label is Source Serif. Italic is a secondary voice: water, deks, notes, captions of provenance, and quotations. It is not used to style labels or headings.

**The Code Stays Code Rule.** Monospace appears only for code, inside prose or decisions, on mantle. Never use it for labels, dates, or chrome.

## Layout

The home first viewport is a quadrangle: a left collar (minmax(18rem, 25rem)) holding the title block, contact links and legend, beside the neatlined map field (1000 x 700 viewBox, capped to the viewport height). Inner pages are left-aligned sheets with measured containers: article 50rem, index 62rem, about 72rem, case 76rem. Horizontal padding everywhere is the gutter (clamp(1rem, 3vw, 2.5rem)); sections are spaced at clamp(3rem, 8vh, 5rem) to clamp(3.5rem, 9vh, 6rem); columns part by clamp(1.5rem, 4vw, 4rem).

Recurring structures:
- **Margin columns.** A narrow left column carries the measuring or naming element beside the content: gazetteer years (5rem), the section column (8.5rem), case section heads (minmax(9rem, 14rem), sticky at 1.5rem), gazetteer dates (7.5rem).
- **Time is the primary axis.** On the map, time runs left to right with the present near the right edge; the portrait transect puts the present at the top, as does the section column. The map grid widens toward the survey date (logarithmic recency scale), a dashed ink line marks the survey date, and the field beyond it is hatched as not yet surveyed.
- **Every page ends with the sheet close:** a 1.5px rule, the headline-scale "Say hello" line, and the colophon. Case pages end with the call-to-action box and a colophon instead.

Responsive steps: 1080px collar above map; 860px gazetteer, case head and case sections to one column (820px on `/who-am-i`); 640px portrait transect replaces the landscape map and index years stack; 560px narrower section column; 520px and 480px gazetteer dates move above titles. Field lettering scales with the sheet through container units and clamps to floors (11 to 12.5px for names, 10px for the survey date tag).

**The Data-Bearing Terrain Rule.** Every stratum, grid line, contour hill, bar, and symbol encodes a real role, year, or dated artifact. Contours rise under marks; nothing is drawn as wallpaper.

## Elevation & Depth

The sheet is flat. There are no box-shadows. Depth is conveyed by the double neatline (a 1.5px ink border plus a 0.5px ink outline offset 3 to 4px, inset 5px so the outline has room), by tinted strata, and by mantle grounds for indexes, plates, and code. The one shadow is cartographic: a soft halo in the page color behind map lettering so it stays clear over contours and grid lines.

### Shadow Vocabulary
- **Lettering halo** (`text-shadow: 0 0 3px var(--page), 0 0 3px var(--page), 0 0 6px var(--page)`): map lettering over terrain only.

### Named Rules
**The Flat Sheet Rule.** Nothing lifts off the paper. If a surface needs separation, give it a neatline, a rule, or a mantle ground, not a shadow.

## Shapes

Square corners. Radius appears only as 2px on focus outlines and inline code, and 1.5px on activity bar tops. Circles belong to the symbol set, not to containers: the ringed benchmark, the paper dot, and the ring bullets in prose and shipped lists. Framing is done with rules: the double neatline, 1.5px ink rules above sections, heads and footers, and 1px hairlines (Ink 4 at 45%) between rows. The symbol set is fixed: a filled triangle summit for experiments and case decisions, a ringed benchmark for writing and shipped items, a filled slate dot for papers. Hatching carries two meanings: 45-degree ink hatch for overlapping roles, -45-degree faint hatch for the unsurveyed future.

**The Neatline Rule.** A double neatline marks an object that belongs to the sheet itself: the map field, title blocks, plates, the call to action. Do not use it as a generic card border.

## Components

### Margin Header
Quiet and cartographic. Wordmark "gvc" in Ink at 800 weight and 0.2em tracking; nav links in Margin Nav, Ink 3. Hover turns Ink with an ember underline (160ms); the current section (aria-current) stays Ink with a 2px ember underline. Pages may opt out of indexing (case studies do).

### Links
- **Contact and case links:** Label at 700, Ink, 2px ember underline offset 0.22em; hover turns the text ember.
- **Prose links:** Ink with a 1.5px ember underline; hover turns ember.
- **Back link:** condensed uppercase Margin Data in Ink 3, led by a 1.1rem rule that stretches 1.45x on hover (200ms) as the text turns Ink. Appears above and below articles.
- **Focus:** 2px ember outline, offset 3px, 2px radius, on every focusable element.

### Legend (navigation)
A 1.5px ink rule and a Sheet Lettering "Legend" head, then rows of symbol (1.5rem), label, and a condensed tabular count, separated by hairlines. Hover underlines the label in ember. Non-link key rows (overlap hatch, unsurveyed hatch) sit in the same grid in Ink 3.

### Title Blocks
- **Case title block:** the case facts as a double-neatlined definition list beside the title; rows of a 7rem condensed uppercase label (Ink 3) and a Label value (Ink), parted by hairlines.

### Article Facts Row
Under the article title and italic dek: a wrapping row of fact pairs, each a 0.6875rem condensed uppercase label (Ink 3) over a 0.9375rem value (Ink, 600). The first fact is the date, keyed with the entry's symbol (summit or benchmark). The header closes with a 1.5px ink rule.

### Gazetteer Entry
Dated index rows keyed with the sheet's symbols. Grid of a 7.5rem condensed tabular date (Ink 3), then symbol plus Title in Ink, then Body description in Ink 2 indented to the title text, and optional meta in condensed uppercase. Hover underlines the title in ember (1.5px). On `/writings` and `/experiments` entries are grouped under brick Year Labels sitting on a grid-brick rule; on home, a compact variant runs in two columns on the mantle band and drives the map's span highlight.

### Section Column
On `/who-am-i`, roles are drawn as a stratigraphic column: a neatlined vertical strip of the three strata with overlap hatching and contact lines, brick year ticks on the left, present at the top, and an italic caption. It sticks while the role entries scroll beside it.

### Role Entry
Headline-scale serif role title, the company in Sheet Lettering (Ink 2), a condensed uppercase date range with a neatlined stratum swatch, then a Body paragraph.

### Research Papers
Each paper hangs off a 1px slate water rule: the title as an italic Reading-size link in Field Water, the venue in condensed uppercase Margin Data below.

### Plate
Images are printed as numbered plates. The image sits in a double neatline on a mantle ground; below it, "Plate N" in condensed uppercase Margin Data and a serif Caption. The portrait on `/who-am-i` is a plate on parchment, rendered in ink (grayscale, warm sepia, multiplied into the paper in light mode) with a condensed caption bar. Plates tile in auto-fit grids, with wide, lead, and phone variants.

### Decisions
Case study decisions are survey stations: each item is marked by a filled ink triangle (0.85 x 0.75rem) and set as a Title heading over a Body paragraph, 1.75rem apart, max 66ch. Shipped items use the benchmark ring as their bullet.

### Call-to-Action Box
The closing box on case pages: a double neatline around a Headline question and a Reading paragraph whose links are Ink at 600 with 2px ember underlines.

### Activity Chart
A single-series weekly commit chart: moss bars on a 1px ink baseline, a condensed "Peak" marker above the tallest bar, a Sheet Lettering title and condensed total in the head, dates at both ends of the axis. Hovering a bar turns it ember and writes the week into a centered readout. A "Show as table" disclosure gives the same data as a table, and an italic line names the source.

### Survey Field (signature)
The neatlined map: strata, hatching, brick year grid, umber contours, the slate river with its italic label on a path, the dashed survey-date line with an Ink date tag, and leader lines from symbols to labels. Coordinates sit outside the neatline; year numerals run along the scale in Survey Brick; a caption carries a live readout, a two-row scale bar drawn at the field's own scale, and an italic note.
- **Stratum labels:** role name in Sheet Lettering, role title in serif roman in Field Muted. Hover or focus underlines the name in ember.
- **Marks:** symbol plus name (Title, Ink, balanced wrap, halo) plus detail (condensed uppercase, Field Muted). Paper marks set the name in Hydrography in Field Water. Hover or focus scales the symbol 1.35x (220ms) and underlines the name in ember.

### Span Highlight (interaction)
Hovering or focusing any dated feature, on the map or in the home gazetteer, lights its span of time across the field: an ember wash at 16% with 1.5px ember edges on the time axis (minimum 2px for single dates), fading in over 200ms, and writes "Name — range" into the caption readout (announced politely).

### Prose and Code
Long-form reading at Reading size, max 66ch, 1.15em between blocks. H2 is Sheet Lettering over a 1.5px ink rule; h3 is Archivo 700. Unordered lists use small Ink 3 rings. Tables use condensed uppercase headers over a 1.5px rule and hairline rows. Blockquotes are italic behind a 1px Ink 3 rule. Code blocks sit on mantle with a 1px overlay border, colored by Shiki gruvbox-light-soft or gruvbox-dark-soft to match the sheet.

### Motion
One authored moment: on load, the map grid and contours sweep in from 2010 toward the present (clip-path reveal, 1600ms, cubic-bezier(0.16, 1, 0.3, 1)); upward on the portrait transect. It runs only under prefers-reduced-motion: no-preference. All other motion is short state feedback (120 to 240ms, same curve).

## Do's and Don'ts

### Do:
- **Do** letter anything on strata in Ink, Field Muted (#4e3e30), or Field Water (#1f4d57), and check any new field color at 4.5:1 against all three strata in both modes.
- **Do** reserve Ember (#a14e08) for focus, hover, current page, link underlines, the span highlight, and the active chart bar.
- **Do** set names and section heads in expanded Archivo caps and dates, coordinates, counts, and fact labels in condensed tabular Archivo.
- **Do** set everything read in Source Serif 4 on the ramp's steps (Reading 1.1875rem for prose, Title 1.3125rem for entry headings, Body 1.0625rem for descriptions).
- **Do** frame sheet objects (map, title blocks, plates, call to action) with the double neatline (1.5px border plus 0.5px outline, offset 3 to 4px, inset 5px).
- **Do** print images as numbered plates and key dated items with the sheet's symbols: summit for experiments and decisions, benchmark for writing and shipped items, slate dot for papers.
- **Do** give every chart a table view and every dated feature a hover and focus state.
- **Do** keep the single survey sweep as the only entrance motion, and switch it off under reduced motion.
- **Do** design both the parchment sheet and the evening walnut sheet; parchment is canonical.

### Don't:
- **Don't** letter on strata with Ink 3 or Slate Water; they fall to 3.3 to 3.7:1 there.
- **Don't** draw contours, hatching, grids, or bars that carry no data.
- **Don't** add box-shadows, rounded cards, or radii beyond the 2px focus and code corners.
- **Don't** bring back the terminal look: no scanlines, SYSTEM_ labels, or fake readouts.
- **Don't** use monospace outside code.
- **Don't** use tracked caps as eyebrows or kickers above headings; expanded caps name the sheet's own features (sections, strata, companies), they do not decorate headlines.
- **Don't** use slate water for anything that is not research.
- **Don't** fill resting surfaces with ember.
