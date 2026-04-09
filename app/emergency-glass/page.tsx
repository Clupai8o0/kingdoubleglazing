import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo/generateMetadata'
import { Phone, Zap, ShieldCheck, FileText, MapPin, Crown, Tag, ArrowRight } from 'lucide-react'
import { EmergencyHero } from '@/components/sections/EmergencyHero'
import { TrustBar } from '@/components/sections/TrustBar'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { BenefitsGrid } from '@/components/sections/BenefitsGrid'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { testimonials } from '@/data/testimonials'
import { emergencyFaq } from '@/data/emergency-faq'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = buildMetadata({
  title: 'Emergency Glass Repair Melbourne | 24/7 Glazier | Same Day',
  description:
    'Broken window in Melbourne? Our 24/7 emergency glaziers come to you — fast. Board-up, same-day repair and replacement. Call now.',
  path: '/emergency-glass/',
})

const emergencyTrustItems = [
  { icon: Zap,        label: 'Dispatched in 30 Min' },
  { icon: Phone,      label: '24/7 — 365 Days' },
  { icon: MapPin,     label: 'All Melbourne Suburbs' },
  { icon: ShieldCheck,label: 'Licensed Glazier' },
  { icon: FileText,   label: 'Insurance Reports' },
]

const emergencyBenefits = [
  {
    icon: Zap,
    heading: 'Dispatched in 30 Minutes',
    text: "ETA confirmed on the call before we hang up. We don't put you on hold or call you back — you get a glazier's arrival time immediately.",
  },
  {
    icon: ShieldCheck,
    heading: 'Site Secured Same Visit',
    text: 'Board-up is included in every call-out where permanent glass cannot be fitted on the day. Structural-grade panels, weather-resistant, secured to the frame — not cardboard.',
  },
  {
    icon: FileText,
    heading: 'Insurance Report Included',
    text: 'Written statement of damage, cause, scope, and tax invoice — the exact documentation all major Australian insurers require. Addressed to your insurer directly if needed.',
  },
  {
    icon: MapPin,
    heading: 'All Melbourne Suburbs',
    text: 'No zone premiums. Inner suburbs, outer suburbs, Mornington Peninsula — same service, same response commitment, same pricing transparency.',
  },
  {
    icon: Crown,
    heading: 'Licensed Glazier — Not a Handyman',
    text: 'Every emergency call-out is handled by a licensed Victorian glazier, not a general tradesperson or subcontracted crew. Workmanship warranty issued on every permanent repair.',
  },
  {
    icon: Tag,
    heading: 'Permanent Fix Same or Next Day',
    text: 'Standard residential glass sizes replaced permanently on the first visit. Non-standard or double-glazed units boarded same-day, permanently replaced within 5–7 business days.',
  },
] as const

const emergencySteps = [
  {
    title: 'Call Now',
    body: "Describe the damage — window type, approximate size, and whether there's a security or weather risk. You get an ETA before we hang up. No forms, no hold music.",
  },
  {
    title: 'Glazier Dispatched',
    body: 'A licensed King glazier is en route with glass stock for common residential sizes. You receive a call when they are 10 minutes away.',
  },
  {
    title: 'Make Safe',
    body: 'Glass removed, edges made safe, property secured. Board-up fitted if same-day permanent glass is not possible. Site left clean — no shards, no exposed edges.',
  },
  {
    title: 'Permanent Repair',
    body: 'Standard sizes replaced on the same visit. Non-standard or double-glazed units ordered and fitted within 5–7 business days. Written warranty on all permanent repairs.',
  },
] as const

const emergencyTestimonials = testimonials.filter((t) => t.tag === 'emergency')

export default function EmergencyGlassPage() {
  return (
    <>
      <EmergencyHero />
      <TrustBar items={emergencyTrustItems} />
      <ProcessSteps
        heading="What Happens When You Call"
        subheading="Four steps from your call to a secured, repaired property."
        cta={{ label: `Call ${siteConfig.phone}`, href: siteConfig.phoneHref }}
        steps={emergencySteps}
      />
      <BenefitsGrid
        eyebrow="24/7 Emergency Glazing"
        heading={"What You Get\nWhen It Matters"}
        items={emergencyBenefits}
      />
      <Testimonials
        heading={"Called in Crisis.\nFixed Fast."}
        subheading="Melbourne customers who needed emergency glazing and got it."
        items={emergencyTestimonials}
      />
      <FAQ
        heading="Emergency Questions"
        subheading="Fast answers for when you need to act now."
        items={emergencyFaq}
      />

      {/* ── Gallery link ────────────────────────────────────────────── */}
      <section className="bg-surface-container-lowest py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 ghost-border p-6">
            <div>
              <p className="font-headline text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-1">Our Work</p>
              <p className="font-display uppercase text-on-surface leading-none" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                See It Repaired
              </p>
            </div>
            <Link
              href="/gallery/?category=repairs"
              className="shrink-0 inline-flex items-center gap-2 bg-primary-container text-on-primary-fixed font-headline text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3 hover:bg-primary-fixed-dim transition-colors duration-150"
            >
              Browse the gallery <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* CtaBanner — call-dominant variant: phone as primary, estimate as secondary */}
      <CtaBanner
        heading={"Broken Glass?\nCall Now."}
        subtext="24/7 emergency glaziers across Melbourne. ETA confirmed on the call. No voicemail, no forms."
        primaryCta={{ label: `Call ${siteConfig.phone}`, href: siteConfig.phoneHref }}
        secondaryCta={{ label: 'Get an Estimate Instead', href: '/instant-estimate/' }}
      />

      {/* Spacer so sticky mobile call bar doesn't obscure the CtaBanner CTA */}
      <div className="h-20 md:hidden" aria-hidden="true" />
    </>
  )
}
