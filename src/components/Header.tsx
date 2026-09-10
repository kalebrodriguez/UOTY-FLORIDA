"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { ExternalLink } from "@/components/ExternalLink";
import { site } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-rule/80 bg-cream/95 backdrop-blur-sm">
      <div className="h-1 bg-burgundy" />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 text-ink no-underline"
          onClick={() => setOpen(false)}
        >
          <Image
            src={site.images.logoMark.src}
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

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-rule text-ink lg:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden className="flex w-5 flex-col gap-1.5">
            <span
              className={`block h-px bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`block h-px bg-ink ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-px bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <div
        id={panelId}
        hidden={!open}
        className="border-t border-rule bg-parchment px-5 py-5 lg:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm px-2 py-3 text-lg text-ink"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <ExternalLink
            href={site.contact.href}
            className="mt-3 rounded-sm bg-burgundy px-4 py-3 text-center text-cream no-underline"
            onClick={() => setOpen(false)}
          >
            {site.contact.label}
          </ExternalLink>
        </nav>
      </div>
    </header>
  );
}
