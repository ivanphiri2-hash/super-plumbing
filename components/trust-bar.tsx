import { CheckCircle2 } from 'lucide-react'

const points = [
  'Qualified & experienced',
  'Upfront, honest pricing',
  'Residential & commercial',
  'Local Tlhabane team',
]

export function TrustBar() {
  return (
    <div className="border-b border-border bg-secondary">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-4 lg:px-8">
        {points.map((p) => (
          <span key={p} className="flex items-center gap-2 text-sm font-medium text-secondary-foreground">
            <CheckCircle2 className="h-4 w-4 text-electric" strokeWidth={2.5} />
            {p}
          </span>
        ))}
      </div>
    </div>
  )
}
