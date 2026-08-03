'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import logo from '@/assets/icons/logo-bay-area.png'
import { Reveal } from '@/components/motion/Reveal'
import { footerFade } from '@/lib/motion'
import { socialChannels } from '@/lib/socialChannels'
import { getCurrentLocale, getLocalizedHref, getRouteSegment } from './LanguageSwitcher'

/** Figma Footer 386:283 — aligns with page content width; top stroke only */
export default function Footer() {
  const pathname = usePathname()
  const currentLocale = getCurrentLocale(pathname) ?? 'en'

  return (
    <Reveal
      as="footer"
      variants={footerFade}
      className="w-full border-t border-line bg-footer py-6 md:py-8"
      data-name="Footer"
    >
      <div className="layout-container flex flex-col items-center text-center md:items-stretch md:text-left">
        <div className="flex w-full flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
          <Link
            href={`${getLocalizedHref(pathname, currentLocale, 'home')}#hero`}
            className="inline-flex h-6 w-auto shrink-0 items-center justify-center transition-opacity hover:opacity-70 md:size-[73px]"
            aria-label="Bay Area Group home"
            onClick={(event) => {
              if (getRouteSegment(pathname) !== 'home') return
              event.preventDefault()
              document
                .getElementById('hero')
                ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
          >
            <img
              src={logo.src}
              alt="Bay Area Group"
              width={73}
              height={73}
              className="h-6 w-auto object-contain object-center md:size-[73px] md:object-left"
            />
          </Link>

          <ul className="flex shrink-0 items-center gap-2 md:gap-[6.5px]">
            {socialChannels.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-11 items-center justify-center rounded-[12px] transition-opacity hover:opacity-70 md:size-[52px]"
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
        </div>

        <div className="w-full pt-4 md:pt-5">
          <p className="type-footer">
            © 2026 Bay Area K-Group. All rights reserved.
          </p>
        </div>
      </div>
    </Reveal>
  )
}
