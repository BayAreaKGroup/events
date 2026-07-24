'use client'

import Link from 'next/link'
import overviewGraphic from '@/assets/overview/container-graphic-5668032.png'
import arrowIcon from '@/assets/icons/icon-arrow.svg'
import EventBadge from '@/components/ui/EventBadge'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { fadeUpSubtle } from '@/lib/motion'

const details = [
  {
    label: 'Date',
    value: 'September 12, Saturday',
  },
  {
    label: 'Time',
    value: '4:00 – 9:00 PM',
  },
  {
    label: 'Location',
    value: 'Computer History Museum',
  },
] as const

/** Figma section-overview 566:8030 — viewport 1440, content ~1000 (608 / 48 / 304) */
export default function SectionOverview() {
  return (
    <section
      id="overview"
      className="section-overview section-viewport section-viewport-auto section-page-start relative flex flex-col bg-white"
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
        className="overview-copy relative z-[1] mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-5 pt-12 md:gap-12 md:pt-20 lg:pt-[100px]"
        data-node-id="566:8114"
      >
        <Stagger className="flex flex-col gap-10 md:gap-12" data-node-id="566:8114-inner">
          {/* Badge */}
          <StaggerItem>
            <EventBadge className="overview-badge" />
          </StaggerItem>

          {/* Title + aside — align to 1200px content edges */}
          <StaggerItem
            className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12"
            data-node-id="566:8118"
          >
            <div
              className="w-full shrink-0 lg:max-w-[608px]"
              data-node-id="566:8119"
            >
              <h2
                id="overview-heading"
                className="type-h1 uppercase text-text"
                data-node-id="566:8121"
              >
                Beyond
                <br />
                Tech
              </h2>
            </div>

            <div
              className="flex w-full shrink-0 flex-col gap-7 lg:w-[min(344px,100%)]"
              data-node-id="566:8122"
            >
              <p
                className="type-body max-w-[344px] text-pretty"
                data-node-id="566:8124"
              >
                Connecting people beyond technology in the age of AI, where
                human connection and goodwill inspire growth.
              </p>
              <Link
                href="/ticket"
                className="btn-ghost type-button inline-flex h-11 w-fit items-center gap-2 px-6 py-3"
                data-node-id="566:8125"
              >
                Get a Ticket
                <img
                  src={arrowIcon.src}
                  alt=""
                  width={15}
                  height={15}
                  className="size-[15px] shrink-0"
                  aria-hidden
                />
              </Link>
            </div>
          </StaggerItem>

          {/* Date / Time / Location — 3 × ~equal within 1200 */}
          <Stagger
            as="dl"
            className="flex w-full flex-col gap-8 lg:flex-row lg:justify-between lg:gap-12"
            data-node-id="566:8131"
          >
            {details.map((detail) => (
              <StaggerItem
                key={detail.label}
                className="flex w-full flex-col gap-3 lg:max-w-[344px] lg:flex-1"
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
          <img
            src={overviewGraphic.src}
            alt=""
            width={1200}
            height={237}
            decoding="async"
            className="pointer-events-none block h-auto w-full select-none"
          />
        </Reveal>
      </div>
    </section>
  )
}
