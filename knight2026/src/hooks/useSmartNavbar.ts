import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useRef, useState } from 'react'

export type UseSmartNavbarOptions = {
  /** Scroll position (px) below which the navbar always stays visible. */
  topOffset?: number
  /** Minimum scroll delta (px) before direction is treated as intentional. */
  delta?: number
}

/**
 * Direction-aware navbar visibility for scroll-driven hide/show.
 * Uses Framer Motion scroll subscriptions (no scroll event listeners).
 * Works the same on mobile and desktop.
 */
export function useSmartNavbar({
  topOffset = 8,
  delta = 6,
}: UseSmartNavbarOptions = {}) {
  const { scrollY } = useScroll()
  const lastY = useRef(0)
  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = lastY.current
    const diff = latest - previous

    if (latest <= topOffset) {
      setHidden(false)
    } else if (diff > delta) {
      setHidden(true)
    } else if (diff < -delta) {
      setHidden(false)
    }

    lastY.current = latest
  })

  return { hidden, scrollY }
}
