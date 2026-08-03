import AboutPage from '@/app/about/page'
import type { Locale } from '@/content/siteContent'

export default async function LocaleAboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  return <AboutPage locale={locale} />
}
