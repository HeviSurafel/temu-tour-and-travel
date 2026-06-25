'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ArrowRight, Clock, MapPin, Star } from 'lucide-react'
import { EXPEDITIONS } from '@/app/lib/constants'
import { Container } from '@/app/components/ui/container'
import { Button } from '@/app/components/ui/button'
import { cn } from '@/app/lib/utils'

export function Expeditions() {
  const sliderRef = React.useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return
    const scrollAmount = sliderRef.current.clientWidth * 0.8
    sliderRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <section className="bg-surface-container-low py-section-gap-lg overflow-hidden">
      <Container maxWidth="xl">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="inline-block text-sm font-semibold tracking-[0.3em] uppercase text-primary mb-3">
              Featured Tours
            </span>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-2">
              Signature Expeditions
            </h2>
            <p className="text-on-surface-variant max-w-xl">
              Curated journeys designed for deep respect and total immersion into the heart of the Omo Valley.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              className="rounded-full w-12 h-12 border-2 hover:bg-primary hover:text-white hover:border-primary transition-all"
              aria-label="Previous expeditions"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              className="rounded-full w-12 h-12 border-2 hover:bg-primary hover:text-white hover:border-primary transition-all"
              aria-label="Next expeditions"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 md:gap-8 overflow-x-auto pb-8 snap-x no-scrollbar scroll-smooth"
        >
          {EXPEDITIONS.map((expedition, index) => (
            <motion.div
              key={expedition.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="min-w-[300px] sm:min-w-[380px] md:min-w-[420px] lg:min-w-[450px] snap-start group"
            >
              <Link href={`/expeditions/${expedition.id}`} className="block">
                {/* Image Container */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-5 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src={expedition.image}
                    alt={expedition.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 300px, (max-width: 768px) 380px, (max-width: 1024px) 420px, 450px"
                    priority={index < 2}
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-secondary/90 backdrop-blur-sm text-on-secondary px-4 py-2 rounded-full font-label-md text-label-md shadow-lg flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5" />
                    {expedition.duration}
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span>4.9</span>
                    <span className="text-white/60">(128)</span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <MapPin className="h-4 w-4" />
                    <span>Omo Valley, Ethiopia</span>
                  </div>
                  
                  <h4 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-1">
                    {expedition.title}
                  </h4>
                  
                  <p className="text-on-surface-variant text-sm md:text-base line-clamp-2">
                    {expedition.description}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-outline-variant/20">
                    <div>
                      <span className="font-headline-sm text-primary">
                        {expedition.price}
                      </span>
                      <span className="text-on-surface-variant text-sm ml-1">/ person</span>
                    </div>
                    <button className="text-primary font-button flex items-center gap-2 group/btn hover:gap-3 transition-all">
                      <span className="text-sm">View Details</span>
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="flex justify-center mt-6 md:hidden">
          <div className="flex gap-2">
            {EXPEDITIONS.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-outline-variant/50"
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/expeditions">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all px-10"
            >
              View All Expeditions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}