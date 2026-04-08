// ⚠️ CONFIRM prices with Tas before launch — numbers below are illustrative scaffolding only.

export type CostRangeCard = {
  id: string
  eyebrow?: string
  title: string
  subtitle: string
  priceFrom: number
  priceTo: number
  perUnitLabel?: string
  inclusions: string[]
  footnote?: string
  cta: {
    label: string
    href: string
  }
  highlighted?: boolean
}

export const costRanges: CostRangeCard[] = [
  {
    id: 'single-room',
    eyebrow: 'Starter',
    title: 'Single Room Retrofit',
    subtitle: 'Up to 4 standard windows',
    priceFrom: 2000,
    priceTo: 4500,
    perUnitLabel: 'From $495/m²',
    inclusions: [
      'Free measure & quote',
      'Standard double glazing units',
      'Professional installation',
      'Cleanup & rubbish removal',
    ],
    footnote: 'Final price depends on glass type and access.',
    cta: { label: 'Get Exact Estimate', href: '/instant-estimate?scenario=single-room' },
  },
  {
    id: 'full-home',
    eyebrow: 'Most Popular',
    title: 'Full Home Retrofit',
    subtitle: '8–12 windows, standard home',
    priceFrom: 6000,
    priceTo: 12000,
    perUnitLabel: 'From $495/m²',
    inclusions: [
      'Free measure & quote',
      'All window types covered',
      'Professional installation',
      'Cleanup & rubbish removal',
      'Multi-unit pricing applied',
    ],
    footnote: 'Final price depends on glass type and window count.',
    cta: { label: 'Get Exact Estimate', href: '/instant-estimate?scenario=full-home' },
    highlighted: true,
  },
  {
    id: 'whole-house',
    eyebrow: 'Best Value',
    title: 'Whole House Upgrade',
    subtitle: '12+ windows or heritage home',
    priceFrom: 10000,
    priceTo: 25000,
    perUnitLabel: 'From $495/m²',
    inclusions: [
      'Free measure & quote',
      'Heritage-compatible options available',
      'Project management included',
      'Multi-unit discount applied',
    ],
    footnote: 'Pricing varies with heritage requirements and access.',
    cta: { label: 'Get Exact Estimate', href: '/instant-estimate?scenario=whole-house' },
  },
]
