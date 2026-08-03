import DonationPage from '@/app/donation/page'
import type { Locale } from '@/content/siteContent'

export default async function LocaleDonationPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  return <DonationPage locale={locale} />
}
