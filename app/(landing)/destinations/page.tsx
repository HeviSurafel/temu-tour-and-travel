'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Clock, 
  Calendar,
  Users,
  Store,
  BookOpen,
  Globe,
  MessageCircle,
  ArrowRight,
  Menu,
  User,
  Search,
  Phone,
  Mail
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Container } from '@/app/components/ui/container'
import { Button } from '@/app/components/ui/button'
import { cn } from '@/app/lib/utils'

// Destination data
const DESTINATIONS = [
  {
    id: 1,
    name: 'Jinka',
    subtitle: 'The Gateway',
    description: 'The bustling market town and cultural hub of the Omo Valley, home to the Ari and Mursi tribes.',
    image: '/Images/destination-jinka.jpg',
    tribes: ['Ari', 'Mursi'],
    marketDays: ['Saturday', 'Tuesday'],
    span: 'md:col-span-2',
    height: 'h-[500px]',
  },
  {
    id: 2,
    name: 'Turmi',
    subtitle: 'Heart of Hamer',
    description: 'The center of Hamer culture, known for the legendary Bull Jumping ceremony and vibrant markets.',
    image: '/Images/destination-turmi.jpg',
    tribes: ['Hamer'],
    marketDays: ['Monday', 'Thursday'],
    span: '',
    height: 'h-[500px]',
  },
  {
    id: 3,
    name: 'Konso',
    subtitle: 'UNESCO Heritage',
    description: 'Ancient terraced landscapes and stone-walled villages, a testament to ingenious agricultural engineering.',
    image: '/Images/destination-konso.jpg',
    tribes: ['Konso'],
    marketDays: ['Monday', 'Thursday'],
    span: '',
    height: 'h-[400px]',
  },
  {
    id: 4,
    name: 'Arba Minch',
    subtitle: '40 Springs',
    description: 'A lush oasis with stunning views of Lake Abaya and Lake Chamo, surrounded by tropical vegetation.',
    image: '/Images/destination-arba-minch.jpg',
    tribes: ['Various'],
    marketDays: ['Daily'],
    span: '',
    height: 'h-[400px]',
  },
  {
    id: 5,
    name: 'Omorate',
    subtitle: 'River Border',
    description: 'A remote settlement on the Kenyan border, home to the Dassanech tribe along the Omo River.',
    image: '/Images/destination-omorate.jpg',
    tribes: ['Dassanech'],
    marketDays: ['Friday'],
    span: '',
    height: 'h-[400px]',
  },
  {
    id: 6,
    name: 'Mago National Park',
    subtitle: 'Wilderness & Mursi',
    description: 'Home to the nomadic Mursi people and dense wildlife populations in the savannah bush.',
    image: '/Images/destination-mago.jpg',
    tribes: ['Mursi'],
    marketDays: ['Seasonal'],
    span: 'md:col-span-3',
    height: 'h-[350px]',
    isPark: true,
  },
]

// Market data
const MARKET_DAYS = [
  { day: 'Monday', locations: ['Turmi', 'Kako'] },
  { day: 'Saturday', locations: ['Jinka', 'Dimeka'] },
  { day: 'Thursday', locations: ['Turmi', 'Konso'] },
  { day: 'Tuesday', locations: ['Jinka'] },
  { day: 'Friday', locations: ['Omorate'] },
]

// Tribal facts
const TRIBAL_FACTS = [
  {
    title: 'Cultural Diversity',
    description: 'Over 16 distinct ethnic groups reside in the valley, each with unique languages, customs, and decorative arts.',
  },
  {
    title: 'Ancient Rites',
    description: 'Witness the Hamer "Bull Jumping" ceremony, a rite of passage that has remained unchanged for centuries.',
  },
]

export default function DestinationsPage() {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[716px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Images/destinations-hero.jpg"
            alt="A breathtaking panoramic landscape of the Omo Valley at sunrise"
            fill
            priority
            className="object-cover brightness-75"
            sizes="100vw"
            quality={90}
          />
        </div>
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 mb-6 rounded-full bg-secondary-container/20 border border-secondary/30 text-secondary font-label-md text-label-md"
          >
            Sacred Ancestral Lands
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display-lg text-display-lg text-white max-w-2xl mb-6"
          >
            Discover the Living Soul of the Omo Valley
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-body-lg text-body-lg text-white/90 max-w-xl mb-10"
          >
            Journey through the cradle of humanity, where ancient traditions breathe and every sunset tells a story of a thousand years.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/tours">
              <Button variant="primary" size="lg" className="shadow-xl">
                Explore Tours
              </Button>
            </Link>
            <Button variant="secondary" size="lg" className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20">
              View Map
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Destinations Bento Grid */}
      <section className="py-section-gap-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">
              Major Cultural Hubs
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              We've curated the most authentic destinations in South Ethiopia. Each location offers a unique window into the distinct tribes, landscapes, and rhythms of the Omo Valley.
            </p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
              className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={() => setCurrentSlide(prev => prev + 1)}
              className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DESTINATIONS.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                destination.span,
                "group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-outline-variant/10",
                destination.height
              )}
            >
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                {!destination.isPark && (
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-md text-label-md mb-3 inline-block">
                        {destination.subtitle}
                      </span>
                      <h3 className={cn(
                        "text-white mb-2",
                        destination.span === 'md:col-span-2' ? "font-headline-md text-headline-md" : "font-headline-sm text-headline-sm"
                      )}>
                        {destination.name}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-white/80 font-label-md text-label-md">
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {destination.tribes.join(' & ')} Tribes
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Market: {destination.marketDays.join('/')}
                        </span>
                      </div>
                    </div>
                    <Link href={`/destinations/${destination.id}`}>
                      <button className="bg-white text-primary p-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    </Link>
                  </div>
                )}

                {/* Park Special Layout */}
                {destination.isPark && (
                  <div className="text-center max-w-xl mx-auto">
                    <h3 className="font-display-lg text-headline-md text-white mb-4">
                      {destination.name}
                    </h3>
                    <p className="text-white/90 font-body-md mb-6">
                      {destination.description}
                    </p>
                    <Link href={`/destinations/${destination.id}`}>
                      <Button variant="secondary" size="default" className="bg-white text-primary hover:bg-primary hover:text-white transition-all">
                        Explore Wilderness
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Informational Section with Glassmorphism */}
      <section className="bg-surface-container-low py-section-gap-lg">
        <Container maxWidth="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-section-gap-sm items-center">
            {/* Map Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <Image
                  src="/Images/destinations-map.jpg"
                  alt="A detailed map of the Omo Valley in Ethiopia"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary-container/30 rounded-full blur-3xl -z-0" />
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-primary-container/20 rounded-full blur-3xl -z-0" />
            </div>

            {/* Information Cards */}
            <div className="flex flex-col gap-8">
              {/* Tribal Facts */}
              <div className="bg-surface-container-lowest/80 backdrop-blur-sm p-8 rounded-2xl border border-white/50 shadow-sm">
                <h4 className="font-headline-sm text-headline-sm text-primary mb-4 flex items-center gap-3">
                  <BookOpen className="h-6 w-6" />
                  Tribal Facts
                </h4>
                <ul className="space-y-4">
                  {TRIBAL_FACTS.map((fact) => (
                    <li key={fact.title} className="flex items-start gap-4">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="font-body-md text-body-md">
                        <strong className="text-on-surface">{fact.title}:</strong> {fact.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Market Dynamics */}
              <div className="bg-surface-container-lowest/80 backdrop-blur-sm p-8 rounded-2xl border border-white/50 shadow-sm">
                <h4 className="font-headline-sm text-headline-sm text-primary mb-4 flex items-center gap-3">
                  <Store className="h-6 w-6" />
                  Market Dynamics
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                  Markets are the social heartbeat of the Omo Valley. They aren't just for trade—they are where news is shared, marriages are arranged, and cultural bonds are reinforced.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {MARKET_DAYS.slice(0, 4).map((market) => (
                    <div key={market.day} className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/20">
                      <span className="block font-label-md text-primary">{market.day}</span>
                      <span className="block font-body-md text-sm">{market.locations.join(' & ')}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-section-gap-lg px-margin-mobile text-center">
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display-lg text-headline-md text-primary mb-6">
              Ready for an Unforgettable Journey?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
              Our expert local guides are ready to take you deep into the heart of these incredible destinations. Safe, respectful, and deeply authentic.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/inquiries">
                <Button variant="primary" size="lg" className="shadow-xl w-full sm:w-auto">
                  Book Custom Package
                </Button>
              </Link>
              <a
                href="https://wa.me/251911234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-10 py-5 rounded-lg font-button text-button hover:bg-primary hover:text-white transition-all"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Expert
              </a>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* WhatsApp Sticky FAB */}
      <a
        href="https://wa.me/251911234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center gap-2 group"
      >
        <span className="hidden group-hover:block pl-2 font-button text-button">Chat with Us</span>
        <FaWhatsapp className="h-6 w-6" />
      </a>
    </main>
  )
}