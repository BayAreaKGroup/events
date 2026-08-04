'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useId, useLayoutEffect, useState } from 'react'
import logo from '@/assets/icons/logo-bay-area.png'
import logoMark from '@/assets/icons/logo-bay-area-mark.png'
import { easeOutExpo } from '@/lib/motion'
import LanguageSwitcher from '@/components/layout/LanguageSwitcher'
import { getCurrentLocale, getLocalizedHref, getRouteSegment } from '@/lib/locale'

/** Figma nav-bar 561:6099 — follows page color tokens (cool on home, warm elsewhere) */
const NAV = {
  container: '1200px',
  buttonBg: '#F03466',
  buttonBgHover: '#D92D58',
  buttonBgActive: '#C4284F',
  linkGap: '24px',
  logoW: 132,
  logoH: 44,
} as const

const navItems = [
  { href: 'agenda', label: 'Agenda' },
  { href: 'speakers', label: 'Speakers' },
  { href: 'sponsors', label: 'Sponsors' },
  { href: 'about', label: 'About' },
  { href: 'donation', label: 'Donation' },
] as const

const navLinkClass =
  'type-button text-text transition-opacity hover:opacity-70 active:opacity-70'

const ticketBtnClass =
  'btn-home-cta type-button inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-[12px] px-6 py-3'

/** trailingSlash-safe active check for flat routes */
function isActivePath(pathname: string | null, href: string) {
  return getRouteSegment(pathname) === href
}

export default function Header() {
  const reduceMotion = useReducedMotion()
  const pathname = usePathname()
  const currentLocale = getCurrentLocale(pathname)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'

    return () => {
      window.history.scrollRestoration = previousScrollRestoration
    }
  }, [])

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    if (!window.matchMedia('(max-width: 767px)').matches) return

    const frame = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    })

    return () => window.cancelAnimationFrame(frame)
  }, [pathname])

  useEffect(() => {
    if (!menuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div
        className="fixed inset-x-0 top-0 z-50 hidden h-8 bg-line md:block"
        aria-label="Language selection"
      >
        <div
          className="mx-auto flex h-full w-full items-center justify-end px-4 sm:px-6 md:px-8"
          style={{ maxWidth: NAV.container }}
        >
          <LanguageSwitcher />
        </div>
      </div>

      <motion.header
        className="fixed inset-x-0 top-0 z-50 h-16 border-b border-line bg-surface md:top-8 md:h-20"
        data-node-id="561:6099"
        initial={false}
        animate={{ y: 0 }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : {
                type: 'spring',
                stiffness: 320,
                damping: 36,
                mass: 0.8,
              }
        }
      >
        <nav
          className="relative mx-auto flex h-full w-full items-center justify-between px-4 sm:px-6 md:px-8"
          style={{ maxWidth: NAV.container }}
          aria-label="Primary"
          data-node-id="561:6101"
        >
          <Link
            href={`${getLocalizedHref(currentLocale)}#hero`}
            className="inline-flex h-11 w-11 shrink-0 items-center overflow-hidden transition-opacity hover:opacity-70 active:opacity-70 md:w-[132px]"
            aria-label="Bay Area Group — Home"
            data-node-id="561:6102"
            onClick={(event) => {
              closeMenu()
              if (getRouteSegment(pathname) !== '') return
              event.preventDefault()
              document
                .getElementById('hero')
                ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
          >
            <img
              src={logoMark.src}
              alt="Bay Area Group"
              width={44}
              height={44}
              className="size-8 object-contain object-left md:hidden"
            />
            <img
              src={logo.src}
              alt="Bay Area Group"
              width={NAV.logoW}
              height={NAV.logoH}
              className="hidden h-11 w-[132px] object-contain object-left md:block"
            />
          </Link>

          <div className="flex items-center gap-2 md:gap-6">
            <ul
              className="hidden items-center md:flex"
              style={{ gap: NAV.linkGap }}
            >
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={getLocalizedHref(currentLocale, item.href)}
                    className={[
                      navLinkClass,
                      isActivePath(pathname, item.href) ? 'opacity-100' : '',
                    ].join(' ')}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href={getLocalizedHref(currentLocale, 'ticket')}
              className={`${ticketBtnClass} hidden md:inline-flex`}
              data-node-id="561:6113"
            >
              Get a Ticket
            </Link>

            <Link
              href={getLocalizedHref(currentLocale, 'ticket')}
              className="btn-home-cta type-button inline-flex h-10 items-center justify-center gap-2 rounded-[12px] px-4 py-1.5 text-sm md:hidden"
              onClick={closeMenu}
              aria-label="Get a Ticket"
            >
              Get a Ticket
            </Link>

            <button
              type="button"
              className="relative flex size-10 items-center justify-center md:hidden"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls={menuId}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="sr-only">
                {menuOpen ? 'Close menu' : 'Open menu'}
              </span>
              <span
                className={[
                  'absolute h-px w-5 bg-text transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
                  menuOpen ? 'translate-y-0 rotate-45' : '-translate-y-1.5',
                ].join(' ')}
              />
              <span
                className={[
                  'absolute h-px w-5 bg-text transition-opacity duration-200',
                  menuOpen ? 'opacity-0' : 'opacity-100',
                ].join(' ')}
              />
              <span
                className={[
                  'absolute h-px w-5 bg-text transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
                  menuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1.5',
                ].join(' ')}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id={menuId}
            className="fixed inset-0 z-40 flex flex-col bg-surface md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 0.35, ease: easeOutExpo }
            }
          >
            <div className="h-16 shrink-0 md:h-20" aria-hidden="true" />

            <motion.div
              className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-between px-4 pb-12 pt-8 sm:px-6"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: 8 }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.45, ease: easeOutExpo, delay: 0.04 }
              }
            >
              <ul className="flex flex-col gap-8">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={getLocalizedHref(currentLocale, item.href)}
                      onClick={closeMenu}
                      className={[
                        'type-button text-sm text-text transition-opacity hover:opacity-70 active:opacity-70 md:text-2xl',
                        isActivePath(pathname, item.href)
                          ? 'opacity-100'
                          : 'opacity-80',
                      ].join(' ')}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-3 border-t border-line pt-6">
                <p className="type-caption text-text">Language</p>
                <LanguageSwitcher onNavigate={closeMenu} />
              </div>

            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
