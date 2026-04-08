import Link from 'next/link'
import { LayoutGrid, AlertOctagon, ShowerHead, Building2, ArrowRight, type LucideIcon } from 'lucide-react'

interface ServiceCard {
  icon: LucideIcon
  title: string
  description: string
  href: string
  featured?: boolean
}

const defaultServices: ServiceCard[] = [
  {
    icon: LayoutGrid,
    title: 'Retrofit\nDouble Glazing',
    description: 'Upgrade existing timber or aluminium frames without the demolition.',
    href: '/double-glazing/',
    featured: true,
  },
  {
    icon: AlertOctagon,
    title: 'Emergency\nGlass Repair',
    description: 'Rapid response for broken windows, shopfronts, and doors.',
    href: '/emergency-glass/',
  },
  {
    icon: ShowerHead,
    title: 'Shower\nScreens',
    description: 'Frameless and semi-frameless toughened glass installations.',
    href: '/shower-screens/',
  },
  {
    icon: Building2,
    title: 'Commercial\nGlazing',
    description: 'High-spec solutions for offices, retail, and industrial spaces.',
    href: '/commercial-glazing/',
  },
]

interface ServicesSectionProps {
  heading?: string
  services?: ServiceCard[]
}

export function ServicesSection({
  heading = 'Structural Solutions',
  services = defaultServices,
}: ServicesSectionProps) {
  return (
    <section className="bg-surface-container-lowest py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2
          className="font-display uppercase text-on-surface leading-none mb-12 md:mb-16"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          {heading}
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 ghost-border">
          {services.map(({ icon: Icon, title, description, href, featured }, i) => (
            <Link
              key={href}
              href={href}
              className={[
                `group relative flex flex-col p-7 ghost-border transition-colors duration-150 ${i % 2 === 0 ? 'bg-surface hover:bg-surface-container-lowest' : 'bg-surface-container-low hover:bg-surface-container'}`,
                featured ? 'border-l-4 border-primary-container' : '',
              ].filter(Boolean).join(' ')}
            >
              {/* Icon */}
              <Icon
                size={36}
                strokeWidth={1.5}
                aria-hidden="true"
                className="text-primary mb-6 shrink-0"
              />

              {/* Title */}
              <h3 className="font-headline text-xl font-semibold uppercase tracking-wide text-on-surface leading-tight mb-4">
                {title.split('\n').map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </h3>

              {/* Description */}
              <p className="font-sans text-sm text-on-surface/55 leading-relaxed flex-1 mb-8">
                {description}
              </p>

              {/* Arrow */}
              <ArrowRight
                size={20}
                aria-hidden="true"
                className="text-on-surface/40 group-hover:text-primary transition-colors duration-150 group-hover:translate-x-1 motion-safe:transition-transform"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
