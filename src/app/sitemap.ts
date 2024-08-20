import { Site } from "@/helpers/Site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const links = Site?.routes?.map((link) => {
    return {
      url: Site?.url + link?.link,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    };
  });
  return links;
}
