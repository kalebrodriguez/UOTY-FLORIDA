import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
      <h1 className="font-serif text-4xl text-ink">Page not found</h1>
      <p className="mt-4 text-lg text-ink-soft">
        That address is not part of this site. Return home to read about UOTY
        Florida, or open the photo archive.
      </p>
      <p className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex justify-center rounded-sm bg-burgundy px-5 py-3 text-cream"
        >
          Back to home
        </Link>
        <Link
          href="/photos"
          className="inline-flex justify-center rounded-sm border border-burgundy/30 px-5 py-3 text-burgundy"
        >
          Photos
        </Link>
      </p>
    </main>
  );
}
