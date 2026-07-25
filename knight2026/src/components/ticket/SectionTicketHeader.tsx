'use client'

import type { StaticImageData } from 'next/image'
import ticketEarly from '@/assets/ticket/ticket-early.png'
import ticketRegular from '@/assets/ticket/ticket-regular.png'
import { Stagger, StaggerItem } from '@/components/motion/Reveal'

/** Figma section-ticket-header 562:6586 — viewport 1440, content 1160 (1200−40) */

const eventDetails = (
  <>
    September 12, Saturday
    <br />
    <br />
    Computer History Museum
    <br />
    Mountain View, CA
  </>
)

type TicketOption = {
  id: string
  image: StaticImageData
  imageAlt: string
  price: string
  buttonLabel: string
  variant: 'regular' | 'early'
}

const ticketOptions: TicketOption[] = [
  {
    id: 'early-bird',
    image: ticketEarly,
    imageAlt: 'K-Night 2026 Early Bird Ticket',
    price: '$70',
    buttonLabel: 'Buy Early Bird Ticket',
    variant: 'early',
  },
  {
    id: 'regular',
    image: ticketRegular,
    imageAlt: 'K-Night 2026 Regular Ticket',
    price: '$80',
    buttonLabel: 'Buy regular Ticket',
    variant: 'regular',
  },
]

export default function SectionTicketHeader() {
  return (
    <section
      id="ticket-header"
      className="section-ticket-header section-viewport section-viewport-auto section-page-start relative bg-white"
      aria-labelledby="ticket-header-heading"
      data-node-id="562:6586"
    >
      {/* Decorative vertical strokes — Figma bg-stroke 1200px */}
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[min(1200px,100%)] -translate-x-1/2 border-x border-line lg:block"
        aria-hidden
        data-node-id="562:6587"
      />

      <div
        className="section-text relative z-[1] mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-5 py-12 md:gap-16 md:py-20 lg:gap-20 lg:py-[100px]"
        data-node-id="562:6697"
      >
        {/* Header — title 741 / gap 48 / aside 371 */}
        <Stagger
          className="flex w-full shrink-0 flex-col gap-8 lg:flex-row lg:items-start lg:gap-12"
          data-node-id="562:6698"
        >
          <StaggerItem
            className="w-full shrink-0 lg:w-[741px]"
            data-node-id="562:6699"
          >
            <h2
              id="ticket-header-heading"
              className="type-h2 text-text md:whitespace-nowrap"
              data-node-id="562:6700"
            >
              Ticket
            </h2>
          </StaggerItem>

          <StaggerItem
            className="flex w-full shrink-0 flex-col justify-end lg:ml-auto lg:w-[371px]"
            data-node-id="562:6701"
          >
            <p className="type-body" data-node-id="562:6703">
              {eventDetails}
            </p>
          </StaggerItem>
        </Stagger>

        {/* Ticket options — gap 64 between cards */}
        <Stagger
          className="ticket-options flex w-full shrink-0 flex-col gap-6 md:flex-row md:items-stretch md:gap-10 lg:gap-16"
          amount={0.2}
          data-node-id="562:6710"
        >
          {ticketOptions.map((option) => {
            const isEarly = option.variant === 'early'

            return (
              <StaggerItem
                key={option.id}
                className="min-h-0 min-w-0 flex-1"
                data-node-id={isEarly ? '562:6719' : '562:6711'}
              >
                <div
                  className={[
                    'surface-card flex h-full min-h-0 flex-col items-center gap-5 px-5 py-8 sm:gap-6 sm:px-8 sm:py-10 md:px-[33px] md:py-[49px]',
                    isEarly ? 'bg-[#F8F8FA]' : 'bg-white',
                  ].join(' ')}
                >
                  <div className="relative h-[120px] w-full max-w-[500px] shrink overflow-hidden sm:h-[160px] md:h-[220px]">
                    <img
                      src={option.image.src}
                      alt={option.imageAlt}
                      width={500}
                      height={220}
                      className="absolute left-1/2 top-1/2 size-[300px] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover sm:size-[400px] md:size-[500px]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="flex w-full shrink-0 items-end justify-center gap-2 pb-4 md:pb-6">
                    <p className="type-h3 text-text">{option.price}</p>
                    <p className="type-caption">Per person</p>
                  </div>

                  <button
                    type="button"
                    className={[
                      'type-button inline-flex h-11 shrink-0 items-center justify-center px-5',
                      isEarly
                        ? 'btn-home-cta'
                        : 'btn-ghost',
                    ].join(' ')}
                  >
                    {option.buttonLabel}
                  </button>
                </div>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
