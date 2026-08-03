'use client'

import Link from 'next/link'
import { Reveal } from '@/components/motion/Reveal'
import { fadeIn } from '@/lib/motion'
import { usePathname } from 'next/navigation'
import { getCurrentLocale, getLocalizedHref } from '@/components/layout/LanguageSwitcher'

/** Standalone looping ticket CTA — prefer SectionNetwork in-flow banner on home/about */
const segments = [
  'September 12, 2026',
  'Get Tickets →',
  'Computer History Museum',
  'Mountain View, CA',
] as const

const phrase = `${segments.join('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0')}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0`
const loopItems = [phrase, phrase, phrase, phrase]

export default function SectionLoopingCtaBanner() {
  const pathname = usePathname()
  const currentLocale = getCurrentLocale(pathname) ?? 'en'

  return (
    <Reveal variants={fadeIn} delay={0.08} className="section-cta-banner-slot w-full shrink-0">
      <Link
        href={getLocalizedHref(pathname, currentLocale, 'ticket')}
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
            {loopItems.map((item, i) => (
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
  )
}
