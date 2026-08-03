'use client'

import type { StaticImageData } from 'next/image'
import sponsorLogo from '@/assets/sponsors/consulate-sf.png'
import { Reveal } from '@/components/motion/Reveal'
import { fadeUpSubtle } from '@/lib/motion'
import { sponsorCopy, type Locale } from '@/content/siteContent'

/** Figma section-sponsor 562:6869 — viewport 1440, content 1160 */

const logos = Array.from({ length: 8 }, () => sponsorLogo)

const marqueeItems = [
  'Figma',
  'Vercel',
  'Linear',
  'Stripe',
  'Shopify',
  'Notion',
  'Loom',
  'Arc',
  'Raycast',
  'Pitch',
] as const

const loopItems = [...marqueeItems, ...marqueeItems]

const sponsorSlots = [
  { wide: true, logo: logos[0] },
  { wide: false, logo: logos[1] },
  { wide: false, logo: logos[2] },
  { wide: false, logo: logos[3] },
  { wide: false, logo: logos[4] },
  { wide: false, logo: logos[5] },
  { wide: false, logo: logos[6] },
] as const

function SponsorLogoCard({
  logo,
  wide = false,
}: {
  logo: StaticImageData
  wide?: boolean
}) {
  return (
    <div
      className={[
        'flex h-[120px] w-full items-center justify-center overflow-hidden rounded-[12px] border border-line bg-[#FAFAFA] px-4 sm:h-[140px] lg:h-[153px]',
        wide ? 'px-6 sm:px-8' : '',
      ].join(' ')}
    >
      <img
        src={logo.src}
        alt="주샌프란시스코 대한민국 총영사관"
        width={217}
        height={69}
        className="h-auto max-h-[56px] w-full max-w-[180px] object-contain sm:max-h-[69px] sm:max-w-[217px]"
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}

const inquiryEmail = 'info@bayareakgroup.org'

export default function SectionSponsor({ locale }: { locale?: Locale }) {
  const copy = locale ? sponsorCopy[locale] : null
  return (
    <section
      id="sponsor"
      className="section-sponsor section-viewport relative h-[100svh] min-h-[100svh] overflow-x-clip bg-white"
      aria-labelledby="sponsor-heading"
      data-node-id="562:6869"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[min(1200px,100%)] -translate-x-1/2 border-x border-line lg:block"
        aria-hidden
        data-node-id="562:6870"
      />

      <div
        className="relative z-[1] mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center gap-6 px-5 py-8 md:gap-16 md:py-20 lg:gap-20 lg:py-[100px]"
        data-node-id="562:6871"
      >
        <Reveal className="shrink-0" data-node-id="562:6872">
          <h2
            id="sponsor-heading"
            className="type-h2 max-w-[741px] whitespace-pre-line text-text"
            data-node-id="562:6874"
          >
            {copy?.title ?? 'Thank you to our\nK-Night 2026 sponsors'}
          </h2>
        </Reveal>

        <Reveal delay={0.08} data-node-id="562:6878">
          <ul className="hidden w-full list-none grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-4 sm:gap-x-6 sm:gap-y-6 lg:gap-x-12 lg:gap-y-12">
            {sponsorSlots.map((slot, index) => (
              <li
                key={`sponsor-${index}`}
                className={slot.wide ? 'col-span-2 min-w-0' : 'min-w-0'}
              >
                <SponsorLogoCard logo={slot.logo} wide={slot.wide} />
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal
          className="hidden marquee w-full shrink-0 py-4 md:py-8"
          variants={fadeUpSubtle}
          delay={0.12}
          aria-hidden="true"
        >
          <div
            className="marquee-track items-center gap-0"
            style={{ ['--marquee-duration' as string]: '26s' }}
          >
            {loopItems.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="marquee-item flex items-center gap-8 pr-8"
              >
                <span className="type-body font-medium tracking-[-0.01em] text-text">
                  {item}
                </span>
                <span className="size-[3.5px] shrink-0 bg-text" />
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="card-ui bg-surface-muted flex shrink-0 flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:gap-8 md:p-8">
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <h3 className="type-h5 text-text">
                {copy?.subtitle ?? 'Partnership & Sponsorship Inquiries'}
              </h3>
              <p className="type-body max-w-[42rem] text-pretty text-text-muted">
                {copy?.body ?? (
                  <>
                    Bay Area K-Group은 후원 규모와 관계없이 개인 및 기업 여러분의
                    소중한 후원을 언제나 환영합니다.
                  </>
                )}
              </p>
            </div>

            <a
              href={`mailto:${inquiryEmail}`}
              className="btn-accent type-button inline-flex h-10 w-fit max-md:w-full shrink-0 items-center justify-center gap-2 rounded-[12px] px-4 py-2 text-center text-sm md:h-11 md:px-6 md:py-3 md:text-base"
            >
              {copy?.cta ?? 'Get in Touch'}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
