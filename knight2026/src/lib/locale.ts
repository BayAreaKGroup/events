"use client";

import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/content/siteContent";

function isLocale(value: string | undefined): value is Locale {
  return (locales as readonly string[]).includes(value ?? "");
}

/** First path segment when it is a locale; defaults to 'en'. */
export function getCurrentLocale(pathname: string | null): Locale {
  const first = (pathname ?? "/").split("/").filter(Boolean)[0];
  return isLocale(first) ? first : "en";
}

/** Route segment after the locale; '' means home. */
export function getRouteSegment(pathname: string | null): string {
  const segments = (pathname ?? "/").split("/").filter(Boolean);
  const rest = isLocale(segments[0]) ? segments.slice(1) : segments;
  return rest[0] ?? "";
}

/** trailingSlash-safe localized href; omit route for home. */
export function getLocalizedHref(locale: Locale, route = ""): string {
  return route ? `/${locale}/${route}/` : `/${locale}/`;
}

export function useLocale(): Locale {
  return getCurrentLocale(usePathname());
}
