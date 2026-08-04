'use client'

import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { fadeUpSubtle } from '@/lib/motion'
import { ticketCopy } from '@/content/siteContent'
import { useLocale } from '@/lib/locale'

/** Figma section-ticket 562:6728 — viewport 1440, content 1160 (1200−40) */

export default function SectionTicket() {
  const copy = ticketCopy[useLocale()]
  return (
    <section
      id="ticket"
      className="section-ticket section-viewport section-viewport-auto relative bg-[#FAFAFA]"
      aria-labelledby="ticket-notice-heading"
      data-node-id="562:6728"
    >
      {/* Decorative vertical strokes — Figma bg-stroke 1200px */}
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[min(1200px,100%)] -translate-x-1/2 border-x border-line lg:block"
        aria-hidden
        data-node-id="562:6729"
      />

      <div
        className="relative z-[1] mx-auto flex w-full max-w-[1200px] flex-col gap-16 px-5 py-8 md:gap-20 md:py-20 lg:gap-20 lg:py-[100px]"
        data-node-id="561:5110"
      >
        {/* section-notice — title 371 / gap 48 / content 741 */}
        <Reveal
          className="section-notice flex w-full flex-col gap-8 lg:flex-row lg:items-start lg:gap-12"
          data-node-id="561:5111"
        >
          <div
            className="w-full shrink-0 lg:w-[371px]"
            data-node-id="561:5112"
          >
            <h3
              id="ticket-notice-heading"
              className="type-h3 text-text"
              data-node-id="561:5114"
            >
              {copy.noticeTitle}
            </h3>
          </div>

          <div
            className="flex w-full min-w-0 shrink-0 flex-col gap-6 lg:w-[741px]"
            data-node-id="561:5115"
          >
            <p className="type-h4 text-text" data-node-id="561:5117">
              {copy.noticeIntro}
            </p>

            <Stagger as="dl" className="flex flex-col" amount={0.1}>
              {copy.noticeItems.map((item, index) => (
                <StaggerItem
                  key={index}
                  as="div"
                  className="flex flex-col gap-2 border-b border-line py-6"
                >
                  <dt className="type-h4 text-text">{item[0]}</dt>
                  <dd className="type-body">{item[1]}</dd>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>

        {/* section-carpool — title 371 / gap 48 / content 741 */}
        <Reveal
          variants={fadeUpSubtle}
          delay={0.12}
          className="section-carpool flex w-full flex-col gap-8 lg:flex-row lg:items-start lg:gap-12"
          data-node-id="561:5137"
        >
          <div
            className="w-full shrink-0 lg:w-[371px]"
            data-node-id="561:5138"
          >
            <h3
              id="ticket-carpool-heading"
              className="type-h3 text-text"
              data-node-id="561:5140"
            >
              {copy.carpoolTitle}
            </h3>
          </div>

          <div
            className="flex w-full min-w-0 shrink-0 flex-col gap-6 lg:w-[741px]"
            data-node-id="561:5141"
          >
            <p className="type-h4 text-text" data-node-id="561:5144">
              {copy.carpoolIntro}
            </p>

            <button
              type="button"
              disabled
              className="btn-ghost type-button inline-flex h-10 w-fit max-md:w-full items-center justify-center gap-2 px-4 py-2 text-center text-sm disabled:cursor-not-allowed disabled:border-[#B8B8B8] disabled:bg-[#F3F3F3] disabled:text-[#8A8A8A] disabled:opacity-100 disabled:hover:border-[#B8B8B8] disabled:hover:transform-none disabled:hover:shadow-none md:h-11 md:px-5 md:text-base"
              data-node-id="561:5145"
            >
              {copy.carpoolButton}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
