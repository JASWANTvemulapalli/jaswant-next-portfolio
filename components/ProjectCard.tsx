'use client'
import Image from 'next/image'
import { ExternalLink, Film, Ticket } from 'lucide-react'
import { MCard } from './UI'

export default function ProjectCard({ p }: any) {
  return (
    <MCard className="overflow-hidden">
      <div className="grid md:grid-cols-5 gap-6">
        <div className="md:col-span-2 relative">
          <Image
            src={p.gif || p.poster}
            alt={p.title}
            width={600} height={400}
            className="w-full h-auto rounded-lg shadow-poster"
            unoptimized
          />
        </div>
        <div className="md:col-span-3">
          <div className="flex items-center gap-2">
            <Film className="h-5 w-5 text-accent-gold" />
            <h3 className="text-xl font-semibold">{p.title}</h3>
          </div>
          <p className="text-white/80 mt-1">{p.tagline}</p>
          <p className="mt-3 text-white/80">{p.desc}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tech.map((t: string) => (
              <span key={t} className="rounded-full border border-white/20 px-3 py-1 text-xs">{t}</span>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {p.links.map((l: any) => (
              <a key={l.href} href={l.href} target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-3 py-1 text-sm hover:text-accent-teal">
                <ExternalLink className="h-4 w-4" /> {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </MCard>
  )
}
