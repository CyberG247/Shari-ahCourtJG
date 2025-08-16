import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import GlobalLoading from '@/components/loading'
import AIChatbot from '@/components/ai-chatbot'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shari\'ah Court of Appeal - Jigawa State',
  description: 'Official website of the Shari\'ah Court of Appeal, Jigawa State, Nigeria',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <GlobalLoading />
        <div className="page-transition">
          {children}
        </div>
        <AIChatbot />
      </body>
    </html>
  )
}
