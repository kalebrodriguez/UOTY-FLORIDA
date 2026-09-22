# UOTY Florida

Website for **United Orthodox Tewahedo Youth (UOTY) Florida** — an Ethiopian Orthodox Tewahedo youth community rooted in Tampa.

If https://kalebrodriguez.github.io/UOTY-FLORIDA/ is showing this README, GitHub Pages is still set to **Deploy from a branch** (`main` / root). Change **Settings → Pages → Source** to **GitHub Actions**, then the Next.js site will appear there instead.

## Preview locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
```

The site is a Next.js app with TypeScript and Tailwind CSS. A static export is used so GitHub Pages can host it.

## GitHub Pages

GitHub will not show this site if Pages is pointed at the raw `main` branch. That only publishes `README.md`.

After this workflow is on `main`:

1. Open the repo on GitHub → **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Merge this change (or run the **Deploy GitHub Pages** workflow).
4. The live site is [https://kalebrodriguez.github.io/UOTY-FLORIDA/](https://kalebrodriguez.github.io/UOTY-FLORIDA/).

Local `npm run dev` still uses [http://localhost:3000](http://localhost:3000) with no `/UOTY-FLORIDA` prefix. The GitHub Pages build sets that prefix automatically.

## Where to edit content

| What | File |
| --- | --- |
| Name, mission, story, gathering time, resource links, activities | `src/content/site.ts` |
| Event photo albums (year, captions, file paths) | `src/content/photos.ts` |
| Logos and community images | `public/images/brand/`, `public/images/community/` |
| Event photos through the years | `public/images/events/` |

## How to add event photos through the years

You do not need a new page for each event. Keep photos on disk, then register them in one file.

### 1. Put the files in a year folder

```
public/images/events/2024/timket-01.jpg
public/images/events/2024/soccer-03.jpg
public/images/events/2025/gubaye-retreat-01.jpg
public/images/events/undated/feast-unknown-year.jpg
```

- Use a four-digit year when you know it (`2021`, `2022`, …).
- If the year is uncertain, use `undated` and leave `year: null` in the album.
- Prefer JPEG or WebP, roughly 1600–2000 pixels on the long side, under about 1.5 MB each.
- Give files clear names. Do not overwrite existing filenames.

### 2. Register the album

Open `src/content/photos.ts` and add an album (or append photos to an existing one):

```ts
{
  id: "2024-timket",          // unique, stable id
  year: 2024,                 // or null if unknown
  title: "Timket",
  description: "Celebrating Timket with St. Mary’s of Tampa.",
  photos: [
    {
      src: "/images/events/2024/timket-01.jpg",
      alt: "Youth standing outside the church after Timket liturgy",
      caption: "Timket, 2024.",
      width: 1600,
      height: 1200,
    },
  ],
}
```

The Photos page (`/photos`) groups albums by year automatically, newest first.

### 3. Write honest captions

- Describe who and where without inventing names, clergy titles, or dates.
- If you only know “soccer, around 2023,” say that.
- Ask a parent or guardian before posting clear photographs of children.

### 4. Optional: a Drive folder of “everything else”

If you have a large archive you do not want to copy into this repo, create a **public** Google Drive folder and paste the URL into `photoArchive.sharedDriveUrl` in `src/content/photos.ts`. The Photos page will then offer a “See more photos” link. Leave it `null` until that folder exists.

Hundreds of originals can live on Drive. Put a smaller, captioned set on the website so pages stay fast.

### 5. Sending photos without touching the code

Use the existing [contact form](https://docs.google.com/forms/d/e/1FAIpQLSeEvCz2vD4HhlG1hngvmHAJa2H8gLkh8-YvvxvlJcIe_9LLpQ/viewform?usp=header). Include the year, the event, and a short caption. Someone with access to this repository can add them using the steps above.

## Saturday gathering

Meeting day, time, time zone, Zoom URL, and password are in `site.gathering` inside `src/content/site.ts`.

- Keep `timeZoneLabel` as `"Eastern Time"` (not EST year-round).
- If `meetingUrl` is set, the site shows a Join button plus the password.
- If `meetingUrl` is `null`, the site shows “Contact us for gathering details” instead of a broken Join button.

## Checks

```bash
npm run lint
npm run build
```
