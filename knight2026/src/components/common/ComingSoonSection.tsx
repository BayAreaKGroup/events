'use client'

import Button from '@/components/ui/Button'
import EventBadge from '@/components/ui/EventBadge'
import { Stagger, StaggerItem } from '@/components/motion/Reveal'
import { fadeUpHero, fadeUpScale, staggerContainerSlow } from '@/lib/motion'
import { socialChannels } from '@/lib/socialChannels'

type ComingSoonSectionProps = {
  id: string
  headingId: string
  headingLevel?: 'h1' | 'h2'
}

/** Figma 508:2058 — section fills 100svh; footer sits outside */
export default function ComingSoonSection({
  id,
  headingId,
  headingLevel = 'h2',
}: ComingSoonSectionProps) {
  const Heading = headingLevel

  return (
    <section
      id={id}
      className="section-coming-soon section-viewport relative items-center justify-center overflow-x-clip px-[var(--space-page-x)]"
      aria-labelledby={headingId}
    >
      {/* Decorative vertical strokes — Figma bg-stroke 1200px */}
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[min(1200px,100%)] -translate-x-1/2 border-x border-line lg:block"
        aria-hidden
      />

      <Stagger
        variants={staggerContainerSlow}
        className="relative z-10 flex w-full max-w-[768px] flex-col items-center gap-6 px-4 text-center md:px-10"
      >
        <StaggerItem>
          <EventBadge subdued />
        </StaggerItem>

        <StaggerItem className="w-full pt-6">
          <p className="type-h5 text-text">
            올해에도 K-Group의 대표 행사인 K-Night이 찾아옵니다.
          </p>
        </StaggerItem>

        <StaggerItem variants={fadeUpHero} className="w-full">
          <Heading
            id={headingId}
            className="type-h1 text-balance text-text md:whitespace-nowrap"
          >
            Coming Soon
          </Heading>
        </StaggerItem>

        <StaggerItem
          variants={fadeUpScale}
          className="flex w-full flex-wrap items-center justify-center gap-3 pt-12"
        >
          <Button href="/" variant="ghost">
            Back to Home
          </Button>
          <Button href="/ticket" variant="accent">
            Get a Ticket
          </Button>
        </StaggerItem>

        <StaggerItem className="flex w-full flex-col items-center pt-16">
          <p className="type-body">
            아래 채널을 팔로우하시면 가장 빠르게 업데이트 소식을 받아보실 수
            있습니다.
          </p>
          <ul className="mt-0 flex max-w-full flex-wrap items-center justify-center gap-1 sm:gap-[6.5px]">
            {socialChannels.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-11 items-center justify-center rounded-lg transition-opacity hover:opacity-70 active:opacity-70 md:size-[52px]"
                  aria-label={social.label}
                >
                  <img
                    src={social.icon}
                    alt=""
                    width={52}
                    height={52}
                    className="asset-on-dark size-7 object-contain md:size-[52px]"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </li>
            ))}
          </ul>
        </StaggerItem>
      </Stagger>
    </section>
  )
}
