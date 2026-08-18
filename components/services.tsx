import Image from 'next/image'
import {
  Droplets,
  Zap,
  Wrench,
  Waves,
  Flame,
  ShowerHead,
  Plug,
  LayoutPanelTop,
  Lightbulb,
  Gauge,
  ArrowUpRight,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const plumbing = [
  { icon: Flame, label: 'Geyser installation & repair' },
  { icon: Waves, label: 'Leak detection & repairs' },
  { icon: ShowerHead, label: 'Taps, toilets & fittings' },
  { icon: Wrench, label: 'Blocked drains & pipes' },
]

const electrical = [
  { icon: LayoutPanelTop, label: 'Distribution boards' },
  { icon: Plug, label: 'Plugs, sockets & wiring' },
  { icon: Lightbulb, label: 'Lighting installation' },
  { icon: Gauge, label: 'Fault finding & repairs' },
]

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric">
            What we do
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Two disciplines, one dependable team
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground md:text-lg">
            From a dripping tap to a full distribution board rewire, we handle the plumbing and
            electrical work most households and businesses need &mdash; without juggling two
            separate contractors.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <ServiceCard
            variant="water"
            eyebrow="Plumbing"
            icon={Droplets}
            title="Reliable plumbing you can count on"
            copy="Installations, repairs and maintenance done cleanly and correctly the first time."
            image="/images/plumbing.png"
            imageAlt="Plumber fitting water pipes under a sink"
            items={plumbing}
          />
          <ServiceCard
            variant="electric"
            eyebrow="Electrical"
            icon={Zap}
            title="Safe, compliant electrical work"
            copy="Wiring, boards, lighting and fault-finding carried out with safety front of mind."
            image="/images/electrical.png"
            imageAlt="Electrician wiring a modern distribution board"
            items={electrical}
          />
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  variant,
  eyebrow,
  icon: Icon,
  title,
  copy,
  image,
  imageAlt,
  items,
}: {
  variant: 'water' | 'electric'
  eyebrow: string
  icon: typeof Droplets
  title: string
  copy: string
  image: string
  imageAlt: string
  items: { icon: typeof Droplets; label: string }[]
}) {
  const accent = variant === 'water' ? 'text-water' : 'text-electric'
  const chipBg = variant === 'water' ? 'bg-water/10' : 'bg-electric/10'
  return (
    <Reveal className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={image || '/placeholder.svg'}
          alt={imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold text-foreground backdrop-blur">
          <Icon className={`h-4 w-4 ${accent}`} strokeWidth={2.5} />
          {eyebrow}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <h3 className="font-display text-xl font-bold tracking-tight text-foreground md:text-2xl">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-3 rounded-lg border border-border/70 bg-secondary/50 px-3 py-2.5"
            >
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${chipBg}`}>
                <item.icon className={`h-4 w-4 ${accent}`} strokeWidth={2.5} />
              </span>
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-electric"
        >
          Book this service
          <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
        </a>
      </div>
    </Reveal>
  )
}
