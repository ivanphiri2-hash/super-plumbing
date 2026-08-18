import { PhoneCall, ClipboardList, Hammer, ThumbsUp } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const steps = [
  {
    icon: PhoneCall,
    title: 'Get in touch',
    copy: 'Call or send us the details of your plumbing or electrical problem and where you are.',
  },
  {
    icon: ClipboardList,
    title: 'Assessment & quote',
    copy: 'We assess the work needed and give you a clear, upfront quote before anything begins.',
  },
  {
    icon: Hammer,
    title: 'We do the work',
    copy: 'Our team completes the job cleanly and correctly, keeping you informed along the way.',
  },
  {
    icon: ThumbsUp,
    title: 'Sorted & satisfied',
    copy: 'You get reliable results that last &mdash; and a local team to call next time.',
  },
]

export function Process() {
  return (
    <section
      id="process"
      className="relative scroll-mt-20 overflow-hidden bg-charcoal py-20 text-charcoal-foreground md:py-28"
    >
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
      <div
        className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-electric/15 blur-[120px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-water">
            How it works
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Simple, transparent, done right
          </h2>
          <p className="mt-4 text-pretty text-white/65 md:text-lg">
            A straightforward process from first call to finished job &mdash; no runaround.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              delay={i * 90}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <span className="font-display text-5xl font-extrabold text-white/10">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-xl bg-electric/15">
                <step.icon className="h-5 w-5 text-water" strokeWidth={2.25} />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-white">{step.title}</h3>
              <p
                className="mt-2 text-sm leading-relaxed text-white/60"
                dangerouslySetInnerHTML={{ __html: step.copy }}
              />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
