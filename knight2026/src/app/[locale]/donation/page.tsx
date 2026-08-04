'use client'

import { useEffect } from 'react'
import Footer from '@/components/layout/Footer'
import SectionDonation from '@/components/donation/SectionDonation'
import SectionDonationSupport from '@/components/donation/SectionDonationSupport'

export default function DonationPage() {
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
    <main className="donation-page">
      <SectionDonation />
      <SectionDonationSupport />
      <Footer />
    </main>
  )
}
