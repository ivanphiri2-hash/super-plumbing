'use client'

import { useState, type FormEvent } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, ChevronDown } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { Reveal } from '@/components/reveal'

export function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: 'Plumbing',
    message: '',
  })

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const text = `Hi ${siteConfig.shortName}, I'm ${form.name || 'a customer'} (${form.phone || 'no number given'}). I need help with: ${form.service}. ${form.message}`
    const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-charcoal py-20 text-charcoal-foreground md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-water">
              Get in touch
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              Request a quote or book a visit
            </h2>
            <p className="mt-4 text-pretty text-white/65 md:text-lg">
              Tell us what you need and the best way to reach you. We&apos;ll get back to you as
              soon as we can.
            </p>

            <div className="mt-8 space-y-3">
              <ContactRow
                icon={Phone}
                label="Call us"
                value={siteConfig.phoneDisplay}
                href={`tel:${siteConfig.phoneRaw}`}
              />
              <ContactRow
                icon={MessageCircle}
                label="WhatsApp"
                value={siteConfig.phoneDisplay}
                href={`https://wa.me/${siteConfig.whatsapp}`}
              />
              <ContactRow
                icon={Mail}
                label="Email"
                value={siteConfig.email}
                href={`mailto:${siteConfig.email}`}
              />
              <ContactRow
                icon={MapPin}
                label="Visit"
                value={`${siteConfig.address.line1}, ${siteConfig.address.line2}`}
                href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.mapQuery)}`}
              />
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Map showing Super Plumbing and Electrical Services location"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.mapQuery)}&output=embed`}
                className="h-56 w-full grayscale-[0.2]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal
            delay={100}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
          >
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-electric/15">
                  <CheckCircle2 className="h-7 w-7 text-electric" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-white">
                  Almost there!
                </h3>
                <p className="mt-2 max-w-sm text-sm text-white/65">
                  We&apos;ve opened WhatsApp with your details. If it didn&apos;t open, just call us
                  on {siteConfig.phoneDisplay} and we&apos;ll help right away.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Field label="Your name">
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Thabo Mokoena"
                    className="w-full rounded-lg border border-white/15 bg-charcoal/60 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/40"
                  />
                </Field>
                <Field label="Phone number">
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="e.g. 082 000 0000"
                    className="w-full rounded-lg border border-white/15 bg-charcoal/60 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/40"
                  />
                </Field>
                <Field label="What do you need?">
                  <div className="relative">
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full appearance-none rounded-lg border border-white/15 bg-charcoal/60 px-4 py-3 text-sm text-white focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/40"
                    >
                      <option>Plumbing</option>
                      <option>Electrical</option>
                      <option>Both plumbing &amp; electrical</option>
                      <option>Not sure &mdash; need advice</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
                  </div>
                </Field>
                <Field label="Details">
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    placeholder="Briefly describe the problem or job…"
                    className="w-full resize-none rounded-lg border border-white/15 bg-charcoal/60 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/40"
                  />
                </Field>
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-electric px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  Send via WhatsApp
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                <p className="text-center text-xs text-white/45">
                  Prefer to talk? Call {siteConfig.phoneDisplay}
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone
  label: string
  value: string
  href: string
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:bg-white/[0.06]"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric/15">
        <Icon className="h-5 w-5 text-water" strokeWidth={2.25} />
      </span>
      <span className="min-w-0">
        <span className="block text-xs uppercase tracking-wide text-white/45">{label}</span>
        <span className="block truncate text-sm font-semibold text-white">{value}</span>
      </span>
    </a>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-white/80">{label}</span>
      {children}
    </label>
  )
}
