import TicketPage from '@/app/ticket/page'
import type { Locale } from '@/content/siteContent'

export default async function LocaleTicketPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  return <TicketPage locale={locale} />
}
