import { Droplets, Zap, Phone, Mail, MapPin } from 'lucide-react'
import { navLinks, siteConfig } from '@/lib/site-config'

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-charcoal text-charcoal-foreground">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                <Droplets className="absolute h-4 w-4 -translate-x-1 translate-y-0.5 text-water" strokeWidth={2.5} />
                <Zap className="absolute h-4 w-4 translate-x-1.5 -translate-y-0.5 text-electric" strokeWidth={2.5} />
              </span>
              <span className="font-display text-sm font-extrabold tracking-tight text-white">
                SUPER PLUMBING &amp; ELECTRICAL
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              Practical, dependable plumbing and electrical services for homes and businesses in
              Tlhabane and greater Rustenburg.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/55 transition-colors hover:text-water"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">
              Service areas
            </h3>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.serviceAreas.map((area) => (
                <li key={area} className="text-sm text-white/55">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center gap-2.5 text-sm text-white/55 transition-colors hover:text-water"
                >
                  <Phone className="h-4 w-4 text-water" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2.5 text-sm text-white/55 transition-colors hover:text-water"
                >
                  <Mail className="h-4 w-4 text-water" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/55">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-water" />
                <span>
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}, {siteConfig.address.country}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Tlhabane &middot; Rustenburg &middot; North West, South Africa</p>
        </div>
      </div>
    </footer>
  )
}
