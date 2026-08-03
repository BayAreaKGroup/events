import HomePage from '@/app/page'
import type { Locale } from '@/content/siteContent'

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  return <HomePage locale={locale} />
}
