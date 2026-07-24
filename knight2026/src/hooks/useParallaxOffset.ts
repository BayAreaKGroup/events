import { useIsMobile } from '@/hooks/useMediaQuery'

/**
 * Parallax / sticky scroll offset helper.
 * Returns `0` below the md breakpoint so mobile uses normal document scroll.
 */
export function useParallaxOffset(desktopOffset: number): number {
  const isMobile = useIsMobile()
  return isMobile ? 0 : desktopOffset
}
