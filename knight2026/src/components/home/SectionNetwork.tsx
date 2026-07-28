'use client'

import Link from 'next/link'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import SocialCard from '@/components/ui/SocialCard'
import { fadeIn } from '@/lib/motion'
import { networkSocialCards } from '@/lib/socialChannels'

/** Looping ticket CTA copy */
const bannerSegments = [
  'September 12, 2026',
  'Get Tickets →',
  'Computer History Museum',
  'Mountain View, CA',
] as const

const bannerPhrase = `${bannerSegments.join('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0')}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0`
const bannerLoop = [bannerPhrase, bannerPhrase, bannerPhrase, bannerPhrase]

/**
 * Join Our Network — compact content-driven layout:
 * header → social grid → full-bleed ticker banner.
 */
export default function SectionNetwork() {
  return (
    <section
      id="network"
      className="section-network relative w-full bg-[#FAFAFA]"
      aria-labelledby="network-heading"
      data-node-id="561:6411"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[min(1200px,100%)] -translate-x-1/2 border-x border-line lg:block"
        aria-hidden
      />

      <div className="section-network-inner relative z-[1] mx-auto flex w-full max-w-[1200px] flex-col px-5">
        {/* Header — shared baseline row */}
        <Stagger
          className="section-network-header flex w-full flex-col gap-4 sm:gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-12"
          data-node-id="561:6412"
        >
          <StaggerItem className="w-full min-w-0 lg:flex-1" data-node-id="561:6413">
            <h2
              id="network-heading"
              className="type-h2 text-text md:whitespace-nowrap"
              data-node-id="561:6414"
            >
              Join Our Network
            </h2>
          </StaggerItem>

          <StaggerItem
            className="w-full min-w-0 lg:max-w-[371px] lg:shrink-0"
            data-node-id="561:6415"
          >
            <p className="type-body" data-node-id="561:6417">
              K-Group 공식채널을 팔로우하시면 가장 빠르게 업데이트 소식을
              받아보실 수 있습니다. 지금 합류하셔서 멋진 회원분들과 먼저 교류를
              시작해 보세요!
            </p>
          </StaggerItem>
        </Stagger>

        {/* Social cards */}
        <Stagger
          as="ul"
          className="social-card-grid list-none"
          data-node-id="562:6583"
        >
          {networkSocialCards.map((card) => (
            <StaggerItem as="li" key={card.id} className="min-w-0">
              <SocialCard
                name={card.name}
                action={card.action}
                href={card.href}
                icon={card.icon}
                className={`social-card-${card.id}`}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* Full-bleed ticker — page edge to edge */}
      <Reveal
        variants={fadeIn}
        delay={0.06}
        className="section-cta-banner-slot relative z-[1] w-full"
      >
        <Link
          href="/ticket"
          className="section-looping-cta-banner marquee marquee-cta relative flex w-full items-center overflow-hidden"
          aria-label="Get Tickets · September 12, 2026 · Computer History Museum, Mountain View, CA"
          data-node-id="565:7850"
          data-name="section-looping-cta-banner"
          onClick={() => {
            window.scrollTo(0, 0)
          }}
        >
          <div className="relative z-[1] flex h-full w-full items-center overflow-hidden">
            <div
              className="marquee-track items-center"
              style={{ ['--marquee-duration' as string]: '40s' }}
            >
              {bannerLoop.map((item, i) => (
                <span
                  key={`cta-loop-${i}`}
                  className="marquee-item section-looping-cta-text shrink-0 whitespace-nowrap"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </Reveal>
    </section>
  )
}
