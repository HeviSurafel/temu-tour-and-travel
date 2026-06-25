'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X } from 'lucide-react'
import { NAV_ITEMS } from '@/app/lib/constants'
import { cn } from '@/app/lib/utils'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-[80%] max-w-sm bg-background z-50 shadow-xl"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-6 border-b border-outline-variant/20">
                <span className="font-display-lg text-headline-sm text-primary">Tem Omo</span>
                <button
                  onClick={onClose}
                  className="text-on-surface hover:opacity-80 transition-opacity"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex-1 p-6 space-y-6">
                {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors py-2"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="p-6 border-t border-outline-variant/20">
                <p className="text-on-surface-variant text-sm">
                  © 2024 Tem Omo Valley Tours
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}