import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "@/components/ExternalLink";
import { site } from "@/content/site";
import { withBasePath } from "@/lib/paths";

export function Footer() {
  return (
    <footer className="bg-burgundy-deep text-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <Image
              src={withBasePath(site.images.logoMark.src)}
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 brightness-0 invert"
            />
            <p className="font-serif text-2xl">{site.name}</p>
          </div>
          <p className="mt-5 max-w-sm text-[0.98rem] leading-relaxed text-cream/85">
            {site.mission}
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[0.18em] text-gold">
            On this site
          </p>
          <ul className="mt-4 space-y-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-cream/90 underline-offset-4 hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.18em] text-gold">
            Resources
          </p>
          <ul className="mt-4 space-y-2">
            {site.resources
              .filter((resource) => resource.id !== "logos")
              .map((resource) => (
                <li key={resource.id}>
                  <ExternalLink
                    href={resource.href}
                    className="text-cream/90 underline-offset-4 hover:underline"
                  >
                    {resource.title}
                  </ExternalLink>
                </li>
              ))}
            <li>
              <ExternalLink
                href={site.contact.href}
                className="text-cream/90 underline-offset-4 hover:underline"
              >
                {site.contact.label}
              </ExternalLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-sm text-cream/65 sm:px-8">
          {site.legalName}. A youth community of the Ethiopian Orthodox
          Tewahedo Church, connected to {site.parentOrganization}.
        </p>
      </div>
    </footer>
  );
}
