'use client'

import * as React from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Calendar, MapPin, Clock } from 'lucide-react'
import { SEASONS } from '@/app/lib/constants'
import { Container } from '@/app/components/ui/container'
import { cn } from '@/app/lib/utils'

export function SeasonsGrid() {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="seasons" className="py-section-gap-lg">
      <Container maxWidth="xl">
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
            className="inline-block text-sm font-semibold tracking-[0.3em] uppercase text-primary mb-4"
          >
            When to Visit
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            className="font-headline-md text-headline-md text-on-surface mb-4"
          >
            Rhythm of the Seasons
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
            className="text-on-surface-variant max-w-2xl mx-auto text-lg"
          >
            The Omo Valley transforms with the rains and the heat. Choose your window
            to witness the valley's eternal cycles.
          </motion.p>
        </div>

        {/* Original layout with different sizes */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[800px]">
          {SEASONS.map((season, index) => (
            <motion.div
              key={season.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={cn(
                season.span,
                "group relative overflow-hidden rounded-xl min-h-[300px] md:min-h-[400px]"
              )}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={season.image}
                  alt={season.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6 md:p-8 lg:p-10 w-full">
                <div className="mb-3">
                  <span className={cn(
                    "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-sm",
                    season.badgeColor === 'primary' && "bg-primary/90 text-white",
                    season.badgeColor === 'secondary' && "bg-secondary/90 text-white",
                    season.badgeColor === 'tertiary' && "bg-tertiary/90 text-white",
                  )}>
                    <Calendar className="h-3 w-3" />
                    {season.period}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-white mb-2 group-hover:text-primary-fixed transition-colors">
                  {season.title}
                </h3>
                <p className="text-white/80 text-sm max-w-md line-clamp-2">
                  {season.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 group">
            <span>Explore All Seasons</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>
      </Container>
    </section>
  )
}