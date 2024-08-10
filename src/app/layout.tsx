import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Advent_Pro } from "next/font/google";
import { Nunito } from "next/font/google";
import Providers from "./Providers";
import { Site } from "@/helpers/Site";

export const metadata: Metadata = {
  title: {
    template: `%s | ${Site.name}`,
    default: Site?.SEO_title, // a default is required when creating a template
  },
  description: `${Site?.SEO_Description}`,
  metadataBase: new URL(`${Site.url}`),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: Site?.SEO_title,
    description: `${Site?.SEO_Description}`,
    url: `${Site.url}`,
    siteName: `${Site.name}`,
    images: [
      {
        url: `${Site?.logo}`,
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: Site?.name,
    description: Site?.SEO_Description,
    siteId: "1467726470533754880",
    creator: `@${Site?.name}`,
    creatorId: "1467726470533754880",
    images: [Site?.logo],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const advent_Pro = Advent_Pro({
  subsets: ["latin"],
  weight: ['400','500','600', '700'],
  display: 'swap',
  variable: "--font-advent-pro",
});

const nunito = Nunito({ 
  subsets: ["latin"], 
  weight: ['400','500','600', '700'],
  display: 'swap',
  variable: "--font-nunito" 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content={Site?.themeColor} />
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="alternate" hrefLang="en-US" href={Site?.url} />
      </head>
      <body className={`${advent_Pro?.variable} ${nunito?.variable}`}>
        <Providers>
          <Header />
          <main className="bg-light">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
