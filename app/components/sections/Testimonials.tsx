'use client'

import * as React from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote, ArrowUpRight } from 'lucide-react'
import { TESTIMONIALS } from '@/app/lib/constants'
import { Container } from '@/app/components/ui/container'

export function Testimonials() {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-section-gap-lg">
      <Container maxWidth="xl">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="w-full aspect-square rounded-2xl overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('/Images/testimonial-bg.jpg')" }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-container p-8 rounded-2xl shadow-xl hidden md:block"
            >
              <Quote className="text-white h-8 w-8 mb-4" />
              <p className="text-white/90 italic font-body-md">
                "The most profound connection to our human story I have ever experienced."
              </p>
            </motion.div>
          </div>

          <div>
            <span className="font-label-md text-label-md text-primary tracking-widest uppercase block mb-6">
              Testimonials
            </span>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-12">
              Voices of the Valley
            </h2>

            <div className="space-y-12">
              {TESTIMONIALS.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className={`border-l-4 ${
                    testimonial.featured ? 'border-primary-fixed' : 'border-outline-variant/30'
                  } pl-8`}
                >
                  <p
                    className={`${
                      testimonial.featured
                        ? 'font-headline-sm text-headline-sm text-on-surface'
                        : 'font-body-lg text-body-lg text-on-surface-variant'
                    } mb-4 leading-relaxed`}
                  >
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-surface-container-highest" />
                    <div>
                      <h5 className="font-label-md text-label-md text-on-surface">
                        {testimonial.author}
                      </h5>
                      <p className="text-on-surface-variant text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 flex gap-4">
              <button className="text-primary font-button flex items-center gap-2 group border-b border-primary pb-1">
                Read all reviews
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}