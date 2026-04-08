export type BlogCategory =
  | 'retrofit'
  | 'pricing'
  | 'acoustic'
  | 'energy'
  | 'heritage'
  | 'glass-types'

export const BLOG_CATEGORIES: { value: BlogCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All Posts' },
  { value: 'retrofit', label: 'Retrofit' },
  { value: 'pricing', label: 'Pricing' },
  { value: 'acoustic', label: 'Acoustic' },
  { value: 'energy', label: 'Energy' },
  { value: 'heritage', label: 'Heritage' },
  { value: 'glass-types', label: 'Glass Types' },
]

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: BlogCategory
  datePublished: string // ISO 8601 date string
  readTime: number // minutes
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'is-retrofit-double-glazing-worth-it',
    title: "Is Retrofit Double Glazing Worth It? A Melbourne Homeowner's Assessment",
    excerpt:
      'Retrofit costs, thermal payback, resale uplift, and noise reduction — all the numbers without the sales pitch.',
    category: 'retrofit',
    datePublished: '2026-03-15',
    readTime: 8,
  },
  {
    slug: 'double-glazing-cost-per-m2-australia',
    title: 'Double Glazing Cost per m² in Australia: What You Should Actually Pay',
    excerpt:
      'A no-nonsense breakdown of real pricing for retrofit double glazing, from standard IGUs to acoustic and Low-E glass.',
    category: 'pricing',
    datePublished: '2026-03-08',
    readTime: 6,
  },
  {
    slug: 'best-glass-for-noise-reduction-melbourne',
    title: 'Best Glass for Noise Reduction: Acoustic Laminated vs Standard Double Glazing',
    excerpt:
      'Rw ratings explained, real-world decibel reductions, and which glass type is right for traffic, tram, and aircraft noise.',
    category: 'acoustic',
    datePublished: '2026-02-22',
    readTime: 7,
  },
  {
    slug: 'low-e-glass-explained',
    title: "Low-E Glass Explained: What It Does, What It Costs & Whether You Need It",
    excerpt:
      "U-values, solar heat gain coefficients, and the truth about whether Low-E glass is worth the premium for Melbourne's climate.",
    category: 'energy',
    datePublished: '2026-02-10',
    readTime: 6,
  },
  {
    slug: 'double-glazing-heritage-homes-melbourne',
    title: 'Retrofit Double Glazing in Heritage-Listed Melbourne Homes',
    excerpt:
      'Heritage overlays, council permit requirements, and how to keep your original timber frames while doubling thermal performance.',
    category: 'heritage',
    datePublished: '2026-01-28',
    readTime: 9,
  },
  {
    slug: 'double-glazing-glass-types-guide',
    title: 'Double Glazing Glass Types: Which Is Right for Your Home?',
    excerpt:
      'Clear float, tinted, Low-E, acoustic laminated — a complete comparison by performance, price, and application.',
    category: 'glass-types',
    datePublished: '2026-01-14',
    readTime: 8,
  },
  {
    slug: 'how-to-stop-condensation-on-windows',
    title: 'How to Stop Condensation on Windows in Melbourne',
    excerpt:
      "Why double glazing eliminates most condensation — and the one scenario where it doesn't. An honest look at the physics.",
    category: 'energy',
    datePublished: '2025-12-19',
    readTime: 5,
  },
  {
    slug: 'retrofit-vs-full-window-replacement',
    title: 'Retrofit Double Glazing vs Full Window Replacement: The Honest Comparison',
    excerpt:
      'Cost, disruption, warranty, and performance compared side-by-side. Retrofit wins in nearly every category.',
    category: 'retrofit',
    datePublished: '2025-12-05',
    readTime: 7,
  },
  {
    slug: 'argon-gas-double-glazing-worth-it',
    title: 'Argon Gas in Double Glazing: Is the Upgrade Worth It?',
    excerpt:
      'The thermal difference between air-filled and argon-filled IGUs — and whether the modest gain justifies the upsell.',
    category: 'glass-types',
    datePublished: '2025-11-20',
    readTime: 5,
  },
  {
    slug: 'double-glazing-noise-tram-traffic',
    title: 'Double Glazing for Tram & Traffic Noise in Melbourne: What Actually Works',
    excerpt:
      'Inner-city Melbourne noise profiles, tested Rw values, and which glass specification delivers real relief against tram routes.',
    category: 'acoustic',
    datePublished: '2025-11-07',
    readTime: 6,
  },
]
