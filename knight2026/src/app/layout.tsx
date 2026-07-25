import type { ReactNode } from 'react'
import Header from '@/components/layout/Header'
import './globals.css'

export const metadata = {
  title: 'K-Night 2026',
  description:
    'K-Night 2026 — Bay Area K-Group 연례 테크 이벤트. Sep 12, Computer History Museum, Mountain View.',
  openGraph: {
    title: 'K-Night 2026',
    description:
      'Bay Area K-Group 연례 테크 이벤트. Sep 12, 2026 · Computer History Museum, Mountain View, CA',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'K-Night 2026',
    description:
      'Bay Area K-Group 연례 테크 이벤트. Sep 12, 2026 · Computer History Museum, Mountain View, CA',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Stack+Sans+Notch:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="flex min-h-dvh flex-col bg-surface text-text">
          <Header />
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  )
}
