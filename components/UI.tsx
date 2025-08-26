'use client'
import { motion } from 'framer-motion'
import React from 'react'

export function Section({ id, title, icon, children }: any) {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex items-center gap-3">
          {icon}
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  )
}

export function Panel({ children, className='' }: any) {
  return <div className={`panel shadow-poster ${className}`}>{children}</div>
}

export const fadeUp = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.4 }
}

export function MCard({ children, className='' }: any) {
  return (
    <motion.div {...fadeUp} className={`panel p-6 ${className}`}>
      {children}
    </motion.div>
  )
}
