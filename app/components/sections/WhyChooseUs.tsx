'use client'

import * as React from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Shield, 
  Award, 
  Users, 
  Leaf, 
  Heart, 
  MapPin,
  ChevronRight,
  Star,
  Clock
} from 'lucide-react'
import { Container } from '@/app/components/ui/container'
import { Button } from '@/app/components/ui/button'
import { cn } from '@/app/lib/utils'

// Features data
const FEATURES = [
  {
    icon: Shield,
    title: 'Cultural Integrity',
    description: 'We prioritize the dignity of local tribes over tourism demands, ensuring all interactions are consensual and respectful.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: Leaf,
    title: 'Radical Sustainability',
    description: 'Our Zero Footprint protocols protect the Omo River ecosystem with 40% of proceeds funding local schools and clean water projects.',
    color: 'text-tertiary',
    bgColor: 'bg-tertiary/10',
  },
  {
    icon: Heart,
    title: 'Local Ownership',
    description: '100% locally owned and operated by community members who have called the Omo Valley home for generations.',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
  },
  {
    icon: Users,
    title: 'Expert Guides',
    description: 'Our guides are cultural historians, linguists, and trackers with decades of experience and deep community connections.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
]

// Stats data
const STATS = [
  { value: '16+', label: 'Tribes Explored', icon: Users },
  { value: '94%', label: 'Satisfied Travelers', icon: Star },
  { value: '20+', label: 'Years of Experience', icon: Clock },
  { value: '100%', label: 'Locally Owned', icon: Shield },
]

export function WhyChooseUs() {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const statsRef = React.useRef<HTMLDivElement>(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-section-gap-lg bg-surface-container-low overflow-hidden">
      <Container maxWidth="xl">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <span className="inline-block text-sm font-semibold tracking-[0.3em] uppercase text-primary">
              Why Tem Omo Valley
            </span>

            <h2 className="font-headline-md text-headline-md text-on-surface">
              Your Gateway to <br />
              <span className="text-primary">Authentic</span> Cultural Experiences
            </h2>

            <p className="text-lg text-on-surface-variant leading-relaxed">
              We don't just show you the Omo Valley—we invite you into its heart. With deep roots in the community and decades of experience, we create journeys that are respectful, transformative, and unforgettable.
            </p>

            {/* Features Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {FEATURES.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 rounded-xl bg-surface hover:shadow-lg transition-shadow duration-300"
                >
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                    feature.bgColor
                  )}>
                    <feature.icon className={cn("h-5 w-5", feature.color)} />
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link href="/about">
                <Button variant="primary" size="default">
                  Learn More About Us
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/tours">
                <Button variant="outline" size="default">
                  View Our Tours
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/Images/IMG_20260308_161837_252 (2).jpg"
                alt="A Hamar elder with traditional adornments in the Omo Valley"
                width={600}
                height={700}
                className="object-cover w-full h-[500px] lg:h-[600px]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface">
                      Award-Winning Cultural Tours
                    </p>
                    <p className="text-xs text-on-surface-variant">
                      Recognized for excellence in sustainable tourism
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-2 gap-4 mt-6">
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-surface p-4 rounded-xl border border-outline-variant/10 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <stat.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                  <p className="font-headline-sm text-headline-sm text-on-surface">
                    {stat.value}
                  </p>
                  <p className="text-xs text-on-surface-variant font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}