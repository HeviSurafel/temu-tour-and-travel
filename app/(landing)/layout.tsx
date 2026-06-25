'use client'

import * as React from 'react'
import { Navbar } from '@/app/components/layout/Navbar'
import { MobileMenu } from '@/app/components/layout/MobileMenu'
import { Footer } from '@/app/components/layout/Footer'
import { WhatsAppButton } from '@/app/components/shared/WhatsAppButton'
import { SplashScreen } from '@/app/components/sections/SplashScreen'

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [showSplash, setShowSplash] = React.useState(true)

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  return (
    <>
      {/* Splash Screen */}
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      
      {/* Main Content - Only visible after splash */}
      <div style={{ opacity: showSplash ? 0 : 1, transition: 'opacity 0.5s ease' }}>
        <Navbar onMenuClick={() => setIsMenuOpen(true)} />
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </div>
    </>
  )
}