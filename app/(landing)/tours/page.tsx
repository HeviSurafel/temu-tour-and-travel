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
  Check, 
  Search,
  User,
  Menu,
  Star,
  Filter,
  X,
  Share2,
  Camera,
  MessageCircle,
  ChevronDown
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Container } from '@/app/components/ui/container'
import { Button } from '@/app/components/ui/button'
import { cn } from '@/app/lib/utils'

// Tour data
const TOURS = [
  {
    id: 1,
    title: 'Spirit of the Hamer People',
    location: 'Turmi & Surroundings',
    duration: '8 Days / 7 Nights',
    originalPrice: '$2,450',
    price: '$1,890',
    description: 'Witness the legendary Bull Jumping ceremony and immerse yourself in the daily life of the Hamer tribe. This curated journey offers intimate access to seasonal festivals and traditional villages, perfect for serious cultural photographers.',
    image: '/Images/tour-hamer.jpg',
    badges: ['Bestseller', 'Photography'],
    features: ['Private 4x4 Transport', 'Expert Local Guide', 'Tribal Permissions', 'Eco-Lodge Stay'],
    category: 'Cultural Photography',
  },
  {
    id: 2,
    title: 'River Tribes & Wild Borders',
    location: 'Karo, Dasanech & Nyangatom',
    duration: '12 Days / 11 Nights',
    originalPrice: null,
    price: '$3,200',
    description: 'Navigate the lower reaches of the Omo River to meet the masters of body painting, the Karo. This expedition takes you deep into the remote borders near Lake Turkana, visiting tribes rarely seen by outsiders.',
    image: '/Images/tour-river.jpg',
    badges: ['Limited Seats'],
    features: ['Boat River Crossings', 'Expedition Tents', 'Professional Chef', 'Cultural Exchanges'],
    category: 'Tribal Festivals',
  },
  {
    id: 3,
    title: 'Mursi & Suri Highlands',
    location: 'Mago National Park',
    duration: '6 Days / 5 Nights',
    originalPrice: null,
    price: '$1,450',
    description: 'A focused trek through the highlands of the Mago National Park to visit the iconic Mursi people. Experience their unique aesthetics and learn about the significance of the clay lip plates in their cultural identity.',
    image: '/Images/tour-mursi.jpg',
    badges: [],
    features: ['Park Entry Permits', 'Village Donations'],
    category: 'Cultural Photography',
  },
]

// Filter categories
const CATEGORIES = ['Cultural Photography', 'Tribal Festivals', 'Wildlife & Nature', 'Private Luxury']
const DURATIONS = ['3-5 Days', '6-10 Days', '11+ Days']

export default function ToursPage() {
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>(['Cultural Photography'])
  const [selectedDuration, setSelectedDuration] = React.useState<string>('6-10 Days')
  const [priceRange, setPriceRange] = React.useState<number>(5000)
  const [isMobileFilterOpen, setIsMobileFilterOpen] = React.useState(false)
  const [sortBy, setSortBy] = React.useState('Recommended')

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  const filteredTours = TOURS.filter(tour => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(tour.category)
    // Add more filter logic as needed
    return categoryMatch
  })

  return (
    <main className="pt-20">
      {/* Hero Header */}
      <section className="relative h-[614px] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Images/tours-hero.jpg"
            alt="A cinematic, high-resolution panoramic view of the Omo Valley landscape at sunrise"
            fill
            priority
            className="object-cover brightness-[0.7]"
            sizes="100vw"
            quality={90}
          />
        </div>
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="relative z-20 text-center px-margin-mobile">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display-lg text-display-lg text-white text-shadow-premium mb-4"
          >
            Curated Omo Expeditions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-body-lg text-body-lg text-white/90 max-w-2xl mx-auto text-shadow-premium"
          >
            Deep cultural immersion through the ancient traditions and majestic landscapes of Southern Ethiopia's tribal heartlands.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <Container maxWidth="full" padding="lg" className="py-section-gap-sm">
        <div className="flex flex-col md:grid md:grid-cols-12 gap-8">
          {/* Sidebar Filter - Desktop */}
          <aside className="md:col-span-3 space-y-8">
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 sticky top-24">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-6">Refine Tours</h3>

              {/* Category Filter */}
              <div className="mb-8">
                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-4">
                  Experience Type
                </p>
                <div className="space-y-3">
                  {CATEGORIES.map((category) => (
                    <label key={category} className="flex items-center gap-3 group cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="w-5 h-5 rounded border-outline text-primary focus:ring-primary"
                      />
                      <span className="font-body-md text-body-md group-hover:text-primary transition-colors">
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Duration Filter */}
              <div className="mb-8">
                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-4">
                  Duration
                </p>
                <div className="space-y-3">
                  {DURATIONS.map((duration) => (
                    <label key={duration} className="flex items-center gap-3 group cursor-pointer">
                      <input
                        type="radio"
                        name="duration"
                        checked={selectedDuration === duration}
                        onChange={() => setSelectedDuration(duration)}
                        className="w-5 h-5 border-outline text-primary focus:ring-primary"
                      />
                      <span className="font-body-md text-body-md group-hover:text-primary transition-colors">
                        {duration}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-4">
                  Budget Range
                </p>
                <input
                  type="range"
                  min="1200"
                  max="5500"
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  className="w-full accent-primary h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-2 font-label-md text-on-surface-variant">
                  <span>$1,200</span>
                  <span>${priceRange.toLocaleString()}+</span>
                </div>
              </div>

              {/* Promotion Card */}
              <div className="relative bg-tertiary-container rounded-xl overflow-hidden aspect-[4/5] flex flex-col justify-end p-6 mt-8">
                <div className="absolute inset-0 opacity-40 bg-blend-multiply">
                  <Image
                    src="/Images/tours-promo.jpg"
                    alt="Close-up portrait of a Mursi woman with traditional clay lip plate"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative z-10 text-on-tertiary-container">
                  <h4 className="font-headline-sm text-headline-sm mb-2">Custom Package?</h4>
                  <p className="font-body-md mb-4">Tailor your journey to your specific cultural interests.</p>
                  <Link href="/inquiries">
                    <Button variant="secondary" size="default" className="bg-surface text-tertiary hover:bg-surface/90">
                      Inquire Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          {/* Tour Listings */}
          <section className="md:col-span-9 space-y-6">
            {/* Sort & Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-center bg-surface p-4 rounded-xl border border-outline-variant/10">
              <p className="font-body-md text-on-surface-variant mb-4 sm:mb-0">
                Showing <span className="font-bold text-on-surface">{filteredTours.length}</span> authentic experiences
              </p>
              <div className="flex items-center gap-4">
                <span className="font-label-md text-label-md text-on-surface-variant">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border-none font-label-md text-primary focus:ring-0 cursor-pointer"
                >
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Duration</option>
                </select>
              </div>
            </div>

            {/* Tour Cards */}
            {filteredTours.map((tour, index) => (
              <motion.article
                key={tour.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-surface group flex flex-col lg:flex-row rounded-xl overflow-hidden border border-outline-variant/10 hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {tour.badges.map((badge) => (
                      <span
                        key={badge}
                        className={cn(
                          "px-3 py-1 rounded-full text-[12px] font-bold uppercase tracking-widest",
                          badge === 'Bestseller' && "bg-secondary text-white",
                          badge === 'Photography' && "bg-white/90 backdrop-blur-md text-primary",
                          badge === 'Limited Seats' && "bg-tertiary text-white"
                        )}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-3/5 p-8 flex flex-col">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-4">
                    <div>
                      <h3 className="font-headline-md text-headline-md text-on-surface mb-1">
                        {tour.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-on-surface-variant font-label-md">
                        <MapPin className="h-4 w-4" />
                        <span>{tour.location}</span>
                        <span className="mx-2 text-outline">•</span>
                        <Clock className="h-4 w-4" />
                        <span>{tour.duration}</span>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      {tour.originalPrice && (
                        <p className="font-label-md text-on-surface-variant line-through">
                          {tour.originalPrice}
                        </p>
                      )}
                      <p className="font-headline-sm text-headline-sm text-secondary">
                        {tour.price}
                      </p>
                      <p className="text-[10px] uppercase font-bold text-outline">Per person</p>
                    </div>
                  </div>

                  <p className="font-body-md text-on-surface-variant mb-6 line-clamp-3">
                    {tour.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {tour.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 font-label-md text-on-tertiary-fixed-variant">
                        <Check className="h-5 w-5 text-tertiary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-col sm:flex-row items-center gap-4">
                    <Link href={`/tours/${tour.id}`} className="w-full sm:flex-1">
                      <Button variant="primary" size="default" className="w-full">
                        Book This Expedition
                      </Button>
                    </Link>
                    <Link href={`/tours/${tour.id}/details`} className="w-full sm:w-auto">
                      <Button variant="outline" size="default" className="w-full sm:w-auto">
                        Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}

            {/* Pagination */}
            <nav className="flex justify-center items-center gap-2 py-8">
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline text-on-surface hover:bg-surface-container transition-colors">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-bold">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container transition-colors font-bold">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container transition-colors font-bold">
                3
              </button>
              <span className="text-outline">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline text-on-surface hover:bg-surface-container transition-colors">
                <ChevronRight className="h-5 w-5" />
              </button>
            </nav>
          </section>
        </div>
      </Container>

      {/* Newsletter/CTA Section */}
      <section className="bg-surface-container-highest py-section-gap-sm px-margin-mobile">
        <Container maxWidth="xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                Planning a bespoke journey?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                Download our comprehensive Omo Valley Travel Guide for 2024, featuring season-specific tribal calendars and photography tips.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 bg-surface border border-outline-variant px-6 py-4 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  required
                />
                <Button variant="primary" size="default" className="whitespace-nowrap">
                  Get the Guide
                </Button>
              </form>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="relative h-40 rounded-xl overflow-hidden">
                <Image
                  src="/Images/tours-coffee.jpg"
                  alt="Traditional Ethiopian coffee ceremony tools"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 rounded-xl overflow-hidden mt-8">
                <Image
                  src="/Images/tours-textiles.jpg"
                  alt="Vibrant hand-woven tribal textiles"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
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