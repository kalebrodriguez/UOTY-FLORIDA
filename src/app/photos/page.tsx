import type { Metadata } from "next";
import { PhotoGallery } from "@/components/PhotoGallery";
import { photoArchive } from "@/content/photos";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Photos",
  description: photoArchive.intro,
  openGraph: {
    title: `Photos | ${site.name}`,
    description: photoArchive.intro,
  },
};

export default function PhotosPage() {
  return (
    <main id="main">
      <header className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="ornament justify-start text-gold">Through the years</p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {photoArchive.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          {photoArchive.intro}
        </p>
      </header>
      <PhotoGallery />
    </main>
  );
}
