import { ExternalLink } from "@/components/ExternalLink";
import { site } from "@/content/site";

export function GetInvolved() {
  return (
    <section id="get-involved" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="ornament justify-start text-gold">You are welcome</p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight text-ink sm:text-5xl">
              Get involved
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              {site.welcome} Come for Saturday Gubaye, for a feast at{" "}
              {site.churchShortName}, or simply to ask a question. We will help
              you find the next gathering.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              If you have photographs from events through the years, send them
              the same way — with the year and a short caption when you can.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4 lg:col-span-5">
            <ExternalLink
              href={site.contact.href}
              className="rounded-sm bg-burgundy px-6 py-4 text-center text-lg text-cream no-underline hover:bg-burgundy-deep"
            >
              {site.contact.label}
            </ExternalLink>
            <p className="text-center text-sm text-ink-soft">
              {site.contact.description}
            </p>
            <ExternalLink
              href={site.startBranch.href}
              className="rounded-sm border border-burgundy/30 px-6 py-4 text-center text-burgundy no-underline hover:bg-cream-deep"
            >
              {site.startBranch.label}
            </ExternalLink>
            <p className="text-center text-sm text-ink-soft">
              {site.startBranch.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
