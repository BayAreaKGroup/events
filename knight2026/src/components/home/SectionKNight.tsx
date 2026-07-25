'use client'

import { Stagger, StaggerItem } from '@/components/motion/Reveal'
import AnimatedStats from '@/components/home/AnimatedStats'

const stats = [
  { end: 14, suffix: 'th', label: 'Years of K-Night' },
  { end: 400, suffix: '+', label: 'Professionals' },
  { end: 7000, suffix: '+', label: 'K-GROUP MEMBERS' },
] as const

/** Figma section-k-night 565:7852 — viewport 1440, content 1160 (1200−40) */
export default function SectionKNight() {
  return (
    <section
      id="k-night"
      className="section-k-night section-viewport section-viewport-auto relative flex min-h-[min(100svh,900px)] flex-col bg-[#F8F8FA]"
      aria-labelledby="k-night-heading"
      data-node-id="565:7852"
      data-name="section-k-night"
    >
      {/* Decorative vertical strokes — Figma bg-stroke 1200px */}
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[min(1200px,100%)] -translate-x-1/2 border-x border-line lg:block"
        aria-hidden
        data-node-id="565:7853"
        data-name="bg-stroke"
      />

      {/* Copy — Pretendard H4 32/40, max 740 — Figma 565:7872 */}
      <Stagger
        className="relative z-[1] mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center px-5 py-16 md:py-[100px]"
        data-node-id="565:7872"
      >
        <StaggerItem className="w-full" data-node-id="565:7873">
          <h2
            id="k-night-heading"
            className="type-h3 w-full max-w-[740px] text-text"
            data-node-id="565:7876"
          >
            K-Night brings Bay Area professionals together beyond work and
            technology.
            <br />
            Meet new people, exchange ideas, and build meaningful connections.
          </h2>
        </StaggerItem>
      </Stagger>

      {/* Stats band — compact proof strip + one-shot count-up */}
      <div
        className="relative z-[1] w-full shrink-0 border-t border-line"
        data-node-id="565:7854"
      >
        <AnimatedStats
          stats={stats}
          className="mx-auto flex w-full max-w-[1200px] flex-col divide-y divide-line px-5 md:h-[220px] md:flex-row md:justify-between md:divide-x md:divide-y-0"
          durationMs={800}
          staggerMs={100}
        />
      </div>
    </section>
  )
}
