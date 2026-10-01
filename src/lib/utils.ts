import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const baseURL = process.env.NEXT_PUBLIC_API_URL;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleize = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
};

export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };

  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
};

export const normalizeBlogAuthorName = (name?: string | null): string => {
  if (!name) return "";

  const normalized = name.trim();
  const lowerCaseName = normalized.toLowerCase();

  if (
    lowerCaseName === "rao abraa ahmad" ||
    lowerCaseName === "rao abraa ahmad " ||
    lowerCaseName === "rao abraa ahmad"
  ) {
    return "Qasim Manzoor";
  }

  return normalized;
};
