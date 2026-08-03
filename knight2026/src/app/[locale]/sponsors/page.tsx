import SponsorsPage from '@/app/sponsors/page'
import type { Locale } from '@/content/siteContent'

export default async function LocaleSponsorsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  return <SponsorsPage locale={locale} />
}
