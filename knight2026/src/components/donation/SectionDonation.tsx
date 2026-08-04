'use client'

import card01 from '@/assets/donation/card-01.png'
import card02 from '@/assets/donation/card-02.png'
import card03 from '@/assets/donation/card-03.png'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { staggerContainerSlow } from '@/lib/motion'
import { DONATION_LINKS } from '@/lib/donationLinks'
import { donationCopy } from '@/content/siteContent'
import { useLocale } from '@/lib/locale'

/** Figma section-donation 570:89 / cards 570:117 — viewport 1440, content 1160 */
const benefits = [
  { image: card01, artBg: '#F2F6F3', nodeId: '570:118' },
  { image: card02, artBg: '#F3F6FF', nodeId: '570:137' },
  { image: card03, artBg: '#F9F5FF', nodeId: '570:159' },
] as const

export default function SectionDonation() {
  const locale = useLocale()
  const copy = donationCopy[locale]
  return (
    <section
      id="donation"
      className="section-donation section-viewport section-viewport-auto section-page-start relative bg-white"
      aria-labelledby="donation-heading"
      data-node-id="570:89"
    >
      {/* Decorative vertical strokes — Figma bg-stroke 1200px */}
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[min(1200px,100%)] -translate-x-1/2 border-x border-line lg:block"
        aria-hidden
        data-node-id="570:90"
      />

      <div
        className="relative z-[1] mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-5 py-8 md:gap-20 md:py-20 lg:gap-20 lg:py-[100px]"
        data-node-id="570:91"
      >
        {/* Header — title 741 / gap 48 / aside 371 */}
        <Stagger
          className="flex w-full flex-col gap-8 lg:flex-row lg:items-start lg:gap-12"
          data-node-id="570:92"
        >
          <StaggerItem
            className="w-full shrink-0 lg:w-[741px]"
            data-node-id="570:93"
          >
            <h2
              id="donation-heading"
              className="type-h2 text-text"
              data-node-id="570:94"
            >
              {copy.title}
            </h2>
          </StaggerItem>

          <StaggerItem
            className="flex w-full shrink-0 flex-col justify-end lg:ml-auto lg:w-[371px]"
            data-node-id="570:95"
          >
            <p className="type-body" data-node-id="570:97">
              {copy.description}
            </p>
          </StaggerItem>
        </Stagger>

        {/* Intro — left 371 / gap 48 / right 741 */}
        <Reveal
          className="flex w-full flex-col gap-8 lg:flex-row lg:items-start lg:gap-12"
          delay={0.08}
          data-node-id="570:99"
        >
          <div className="w-full shrink-0 lg:w-[371px]" data-node-id="570:100">
            <h3 className="type-h3 text-text" data-node-id="570:102">
              {copy.subtitle}
            </h3>
          </div>

          <div
            className="flex w-full min-w-0 shrink-0 flex-col gap-6 lg:w-[741px]"
            data-node-id="570:103"
          >
            <div className="flex flex-col gap-3" data-node-id="570:104">
              <p className="type-h4 text-text" data-node-id="570:105">
                {copy.supportSubtitle}
              </p>
              <div className="type-body space-y-4" data-node-id="570:106">
                {copy.body.split('\n').map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div
              className="flex flex-wrap items-start gap-4 py-3 max-md:flex-col max-md:items-stretch md:gap-6"
              data-node-id="570:107"
            >
              <a
                href={DONATION_LINKS.paypalVenmo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost type-button inline-flex h-10 max-md:w-full items-center justify-center px-4 py-2 text-center text-sm md:h-11 md:px-[21px] md:py-0 md:text-base"
                data-node-id="570:108"
              >
                PayPal · Venmo
              </a>
              <a
                href={DONATION_LINKS.zeffy}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost type-button inline-flex h-10 max-md:w-full items-center justify-center px-4 py-2 text-center text-sm md:h-11 md:px-[21px] md:py-0 md:text-base"
                data-node-id="570:110"
              >
                Zeffy
              </a>
              <a
                href={DONATION_LINKS.getInTouch}
                className="btn-ghost type-button inline-flex h-10 max-md:w-full items-center justify-center px-4 py-2 text-center text-sm md:h-11 md:px-[21px] md:py-0 md:text-base"
                data-node-id="570:112"
              >
                {copy.getInTouch}
              </a>
            </div>
          </div>
        </Reveal>

        {/* Impact — left title 371 / gap 48 / cards 741 */}
        <div
          className="flex w-full flex-col gap-8 lg:flex-row lg:items-start lg:gap-12"
          data-node-id="570:179"
        >
          <Reveal className="w-full shrink-0 lg:w-[371px]" data-node-id="570:180">
            <h3 className="type-h3 text-text" data-node-id="570:182">
              {copy.impactTitle}
            </h3>
          </Reveal>

          <Stagger
            as="ul"
            variants={staggerContainerSlow}
            className="grid w-full min-w-0 list-none grid-cols-1 items-stretch gap-[18px] sm:grid-cols-2 lg:w-[741px] lg:grid-cols-3 lg:gap-[18px]"
            data-node-id="570:117"
          >
            {benefits.map((benefit, index) => {
              const benefitCopy = copy.benefits[index]
              return (
              <StaggerItem as="li" key={benefit.nodeId} className="h-full min-w-0">
                <article
                  className="flex h-full flex-col gap-6 overflow-hidden rounded-[12px] border border-line bg-white p-4 md:gap-6 md:px-4 md:py-6"
                  data-node-id={benefit.nodeId}
                >
                  <div
                    className="relative h-[92px] w-full shrink-0 overflow-hidden rounded-[12px] md:aspect-[705/277] md:h-auto"
                    style={{ backgroundColor: benefit.artBg }}
                    data-node-id={`${benefit.nodeId}-art`}
                  >
                    <img
                      src={benefit.image.src}
                      alt=""
                      width={705}
                      height={277}
                      className="size-full object-cover object-bottom md:scale-[1.015] md:object-contain"
                      loading="lazy"
                      decoding="async"
                      sizes="(min-width: 1024px) 235px, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-0">
                    <span className="type-h4 text-text">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="flex flex-col gap-1.5">
                      <h4
                        className={`type-body font-normal text-text ${locale === 'en' ? 'text-balance' : ''}`}
                      >
                        {benefitCopy[0]}
                      </h4>
                      <p
                        className={`type-body text-sm leading-[1.4] text-text ${locale === 'en' ? 'text-balance' : ''}`}
                      >
                        {benefitCopy[1]}
                      </p>
                    </div>
                  </div>
                </article>
              </StaggerItem>
              )
            })}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
