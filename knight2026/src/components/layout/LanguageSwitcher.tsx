'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { getCurrentLocale, getLocalizedHref, getRouteSegment } from '@/lib/locale'

export default function LanguageSwitcher({
  onNavigate,
}: {
  onNavigate?: () => void
}) {
  const pathname = usePathname()
  const currentLocale = getCurrentLocale(pathname)
  const route = getRouteSegment(pathname)

  return (
    <div className="flex items-center gap-1 text-xs text-text">
      <Link
        href={getLocalizedHref('en', route)}
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
        href={getLocalizedHref('ko', route)}
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
