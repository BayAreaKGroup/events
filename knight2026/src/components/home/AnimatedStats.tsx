'use client'

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from 'react'
import { useCountUp } from '@/hooks/useCountUp'

type StatItem = {
  end: number
  suffix?: string
  label: string
}

type AnimatedStatsProps = {
  stats: readonly StatItem[]
  className?: string
  /** Count duration per stat (ms). Default 800. */
  durationMs?: number
  /** Stagger between stats (ms). Default 100. */
  staggerMs?: number
}

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function StatCell({
  end,
  suffix = '',
  label,
  active,
  index,
  durationMs,
  staggerMs,
  reduceMotion,
}: StatItem & {
  active: boolean
  index: number
  durationMs: number
  staggerMs: number
  reduceMotion: boolean
}) {
  const delayMs = reduceMotion ? 0 : index * staggerMs
  const count = useCountUp({
    end,
    durationMs: reduceMotion ? 0 : durationMs,
    delayMs,
    enabled: active,
  })
  const shown = reduceMotion ? end : active ? count : 0

  return (
    <div
      className={[
        'stat-cell flex w-full flex-col items-start justify-center gap-1 py-8 md:h-[220px] md:w-[360px] md:shrink-0 md:px-8 md:py-0',
        active ? 'stat-cell--in' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      style={
        {
          ['--stat-delay']: `${delayMs}ms`,
        } as CSSProperties
      }
    >
      <dt className="sr-only">{label}</dt>
      <dd className="stat-value type-h2 text-text">
        <span className="stat-value-num tabular-nums">
          {shown}
          {suffix}
        </span>
      </dd>
      <dd className="stat-label type-caption">{label}</dd>
    </div>
  )
}

/**
 * Stats band with one-shot IntersectionObserver count-up.
 */
export default function AnimatedStats({
  stats,
  className = '',
  durationMs = 800,
  staggerMs = 100,
}: AnimatedStatsProps) {
  const rootRef = useRef<HTMLDListElement>(null)
  const [active, setActive] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const reduced = prefersReducedMotion()
    setReduceMotion(reduced)

    const node = rootRef.current
    if (!node) return

    if (reduced) {
      setActive(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        setActive(true)
        observer.disconnect()
      },
      { threshold: 0.35, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <dl
      ref={rootRef}
      className={['animated-stats', className].filter(Boolean).join(' ')}
    >
      {stats.map((stat, index) => (
        <StatCell
          key={stat.label}
          {...stat}
          index={index}
          active={active}
          durationMs={durationMs}
          staggerMs={staggerMs}
          reduceMotion={reduceMotion}
        />
      ))}
    </dl>
  )
}
