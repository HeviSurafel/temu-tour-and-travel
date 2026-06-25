'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, Search, User, Phone, Mail, ChevronDown } from 'lucide-react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'
import { cn } from '@/app/lib/utils'

interface NavbarProps {
  onMenuClick: () => void
}

// Extended navigation items
const NAV_ITEMS = [
  { label: 'Home', href: '/' },
   { label: 'About', href: '/about' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Tours', href: '/tours' },
  { label: 'Blog', href: '/blog' },
  { label: 'Inquiries', href: '/inquiries' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar({ onMenuClick }: NavbarProps) {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500',
        scrolled 
          ? 'scrolled-nav border-b border-outline-variant/20 py-1' 
          : 'bg-transparent border-b-transparent py-2'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col w-full max-w-full px-4 md:px-8 lg:px-12">
        {/* Top Bar - Contact & Social Media */}
        <div className={cn(
          "hidden lg:flex justify-between items-center py-2 border-b transition-all duration-500",
          scrolled ? "border-outline-variant/10" : "border-white/10"
        )}>
          {/* Contact Info */}
          <div className="flex items-center gap-6">
            <a 
              href="tel:+251911234567" 
              className={cn(
                "flex items-center gap-2 text-sm transition-colors hover:opacity-70",
                scrolled ? "text-on-surface-variant" : "text-white/80"
              )}
            >
              <Phone className="h-4 w-4" />
              <span>+251 91 123 4567</span>
            </a>
            <a 
              href="mailto:info@temomo.com" 
              className={cn(
                "flex items-center gap-2 text-sm transition-colors hover:opacity-70",
                scrolled ? "text-on-surface-variant" : "text-white/80"
              )}
            >
              <Mail className="h-4 w-4" />
              <span>info@temomo.com</span>
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className={cn(
                "transition-colors hover:opacity-70",
                scrolled ? "text-on-surface-variant hover:text-[#1877f2]" : "text-white/80 hover:text-white"
              )}
              aria-label="Facebook"
            >
              <FaFacebook className="h-4 w-4" />
            </a>
            <a 
              href="#" 
              className={cn(
                "transition-colors hover:opacity-70",
                scrolled ? "text-on-surface-variant hover:text-[#e4405f]" : "text-white/80 hover:text-white"
              )}
              aria-label="Instagram"
            >
              <FaInstagram className="h-4 w-4" />
            </a>
            <a 
              href="#" 
              className={cn(
                "transition-colors hover:opacity-70",
                scrolled ? "text-on-surface-variant hover:text-[#ff0000]" : "text-white/80 hover:text-white"
              )}
              aria-label="YouTube"
            >
              <FaYoutube className="h-4 w-4" />
            </a>
            <a 
              href="#" 
              className={cn(
                "transition-colors hover:opacity-70",
                scrolled ? "text-on-surface-variant hover:text-[#1da1f2]" : "text-white/80 hover:text-white"
              )}
              aria-label="Twitter"
            >
              <FaTwitter className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo and Menu Button */}
          <div className="flex items-center gap-4 md:gap-8 flex-shrink-0">
            <button
              onClick={onMenuClick}
              className={cn(
                "hover:opacity-80 transition-opacity cursor-pointer",
                scrolled ? "text-primary" : "text-white"
              )}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
            
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <Image
                  src="/Images/Logo.jpg"
                  alt="Tem Omo Valley Tours"
                  fill
                  className="object-contain"
                />
              </div>
              <span className={cn(
                "font-display-lg text-headline-sm tracking-tight transition-colors whitespace-nowrap",
                scrolled ? "text-primary" : "text-white"
              )}>
                Tem Omo
              </span>
            </Link>
          </div>

          {/* Navigation Links - Desktop - Wider spacing */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8 flex-1 justify-center px-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-label-md text-label-md transition-opacity hover:opacity-70 whitespace-nowrap",
                  scrolled ? "text-on-surface-variant" : "text-white/90"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-3 md:gap-5 flex-shrink-0">
            {/* Mobile contact shortcuts */}
            <div className="flex items-center gap-2 lg:hidden">
              <a 
                href="tel:+251911234567" 
                className={cn(
                  "transition-colors hover:opacity-70",
                  scrolled ? "text-on-surface-variant" : "text-white/80"
                )}
                aria-label="Call us"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a 
                href="mailto:info@temomo.com" 
                className={cn(
                  "transition-colors hover:opacity-70",
                  scrolled ? "text-on-surface-variant" : "text-white/80"
                )}
                aria-label="Email us"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            <button 
              className={cn(
                "hover:opacity-80 transition-opacity",
                scrolled ? "text-on-surface-variant" : "text-white/90"
              )}
              aria-label="Search"
            >
              <Search className="h-5 w-5 md:h-6 md:w-6" />
            </button>
            <button 
              className={cn(
                "hover:opacity-80 transition-opacity",
                scrolled ? "text-primary" : "text-white"
              )}
              aria-label="Account"
            >
              <User className="h-5 w-5 md:h-6 md:w-6" />
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}