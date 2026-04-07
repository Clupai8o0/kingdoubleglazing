import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { footerNav } from '@/data/nav'
import { siteConfig } from '@/data/site'

export function Footer() {
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" aria-label="King Double Glazing — home" className="inline-block mb-4">
              <Image
                src={siteConfig.logos.dark}
                alt="King Double Glazing"
                width={222}
                height={87}
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-sm text-white/60 mb-4 leading-relaxed">
              Stop. Don&apos;t Overpay.<br />
              Melbourne&apos;s retrofit double glazing specialists.<br />
              From $495/m².
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center gap-2 hover:text-primary-container transition-colors duration-150"
                >
                  <Phone size={13} aria-hidden="true" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 hover:text-primary-container transition-colors duration-150"
                >
                  <Mail size={13} aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="inline-flex items-start gap-2">
                  <MapPin size={13} className="mt-0.5 shrink-0" aria-hidden="true" />
                  {siteConfig.address.display}
                </span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">Services</h3>
            <ul className="space-y-2">
              {footerNav.services.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/70 hover:text-primary-container transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">Company</h3>
            <ul className="space-y-2">
              {footerNav.company.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/70 hover:text-primary-container transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {footerNav.areas.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/70 hover:text-primary-container transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} Brooklyn Glass Pty Ltd t/a King Double Glazing. All rights reserved.
          </p>
          <p>VIC Licence No. {siteConfig.licenseNumber}</p>
        </div>
      </div>
    </footer>
  )
}
