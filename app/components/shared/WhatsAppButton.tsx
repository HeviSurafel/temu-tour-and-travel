'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle as Chat} from 'lucide-react'
import { Button } from '@/app/components/ui/button'

export function WhatsAppButton() {
  return (
    <motion.a
      href="#"
      className="fixed bottom-8 right-8 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 0.5,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button className="bg-[#25D366] hover:bg-[#1da851] text-white shadow-2xl flex items-center gap-3 px-6 py-4">
        <Chat className="h-5 w-5 fill-current" />
        <span>Chat with an Expert</span>
      </Button>
    </motion.a>
  )
}