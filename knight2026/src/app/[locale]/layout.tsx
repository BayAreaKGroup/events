import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { homeCopy, type Locale } from '@/content/siteContent'

const locales = ['en', 'ko'] as const

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const description = homeCopy[locale].overview.description

  return {
    title: 'K-Night 2026 | Bay Area K-Group',
    description,
    openGraph: {
      title: 'K-Night 2026 | Bay Area K-Group',
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title: 'K-Night 2026 | Bay Area K-Group',
      description,
    },
  }
}

export default function LocaleLayout({ children }: { children: ReactNode }) {
  return children
}
