import Image from "next/image";
import { site } from "@/content/site";
import { withBasePath } from "@/lib/paths";

export function Story() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-rule bg-parchment"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-6 lg:sticky lg:top-28">
          <p className="ornament text-gold">Our beginning</p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight text-ink sm:text-5xl">
            {site.story.heading}
          </h2>
          <p className="mt-6 font-serif text-2xl leading-snug text-burgundy">
            {site.story.lede}
          </p>
          <figure className="mt-10">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-cream-deep">
              <Image
                src={withBasePath(site.images.story.src)}
                alt={site.images.story.alt}
                fill
                sizes="(min-width: 1024px) 32rem, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-sm text-ink-soft">
              Saturday Gubaye, gathered from home.
            </figcaption>
          </figure>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-ink-soft lg:col-span-6 lg:pt-16">
          {site.story.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
