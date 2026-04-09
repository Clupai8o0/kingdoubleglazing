import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buildMetadata, BASE_URL } from '@/lib/seo/generateMetadata'
import { buildServiceSchema } from '@/lib/seo/schema/service'
import { buildBreadcrumbSchema } from '@/lib/seo/schema/breadcrumbList'
import { HeroSection } from '@/components/sections/HeroSection'
import { TrustBar } from '@/components/sections/TrustBar'
import { BenefitsGrid } from '@/components/sections/BenefitsGrid'
import { RetrofitSystem } from '@/components/sections/RetrofitSystem'
import { GlassOptions } from '@/components/blocks/GlassOptions'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { ComparisonTable } from '@/components/sections/ComparisonTable'
import { BeforeAfter } from '@/components/sections/BeforeAfter'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { testimonials } from '@/data/testimonials'

export const metadata: Metadata = buildMetadata({
  title: 'Retrofit Double Glazing Melbourne | Upgrade Existing Windows',
  description:
    'Retrofit double glazing for Melbourne homes — upgrade existing timber or aluminium windows without full replacement. From $495/m². Get your instant estimate.',
  path: '/double-glazing/',
})

export default function RetrofitDoubleGlazingPage() {
  const serviceSchema = buildServiceSchema({
    name: 'Retrofit Double Glazing Melbourne',
    description:
      'Retrofit double glazing for Melbourne homes — upgrade existing timber or aluminium windows without full replacement. From $495/m².',
    url: `${BASE_URL}/double-glazing/`,
  })

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Retrofit Double Glazing', href: '/double-glazing/' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HeroSection
        compact
        badge="Retrofit Specialists"
        headlineWhite="Upgrade Your Windows"
        headlineYellow="Not Your Frames"
        subtext="From $495/m² — Keep your existing timber or aluminium. Double the performance."
        primaryCta={{ label: 'Get Instant Estimate', href: '/instant-estimate/' }}
        secondaryCta={{ label: 'Call Now', href: 'tel:+61406470595' }}
        imageSrc="/hero/hero-double-glazing.webp"
        imageAlt="Retrofit double glazing installed in Melbourne home timber window frames"
      />
      <TrustBar />
      <BenefitsGrid
        eyebrow="Why Retrofit"
        heading={"6 Reasons to\nRetrofit"}
      />
      <RetrofitSystem />
      <GlassOptions
        variant="full"
        heading="Choose Your Glass"
        subheading="Four performance tiers. Every budget. Transparent pricing — no surprises at invoice."
      />
      <ProcessSteps
        heading="How It Works"
        subheading="Four steps from enquiry to a warmer, quieter home."
        cta={{ label: 'Get Instant Estimate', href: '/instant-estimate/' }}
      />
      <ComparisonTable />

      {/* ── Cluster sub-topics ──────────────────────────────────────── */}
      <section className="bg-surface py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <p className="font-headline text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Explore Further
          </p>
          <h2
            className="font-display uppercase leading-[0.9] text-on-surface mb-8"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Double Glazing<br />Topics
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 ghost-border">
            {[
              { href: '/double-glazing/soundproof-windows/', label: 'Soundproof Windows', desc: 'Acoustic laminated glass for tram routes, main roads, and noisy neighbours.' },
              { href: '/double-glazing/energy-efficient-windows/', label: 'Energy Efficient Windows', desc: 'Low-E coatings — cut heating and cooling costs up to 40%.' },
              { href: '/double-glazing/heritage-homes/', label: 'Heritage Homes', desc: 'Retrofit that complies with Heritage Victoria requirements.' },
              { href: '/double-glazing/glass-types/', label: 'Glass Types Guide', desc: 'Compare standard, Low-E, acoustic, and triple glazing side by side.' },
              { href: '/double-glazing/cost/', label: 'Cost Guide', desc: 'Transparent pricing breakdowns — what you pay and why.' },
            ].map(({ href, label, desc }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group flex items-start justify-between gap-4 ghost-border p-6 bg-surface hover:bg-surface-container-low transition-colors duration-150"
                >
                  <div>
                    <p className="font-headline font-bold uppercase tracking-wide text-on-surface text-sm leading-snug mb-1">
                      {label}
                    </p>
                    <p className="font-sans text-xs text-on-surface/55 leading-relaxed">{desc}</p>
                  </div>
                  <ArrowRight size={16} className="shrink-0 mt-0.5 text-primary group-hover:translate-x-0.5 transition-transform duration-150" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BeforeAfter />
      <Testimonials
        heading={"Melbourne Homes.\nReal Feedback."}
        subheading="Every review is from a verified retrofit customer."
        items={testimonials}
      />
      <FAQ />
      {/* ── Gallery link ────────────────────────────────────────────── */}
      <section className="bg-surface-container-lowest py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 ghost-border p-6">
            <div>
              <p className="font-headline text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-1">Our Work</p>
              <p className="font-display uppercase text-on-surface leading-none" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                See It Installed
              </p>
            </div>
            <Link
              href="/gallery/?category=double-glazing"
              className="shrink-0 inline-flex items-center gap-2 bg-primary-container text-on-primary-fixed font-headline text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3 hover:bg-primary-fixed-dim transition-colors duration-150"
            >
              Browse the gallery <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner
        heading={"Get Your\nInstant Estimate"}
        subtext="Enter your window dimensions and get a transparent, itemised price in 60 seconds. No sales calls. No site visit required."
        primaryCta={{ label: 'Get Instant Estimate', href: '/instant-estimate/' }}
      />
    </>
  )
}
