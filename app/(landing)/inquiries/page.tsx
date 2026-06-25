'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Camera, 
  History, 
  Trees, 
  Calendar, 
  Mountain, 
  Users, 
  CheckCircle, 
  Star, 
  MessageCircle,
  User,
  Mail,
  MapPin,
  Phone,
  Globe,
  Share2,
  Check
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Container } from '@/app/components/ui/container'
import { Button } from '@/app/components/ui/button'
import { cn } from '@/app/lib/utils'

// Interest areas data
const INTEREST_AREAS = [
  { id: 'photo', icon: Camera, label: 'Photography' },
  { id: 'anthro', icon: History, label: 'Anthropology' },
  { id: 'wildlife', icon: Trees, label: 'Wildlife' },
  { id: 'ceremony', icon: Calendar, label: 'Ceremonies' },
  { id: 'hiking', icon: Mountain, label: 'Trekking' },
  { id: 'culture', icon: Users, label: 'Local Life' },
]

// Features list
const FEATURES = [
  'Private Access to Ceremonies',
  'Ethically Sourced Logistics',
  'Multi-Lingual Expert Guides',
]

export default function InquiriesPage() {
  const [selectedInterests, setSelectedInterests] = React.useState<string[]>([])
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    dates: '',
    groupSize: 'Solo Traveler',
    details: '',
  })

  const toggleInterest = (id: string) => {
    setSelectedInterests(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ ...formData, interests: selectedInterests })
  }

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[716px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Images/IMG_20260308_161849_563 (2).jpg"
            alt="A cinematic, high-resolution wide shot of a traditional tribal ceremony in the Omo Valley at dusk"
            fill
            priority
            className="object-cover brightness-[0.7]"
            sizes="100vw"
            quality={90}
          />
        </div>
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center px-margin-mobile max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-label-md text-label-md text-secondary-fixed tracking-widest uppercase mb-4 block"
          >
            Tailor-Made Journeys
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display-lg text-display-lg text-white mb-6"
          >
            Your Vision, Our Heritage
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-body-lg text-body-lg text-white/90 max-w-2xl mx-auto"
          >
            Design a bespoke exploration of the Omo Valley, curated by local experts to match your specific interests in photography, culture, or adventure.
          </motion.p>
        </div>
      </section>

      {/* Bespoke Form Section */}
      <section className="py-section-gap-lg px-margin-mobile">
        <Container maxWidth="xl" padding="none">
          <div className="grid md:grid-cols-12 gap-8">
            {/* Form Sidebar / Context */}
            <div className="md:col-span-4 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="font-headline-md text-headline-md mb-4">Tell Us Your Story</h2>
                <p className="font-body-md text-on-surface-variant">
                  We don't believe in one-size-fits-all travel. Use the form to outline your preferences, and our team will craft a detailed itinerary that respects local traditions while ensuring your comfort.
                </p>
              </motion.div>

              {/* Local Expertise Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/20"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-headline-sm text-headline-sm mb-2">Local Expertise</h3>
                <p className="font-body-md text-on-surface-variant mb-6">
                  Our guides are members of the local communities, providing access and insights that standard operators cannot offer.
                </p>
                <ul className="space-y-3">
                  {FEATURES.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 font-label-md text-label-md text-tertiary">
                      <CheckCircle className="h-5 w-5 text-tertiary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                  Trusted By Adventurers
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-1 text-secondary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="italic font-body-md text-on-surface-variant">
                    "Tem Omo created a photography expedition that exceeded every expectation. The cultural sensitivity was unparalleled." — Sarah L., UK
                  </p>
                </div>
              </motion.div>
            </div>

            {/* The Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-8 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-lg border border-outline-variant/10"
            >
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Interest Areas (Bento Selection) */}
                <div>
                  <label className="font-label-md text-label-md text-primary uppercase tracking-widest block mb-6">
                    Areas of Interest
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {INTEREST_AREAS.map((area) => {
                      const isSelected = selectedInterests.includes(area.id)
                      return (
                        <button
                          key={area.id}
                          type="button"
                          onClick={() => toggleInterest(area.id)}
                          className={cn(
                            "flex flex-col items-center justify-center p-6 border rounded-lg transition-all group",
                            isSelected
                              ? "border-primary bg-primary/5 shadow-md"
                              : "border-outline-variant/30 hover:bg-surface-container-low hover:border-outline-variant/60"
                          )}
                        >
                          <area.icon className={cn(
                            "h-8 w-8 mb-2 transition-colors",
                            isSelected ? "text-primary" : "text-on-surface-variant group-hover:text-primary"
                          )} />
                          <span className={cn(
                            "font-label-md text-label-md",
                            isSelected ? "text-primary" : "text-on-surface-variant"
                          )}>
                            {area.label}
                          </span>
                          {isSelected && (
                            <div className="absolute top-2 right-2">
                              <Check className="h-4 w-4 text-primary" />
                            </div>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Basic Info */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative">
                    <label className="font-label-md text-label-md text-on-surface-variant block mb-2" htmlFor="name">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-5 text-on-surface-variant/40" />
                      <input
                        className="w-full bg-transparent border-b-2 border-outline-variant/30 focus:border-primary transition-colors py-2 pl-8 pr-0 outline-none font-body-md"
                        id="name"
                        placeholder="Enter your name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="font-label-md text-label-md text-on-surface-variant block mb-2" htmlFor="email">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-5 text-on-surface-variant/40" />
                      <input
                        className="w-full bg-transparent border-b-2 border-outline-variant/30 focus:border-primary transition-colors py-2 pl-8 pr-0 outline-none font-body-md"
                        id="email"
                        placeholder="hello@example.com"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Logistics */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative">
                    <label className="font-label-md text-label-md text-on-surface-variant block mb-2" htmlFor="dates">
                      Preferred Dates
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-5 text-on-surface-variant/40" />
                      <input
                        className="w-full bg-transparent border-b-2 border-outline-variant/30 focus:border-primary transition-colors py-2 pl-8 pr-0 outline-none font-body-md"
                        id="dates"
                        placeholder="e.g., September 2024"
                        type="text"
                        value={formData.dates}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="font-label-md text-label-md text-on-surface-variant block mb-2" htmlFor="groupSize">
                      Group Size
                    </label>
                    <div className="relative">
                      <Users className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-5 text-on-surface-variant/40" />
                      <select
                        className="w-full bg-transparent border-b-2 border-outline-variant/30 focus:border-primary transition-colors py-2 pl-8 pr-4 outline-none font-body-md appearance-none"
                        id="groupSize"
                        value={formData.groupSize}
                        onChange={handleInputChange}
                      >
                        <option>Solo Traveler</option>
                        <option>2 - 4 People</option>
                        <option>5 - 8 People</option>
                        <option>9+ People</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Specific Needs */}
                <div>
                  <label className="font-label-md text-label-md text-on-surface-variant block mb-2" htmlFor="details">
                    Tell Us About Your Specific Needs
                  </label>
                  <textarea
                    className="w-full bg-surface-container-low/30 border border-outline-variant/30 focus:border-primary transition-colors p-4 rounded-lg outline-none font-body-md resize-none min-h-[150px]"
                    id="details"
                    placeholder="Do you have specific photographic subjects in mind? Any dietary requirements or accessibility needs? What kind of accommodation do you prefer (Lodge vs. Tented Camp)?"
                    value={formData.details}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full py-6 text-base uppercase tracking-widest"
                  >
                    Request Custom Itinerary
                  </Button>
                  <p className="text-center font-label-md text-label-md text-on-surface-variant mt-4">
                    Typical response time: <span className="text-tertiary font-semibold">24-48 hours</span>
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA Section with WhatsApp */}
      <section className="py-section-gap-sm px-margin-mobile bg-surface-container-low border-t border-outline-variant/20">
        <Container maxWidth="xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-tertiary-container flex items-center justify-center flex-shrink-0">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <div>
                <h4 className="font-headline-sm text-headline-sm">Prefer a quick chat?</h4>
                <p className="font-body-md text-on-surface-variant">Message us directly on WhatsApp for immediate inquiries.</p>
              </div>
            </div>
            <a
              href="https://wa.me/251911234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-button text-button shadow-lg hover:brightness-105 hover:scale-105 transition-all duration-300"
            >
              <FaWhatsapp className="h-6 w-6" />
              WhatsApp Now
            </a>
          </div>
        </Container>
      </section>
    </main>
  )
}