'use client'

import Link from 'next/link'
import { MapPin, Phone, Globe, Camera, Mail, Heart, Code,  ExternalLink } from 'lucide-react'
import { FOOTER_LINKS } from '@/app/lib/constants'
import { Container } from '@/app/components/ui/container'

export function Footer() {
  return (
    <footer className="bg-surface-container-highest dark:bg-inverse-surface border-t border-outline-variant/30 py-20">
      <Container maxWidth="xl" padding="md">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="max-w-sm">
            <div className="font-display-lg text-display-lg-mobile text-primary mb-6">
              Tem Omo Valley
            </div>
            <p className="text-on-surface-variant font-body-md mb-8">
              Preserving heritage through authentic connection and sustainable cultural tourism.
              Join us in protecting the living traditions of the Omo Valley.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">
                <Globe className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">
                <Camera className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {Object.entries(FOOTER_LINKS).map(([key, links]) => (
              <div key={key} className="flex flex-col gap-4">
                <h6 className="font-label-md text-label-md text-on-surface uppercase tracking-widest">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </h6>
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-container-max mx-auto mt-20 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-on-surface-variant font-body-md">
            © 2024 Tem Omo Valley Tours. All rights reserved.
          </p>
          <div className="flex gap-8 flex-wrap justify-center">
            <span className="text-on-surface-variant text-sm flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Jinka, Ethiopia
            </span>
            <span className="text-on-surface-variant text-sm flex items-center gap-2">
              <Phone className="h-4 w-4" /> +251 91 123 4567
            </span>
          </div>
        </div>

        {/* Developer Credit Section - More Prominent */}
        <div className="max-w-container-max mx-auto mt-12 pt-8 border-t border-outline-variant/10">
          <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant">Designed &amp; Developed by</p>
                  <p className="font-label-md text-label-md text-on-surface">
                    Surafel Wondu
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://surafel-portifolio-snfe.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm"
                >
                  <span>View Portfolio</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                <span className="text-on-surface-variant/30">|</span>
                <a
                  href="tel:+251964945647"
                  className="text-on-surface-variant hover:text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <Phone className="h-3.5 w-3.5" />
                  +251 964 945 647
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}