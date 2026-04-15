interface GlassOption {
  name: string
  quieter: string
  lessHeat: string
  recommended?: boolean
}

const options: GlassOption[] = [
  {
    name: 'Standard Retrofit',
    quieter: 'Up to 50%',
    lessHeat: '50–55%',
    recommended: true,
  },
  {
    name: 'Acoustic Retrofit',
    quieter: 'Up to 65%',
    lessHeat: '50–55%',
  },
  {
    name: 'Premium Acoustic + Low-E',
    quieter: 'Up to 70%',
    lessHeat: 'Up to 60%',
  },
]

const metrics: { label: string; key: keyof Pick<GlassOption, 'quieter' | 'lessHeat'> }[] = [
  { label: 'Quieter', key: 'quieter' },
  { label: 'Less heat lost', key: 'lessHeat' },
]

export function GlassComparisonTable() {
  return (
    <section className="bg-surface-container-low py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4">

        {/* Section header */}
        <div className="mb-8 md:mb-12">
          <p className="font-headline text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            GLASS OPTIONS
          </p>
          <h2
            className="font-display uppercase leading-[0.88] text-on-surface"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            Three Glass Choices.
            <br />
            <span className="text-primary-container">All Better Than What You&apos;ve Got.</span>
          </h2>
          <p className="font-sans text-sm text-on-surface/70 mt-4 max-w-xl leading-relaxed">
            All percentages show how much better each option performs compared to standard 3mm clear house glass.
          </p>
        </div>

        {/* ── Desktop table ─────────────────────────────────────────────────── */}
        <div className="hidden md:block overflow-x-auto -mx-4 px-4">
          <table className="w-full min-w-[580px] border-collapse">
            <thead>
              <tr>
                {/* Empty label cell */}
                <th
                  scope="col"
                  className="text-left px-5 py-4 bg-surface-container-low border border-surface-container-high"
                />
                {options.map(opt => (
                  <th
                    key={opt.name}
                    scope="col"
                    className={`text-center px-5 py-5 min-w-[170px] ${opt.recommended ? 'bg-primary-container' : 'bg-surface'}`}
                    style={{ border: opt.recommended ? '1px solid #c9a800' : '1px solid #E5E5E5' }}
                  >
                    {opt.recommended && (
                      <span className="inline-block font-headline text-[0.65rem] font-semibold uppercase tracking-[0.18em] bg-black text-primary-container px-2 py-0.5 mb-2">
                        Good starting point
                      </span>
                    )}
                    <span
                      className={`font-display uppercase leading-none block ${opt.recommended ? 'text-on-primary-fixed' : 'text-on-surface'}`}
                      style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}
                    >
                      {opt.name}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {metrics.map(({ label, key }) => (
                <tr key={label}>
                  <td
                    className="font-headline text-sm font-semibold uppercase tracking-wide text-on-surface px-5 py-5"
                    style={{ backgroundColor: '#FAFAFA', border: '1px solid #E8E8E8' }}
                  >
                    {label}
                  </td>
                  {options.map(opt => (
                    <td
                      key={opt.name}
                      className={`text-center px-5 py-6 ${opt.recommended ? 'bg-primary-container' : 'bg-surface'}`}
                      style={{ border: opt.recommended ? '1px solid #c9a800' : '1px solid #E5E5E5' }}
                    >
                      <span
                        className={`font-display uppercase leading-none block ${opt.recommended ? 'text-on-primary-fixed' : 'text-on-surface'}`}
                        style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
                      >
                        {opt[key]}
                      </span>
                      <span
                        className={`font-headline text-xs uppercase tracking-wide block mt-1.5 ${opt.recommended ? 'text-on-primary-fixed/70' : 'text-on-surface/70'}`}
                      >
                        {label}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Mobile cards — stacked vertically ─────────────────────────────── */}
        <div className="md:hidden space-y-4">
          {options.map(opt => (
            <div
              key={opt.name}
              className={`p-6 ${opt.recommended ? 'bg-primary-container' : 'bg-surface'}`}
              style={{ border: opt.recommended ? '1px solid #c9a800' : '1px solid #E5E5E5' }}
            >
              {opt.recommended && (
                <p className="inline-block font-headline text-[0.65rem] font-semibold uppercase tracking-[0.18em] bg-black text-primary-container px-2 py-0.5 mb-3">
                  Good starting point
                </p>
              )}
              <h3
                className={`font-display uppercase leading-none mb-5 ${opt.recommended ? 'text-on-primary-fixed' : 'text-on-surface'}`}
                style={{ fontSize: '1.5rem' }}
              >
                {opt.name}
              </h3>
              <dl className="space-y-4">
                {metrics.map(({ label, key }) => (
                  <div key={label} className="flex items-end justify-between gap-4">
                    <dt className={`font-headline text-xs font-semibold uppercase tracking-wide ${opt.recommended ? 'text-on-primary-fixed/70' : 'text-on-surface/70'}`}>
                      {label}
                    </dt>
                    <dd
                      className={`font-display uppercase leading-none ${opt.recommended ? 'text-on-primary-fixed' : 'text-on-surface'}`}
                      style={{ fontSize: 'clamp(1.75rem, 8vw, 2.5rem)' }}
                    >
                      {opt[key]}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        {/* Caption below */}
        <p className="mt-6 font-sans text-sm text-on-surface/70 leading-relaxed max-w-xl">
          Heat numbers compared to standard 3mm single glazing. Real homes vary slightly — the free home visit gives you the exact numbers for your windows.
        </p>

      </div>
    </section>
  )
}
