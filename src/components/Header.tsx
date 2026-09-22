"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef } from "react";
import { ExternalLink } from "@/components/ExternalLink";
import { site } from "@/content/site";
import { withBasePath } from "@/lib/paths";

export function Header() {
  const panelId = useId();
  const detailsRef = useRef<HTMLDetailsElement>(null);

  function closeMenu() {
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  }

  useEffect(() => {
    const node = detailsRef.current;
    if (!node) {
      return;
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    const onToggle = () => {
      document.body.style.overflow = node.open ? "hidden" : "";
    };

    document.addEventListener("keydown", onKey);
    node.addEventListener("toggle", onToggle);

    return () => {
      document.removeEventListener("keydown", onKey);
      node.removeEventListener("toggle", onToggle);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-rule/80 bg-cream">
      <div className="h-1 bg-burgundy" />
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 text-ink no-underline"
          onClick={closeMenu}
        >
          <Image
            src={withBasePath(site.images.logoMark.src)}
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 shrink-0"
            priority
          />
          <span className="min-w-0">
            <span className="font-serif block text-[1.35rem] leading-none tracking-tight">
              {site.shortName}
            </span>
            <span className="mt-1 hidden text-[0.68rem] uppercase tracking-[0.16em] text-ink-soft sm:block">
              Ethiopian Orthodox Tewahedo Youth
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Primary"
        >
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.95rem] text-ink-soft transition-colors hover:text-burgundy"
            >
              {item.label}
            </Link>
          ))}
          <ExternalLink
            href={site.contact.href}
            className="rounded-sm bg-burgundy px-4 py-2 text-sm text-cream no-underline transition-colors hover:bg-burgundy-deep"
          >
            {site.contact.label}
          </ExternalLink>
        </nav>

        <details ref={detailsRef} className="group lg:hidden">
          <summary
            className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-sm border border-rule text-ink [&::-webkit-details-marker]:hidden"
            aria-controls={panelId}
          >
            <span className="sr-only">Menu</span>
            <span aria-hidden className="relative flex h-4 w-5 items-center">
              <span className="absolute left-0 block h-0.5 w-5 bg-ink transition-transform group-open:-translate-y-0 group-open:rotate-45 -translate-y-1.5" />
              <span className="absolute left-0 block h-0.5 w-5 bg-ink group-open:opacity-0" />
              <span className="absolute left-0 block h-0.5 w-5 bg-ink transition-transform group-open:translate-y-0 group-open:-rotate-45 translate-y-1.5" />
            </span>
          </summary>
          <div
            id={panelId}
            className="fixed inset-x-0 bottom-0 top-[4.35rem] z-50 overflow-y-auto border-t border-rule bg-parchment"
          >
            <nav
              aria-label="Mobile"
              className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-6 sm:px-8"
            >
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-sm px-2 py-3 text-xl text-ink"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
              <ExternalLink
                href={site.contact.href}
                className="mt-4 rounded-sm bg-burgundy px-4 py-3 text-center text-cream no-underline"
                onClick={closeMenu}
              >
                {site.contact.label}
              </ExternalLink>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
