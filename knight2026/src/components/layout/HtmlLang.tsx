"use client";

import { useEffect } from "react";
import { useLocale } from "@/lib/locale";

/** Static export ships a single root <html lang>; correct it on hydration per locale. */
export default function HtmlLang() {
  const locale = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
