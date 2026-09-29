---
version: 1
slug: "src-pages-cases-ulah-astro"
primary_target: "src/pages/cases/ulah.astro"
related_targets: ["src/pages/cases/sambadeiras.astro","src/pages/cases/van-damme.astro","src/layouts/Case.astro"]
---

# Case studies (`/cases/*`)

Mode: Persuade. The audience is prospective freelance clients, sent by direct link from a freelance platform profile. They need to see the client's problem, what was built, and proof that it shipped, then contact Guilherme.

Inherits the survey-sheet world (DESIGN.md). Case header is the name in expanded caps, a serif summary and facts in a double-neatline title block. Sections sit in a sticky side column. "What I built" entries are marked with survey triangles. Screenshots are numbered plates. The weekly commit chart comes from each repo's git log, author commits only, with a table view. No call-to-action box (removed by the owner); pages end with the standard site footer.

Decisions:
- Not linked from any page, and `noindex`. Remove noindex if the owner wants them in search.
- Sambadeiras plates come from the owner's capture script (sambadeiras/script/case_screenshots) run against invented seed data (fake_user in seed.rb). No real member data. The dense board screen links to its full-size image for phone readers.
- Every claim is checked against the source repos. The Van Damme releases claim was corrected to "version bumps" because GitHub has no releases.
- Ulah and Sambadeiras repos are private, so there are no repo links. Van Damme links its public repo.
