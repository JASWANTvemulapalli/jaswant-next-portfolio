import { Film, Clapperboard, Star, Popcorn, Ticket, Github, Linkedin, Mail, Download } from 'lucide-react'
import Image from 'next/image'
import { Section, MCard } from '@/components/UI'
import ProjectCard from '@/components/ProjectCard'
import { FULL_NAME, TAGLINE, EMAIL, LINKEDIN, GITHUB, RESUME_URL, projects, skills, experience, education } from '@/lib/data'

export default function HomePage() {
  return (
    <main>
      {/* NOW PLAYING */}
      <Section id="now-playing" title="Now Playing" icon={<Film className="h-7 w-7 text-accent-gold" />}>
        <MCard>
          <div className="grid items-center gap-8 md:grid-cols-5">
            <div className="md:col-span-3 space-y-4">
              <h1 className="text-4xl font-[var(--font-title)] tracking-tight">{FULL_NAME}</h1>
              <p className="text-lg opacity-90">{TAGLINE}</p>
              <p className="opacity-80">
                Movie buff turned builder — I craft high‑performance backends and practical AI that make products ship faster.
                Think IMDb vibes, but for shipping production‑ready software.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href={LINKEDIN} target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm hover:text-accent-teal"><Linkedin className="h-4 w-4" /> LinkedIn</a>
                <a href={GITHUB} target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm hover:text-accent-teal"><Github className="h-4 w-4" /> GitHub</a>
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm hover:text-accent-teal"><Mail className="h-4 w-4" /> Email</a>
                <a href={RESUME_URL} target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm hover:text-accent-gold"><Download className="h-4 w-4" /> Resume</a>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="rounded-xl border border-white/15 p-4 text-sm bg-white/5">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Critics’ Score</span>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-4 w-4 fill-current text-accent-gold" />))}
                  </div>
                </div>
                <ul className="mt-3 space-y-2 opacity-90 list-disc pl-5">
                  <li>ML Segmentation: Ventricles + Midline (clinical metrology)</li>
                  <li>20+ production APIs (Java/Spring Boot, gRPC)</li>
                  <li>Workflow automation with Cadence</li>
                </ul>
                <div className="mt-4 flex items-center gap-2 text-xs opacity-70">
                  <Clapperboard className="h-4 w-4" />
                  <span>Currently screening at Longeviti Neuro Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </MCard>
      </Section>

      {/* CAST / SKILLS */}
      <Section id="skills" title="Cast" icon={<Clapperboard className="h-7 w-7 text-accent-gold" />}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {skills.map(s => (
            <MCard key={s.label}>
              <div className="mb-3 text-sm uppercase text-white/70">{s.label}</div>
              <div className="flex flex-wrap gap-2">
                {s.items.map((it: string) => (<span key={it} className="rounded-full border border-white/20 px-3 py-1 text-xs">{it}</span>))}
              </div>
            </MCard>
          ))}
        </div>
      </Section>

      {/* PROJECTS as Feature Films */}
      <Section id="projects" title="Feature Films" icon={<Ticket className="h-7 w-7 text-accent-gold" />}>
        <div className="grid gap-6">
          {projects.map(p => (<ProjectCard key={p.title} p={p} />))}
        </div>
      </Section>

      {/* EXPERIENCE / CREDITS */}
      <Section id="experience" title="Credits" icon={<Popcorn className="h-7 w-7 text-accent-gold" />}>
        <div className="grid gap-6 md:grid-cols-2">
          {experience.map(e => (
            <MCard key={e.studio}>
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xl font-semibold">{e.role}</div>
                  <div className="opacity-80">{e.studio} · {e.location}</div>
                </div>
                <div className="opacity-70">{e.dates}</div>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 opacity-90">
                {e.bullets.map((b: string, i: number) => (<li key={i}>{b}</li>))}
              </ul>
            </MCard>
          ))}
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" title="Education" icon={<Star className="h-7 w-7 text-accent-gold" />}>
        <div className="grid gap-6 md:grid-cols-2">
          {education.map(ed => (
            <MCard key={ed.school}>
              <h3 className="text-lg font-semibold">{ed.school}</h3>
              <div className="opacity-80">{ed.degree}</div>
              <div className="opacity-70 text-sm">{ed.dates} · GPA {ed.gpa}</div>
            </MCard>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact" icon={<Mail className="h-7 w-7 text-accent-gold" />}>
        <MCard>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-xl font-semibold">Let’s collaborate</div>
              <div className="opacity-80">I’m open to AI/ML and backend‑leaning software roles.</div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm"><Mail className="h-4 w-4" /> {EMAIL}</a>
              <a href={RESUME_URL} target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm"><Download className="h-4 w-4" /> Download Resume</a>
              <a href={LINKEDIN} target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            </div>
          </div>
        </MCard>
      </Section>
    </main>
  )
}
