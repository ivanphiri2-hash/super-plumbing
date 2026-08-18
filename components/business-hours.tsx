'use client'

import { useEffect, useMemo, useState } from 'react'
import { Clock, Pencil, Check, X, Phone, MapPin } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { Reveal } from '@/components/reveal'

type DayHours = { open: boolean; from: string; to: string }

const DAY_LABELS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const STORAGE_KEY = 'spe-business-hours-v1'

// Sensible starting point the OWNER can edit — not presented as confirmed trading hours.
const defaultHours: DayHours[] = DAY_LABELS.map((_, i) => ({
  open: false,
  from: '07:30',
  to: '17:00',
}))

function formatTime(t: string) {
  const [h, m] = t.split(':').map(Number)
  const period = h >= 12 ? 'PM' : 'AM'
  const hour = h % 12 === 0 ? 12 : h % 12
  return `${hour}:${String(m).padStart(2, '0')} ${period}`
}

export function BusinessHours() {
  const [hours, setHours] = useState<DayHours[]>(defaultHours)
  const [draft, setDraft] = useState<DayHours[]>(defaultHours)
  const [editing, setEditing] = useState(false)
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw) as DayHours[]
        if (Array.isArray(parsed) && parsed.length === 7) {
          setHours(parsed)
          setDraft(parsed)
        }
      }
    } catch {
      // ignore corrupt storage
    }
  }, [])

  const anySet = useMemo(() => hours.some((d) => d.open), [hours])

  // JS getDay(): 0=Sun..6=Sat -> map to our Mon-first index
  const todayIndex = now ? (now.getDay() + 6) % 7 : null

  const openNow = useMemo(() => {
    if (!now || todayIndex === null) return false
    const day = hours[todayIndex]
    if (!day?.open) return false
    const cur = now.getHours() * 60 + now.getMinutes()
    const [fh, fm] = day.from.split(':').map(Number)
    const [th, tm] = day.to.split(':').map(Number)
    return cur >= fh * 60 + fm && cur <= th * 60 + tm
  }, [now, todayIndex, hours])

  function startEdit() {
    setDraft(hours.map((d) => ({ ...d })))
    setEditing(true)
  }

  function save() {
    setHours(draft)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(draft))
    } catch {
      // ignore
    }
    setEditing(false)
  }

  function updateDraft(i: number, patch: Partial<DayHours>) {
    setDraft((prev) => prev.map((d, idx) => (idx === i ? { ...d, ...patch } : d)))
  }

  return (
    <section id="hours" className="scroll-mt-20 bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 lg:grid-cols-[1fr_1.15fr] lg:gap-16 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric">
            Business hours
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            When we&apos;re available
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground md:text-lg">
            Hours can change, so we keep them here where they&apos;re easy to update. If we&apos;re
            closed when you need us, leave a message or call and we&apos;ll get back to you.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              {siteConfig.phoneDisplay}
            </a>
            <p className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-water" />
              {siteConfig.address.line1}, {siteConfig.address.line2}
            </p>
          </div>
        </Reveal>

        <Reveal className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric/10">
                <Clock className="h-5 w-5 text-electric" strokeWidth={2.25} />
              </span>
              <div>
                <p className="font-display font-bold text-foreground">Opening times</p>
                {now && anySet ? (
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
                      openNow ? 'text-electric' : 'text-muted-foreground'
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${openNow ? 'bg-electric' : 'bg-muted-foreground/50'}`}
                    />
                    {openNow ? 'Open now' : 'Closed now'}
                  </span>
                ) : (
                  <span className="text-xs text-muted-foreground">By appointment &mdash; call to confirm</span>
                )}
              </div>
            </div>

            {!editing ? (
              <button
                type="button"
                onClick={startEdit}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
              >
                <Pencil className="h-3.5 w-3.5" />
                Edit
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setEditing(false)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:bg-muted"
                >
                  <X className="h-3.5 w-3.5" />
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={save}
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground"
                >
                  <Check className="h-3.5 w-3.5" />
                  Save
                </button>
              </div>
            )}
          </div>

          <ul className="mt-6 divide-y divide-border">
            {DAY_LABELS.map((label, i) => {
              const day = editing ? draft[i] : hours[i]
              const isToday = !editing && todayIndex === i
              return (
                <li
                  key={label}
                  className={`flex items-center justify-between gap-3 py-3 ${
                    isToday ? 'rounded-lg bg-secondary px-3' : ''
                  }`}
                >
                  <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                    {label}
                    {isToday && (
                      <span className="rounded-full bg-electric/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-electric">
                        Today
                      </span>
                    )}
                  </span>

                  {editing ? (
                    <div className="flex items-center gap-2">
                      <label className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <input
                          type="checkbox"
                          checked={day.open}
                          onChange={(e) => updateDraft(i, { open: e.target.checked })}
                          className="h-4 w-4 accent-[var(--electric)]"
                        />
                        Open
                      </label>
                      <input
                        type="time"
                        value={day.from}
                        disabled={!day.open}
                        onChange={(e) => updateDraft(i, { from: e.target.value })}
                        className="rounded-md border border-border bg-background px-2 py-1 text-xs disabled:opacity-40"
                        aria-label={`${label} opening time`}
                      />
                      <span className="text-xs text-muted-foreground">&ndash;</span>
                      <input
                        type="time"
                        value={day.to}
                        disabled={!day.open}
                        onChange={(e) => updateDraft(i, { to: e.target.value })}
                        className="rounded-md border border-border bg-background px-2 py-1 text-xs disabled:opacity-40"
                        aria-label={`${label} closing time`}
                      />
                    </div>
                  ) : (
                    <span
                      className={`text-sm ${day.open ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}
                    >
                      {day.open ? `${formatTime(day.from)} – ${formatTime(day.to)}` : 'Closed'}
                    </span>
                  )}
                </li>
              )
            })}
          </ul>

          {editing && (
            <p className="mt-4 text-xs text-muted-foreground">
              Changes are saved to this browser so the owner can keep hours current. Toggle
              &ldquo;Open&rdquo; for each day and set the times, then press Save.
            </p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
