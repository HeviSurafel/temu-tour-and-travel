'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle,
  MessageCircle,
  Globe,

  ChevronRight,
  User,
  AtSign,
  FileText
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Container } from '@/app/components/ui/container'
import { Button } from '@/app/components/ui/button'
import { cn } from '@/app/lib/utils'
import { FaFacebook as Facebook,FaInstagram  as Instagram , FaTwitter as Twitter, FaYoutube as Youtube } from 'react-icons/fa'
// Contact information
const CONTACT_INFO = [
  {
    icon: MapPin,
    title: 'Address',
    details: ['Jinka, Omo Valley', 'Ethiopia'],
    link: 'https://maps.google.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+251 91 123 4567', '+251 91 765 4321'],
    link: 'tel:+251911234567',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@temomo.com', 'bookings@temomo.com'],
    link: 'mailto:info@temomo.com',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    details: ['Monday - Friday: 8:00 - 18:00', 'Saturday: 9:00 - 14:00'],
  },
]

// Social media links
const SOCIAL_MEDIA = [
  { icon: Facebook, label: 'Facebook', href: '#', color: 'hover:text-[#1877f2]' },
  { icon: Instagram, label: 'Instagram', href: '#', color: 'hover:text-[#e4405f]' },
  { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:text-[#1da1f2]' },
  { icon: Youtube, label: 'YouTube', href: '#', color: 'hover:text-[#ff0000]' },
]

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Images/contact-hero.jpg"
            alt="A beautiful landscape of the Omo Valley at sunset"
            fill
            priority
            className="object-cover brightness-75"
            sizes="100vw"
            quality={90}
          />
        </div>
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-white"
          >
            <span className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/20 border border-primary/30 text-white font-label-md text-label-md backdrop-blur-sm">
              Get in Touch
            </span>
            <h1 className="font-display-lg text-display-lg mb-6">
              Let's Plan Your Journey
            </h1>
            <p className="font-body-lg text-body-lg text-white/90">
              Have questions about our tours, need a custom itinerary, or want to discuss your travel plans? We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-section-gap-lg">
        <Container maxWidth="xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10"
              >
                <h2 className="font-headline-sm text-headline-sm text-on-surface mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {CONTACT_INFO.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-label-md text-label-md text-on-surface-variant mb-1">
                          {item.title}
                        </h4>
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-sm text-on-surface">
                            {item.link && i === 0 ? (
                              <a href={item.link} className="hover:text-primary transition-colors">
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10"
              >
                <h2 className="font-headline-sm text-headline-sm text-on-surface mb-6">
                  Connect With Us
                </h2>
                <div className="flex gap-4">
                  {SOCIAL_MEDIA.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "w-12 h-12 rounded-full bg-surface border border-outline-variant/20 flex items-center justify-center text-on-surface-variant transition-all hover:bg-primary hover:text-white",
                        social.color
                      )}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Quick WhatsApp */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-[#25D366]/10 rounded-2xl p-8 border border-[#25D366]/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface">Quick Response</h4>
                    <p className="text-sm text-on-surface-variant">Chat with us on WhatsApp</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/251911234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-button text-button hover:opacity-90 transition-all"
                >
                  <FaWhatsapp className="h-5 w-5" />
                  Chat Now
                </a>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-surface-container-low rounded-2xl p-8 md:p-12 border border-outline-variant/10"
            >
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                Send Us a Message
              </h2>
              <p className="text-on-surface-variant mb-8">
                We'll get back to you within 24-48 hours.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-tertiary/10 text-tertiary p-6 rounded-xl border border-tertiary/20 flex items-center gap-4"
                >
                  <CheckCircle className="h-6 w-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-label-md text-label-md">Message Sent!</h4>
                    <p className="text-sm text-tertiary/80">We'll get back to you shortly.</p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-label-md text-label-md text-on-surface-variant block mb-2" htmlFor="name">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-on-surface-variant/40" />
                        <input
                          className="w-full bg-surface pl-10 pr-4 py-3 rounded-xl border border-outline-variant/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          id="name"
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-label-md text-label-md text-on-surface-variant block mb-2" htmlFor="email">
                        Email Address *
                      </label>
                      <div className="relative">
                        <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-on-surface-variant/40" />
                        <input
                          className="w-full bg-surface pl-10 pr-4 py-3 rounded-xl border border-outline-variant/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          id="email"
                          type="email"
                          placeholder="hello@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="font-label-md text-label-md text-on-surface-variant block mb-2" htmlFor="subject">
                      Subject
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-on-surface-variant/40" />
                      <input
                        className="w-full bg-surface pl-10 pr-4 py-3 rounded-xl border border-outline-variant/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        id="subject"
                        type="text"
                        placeholder="Custom Tour Inquiry"
                        value={formData.subject}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-label-md text-label-md text-on-surface-variant block mb-2" htmlFor="message">
                      Message *
                    </label>
                    <textarea
                      className="w-full bg-surface p-4 rounded-xl border border-outline-variant/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none min-h-[150px]"
                      id="message"
                      placeholder="Tell us about your dream journey, any special requirements, or questions you have..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full py-4 text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-section-gap-sm bg-surface-container-low">
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden h-[400px]"
          >
            <Image
              src="/Images/contact-map.jpg"
              alt="Map of Omo Valley, Ethiopia"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            
            {/* Location Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -inset-4 bg-primary/20 rounded-full animate-ping" />
              </div>
            </div>

            {/* Map Overlay Text */}
            <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-sm p-4 rounded-xl text-white max-w-md">
              <p className="font-label-md text-label-md">📍 Jinka, Omo Valley</p>
              <p className="text-sm text-white/70">Visit us in the heart of Ethiopia's most culturally rich region.</p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* FAQ / Quick Links */}
      <section className="py-section-gap-sm">
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 text-center">
              <Globe className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Plan Your Trip</h3>
              <p className="text-on-surface-variant text-sm mb-4">Get travel tips and visa information</p>
              <Link href="/blog">
                <span className="text-primary font-semibold text-sm flex items-center justify-center gap-1 hover:gap-2 transition-all">
                  Learn More
                  <ChevronRight className="h-4 w-4" />
                </span>
              </Link>
            </div>

            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 text-center">
              <MessageCircle className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Custom Tours</h3>
              <p className="text-on-surface-variant text-sm mb-4">Create your perfect Omo Valley experience</p>
              <Link href="/inquiries">
                <span className="text-primary font-semibold text-sm flex items-center justify-center gap-1 hover:gap-2 transition-all">
                  Start Planning
                  <ChevronRight className="h-4 w-4" />
                </span>
              </Link>
            </div>

            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 text-center">
              <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Emergency Support</h3>
              <p className="text-on-surface-variant text-sm mb-4">24/7 support for booked travelers</p>
              <a href="tel:+251911234567" className="text-primary font-semibold text-sm hover:opacity-80 transition-opacity">
                +251 91 123 4567
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