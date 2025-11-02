import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Orthon.AI - Autonomous Compliance & Audit Platform',
  description: 'Transform your compliance and audit processes with AI-powered automation. Orthon.AI delivers intelligent, continuous monitoring and automated compliance reporting.',
  keywords: ['compliance', 'audit', 'AI', 'automation', 'regulatory', 'risk management'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

