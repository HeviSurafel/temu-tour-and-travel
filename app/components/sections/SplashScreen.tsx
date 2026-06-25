'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Loader2 } from 'lucide-react'

interface SplashScreenProps {
  onComplete?: () => void
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = React.useState(true)

  React.useEffect(() => {
    // Show splash for 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false)
      onComplete?.()
    }, 5000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -50,
            transition: { duration: 0.5, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-tertiary/5" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-tertiary/5 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          {/* Content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.6,
              ease: [0.34, 1.56, 0.64, 1]
            }}
            className="relative z-10 text-center max-w-md mx-auto px-6"
          >
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.5, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.8,
                ease: [0.34, 1.56, 0.64, 1],
                delay: 0.2
              }}
              className="mb-8"
            >
              <div className="relative w-32 h-32 mx-auto">
                <Image
                  src="/Images/Logo.jpg"
                  alt="Tem Omo Valley Tours"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* Brand Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-3"
            >
              Temu Omo Valley
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-on-surface-variant font-body-md mb-8"
            >
              Where Humanity Finds Its Origins
            </motion.p>

            {/* Loading Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ 
                duration: 5,
                ease: "linear"
              }}
              className="h-1 bg-primary/20 rounded-full overflow-hidden max-w-xs mx-auto"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ 
                  duration: 5,
                  ease: "linear"
                }}
                className="h-full bg-primary rounded-full"
              />
            </motion.div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xs text-on-surface-variant/60 mt-3 font-label-md"
            >
              Preparing your journey...
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}