import Link from 'next/link'
import { Thermometer, VolumeX, ChevronRight } from 'lucide-react'

// ── Acoustic Rw comparison data ───────────────────────────────────────────────

const acousticOptions: readonly {
  name: string
  rw: number
  reduction: number
  highlight?: boolean
}[] = [
  {
    name: 'Standard Double Glazing',
    rw: 35,
    reduction: 39,
  },
  {
    name: 'Standard Laminated',
    rw: 38,
    reduction: 45,
  },
  {
    name: 'Acoustic PVB Laminated',
    rw: 42,
    reduction: 52,
    highlight: true,
  },
]

interface GlassPickerGuideProps {
  heading?: string
  eyebrow?: string
}

export function GlassPickerGuide({
  heading = 'How to Pick Your Glass',
  eyebrow = 'Decision Guide',
}: GlassPickerGuideProps) {
  return (
    <section className="py-20 md:py-28 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="mb-12 md:mb-16">
          <span className="inline-block bg-primary-container text-on-primary-fixed font-headline text-xs font-semibold uppercase tracking-widest px-3 py-1 mb-4">
            {eyebrow}
          </span>
          <h2
            className="font-display uppercase leading-none text-on-surface"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            {heading}
          </h2>
          <p className="mt-4 font-sans text-base text-on-surface/60 max-w-xl leading-relaxed">
            Start here. One question determines everything — do you want less heat or less noise?
          </p>
        </div>

        {/* ── Two-column decision paths ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 ghost-border">

          {/* ── Path A: Thermal ── */}
          <div className="p-8 md:p-10 bg-surface">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-12 bg-primary-container flex items-center justify-center shrink-0">
                <Thermometer className="w-6 h-6 text-on-primary-fixed" aria-hidden="true" />
              </span>
              <div>
                <p className="font-headline text-xs font-semibold uppercase tracking-widest text-on-surface/40">
                  Goal A
                </p>
                <h3 className="font-display text-3xl uppercase leading-none text-on-surface">
                  Less Heat
                </h3>
              </div>
            </div>

            <ol className="space-y-6 mb-10">
              <Step n={1}>
                <strong className="font-headline font-semibold text-on-surface">
                  Start with Low-E glass.
                </strong>{' '}
                The metallic oxide coating reflects solar heat before it enters — cutting heat transfer
                by up to 69% compared to standard clear.
              </Step>
              <Step n={2}>
                <strong className="font-headline font-semibold text-on-surface">
                  North-facing windows get priority.
                </strong>{' '}
                North and west elevations receive the most sun exposure in Melbourne&apos;s climate.
                These are the rooms where Low-E delivers the greatest return.
              </Step>
              <Step n={3}>
                <strong className="font-headline font-semibold text-on-surface">
                  For extra help, choose Tinted Low-E.
                </strong>{' '}
                The tint layer further reduces Solar Heat Gain Coefficient (SHGC) — ideal for any
                room that overheats in summer or faces full afternoon sun.
              </Step>
            </ol>

            {/* Recommendation */}
            <div className="bg-primary-container px-5 py-4 mb-8">
              <p className="font-headline text-xs font-semibold uppercase tracking-widest text-on-primary-fixed/70 mb-1">
                Recommended glass
              </p>
              <p className="font-display text-2xl uppercase leading-none text-on-primary-fixed mb-1">
                Tinted Low-E
              </p>
              <p className="font-sans text-sm text-on-primary-fixed/70">
                U-value 1.8 · 78% heat reduction · from $595/m²
              </p>
            </div>

            <a
              href="?glass=tinted-low-e#calculator"
              className="inline-flex items-center gap-2 bg-primary-container text-on-primary-fixed px-6 py-4 font-headline text-sm font-semibold uppercase tracking-widest hover:bg-primary-fixed-dim transition-colors duration-150"
            >
              Use Tinted Low-E in My Estimate
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          {/* ── Path B: Acoustic ── */}
          <div className="p-8 md:p-10 bg-surface">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-12 bg-inverse-surface flex items-center justify-center shrink-0">
                <VolumeX className="w-6 h-6 text-inverse-on-surface" aria-hidden="true" />
              </span>
              <div>
                <p className="font-headline text-xs font-semibold uppercase tracking-widest text-on-surface/40">
                  Goal B
                </p>
                <h3 className="font-display text-3xl uppercase leading-none text-on-surface">
                  Less Noise
                </h3>
              </div>
            </div>

            <ol className="space-y-6 mb-10">
              <Step n={1}>
                <strong className="font-headline font-semibold text-on-surface">
                  Check the Rw ratings below.
                </strong>{' '}
                Rw (weighted sound reduction index) shows how much noise the glass blocks in decibels.
                Each 3 dB increase roughly halves perceived loudness.
              </Step>
              <Step n={2}>
                <strong className="font-headline font-semibold text-on-surface">
                  Choose your acoustic level.
                </strong>{' '}
                Standard Laminated adds a PVB interlayer for baseline dampening. Acoustic PVB
                Laminated uses a specialist acoustic interlayer — it reduces a bit more sound and is
                our recommendation for roads, trams, and flight paths.
              </Step>
              <Step n={3}>
                <strong className="font-headline font-semibold text-on-surface">
                  Select your option in the estimate form.
                </strong>{' '}
                The Rw difference is real but the cost gap is small — most customers choose Acoustic
                PVB for the extra performance margin.
              </Step>
            </ol>

            {/* Acoustic comparison — bg-based separation, no borders */}
            <div className="mb-8">
              <div className="grid grid-cols-3 bg-surface-container-high px-4 py-3">
                <span className="font-headline text-xs font-semibold uppercase tracking-widest text-on-surface/50">
                  Glass
                </span>
                <span className="font-headline text-xs font-semibold uppercase tracking-widest text-on-surface/50 text-center">
                  Rw
                </span>
                <span className="font-headline text-xs font-semibold uppercase tracking-widest text-on-surface/50 text-right">
                  Noise reduced
                </span>
              </div>
              {acousticOptions.map(opt => (
                <div
                  key={opt.name}
                  className={[
                    'grid grid-cols-3 px-4 py-4 items-center',
                    opt.highlight ? 'bg-primary-container' : 'bg-surface-container',
                  ].join(' ')}
                >
                  <div>
                    <p
                      className={[
                        'font-headline text-xs font-semibold uppercase tracking-widest leading-snug',
                        opt.highlight ? 'text-on-primary-fixed' : 'text-on-surface',
                      ].join(' ')}
                    >
                      {opt.name}
                    </p>
                    {opt.highlight && (
                      <span className="font-headline text-xs font-semibold uppercase tracking-widest text-on-primary-fixed/60">
                        Recommended
                      </span>
                    )}
                  </div>
                  <p
                    className={[
                      'font-display text-xl text-center leading-none',
                      opt.highlight ? 'text-on-primary-fixed' : 'text-on-surface',
                    ].join(' ')}
                  >
                    {opt.rw} dB
                  </p>
                  <p
                    className={[
                      'font-display text-xl text-right leading-none',
                      opt.highlight ? 'text-on-primary-fixed' : 'text-on-surface',
                    ].join(' ')}
                  >
                    {opt.reduction}%
                  </p>
                </div>
              ))}
            </div>

            <a
              href="?glass=acoustic-laminated#calculator"
              className="inline-flex items-center gap-2 bg-inverse-surface text-inverse-on-surface px-6 py-4 font-headline text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              Use Acoustic Glass in My Estimate
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* ── Footer note ── */}
        <p className="mt-6 font-sans text-sm text-on-surface/40 text-center">
          Not sure which applies to you?{' '}
          <Link href="/contact/" className="underline underline-offset-2 hover:text-on-surface/70 transition-colors">
            Call us
          </Link>{' '}
          — we&apos;ll advise per elevation, no site visit required.
        </p>
      </div>
    </section>
  )
}

// ── Helper ────────────────────────────────────────────────────────────────────

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="w-6 h-6 bg-primary-container shrink-0 flex items-center justify-center font-headline text-xs font-semibold text-on-primary-fixed mt-0.5">
        {n}
      </span>
      <p className="font-sans text-base text-on-surface/70 leading-relaxed">{children}</p>
    </li>
  )
}
