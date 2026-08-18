import Image from 'next/image'
import { MapPin, HandshakeIcon, Clock3, BadgeCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { siteConfig } from '@/lib/site-config'

const reasons = [
  {
    icon: BadgeCheck,
    title: 'Skilled across both trades',
    copy: 'Plumbing and electrical expertise under one roof means fewer contractors and joined-up solutions.',
  },
  {
    icon: HandshakeIcon,
    title: 'Honest, upfront pricing',
    copy: 'Clear quotes before we start &mdash; no surprise costs once the work is done.',
  },
  {
    icon: MapPin,
    title: 'Genuinely local',
    copy: 'Based in Tlhabane and serving the greater Rustenburg community we know well.',
  },
  {
    icon: Clock3,
    title: 'Reliable & responsive',
    copy: 'We show up when we say we will and keep you updated throughout the job.',
  },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-secondary py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="relative order-last lg:order-first">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border shadow-lg">
            <Image
              src="/images/about.png"
              alt="The Super Plumbing and Electrical Services team with their service van"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -right-4 -top-4 hidden rounded-xl border border-border bg-background p-5 shadow-lg sm:block">
            <p className="font-display text-3xl font-extrabold text-electric">Local</p>
            <p className="text-xs text-muted-foreground">
              Serving Tlhabane<br />&amp; Rustenburg
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric">
              Why choose us
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              A local name you can rely on for the essentials
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground md:text-lg">
              {siteConfig.name} combines practical craftsmanship with straightforward service.
              Whether it&apos;s a plumbing emergency or an electrical upgrade, we treat your
              home or business with care and get the job done properly.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal
                key={r.title}
                delay={i * 80}
                className="rounded-xl border border-border bg-card p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric/10">
                  <r.icon className="h-5 w-5 text-electric" strokeWidth={2.25} />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-foreground">
                  {r.title}
                </h3>
                <p
                  className="mt-1.5 text-sm leading-relaxed text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: r.copy }}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
