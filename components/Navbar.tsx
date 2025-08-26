'use client'
import { Clapperboard, Popcorn } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [dark, setDark] = useState(true)
  useEffect(() => { document.documentElement.classList.toggle('dark', dark) }, [dark])

  const link = 'hover:text-accent-gold transition-colors'
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white">
          <Clapperboard className="h-6 w-6 text-accent-gold" />
          <span className="font-semibold">Jaswant</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-white/80">
          <a className={link} href="#now-playing">Now Playing</a>
          <a className={link} href="#skills">Cast</a>
          <a className={link} href="#projects">Feature Films</a>
          <a className={link} href="#experience">Credits</a>
          <a className={link} href="#contact">Contact</a>
        </nav>
        <button onClick={() => setDark(!dark)} className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/90">
          {dark ? 'Lights On' : 'Lights Off'} <Popcorn className="inline h-4 w-4 ml-1" />
        </button>
      </div>
    </header>
  )
}
