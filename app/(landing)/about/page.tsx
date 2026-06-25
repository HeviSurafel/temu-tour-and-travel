'use client'

import * as React from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Shield, 
  Heart, 
  Leaf, 
  ShieldCheck, 
  Award, 
  Users, 
  ChevronRight,
  MessageCircle,
  Globe,
  Phone,
  Mail,
  MapPin,
  Star,
  Quote
} from 'lucide-react'
import { FaFacebook as Facebook,FaInstagram  as Instagram , FaTwitter as Twitter, FaYoutube as Youtube } from 'react-icons/fa'
import { Container } from '@/app/components/ui/container'
import { Button } from '@/app/components/ui/button'
import { cn } from '@/app/lib/utils'

// Single Guide Data
const GUIDE = {
  name: "Bono 'The Bridge' Kula",
  role: 'Lead Guide • Hamer Community',
  quote: '"My mission is simple: to make sure you don\'t just see my people, but you understand our story. I am the bridge between two worlds."',
  description: 'Bono has led expeditions for over 20 years. He is a recognized historian within the valley and holds a master\'s degree in Social Anthropology. His tours are known for their profound philosophical depth and rare access to sacred ceremonies.',
  image: '/Images/IMG-20260314-WA0001 (2).jpg',
  tags: ['Expert Tracker', 'Linguist', 'Cultural Historian'],
  experience: '20+ Years',
  languages: ['Hamer', 'Amharic', 'English'],
  specialties: ['Sacred Ceremonies', 'Anthropology', 'Wildlife Tracking'],
}

// Values data
const VALUES = [
  {
    icon: Shield,
    title: 'Cultural Integrity',
    description: 'We prioritize the dignity of our tribes over the demands of tourism, ensuring all interactions are consensual and respectful.',
    color: 'text-primary',
  },
  {
    icon: Leaf,
    title: 'Radical Sustainability',
    description: 'Our "Zero Footprint" protocols protect the Omo River ecosystem while 40% of all proceeds directly fund local school and clean water projects.',
    color: 'text-tertiary',
    span: 'md:row-span-2',
  },
  {
    icon: ShieldCheck,
    title: 'Safety & Comfort',
    description: 'Premium logistics paired with deep local knowledge ensure that even the most remote exploration is safe, secure, and serene.',
    color: 'text-secondary',
  },
]

export default function AboutPage() {
  const heroRef = React.useRef<HTMLElement>(null)
  const narrativeRef = React.useRef<HTMLDivElement>(null)
  const valuesRef = React.useRef<HTMLDivElement>(null)
  const guideRef = React.useRef<HTMLDivElement>(null)

  const isNarrativeInView = useInView(narrativeRef, { once: true, margin: '-100px' })
  const isValuesInView = useInView(valuesRef, { once: true, margin: '-100px' })
  const isGuideInView = useInView(guideRef, { once: true, margin: '-100px' })

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[819px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Images/photo_2026-06-23_14-13-44.jpg"
            alt="A wide-angle, cinematic landscape photograph of the Omo Valley at sunrise"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-desktop w-full">
          <div className="max-w-2xl text-white">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="uppercase tracking-widest text-sm font-semibold text-secondary-fixed mb-4 block"
            >
              Founded by Temu • Since 1994
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-display-lg text-display-lg mb-6 leading-tight"
            >
              Preserving the Soul of the Omo Valley
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-surface-variant/90 mb-8"
            >
              A legacy of local ownership, radical authenticity, and the deep-rooted desire to bridge the gap between ancient traditions and modern exploration.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Narrative Section */}
      <section className="py-section-gap-lg px-margin-desktop max-w-container-max mx-auto">
        <div ref={narrativeRef} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isNarrativeInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 space-y-8"
          >
            <h2 className="font-headline-md text-headline-md text-primary">
              The Ancestral Echo
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Temu Omo Valley was born not from a business plan, but from a necessity to protect. Founded by Temu, a local elder and cultural historian, we recognized that the world's gaze was turning towards our home.
            </p>
            <p className="text-base text-on-surface-variant leading-relaxed">
              Temu chose to lead the narrative. Instead of passive observation, we offer active immersion. Every journey with us is a handshake with history—a tactile, living experience that respects the rhythm of the valley while providing the safety and comfort of premium hospitality.
            </p>
            <div className="pt-4 border-l-4 border-primary pl-6">
              <p className="italic font-headline-sm text-headline-sm text-on-surface">
                "We don't just show you the valley; we help you hear its heartbeat."
              </p>
              <p className="text-sm text-on-surface-variant mt-2">— Temu, Founder</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isNarrativeInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7 relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative rounded-xl overflow-hidden h-80 editorial-shadow">
                  <Image
                    src="/Images/so.jpg"
                    alt="Temu, founder of Temu Omo Valley Tours"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm font-semibold">Temu • Founder</p>
                  </div>
                </div>
                <div className="bg-primary-container p-8 rounded-xl text-on-primary-container">
                  <span className="font-display-lg text-headline-md block mb-2">100%</span>
                  <p className="text-sm font-semibold">Locally Owned &amp; Operated</p>
                </div>
              </div>
              <div className="pt-12">
                <div className="relative rounded-xl overflow-hidden h-[400px] editorial-shadow">
                  <Image
                    src="/Images/about-village.jpg"
                    alt="Traditional circular village in the Omo Valley"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values Grid */}
      <section className="bg-surface-container-low py-section-gap-lg">
        <Container maxWidth="xl">
          <div ref={valuesRef} className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="inline-block text-sm font-semibold tracking-[0.3em] uppercase text-secondary mb-3"
            >
              Temu's Vision
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="font-headline-md text-headline-md text-on-surface mb-4"
            >
              Our Core Foundations
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              className="text-base text-on-surface-variant max-w-xl mx-auto"
            >
              Guided by Temu's wisdom, our work is built on four pillars that ensure every traveler leaves changed, and every community remains strengthened.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={cn(
                  'bg-surface-container-lowest p-10 rounded-xl border border-outline-variant/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-2',
                  value.span
                )}
              >
                <value.icon className={cn('h-10 w-10 mb-6', value.color)} />
                <h3 className="font-headline-sm text-headline-sm mb-4">{value.title}</h3>
                <p className="text-base text-on-surface-variant">{value.description}</p>
              </motion.div>
            ))}

            {/* Sustainability with Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.5 }}
              className="bg-surface-container-lowest p-10 rounded-xl border border-outline-variant/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <Leaf className="h-10 w-10 text-tertiary mb-6" />
                <h3 className="font-headline-sm text-headline-sm mb-4">Radical Sustainability</h3>
                <p className="text-base text-on-surface-variant">
                  Our 'Zero Footprint' protocols protect the Omo River ecosystem while 40% of all proceeds directly fund local school and clean water projects.
                </p>
              </div>
              <div className="relative rounded-lg mt-8 h-48 w-full overflow-hidden">
                <Image
                  src="/Images/about-weaving.jpg"
                  alt="Local hands weaving a traditional basket"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </motion.div>

            {/* Legacy Grant - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.6 }}
              className="bg-primary-container p-10 rounded-xl text-on-primary-container md:col-span-3 flex flex-col md:flex-row items-center gap-8 justify-between"
            >
              <div className="flex-1">
                <h3 className="font-headline-sm text-headline-sm mb-2 text-white">
                  The Omo Legacy Grant
                </h3>
                <p className="text-base opacity-90">
                  Every guest contributes to a trust that supports legal advocacy for land rights and cultural preservation in the valley.
                </p>
              </div>
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 whitespace-nowrap"
              >
                Learn More
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Single Guide Feature Section */}
      <section ref={guideRef} className="py-section-gap-lg overflow-hidden bg-surface">
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isGuideInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-sm font-semibold tracking-[0.3em] uppercase text-primary mb-3">
              Meet Your Guide
            </span>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Voices of the Valley
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">
              Every journey is led by our expert guides who carry the stories and wisdom of the Omo Valley.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isGuideInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-surface-container-low rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Guide Image */}
              <div className="relative aspect-[4/5] lg:aspect-auto lg:h-full min-h-[500px]">
                <Image
                  src={GUIDE.image}
                  alt={GUIDE.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:hidden" />
                
                {/* Mobile overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden">
                  <div className="flex flex-wrap gap-2">
                    {GUIDE.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Guide Content */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                  <span className="text-sm font-semibold text-secondary">Featured Guide</span>
                </div>

                <h3 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-2">
                  {GUIDE.name}
                </h3>
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
                  {GUIDE.role}
                </p>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <Award className="h-4 w-4 text-primary" />
                    <span>{GUIDE.experience} Experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{GUIDE.languages.join(' • ')}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <Quote className="h-6 w-6 text-primary/30 mb-2" />
                  <p className="font-headline-sm text-headline-sm text-on-surface italic leading-relaxed">
                    {GUIDE.quote}
                  </p>
                </div>

                <p className="text-base text-on-surface-variant leading-relaxed mb-8">
                  {GUIDE.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {GUIDE.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button variant="primary" size="lg" className="w-full sm:w-auto">
                      Book a Tour with {GUIDE.name.split(' ')[0]}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/expeditions">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      View Expeditions
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Radical Authenticity Statement */}
      <section className="bg-tertiary text-on-tertiary py-section-gap-lg">
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <h2 className="font-display-lg text-headline-md md:text-display-lg">
              The Promise of Radical Authenticity
            </h2>
            <p className="text-lg text-on-tertiary/80 leading-relaxed">
              We do not stage dances. We do not manufacture "tradition." If a ceremony is happening, you may be invited. If it is a quiet day of tending cattle, you will witness the beauty of the mundane. We believe the true Omo Valley is more interesting than any tourist fantasy.
            </p>
            <div className="pt-4">
              <Link href="/contact">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white shadow-xl"
                >
                  Inquire About a Journey
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  )
}