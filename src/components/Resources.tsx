import { ExternalLink } from "@/components/ExternalLink";
import { site } from "@/content/site";

export function Resources() {
  return (
    <section id="resources" className="scroll-mt-24 bg-parchment">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="ornament justify-start text-gold">For study and prayer</p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight text-ink sm:text-5xl">
            Resources
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            Teaching files, prayers, and Gubaye presentations live in shared
            folders. They open in Google Drive.
          </p>
        </div>

        <ul className="mt-12 divide-y divide-rule border-y border-rule">
          {site.resources.map((resource) => (
            <li
              key={resource.id}
              className="grid gap-4 py-8 md:grid-cols-12 md:items-baseline"
            >
              <h3 className="font-serif text-2xl text-ink md:col-span-4">
                {resource.title}
              </h3>
              <p className="text-ink-soft md:col-span-5">{resource.description}</p>
              <p className="md:col-span-3 md:text-right">
                <ExternalLink
                  href={resource.href}
                  className="text-burgundy underline decoration-burgundy/30 underline-offset-4 hover:decoration-burgundy"
                >
                  Open folder
                </ExternalLink>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
