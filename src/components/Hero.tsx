import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "@/components/ExternalLink";
import { site } from "@/content/site";
import { withBasePath } from "@/lib/paths";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-rule">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-burgundy">
            Ethiopian Orthodox Tewahedo Youth · {site.location}
          </p>
          <h1 className="mt-5 font-serif text-[2.35rem] leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.35rem]">
            {site.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            UOTY Florida is {site.identity}, rooted in {site.rootedIn}.{" "}
            {site.mission}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ExternalLink
              href={site.contact.href}
              className="inline-flex items-center justify-center rounded-sm bg-burgundy px-6 py-3 text-center text-cream no-underline transition-colors hover:bg-burgundy-deep"
            >
              Get involved
            </ExternalLink>
            <Link
              href="#about"
              className="inline-flex items-center justify-center rounded-sm border border-burgundy/30 px-6 py-3 text-center text-burgundy transition-colors hover:border-burgundy hover:bg-cream-deep"
            >
              Explore the community
            </Link>
          </div>
        </div>

        <figure className="lg:col-span-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-cream-deep shadow-[0_20px_50px_-28px_rgba(79,11,13,0.45)]">
            <Image
              src={withBasePath(site.images.hero.src)}
              alt={site.images.hero.alt}
              fill
              sizes="(min-width: 1024px) 34rem, 100vw"
              className="object-cover object-[50%_30%]"
              priority
            />
          </div>
          <figcaption className="mt-3 text-sm text-ink-soft">
            Youth, families, and clergy after a UOTY Florida gathering.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
