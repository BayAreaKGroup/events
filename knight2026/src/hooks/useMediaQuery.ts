import { useEffect, useState } from "react";

/**
 * Subscribe to a CSS media query. SSR-safe (starts false, updates on mount).
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [query]);

  return matches;
}

/** Tailwind `md` breakpoint — true below 768px */
export function useIsMobile(): boolean {
  return useMediaQuery("(max-width: 767px)");
}
