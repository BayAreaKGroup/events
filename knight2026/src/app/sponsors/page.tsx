import Footer from '@/components/layout/Footer'
import SectionSponsor from '@/components/sponsors/SectionSponsor'
import type { Locale } from '@/content/siteContent'

export default function SponsorsPage({ locale = 'en' }: { locale?: Locale } = {}) {
  return (
    <main className="sponsors-page">
      <SectionSponsor locale={locale} />
      <Footer />
    </main>
  )
}
