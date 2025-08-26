import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Starfield from '@/components/Starfield'
import { titleFont, bodyFont } from '@/components/fonts'

export const metadata: Metadata = {
  title: 'Jaswant — Movie Portfolio',
  description: 'One-page movie-themed portfolio with anchors, icons, posters and subtle animations.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${titleFont.variable} ${bodyFont.variable} dark`}>
      <body className="bg-cinema-bg text-white font-[var(--font-body)]">
        <Starfield />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
