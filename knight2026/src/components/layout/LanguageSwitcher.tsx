'use client'

import Link from 'next/link'

import type { Locale } from '@/content/siteContent'

const localizedRoutes = new Set([
  'home',
  'agenda',
  'speakers',
  'sponsors',
  'about',
  'donation',
  'ticket',
])

export function getRouteSegment(pathname: string | null) {
  const segments = (pathname ?? '/').split('/').filter(Boolean)
  const localizedIndex = segments.findIndex(
    (segment) => segment === 'en' || segment === 'ko',
  )
  const candidate =
    localizedIndex >= 0 ? segments[localizedIndex + 1] : segments.at(-1)

  return candidate && localizedRoutes.has(candidate) ? candidate : 'home'
}

export function getCurrentLocale(pathname: string | null): Locale | null {
  const segments = (pathname ?? '/').split('/').filter(Boolean)
  const locale = segments.find((segment) => segment === 'en' || segment === 'ko')
  return locale === 'en' || locale === 'ko' ? locale : null
}

export function getLocalizedHref(
  pathname: string | null,
  locale: Locale,
  route?: string,
) {
  const normalizedRoute = route?.replace(/^\/+|\/+$/g, '') || getRouteSegment(pathname)
  return `/${locale}/${localizedRoutes.has(normalizedRoute) ? normalizedRoute : 'home'}/`
}

export default function LanguageSwitcher({
  pathname,
  onNavigate,
}: {
  pathname: string | null
  onNavigate?: () => void
}) {
  const currentLocale = getCurrentLocale(pathname)

  return (
    <div className="flex items-center gap-1 text-xs text-text">
      <Link
        href={getLocalizedHref(pathname, 'en')}
        onClick={onNavigate}
        className={[
          'transition-opacity hover:opacity-70 active:opacity-70',
          currentLocale === 'en' ? 'font-semibold' : 'opacity-60',
        ].join(' ')}
        aria-current={currentLocale === 'en' ? 'page' : undefined}
      >
        English
      </Link>
      <span aria-hidden="true" className="opacity-40">
        |
      </span>
      <Link
        href={getLocalizedHref(pathname, 'ko')}
        onClick={onNavigate}
        className={[
          'transition-opacity hover:opacity-70 active:opacity-70',
          currentLocale === 'ko' ? 'font-semibold' : 'opacity-60',
        ].join(' ')}
        aria-current={currentLocale === 'ko' ? 'page' : undefined}
      >
        한국어
      </Link>
    </div>
  )
}
