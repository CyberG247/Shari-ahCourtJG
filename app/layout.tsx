import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import CourtHeader from '@/components/layout/court-header'
import CourtFooter from '@/components/layout/court-footer'
import AdalatAI from '@/components/ai/adalat-ai'
import { AccessibilityProvider } from '@/components/accessibility/accessibility-provider'
import { QueryProvider } from '@/components/providers/query-provider'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: "Shari'ah Court of Appeal - Jigawa State, Nigeria",
  description: "Official digital judiciary portal of the Shari'ah Court of Appeal, Jigawa State. E-Filing, Cause Lists, Mirath Estate Calculator, and Public Law Archives.",
  generator: 'Next.js',
  icons: {
    icon: '/Court-logo.png',
    apple: '/Court-logo.png',
  },
  keywords: [

    "Shari'ah Court of Appeal",
    "Jigawa State Judiciary",
    "Grand Kadi Jigawa",
    "Islamic Law Nigeria",
    "E-Filing Jigawa",
    "Mirath Calculator",
    "Dutse Sharia Court"
  ],
  authors: [{ name: "Jigawa State Judiciary" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth font-scale-base">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className="min-h-screen flex flex-col bg-white text-court-slate-900 antialiased selection:bg-court-gold-400 selection:text-court-green-950">
        <QueryProvider>
          <AccessibilityProvider>
            <CourtHeader />
            <main className="flex-1 w-full page-transition">
              {children}
            </main>
            <CourtFooter />
            <AdalatAI />
          </AccessibilityProvider>
        </QueryProvider>
      </body>
    </html>
  )
}

