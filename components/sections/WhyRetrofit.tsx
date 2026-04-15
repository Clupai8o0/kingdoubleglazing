import { Hammer, PaintBucket, Layers, Zap, Thermometer, Volume2, type LucideIcon } from 'lucide-react'

interface WhyRetrofitItem {
  icon: LucideIcon
  headline: string
  sub: string
}

const items: WhyRetrofitItem[] = [
  {
    icon: Hammer,
    headline: 'No Structural Work',
    sub: 'No demolition. No building permits.',
  },
  {
    icon: PaintBucket,
    headline: 'No Painting or Plastering',
    sub: 'Your walls and frames stay untouched.',
  },
  {
    icon: Layers,
    headline: 'Suits Most Domestic Frames',
    sub: 'Custom adaptors fit timber, aluminium, and steel.',
  },
  {
    icon: Zap,
    headline: 'Installed in One Day',
    sub: 'Most homes done by sundown.',
  },
  {
    icon: Thermometer,
    headline: '50–55% Less Heat Loss',
    sub: 'Compared to standard single glazing.',
  },
  {
    icon: Volume2,
    headline: 'Up to 70% Quieter',
    sub: 'Acoustic glass cuts traffic and tram noise.',
  },
]

export function WhyRetrofit() {
  return (
    <section className="bg-surface py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4">

        {/* Section header */}
        <div className="mb-8">
          <p className="font-headline text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            WHY RETROFIT?
          </p>
          <h2
            className="font-display uppercase leading-[0.88] text-on-surface"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            <span className="block">Stop. Don&apos;t Overpay.</span>
            <span className="block text-primary-container">Upgrade What You Already Have.</span>
          </h2>
        </div>

        {/* 2-col on mobile, 3-col on lg — "minimum scrolling" layout */}
        <ul className="grid grid-cols-2 lg:grid-cols-3 ghost-border">
          {items.map(({ icon: Icon, headline, sub }) => (
            <li
              key={headline}
              className="ghost-border p-4 md:p-5 flex flex-col gap-3"
            >
              {/* Icon square */}
              <div className="w-9 h-9 bg-primary-container flex items-center justify-center shrink-0">
                <Icon size={16} strokeWidth={2} aria-hidden="true" className="text-on-primary-fixed" />
              </div>

              {/* Text */}
              <div>
                <h3 className="font-headline text-base font-semibold uppercase tracking-wide text-on-surface leading-snug mb-1">
                  {headline}
                </h3>
                <p className="font-sans text-sm text-on-surface/75 leading-snug">
                  {sub}
                </p>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}
