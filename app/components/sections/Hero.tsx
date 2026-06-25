'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/app/components/ui/button'

export function Hero() {
  return (
    <header className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/Images/Hero.jpg')",
          backgroundPosition: 'center 25%',
          backgroundSize: 'cover',
        }}
      />
      
      {/* Dark overlays for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 hero-gradient" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-7xl px-6 md:px-12">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base md:text-lg tracking-[0.3em] uppercase mb-6 block text-white/90 font-semibold"
        >
          Deep Cultural Immersion
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-8 leading-[1.1]"
        >
          Where Humanity Finds Its Origins
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Experience the timeless traditions and breathtaking landscapes of the Omo Valley
          with Ethiopia's leading cultural expedition masters.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button
            variant="primary"
            size="lg"
            className="min-w-[220px] px-8 py-6 text-lg font-bold shadow-2xl hover:shadow-xl transition-all"
            onClick={() => {
              document.getElementById('seasons')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Begin Your Journey
          </Button>
          <Link href="/expeditions">
            <Button 
              variant="secondary" 
              size="lg" 
              className="min-w-[220px] px-8 py-6 text-lg font-bold border-2 border-white/40 hover:bg-white/30 transition-all"
            >
              View Expeditions
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70"
      >
        <span className="text-sm uppercase tracking-[0.2em] font-semibold">Discover More</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </motion.div>
    </header>
  )
}