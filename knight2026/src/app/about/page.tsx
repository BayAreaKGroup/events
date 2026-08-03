'use client'

import { useEffect } from 'react'
import Footer from '@/components/layout/Footer'
import SectionAboutHeader from '@/components/about/SectionAboutHeader'
import SectionTeam from '@/components/about/SectionTeam'
import SectionNetwork from '@/components/home/SectionNetwork'
import type { Locale } from '@/content/siteContent'

export default function AboutPage({ locale = 'en' }: { locale?: Locale } = {}) {
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
    <main className="about-page">
      <SectionAboutHeader locale={locale} />
      <SectionTeam locale={locale} />
      <SectionNetwork locale={locale} />
      <Footer />
    </main>
  )
}
