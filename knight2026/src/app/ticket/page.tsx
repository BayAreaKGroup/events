'use client'

import { useEffect } from 'react'
import Footer from '@/components/layout/Footer'
import SectionTicket from '@/components/ticket/SectionTicket'
import SectionTicketHeader from '@/components/ticket/SectionTicketHeader'
import type { Locale } from '@/content/siteContent'

export default function TicketPage({ locale = 'en' }: { locale?: Locale } = {}) {
  useEffect(() => {
    const scrollToHash = () => {
      const { hash } = window.location
      if (!hash) return
      const id = hash.replace(/^#/, '')
      const target = document.getElementById(id)
      if (!target) return

      requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }

    scrollToHash()
    window.addEventListener('hashchange', scrollToHash)
    return () => window.removeEventListener('hashchange', scrollToHash)
  }, [])

  return (
    <main className="ticket-page">
      <SectionTicketHeader locale={locale} />
      <SectionTicket locale={locale} />
      <Footer />
    </main>
  )
}
