import Image from 'next/image'
import { ArrowRight, Phone, Droplets, Zap, MapPin, ShieldCheck } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-charcoal text-charcoal-foreground">
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div
        className="absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-electric/20 blur-[120px]"
        aria-hidden
      />
      <div
        className="absolute -bottom-40 left-0 h-[28rem] w-[28rem] rounded-full bg-water/15 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-28 md:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8 lg:pb-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80">
            <MapPin className="h-3.5 w-3.5 text-water" />
            Tlhabane &middot; Rustenburg &amp; surrounds
          </div>

          <h1 className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Professional Plumbing{' '}
            <span className="text-water">&</span>{' '}
            <span className="text-electric">Electrical</span> Solutions
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/70 md:text-lg">
            Super Plumbing &amp; Electrical Services delivers practical, dependable workmanship
            for homes and businesses across Tlhabane and greater Rustenburg. Two trades, one
            trusted local team.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-electric px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              {siteConfig.phoneDisplay}
            </a>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6">
            {[
              { icon: Droplets, label: 'Plumbing', value: 'Installs & repairs' },
              { icon: Zap, label: 'Electrical', value: 'Wiring & boards' },
              { icon: ShieldCheck, label: 'Local', value: 'Trusted service' },
            ].map((item) => (
              <div key={item.label}>
                <item.icon className="h-5 w-5 text-water" strokeWidth={2} />
                <dt className="mt-2 text-sm font-semibold text-white">{item.label}</dt>
                <dd className="text-xs text-white/55">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl sm:aspect-[5/5]">
            <Image
              src="/images/hero.png"
              alt="Super Plumbing and Electrical technician working on pipes and an electrical panel"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
          </div>

          <div className="absolute -left-4 bottom-6 hidden rounded-xl border border-white/10 bg-charcoal/90 p-4 backdrop-blur sm:block">
            <p className="font-display text-2xl font-extrabold text-white">2-in-1</p>
            <p className="text-xs text-white/60">Plumbing &amp; electrical,<br />one call away</p>
          </div>
        </div>
      </div>
    </section>
  )
}
