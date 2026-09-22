import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/content/site";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const metadataBase = site.siteUrl ? new URL(site.siteUrl) : undefined;

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title: {
    default: `${site.name} | ${site.parentOrganization}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "UOTY Florida",
    "United Orthodox Tewahedo Youth",
    "Ethiopian Orthodox",
    "Tewahedo",
    "Tampa",
    "youth ministry",
  ],
  openGraph: {
    title: `${site.name} | ${site.parentOrganization}`,
    description: site.description,
    locale: "en_US",
    type: "website",
    siteName: site.name,
    images: [
      {
        url: `${site.siteUrl}${site.images.hero.src}`,
        width: site.images.hero.width,
        height: site.images.hero.height,
        alt: site.images.hero.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [`${site.siteUrl}${site.images.hero.src}`],
  },
  icons: {
    icon: `${site.siteUrl}/icon.png`,
    apple: `${site.siteUrl}/icon.png`,
  },
};

export const viewport: Viewport = {
  themeColor: "#7a1012",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-ink">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
