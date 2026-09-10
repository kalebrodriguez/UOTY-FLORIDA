# Launch checklist

These items are **not** shown on the public website. Confirm them before publishing.

## Gathering

- [ ] Saturday Gubaye is still **7:00–9:00 p.m. Eastern Time** (edit `src/content/site.ts` → `site.gathering`).
- [ ] Add a current meeting URL to `site.gathering.meetingUrl` only when it is verified. The old “Saturday Gubaye Link” pointed at a Google Doc, not a working call. Do not reuse it as a join button.
- [ ] Confirm that Saturday Gubaye, church festivals at St. Mary’s of Tampa, the St. Teklehaimanot Mehaber, and soccer/fellowship are still current — not only historical.

## Content not carried over

- The 2025 national conference announcement was removed as outdated.
- Florida is **not** described as the seat of the national organization.
- The historical UOTY branch list and the Boston daily call-in are **not** presented as current Florida programming.
- No invented events, statistics, leaders, testimonials, street address, social accounts, or donation links.

## Photos

- [ ] Confirm permission to keep the community photographs already on the site (from the previous Canva site).
- [ ] Add event photos by year using `public/images/events/` and `src/content/photos.ts` (see the README).
- [ ] If a public Drive folder of additional event photos exists, set `photoArchive.sharedDriveUrl`.
- [ ] Higher-resolution official logos are in the public Drive folder “UOTY LOGO MATERIALS” if replacements are needed.

## Links verified while building (September 2026)

| Resource | Status |
| --- | --- |
| Contact form | Public (HTTP 200) |
| Start a branch form | Public (HTTP 200) |
| Teaching materials Drive | Public folder titled “Teaching Materials UOTY” |
| Orthodox prayers Drive | Public folder titled “PRAYERS” |
| Official logos Drive | Public folder titled “UOTY LOGO MATERIALS” |
| Gubaye presentations Drive | Public folder titled “UOTY POWERPOINTS” |
| Old Saturday Gubaye Google Doc | Not used as a meeting link |

Drive folders returned public titles. File-level access still depends on how each file inside is shared.

## Site URL and social previews

- [ ] Set `site.siteUrl` in `src/content/site.ts` to the production address so Open Graph images resolve.
- [ ] `www.uoty.org` appears on official wordmarks. The homepage is a gated “click to enter” page; it is **not** linked from this site until someone confirms it is the correct public destination.

## Missing or unused assets

- A portrait from the old site (man in netela before an Ethiopian flag) was **not** used, to avoid presenting an unnamed person as clergy or leadership.
- Decorative Canva icons were not reused.
- No verified Instagram, YouTube, or Facebook profile was listed on the old site, so none are linked here.
