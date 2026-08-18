import { Star, Quote } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const testimonials = [
  {
    quote:
      'Quick to respond and sorted out our geyser the same day. Clean work and a fair price. Highly recommend for anyone in Tlhabane.',
    name: 'Thabo M.',
    location: 'Tlhabane',
  },
  {
    quote:
      'Had them rewire our distribution board and install new plugs. Professional, tidy and explained everything clearly.',
    name: 'Lerato K.',
    location: 'Rustenburg',
  },
  {
    quote:
      'Great to have one team for both plumbing and electrical. Reliable, friendly and the workmanship is solid.',
    name: 'Johan V.',
    location: 'Geelhout Park',
  },
]

export function Testimonials() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-electric text-electric" />
            ))}
          </div>
          <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Trusted by neighbours across Rustenburg
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 90}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
            >
              <Quote className="h-8 w-8 text-electric/25" />
              <p className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-display font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.location}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
