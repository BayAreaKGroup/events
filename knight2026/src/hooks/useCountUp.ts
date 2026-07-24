import { useEffect, useRef, useState } from 'react'

type UseCountUpOptions = {
  end: number
  durationMs?: number
  delayMs?: number
  enabled?: boolean
}

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3
}

/**
 * Count from 0 → end once when `enabled` becomes true.
 * Respects prefers-reduced-motion via caller (pass enabled after reduced check).
 */
export function useCountUp({
  end,
  durationMs = 800,
  delayMs = 0,
  enabled = false,
}: UseCountUpOptions) {
  const [value, setValue] = useState(0)
  const startedRef = useRef(false)
  const rafRef = useRef<number | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (!enabled || startedRef.current) return
    startedRef.current = true

    if (durationMs <= 0) {
      setValue(end)
      return
    }

    const start = () => {
      const t0 = performance.now()

      const tick = (now: number) => {
        const progress = Math.min(1, (now - t0) / durationMs)
        setValue(Math.round(end * easeOutCubic(progress)))
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(tick)
        } else {
          setValue(end)
        }
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    if (delayMs > 0) {
      timeoutRef.current = setTimeout(start, delayMs)
    } else {
      start()
    }

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
      if (timeoutRef.current !== null) clearTimeout(timeoutRef.current)
    }
  }, [enabled, end, durationMs, delayMs])

  return value
}
