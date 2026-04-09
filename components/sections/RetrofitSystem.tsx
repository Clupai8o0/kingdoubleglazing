import { siteConfig } from '@/data/site'
import { Settings2, Wrench, SlidersHorizontal } from 'lucide-react'

// ── Feature list ──────────────────────────────────────────────────────────────

const features = [
  {
    icon: SlidersHorizontal,
    heading: 'Wide Adjustment Range',
    body: 'Our modular retrofit glazing system accommodates a broad range of existing frame depths and rebate dimensions. On-site calibration means each unit is set to your actual frame — not a fixed SKU shipped blind.',
  },
  {
    icon: Settings2,
    heading: 'Engineered Profiles for Most Aluminium Frames',
    body: 'We supply and install engineered glazing profiles sized to suit the most common Australian aluminium frame systems. No catalogue guesswork — the team measures and fits on the day.',
  },
  {
    icon: Wrench,
    heading: 'Custom-Machined Where Required',
    body: 'Where standard profiles cannot accommodate a unique or heritage frame condition, we machine or modify adapters on-site. No need to replace existing frames — your original joinery stays intact.',
  },
] as const

interface RetrofitSystemProps {
  eyebrow?: string
  heading?: string
  subheading?: string
}

export function RetrofitSystem({
  eyebrow = 'Our System',
  heading = 'Modular Retrofit\nGlazing System',
  subheading = 'On-site custom fitting — not fixed SKUs shipped from a warehouse. Every installation is calibrated to your frames.',
}: RetrofitSystemProps) {
  const headingLines = heading.split('\n')

  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="mb-12 md:mb-16 max-w-2xl">
          <p className="font-headline text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            {eyebrow}
          </p>
          <h2
            className="font-display uppercase leading-none text-on-surface"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            {headingLines.map((line, i) => (
              <span key={i} className={i > 0 ? 'block text-primary' : undefined}>
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-5 font-sans text-base text-on-surface/60 leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* ── Feature grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 ghost-border">
          {features.map(({ icon: Icon, heading: fHeading, body }) => (
            <div key={fHeading} className="p-8 md:p-10 bg-surface-container">
              <span className="mb-6 w-10 h-10 bg-surface-container-highest flex items-center justify-center">
                <Icon className="w-5 h-5 text-on-surface" aria-hidden="true" />
              </span>
              <h3 className="font-headline text-sm font-semibold uppercase tracking-widest text-on-surface mb-3 leading-snug">
                {fHeading}
              </h3>
              <p className="font-sans text-base text-on-surface/60 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* ── Custom capability callout — Value Ledger style ── */}
        <div className="border-l-4 border-primary-container bg-surface-container-lowest p-6 md:p-8 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between mt-0">
          <div>
            <p className="font-headline text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              Custom Capability
            </p>
            <p className="font-sans text-base text-on-surface/70 leading-relaxed max-w-2xl">
              Where required, we machine or modify adapters to suit unique conditions — no need to
              replace existing frames. Heritage sashes, non-standard reveals, irregular aluminium
              extrusions: we&apos;ve seen it before.
            </p>
          </div>
          <a
            href={siteConfig.phoneHref}
            className="shrink-0 inline-flex items-center gap-2 bg-inverse-surface text-inverse-on-surface px-6 py-4 font-headline text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Discuss Your Frame
          </a>
        </div>
      </div>
    </section>
  )
}
