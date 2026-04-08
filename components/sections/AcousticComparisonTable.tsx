// ── Data ─────────────────────────────────────────────────────────────────────

interface AcousticRow {
  config: string
  rw: number
  reductionVsBaseline: number   // dB improvement over single pane Rw 26
  effectiveAgainst: string
  priceFrom: string
  recommended?: boolean
  isBaseline?: boolean
}

// Baseline: single pane Rw 26 (typical Melbourne single-pane sash)
const BASELINE_RW = 26

const rows: AcousticRow[] = [
  {
    config: 'Single Pane (existing)',
    rw: 26,
    reductionVsBaseline: 0,
    effectiveAgainst: 'Baseline — what you have now',
    priceFrom: '—',
    isBaseline: true,
  },
  {
    config: 'Standard Double Glazing',
    rw: 35,
    reductionVsBaseline: 9,
    effectiveAgainst: 'Quiet streets, light suburban traffic',
    priceFrom: '$495/m²',
  },
  {
    config: 'Tinted Low-E Double',
    rw: 36,
    reductionVsBaseline: 10,
    effectiveAgainst: 'Light traffic + solar heat control',
    priceFrom: '$595/m²',
  },
  {
    config: 'Acoustic Laminated',
    rw: 42,
    reductionVsBaseline: 16,
    effectiveAgainst: 'Trams, arterials, planes, party walls',
    priceFrom: '$645/m²',
    recommended: true,
  },
  {
    config: 'Triple Glazed',
    rw: 40,
    reductionVsBaseline: 14,
    effectiveAgainst: 'General noise + maximum thermal',
    priceFrom: '$795/m²',
  },
]

const MAX_RW = 52   // upper bound for bar scaling

// ── Component ─────────────────────────────────────────────────────────────────

interface AcousticComparisonTableProps {
  heading?: string
  subheading?: string
}

export function AcousticComparisonTable({
  heading = 'Rw Ratings Compared',
  subheading = 'Every configuration tested to Australian Standard AS/NZS 1276.1. Higher Rw = less noise through the glass.',
}: AcousticComparisonTableProps) {
  return (
    <section className="bg-inverse-surface py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="font-headline text-xs font-semibold uppercase tracking-[0.2em] text-primary-container mb-3">
            Acoustic Performance
          </p>
          <h2
            className="font-display uppercase leading-[0.88] text-inverse-on-surface"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            {heading}
          </h2>
          <p className="font-sans text-base text-inverse-on-surface/50 mt-4 max-w-xl leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* Rows */}
        <div className="ghost-border">
          {rows.map((row, i) => (
            <RwRow key={row.config} row={row} index={i} />
          ))}
        </div>

        {/* Key */}
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          <p className="font-headline text-[0.8125rem] font-semibold uppercase tracking-[0.15em] text-inverse-on-surface/30">
            Every 10 dB = half perceived loudness
          </p>
          <p className="font-headline text-[0.8125rem] font-semibold uppercase tracking-[0.15em] text-inverse-on-surface/30">
            Rw per AS/NZS 1276.1
          </p>
        </div>

      </div>
    </section>
  )
}

// ── Row ───────────────────────────────────────────────────────────────────────

function RwRow({ row, index }: { row: AcousticRow; index: number }) {
  const barPct = (row.rw / MAX_RW) * 100
  const isRecommended = row.recommended
  const isBaseline = row.isBaseline

  return (
    <div
      className={[
        'ghost-border border-t-0 first:border-t-0 grid grid-cols-1 md:grid-cols-[220px_1fr_160px] gap-0',
        isRecommended ? 'bg-primary-container/15' : isBaseline ? 'bg-inverse-on-surface/[0.03]' : 'bg-transparent',
      ].join(' ')}
    >
      {/* Config name */}
      <div className={`px-6 py-5 flex flex-col justify-center ghost-border border-t-0 border-l-0 ${isRecommended ? 'border-l-2 border-primary-container' : ''}`}>
        {isRecommended && (
          <span className="font-headline text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary-container mb-1">
            Recommended
          </span>
        )}
        {isBaseline && (
          <span className="font-headline text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-inverse-on-surface/30 mb-1">
            Your current windows
          </span>
        )}
        <p className={`font-headline text-sm font-semibold uppercase tracking-wide leading-snug ${isBaseline ? 'text-inverse-on-surface/40' : 'text-inverse-on-surface'}`}>
          {row.config}
        </p>
      </div>

      {/* Rw bar + metadata */}
      <div className="px-6 py-5 flex flex-col justify-center gap-3 ghost-border border-t-0 border-l-0">
        {/* Bar + Rw label */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-2 bg-inverse-on-surface/10 relative" aria-hidden="true">
            <div
              className={`absolute inset-y-0 left-0 transition-none ${isBaseline ? 'bg-inverse-on-surface/25' : isRecommended ? 'bg-primary-container' : 'bg-inverse-on-surface/50'}`}
              style={{ width: `${barPct}%` }}
            />
          </div>
          <span
            className={`font-display uppercase leading-none tabular-nums shrink-0 ${isBaseline ? 'text-inverse-on-surface/30' : isRecommended ? 'text-primary-container' : 'text-inverse-on-surface'}`}
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
          >
            Rw {row.rw}
          </span>
          {row.reductionVsBaseline > 0 && (
            <span className="font-headline text-[0.8125rem] font-semibold uppercase tracking-wide text-primary-container shrink-0">
              +{row.reductionVsBaseline} dB
            </span>
          )}
        </div>

        {/* Effective against */}
        <p className={`font-headline text-xs font-semibold uppercase tracking-[0.15em] ${isBaseline ? 'text-inverse-on-surface/25' : 'text-inverse-on-surface/50'}`}>
          {row.effectiveAgainst}
        </p>
      </div>

      {/* Price */}
      <div className="px-6 py-5 flex items-center justify-start md:justify-end ghost-border border-t-0 border-l-0">
        <span
          className={`font-display uppercase leading-none ${isBaseline ? 'text-inverse-on-surface/25' : isRecommended ? 'text-primary-container' : 'text-inverse-on-surface/70'}`}
          style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}
        >
          {row.priceFrom}
        </span>
      </div>
    </div>
  )
}
