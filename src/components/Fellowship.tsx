import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { withBasePath } from "@/lib/paths";

export function Fellowship() {
  const gubaye = site.activities[0];
  const church = site.activities[1];
  const mehaber = site.activities[2];
  const soccer = site.activities[3];

  return (
    <section id="gatherings" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <p className="ornament justify-center text-gold">What we do</p>
        <h2 className="mt-4 text-center font-serif text-4xl tracking-tight text-ink sm:text-5xl">
          Faith and fellowship
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-ink-soft">
          Prayer and teaching stand at the center. Around them: the feasts of
          the Church, a saint’s Mehaber, and time on the field with friends.
        </p>

        <article className="mt-16 grid items-center gap-10 border-t border-rule pt-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.18em] text-burgundy">
              Weekly gathering
            </p>
            <h3 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
              {gubaye.title}
            </h3>
            {gubaye.term ? (
              <p className="mt-3 text-ink-soft">
                <span className="italic">{gubaye.term}</span>
                {gubaye.pronunciation ? ` (${gubaye.pronunciation})` : ""} is a
                gathering. {gubaye.detail}
              </p>
            ) : (
              <p className="mt-3 text-ink-soft">{gubaye.detail}</p>
            )}
            <Link
              href="#saturday-gubaye"
              className="mt-6 inline-block text-burgundy underline decoration-burgundy/30 underline-offset-4 hover:decoration-burgundy"
            >
              What to expect on Saturday
            </Link>
          </div>
          <p className="font-serif text-xl leading-snug text-burgundy lg:col-span-5 lg:border-l lg:border-rule lg:pl-10">
            {gubaye.summary}
          </p>
        </article>

        <article className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="bg-burgundy px-8 py-10 text-cream sm:px-10">
            <h3 className="font-serif text-3xl">{church.title}</h3>
            <p className="mt-5 leading-relaxed text-cream/90">{church.detail}</p>
          </div>
          <div className="border border-rule bg-parchment px-8 py-10 sm:px-10">
            <h3 className="font-serif text-3xl text-ink">{mehaber.title}</h3>
            {mehaber.term ? (
              <p className="mt-2 text-sm text-ink-soft">
                <span className="italic">{mehaber.term}</span>
                {mehaber.pronunciation ? ` — ${mehaber.pronunciation}` : ""}
              </p>
            ) : null}
            <p className="mt-5 leading-relaxed text-ink-soft">{mehaber.detail}</p>
          </div>
        </article>

        <article className="mt-16 grid items-center gap-10 lg:grid-cols-12">
          <figure className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-cream-deep">
              <Image
                src={withBasePath(site.images.fellowship.src)}
                alt={site.images.fellowship.alt}
                fill
                sizes="(min-width: 1024px) 32rem, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-sm text-ink-soft">
              A fellowship outing with the Florida youth.
            </figcaption>
          </figure>
          <div className="lg:col-span-6">
            <h3 className="font-serif text-3xl text-ink sm:text-4xl">
              {soccer.title}
            </h3>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              {soccer.detail}
            </p>
            <Link
              href="/photos"
              className="mt-6 inline-block text-burgundy underline decoration-burgundy/30 underline-offset-4 hover:decoration-burgundy"
            >
              Photos from our gatherings
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
