'use client'

import { useEffect, useState } from 'react'
import overviewGraphic from '@/assets/overview/container-graphic-5668032.png'
import mobileOverviewGraphic from '@/assets/overview/mobile-overview.png'
import EventBadge from '@/components/ui/EventBadge'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { fadeUpSubtle } from '@/lib/motion'

const eventTime = new Date('2026-09-12T16:00:00-07:00').getTime()

function getCountdown() {
  const remaining = Math.max(0, eventTime - Date.now())
  const totalSeconds = Math.floor(remaining / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return `D-${days} ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

const details = [
  {
    label: 'Date',
    value: 'September 12, Saturday',
  },
  {
    label: 'Time',
    value: '4:00 – 8:30 PM',
  },
  {
    label: 'Location',
    value: 'Computer History Museum',
  },
] as const

/** Figma section-overview 566:8030 — viewport 1440, content ~1000 (608 / 48 / 304) */
export default function SectionOverview() {
  const [countdown, setCountdown] = useState(getCountdown)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCountdown(getCountdown())
    }, 1000)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="section-overview section-viewport section-viewport-auto section-page-start relative flex flex-col bg-white max-md:h-[100dvh] max-md:min-h-[100dvh] max-md:overflow-hidden"
      aria-labelledby="overview-heading"
      data-node-id="566:8030"
      data-name="section-overview"
    >
      {/* Decorative vertical strokes — Figma bg-stroke 1200px */}
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[min(1200px,100%)] -translate-x-1/2 border-x border-line lg:block"
        aria-hidden
        data-node-id="566:8031"
        data-name="bg-stroke"
      />

      <div
        className="overview-copy relative z-[1] mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-5 pt-12 md:gap-12 md:pt-20 lg:pt-[100px] max-md:gap-6 max-md:pt-6"
        data-node-id="566:8114"
      >
        <Stagger
          className="flex flex-col gap-5 max-md:gap-4"
          data-node-id="566:8114-inner"
        >
          {/* Badge */}
          <StaggerItem>
            <EventBadge className="overview-badge" label={countdown} />
          </StaggerItem>

          {/* Title + aside — align to 1200px content edges */}
          <StaggerItem
            className="mb-5 flex flex-col gap-8 max-md:mb-0 max-md:gap-4 md:mb-7 lg:flex-row lg:items-start lg:justify-between lg:gap-12"
            data-node-id="566:8118"
          >
            <div
              className="w-full shrink-0 lg:max-w-[608px]"
              data-node-id="566:8119"
            >
              <h1
                id="overview-heading"
                className="type-h1 whitespace-nowrap text-[96px] text-text max-md:text-[2.75rem]"
                data-node-id="566:8121"
              >
                K-Night 2026
              </h1>
            </div>

            <div
              className="flex w-full shrink-0 flex-col gap-2 lg:w-[min(344px,100%)]"
              data-node-id="566:8122"
            >
              <h4 className="type-h4 uppercase text-text">Beyond Tech</h4>
              <p
                className="type-body max-w-[344px] text-pretty"
                data-node-id="566:8124"
              >
                Connecting people beyond technology in
                <br />
                the age of AI, where human connection
                <br />
                and goodwill inspire growth.
              </p>
            </div>
          </StaggerItem>

          {/* Date / Time / Location — 3 × ~equal within 1200 */}
          <Stagger
            as="dl"
            className="flex w-full flex-col gap-8 max-md:gap-2 lg:flex-row lg:justify-between lg:gap-12"
            data-node-id="566:8131"
          >
            {details.map((detail) => (
              <StaggerItem
                key={detail.label}
                className="flex w-full flex-col gap-3 max-md:gap-0 lg:max-w-[344px] lg:flex-1"
              >
                <dt className="type-caption">{detail.label}</dt>
                <dd className="type-body text-text">{detail.value}</dd>
              </StaggerItem>
            ))}
          </Stagger>
        </Stagger>
      </div>

      {/* Bottom mosaic graphic — Figma 566:8032, inside 1200px container */}
      <div
        className="container-graphic relative z-[1] mx-auto mt-auto w-full max-w-[1200px] shrink-0 leading-[0]"
        data-node-id="566:8032"
        data-name="container-graphic"
      >
        <Reveal
          className="block w-full leading-[0]"
          variants={fadeUpSubtle}
          delay={0.08}
        >
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={mobileOverviewGraphic.src}
            />
            <img
              src={overviewGraphic.src}
              alt=""
              width={1200}
              height={237}
              decoding="async"
              className="pointer-events-none block h-auto w-full select-none"
            />
          </picture>
        </Reveal>
      </div>
    </section>
  )
}
