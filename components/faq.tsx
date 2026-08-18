'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const faqs = [
  {
    q: 'Do you handle both plumbing and electrical jobs?',
    a: 'Yes. We cover both trades, so you can arrange plumbing repairs, electrical work, or a combination of the two through a single local team.',
  },
  {
    q: 'Which areas do you service?',
    a: 'We are based in Tlhabane and serve the greater Rustenburg area, including surrounding suburbs and communities nearby.',
  },
  {
    q: 'Do you provide quotes before starting work?',
    a: 'Absolutely. We assess the job and give you a clear, upfront quote so you know the cost before any work begins.',
  },
  {
    q: 'What types of properties do you work on?',
    a: 'We work on both residential and commercial properties &mdash; from homes and rentals to small businesses.',
  },
  {
    q: 'How do I get in touch quickly?',
    a: 'The fastest way is to call us directly. You can also send us a message using the contact form and we will get back to you.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric">FAQ</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Questions, answered
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal
                key={item.q}
                delay={i * 60}
                className="overflow-hidden rounded-xl border border-border bg-card"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold text-foreground">
                    {item.q}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-electric/10 text-electric">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground"
                      dangerouslySetInnerHTML={{ __html: item.a }}
                    />
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
