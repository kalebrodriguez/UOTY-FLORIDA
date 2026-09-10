import Image from "next/image";
import { ExternalLink } from "@/components/ExternalLink";
import { site } from "@/content/site";
import { albumsByYear, photoArchive } from "@/content/photos";

export function PhotoGallery() {
  const groups = albumsByYear();

  return (
    <div>
      {groups.map((group) => (
        <section
          key={group.label}
          className="border-t border-rule"
          aria-labelledby={`year-${group.label.replace(/\s+/g, "-").toLowerCase()}`}
        >
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
            <h2
              id={`year-${group.label.replace(/\s+/g, "-").toLowerCase()}`}
              className="font-serif text-4xl text-burgundy"
            >
              {group.label}
            </h2>

            <div className="mt-10 space-y-16">
              {group.albums.map((album) => (
                <article key={album.id}>
                  <h3 className="font-serif text-2xl text-ink sm:text-3xl">
                    {album.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-ink-soft">
                    {album.description}
                  </p>
                  <ul
                    className={`mt-6 grid gap-5 ${
                      album.photos.length === 1
                        ? "md:grid-cols-1"
                        : "md:grid-cols-2"
                    }`}
                  >
                    {album.photos.map((photo) => (
                      <li key={photo.src}>
                        <figure>
                          <div
                            className="relative overflow-hidden rounded-sm bg-cream-deep"
                            style={{
                              aspectRatio: `${photo.width} / ${photo.height}`,
                            }}
                          >
                            <Image
                              src={photo.src}
                              alt={photo.alt}
                              fill
                              sizes="(min-width: 768px) 36rem, 100vw"
                              className="object-cover"
                            />
                          </div>
                          {photo.caption ? (
                            <figcaption className="mt-2 text-sm text-ink-soft">
                              {photo.caption}
                            </figcaption>
                          ) : null}
                        </figure>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-rule bg-parchment">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="font-serif text-3xl text-ink">Share photographs</h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">
            {photoArchive.contribute}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ExternalLink
              href={site.contact.href}
              className="inline-flex items-center justify-center rounded-sm bg-burgundy px-5 py-3 text-cream no-underline hover:bg-burgundy-deep"
            >
              Send photos through the contact form
            </ExternalLink>
            {photoArchive.sharedDriveUrl ? (
              <ExternalLink
                href={photoArchive.sharedDriveUrl}
                className="inline-flex items-center justify-center rounded-sm border border-burgundy/30 px-5 py-3 text-burgundy no-underline hover:bg-cream-deep"
              >
                See more photos
              </ExternalLink>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}
