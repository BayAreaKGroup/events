import type { ReactNode } from 'react'
import ogImage from '@/assets/metadata/og-img.jpg'
import Header from '@/components/layout/Header'
import './globals.css'

const ogImageUrl = ogImage.src

export const metadata = {
  metadataBase: new URL('https://bayareakgroup.github.io'),
  title: 'K-Night 2026 | Bay Area K-Group',
  description: 'Bay Area K-Group’s annual networking event.',
  openGraph: {
    title: 'K-Night 2026 | Bay Area K-Group',
    description: 'Bay Area K-Group’s annual networking event.',
    type: 'website',
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'K-Night 2026 — Beyond Tech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'K-Night 2026 | Bay Area K-Group',
    description: 'Bay Area K-Group’s annual networking event.',
    images: [ogImageUrl],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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
