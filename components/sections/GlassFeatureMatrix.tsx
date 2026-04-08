import Link from 'next/link'
import { Check, X, Minus } from 'lucide-react'
import { glassTypes } from '@/data/glass-types'

// ── Feature row definitions ───────────────────────────────────────────────────

type CellFn = (g: typeof glassTypes[number]) => React.ReactNode

interface FeatureRow {
  label: string
  sublabel?: string
  cell: CellFn
}

const features: FeatureRow[] = [
  {
    label: 'Price from',
    sublabel: 'per m², installed',
    cell: (g) => <Strong>${g.priceFrom}/m²</Strong>,
  },
  {
    label: 'U-value',
    sublabel: 'W/m²K — lower is better',
    cell: (g) => (
      <span className="flex flex-col items-center gap-0.5">
        <Strong>{g.uValue}</Strong>
        <UBar value={g.uValue} />
      </span>
    ),
  },
  {
    label: 'Acoustic rating',
    sublabel: 'Rw dB — higher is better',
    cell: (g) => (
      <span className="flex flex-col items-center gap-0.5">
        <Strong>Rw {g.rwRating}</Strong>
        <RwBar value={g.rwRating} />
      </span>
    ),
  },
  {
    label: 'Heat reduction',
    sublabel: 'vs single pane',
    cell: (g) => <Strong>{g.heatReduction}%</Strong>,
  },
  {
    label: 'VEU rebate eligible',
    sublabel: undefined,
    cell: (g) => g.uValue <= 2.0 ? <Tick /> : <Dash />,
  },
  {
    label: 'Heritage compatible',
    sublabel: undefined,
    cell: () => <Tick />,
  },
  {
    label: 'Noise priority',
    sublabel: undefined,
    cell: (g) => g.rwRating >= 40 ? <Tick /> : g.rwRating >= 35 ? <Dash /> : <Cross />,
  },
  {
    label: 'Energy priority',
    sublabel: undefined,
    cell: (g) => g.uValue <= 2.0 ? <Tick /> : g.uValue <= 2.5 ? <Dash /> : <Cross />,
  },
  {
    label: 'Best for',
    sublabel: undefined,
    cell: (g) => (
      <span className="font-headline text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-on-surface/60 leading-snug">
        {g.bestFor}
      </span>
    ),
  },
]

// ── Component ─────────────────────────────────────────────────────────────────

interface GlassFeatureMatrixProps {
  heading?: string
  subheading?: string
}

export function GlassFeatureMatrix({
  heading = 'Full Feature Matrix',
  subheading = 'Every spec, side by side. No marketing spin.',
}: GlassFeatureMatrixProps) {
  // Tinted Low-E is index 1 — "Most Popular" highlight
  const popularIdx = 1

  return (
    <section className="bg-surface-container-low py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="font-headline text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Compare All Types
          </p>
          <h2
            className="font-display uppercase leading-[0.88] text-on-surface"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            {heading}
          </h2>
          <p className="font-sans text-base text-on-surface/55 mt-4 max-w-xl leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* Table — horizontal scroll on mobile */}
        <div className="overflow-x-auto -mx-4 px-4">
          <table className="w-full min-w-[680px] border-collapse border-2 border-on-surface bg-on-surface">

            {/* Column headers */}
            <thead>
              <tr className="bg-on-surface">
                {/* Feature label col */}
                <th
                  scope="col"
                  className="bg-surface-container text-left font-headline text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-on-surface/40 px-5 py-4 w-[180px] border-r border-on-surface/20"
                >
                  Feature
                </th>

                {glassTypes.map((g, i) => {
                  const isPopular = i === popularIdx
                  return (
                    <th
                      key={g.id}
                      scope="col"
                      className={`px-4 py-0 text-center border-r border-on-surface/20 last:border-r-0 ${isPopular ? 'bg-primary-container' : 'bg-surface-container'}`}
                    >
                      {isPopular && (
                        <div className="bg-inverse-surface text-inverse-on-surface font-headline text-[0.7rem] font-semibold uppercase tracking-[0.2em] px-3 py-2 -mx-4 mb-3">
                          Most Popular
                        </div>
                      )}
                      <div className={`${isPopular ? 'py-3' : 'py-4'}`}>
                        <span
                          className={`font-display uppercase leading-none block ${isPopular ? 'text-on-primary-fixed' : 'text-on-surface'}`}
                          style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.2rem)' }}
                        >
                          {g.name}
                        </span>
                      </div>
                    </th>
                  )
                })}
              </tr>
            </thead>

            {/* Feature rows */}
            <tbody>
              {features.map((feat, fi) => (
                <tr
                  key={feat.label}
                  className={fi % 2 === 0 ? 'bg-surface' : 'bg-surface-container-lowest'}
                >
                  {/* Feature label */}
                  <td className="px-5 py-4 border-r border-on-surface/10">
                    <p className="font-headline text-sm font-semibold uppercase tracking-wide text-on-surface leading-none">
                      {feat.label}
                    </p>
                    {feat.sublabel && (
                      <p className="font-headline text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-on-surface/35 mt-1">
                        {feat.sublabel}
                      </p>
                    )}
                  </td>

                  {/* Glass type cells */}
                  {glassTypes.map((g, gi) => {
                    const isPopular = gi === popularIdx
                    return (
                      <td
                        key={g.id}
                        className={`px-4 py-4 text-center border-r border-on-surface/10 last:border-r-0 ${isPopular ? 'bg-primary-container/10 border-l-2 border-primary-container' : ''}`}
                      >
                        {feat.cell(g)}
                      </td>
                    )
                  })}
                </tr>
              ))}

              {/* CTA row */}
              <tr className="bg-on-surface">
                <td className="px-5 py-4 border-r border-on-surface/20">
                  <span className="font-headline text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-inverse-on-surface/40">
                    Estimate
                  </span>
                </td>
                {glassTypes.map((g, gi) => {
                  const isPopular = gi === popularIdx
                  return (
                    <td key={g.id} className="px-4 py-4 text-center border-r border-on-surface/20 last:border-r-0">
                      <Link
                        href={`/instant-estimate/?glass=${g.id}`}
                        className={[
                          'inline-block font-headline text-[0.75rem] font-semibold uppercase tracking-[0.12em] px-4 py-2.5 transition-colors duration-150 whitespace-nowrap',
                          isPopular
                            ? 'bg-primary-container text-on-primary-fixed hover:bg-primary-fixed-dim'
                            : 'bg-surface-container text-on-surface hover:bg-surface-container-highest',
                        ].join(' ')}
                      >
                        Get price →
                      </Link>
                    </td>
                  )
                })}
              </tr>
            </tbody>

          </table>
        </div>

      </div>
    </section>
  )
}

// ── Cell sub-components ───────────────────────────────────────────────────────

function Strong({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-headline text-sm font-bold uppercase tracking-wide text-on-surface">
      {children}
    </span>
  )
}

function Tick() {
  return <Check size={16} strokeWidth={2.5} className="text-success mx-auto" aria-label="Yes" />
}

function Cross() {
  return <X size={16} strokeWidth={2.5} className="text-danger mx-auto" aria-label="No" />
}

function Dash() {
  return <Minus size={16} strokeWidth={2} className="text-on-surface/30 mx-auto" aria-label="Partial" />
}

// U-value bar — inverted: lower U = wider bar (better)
const U_BASELINE = 5.8
function UBar({ value }: { value: number }) {
  const pct = Math.round(((U_BASELINE - value) / U_BASELINE) * 100)
  return (
    <span className="block w-16 h-1 bg-on-surface/10 mx-auto" aria-hidden="true">
      <span className="block h-full bg-primary-container" style={{ width: `${pct}%` }} />
    </span>
  )
}

// Rw bar — higher = wider (better)
const RW_MAX = 52
function RwBar({ value }: { value: number }) {
  const pct = Math.round((value / RW_MAX) * 100)
  return (
    <span className="block w-16 h-1 bg-on-surface/10 mx-auto" aria-hidden="true">
      <span className="block h-full bg-primary-container" style={{ width: `${pct}%` }} />
    </span>
  )
}
