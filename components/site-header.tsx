'use client'

import { useEffect, useState } from 'react'
import { Menu, Phone, X, Droplets, Zap } from 'lucide-react'
import { navLinks, siteConfig } from '@/lib/site-config'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Over the dark hero (not scrolled) use light text; once scrolled onto the
  // light background switch to the dark foreground colour.
  const onDark = !scrolled && !open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-border/80 bg-background/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 md:h-20 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label={`${siteConfig.name} home`}>
          <span
            className={`relative flex h-9 w-9 items-center justify-center rounded-lg ${
              onDark ? 'bg-white/10' : 'bg-charcoal'
            }`}
          >
            <Droplets className="absolute h-4 w-4 -translate-x-1 translate-y-0.5 text-water" strokeWidth={2.5} />
            <Zap className="absolute h-4 w-4 translate-x-1.5 -translate-y-0.5 text-electric" strokeWidth={2.5} />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={`font-display text-sm font-extrabold tracking-tight ${
                onDark ? 'text-white' : 'text-foreground'
              }`}
            >
              SUPER
            </span>
            <span
              className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${
                onDark ? 'text-white/60' : 'text-muted-foreground'
              }`}
            >
              Plumbing &amp; Electrical
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                onDark
                  ? 'text-white/75 hover:text-white'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-[1.03] sm:flex"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            {siteConfig.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-md border lg:hidden ${
              onDark ? 'border-white/20 text-white' : 'border-border text-foreground'
            }`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-foreground/90 transition-colors hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              Call {siteConfig.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
