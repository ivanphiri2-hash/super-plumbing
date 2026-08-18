import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const projects = [
  {
    image: '/images/project-geyser.png',
    alt: 'Newly installed geyser with neat copper pipe connections',
    tag: 'Plumbing',
    title: 'Geyser installation',
    accent: 'text-water',
  },
  {
    image: '/images/project-panel.png',
    alt: 'Freshly wired electrical distribution board',
    tag: 'Electrical',
    title: 'Distribution board upgrade',
    accent: 'text-electric',
  },
  {
    image: '/images/project-bathroom.png',
    alt: 'Modern bathroom with new taps and fittings',
    tag: 'Plumbing',
    title: 'Bathroom fixture refit',
    accent: 'text-water',
  },
]

export function Work() {
  return (
    <section id="work" className="scroll-mt-20 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric">
              Recent work
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              A snapshot of the jobs we do
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            From quick repairs to full installations, here&apos;s a look at the kind of quality
            workmanship you can expect.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 90}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border"
            >
              <Image
                src={p.image || '/placeholder.svg'}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className={`text-xs font-semibold uppercase tracking-[0.15em] ${p.accent}`}>
                  {p.tag}
                </span>
                <h3 className="mt-1 font-display text-xl font-bold text-white">{p.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
