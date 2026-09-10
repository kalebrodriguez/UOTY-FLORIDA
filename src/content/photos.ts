/**
 * Event photo archive
 * ---------------------
 * Add pictures from gatherings, feast days, soccer, and fellowship here.
 * The Photos page groups albums by year automatically.
 *
 * HOW TO ADD PHOTOS
 * 1. Create a year folder if it does not exist:
 *      public/images/events/2024/
 *    If you do not know the year, use:
 *      public/images/events/undated/
 * 2. Drop image files in that folder (JPG or WebP preferred, under ~1.5 MB).
 *    Name files clearly: 2024-timket-01.jpg, soccer-tampa-03.jpg
 * 3. Add an album object to `albums` below — or append to an existing album.
 * 4. Write alt text that describes the people and place. Do not invent
 *    names, titles, or dates you are not sure about.
 *
 * Optional: set `sharedDriveUrl` to a public Google Drive folder if you
 * want a “See more photos” link for a larger archive that is not on this site.
 *
 * Do not commit photos you do not have permission to share, especially of
 * children, without a parent or guardian’s consent.
 */

export type Photo = {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
};

export type PhotoAlbum = {
  id: string;
  /** Four-digit year, or null when the year is not confirmed. */
  year: number | null;
  title: string;
  description: string;
  photos: Photo[];
};

export const photoArchive = {
  title: "Photos from our gatherings",
  intro:
    "A living archive of UOTY Florida — feast days, Saturday Gubaye, soccer, and ordinary afternoons together. Years are listed when we know them.",
  contribute:
    "If you have photographs from past events, send them through the contact form. Please include the year, the event, and a short caption when you can.",
  /**
   * Public Google Drive (or similar) folder of additional event photos.
   * Leave null until a shareable folder exists. Do not invent a link.
   */
  sharedDriveUrl: null as string | null,
  albums: [
    {
      id: "community-gathering",
      year: null,
      title: "Community gathering",
      description:
        "Youth, families, and clergy after a gathering — netela, vestments, and the everyday joy of standing together.",
      photos: [
        {
          src: "/images/events/undated/community-gathering.jpg",
          alt: "UOTY Florida youth, families, and clergy standing together outdoors after a gathering",
          caption: "After a community gathering in Florida.",
          width: 1280,
          height: 960,
        },
      ],
    },
    {
      id: "saturday-gubaye",
      year: null,
      title: "Saturday Gubaye",
      description:
        "The weekly online service: prayer, Scripture, hymn, and teaching from wherever we are.",
      photos: [
        {
          src: "/images/events/undated/saturday-gubaye-zoom.jpg",
          alt: "Youth joining Saturday Gubaye from home on a video call",
          caption: "Saturday Gubaye online.",
          width: 1920,
          height: 1439,
        },
        {
          src: "/images/events/undated/guest-speaker-zoom.jpg",
          alt: "A guest speaker teaching during an online UOTY gathering",
          caption: "A guest speaker joining Gubaye.",
          width: 1284,
          height: 667,
        },
      ],
    },
    {
      id: "fellowship-outing",
      year: null,
      title: "Fellowship outing",
      description:
        "Time away from the classroom and the screen — still the same community.",
      photos: [
        {
          src: "/images/events/undated/adventure-island.jpg",
          alt: "UOTY Florida youth standing together at Adventure Island",
          caption: "A fellowship outing at Adventure Island.",
          width: 1284,
          height: 933,
        },
      ],
    },
  ] satisfies PhotoAlbum[],
};

export function albumsByYear(
  albums: readonly PhotoAlbum[] = photoArchive.albums,
): { year: number | null; label: string; albums: PhotoAlbum[] }[] {
  const groups = new Map<number | "undated", PhotoAlbum[]>();

  for (const album of albums) {
    const key = album.year ?? "undated";
    const list = groups.get(key) ?? [];
    list.push(album);
    groups.set(key, list);
  }

  const numbered: { year: number | null; label: string; albums: PhotoAlbum[] }[] =
    [...groups.entries()]
      .filter((entry): entry is [number, PhotoAlbum[]] => entry[0] !== "undated")
      .sort((a, b) => b[0] - a[0])
      .map(([year, yearAlbums]) => ({
        year,
        label: String(year),
        albums: yearAlbums,
      }));

  const undated = groups.get("undated");
  if (undated?.length) {
    numbered.push({
      year: null,
      label: "Year to be confirmed",
      albums: undated,
    });
  }

  return numbered;
}
