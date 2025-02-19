import { NextResponse } from "next/server";
import { Site } from "@/helpers/Site";

export async function GET() {
  // Generate the dynamic sitemap links
  const links = Site?.routes?.map((link) => {
    return `
      <url>
        <loc>${Site?.url + link?.link}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
    `;
  });

  // Construct the XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${links.join("")}
  </urlset>`;

  // Return the XML response
  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
