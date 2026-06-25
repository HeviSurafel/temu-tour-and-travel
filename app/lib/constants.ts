import { LucideIcon } from 'lucide-react'
import {
  Menu,
  Search,
  User,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Quote,
  ArrowUpRight,
  MessageCircle,
  Globe,
  Camera,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Expeditions', href: '/expeditions' },
  { label: 'Experience', href: '/experience' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Inquiries', href: '/inquiries' },
  { label: 'Contact', href: '/contact' },
]

export const SEASONS = [
  {
    id: 'green',
    title: 'The Emerald Rebirth',
    period: 'April - June',
    description: 'Witness the valley at its most vibrant as the Great Rains bring life to the dusty plains and create dramatic photographic backdrops.',
    image: '/Images/IMG_20260308_161854_286 (2).jpg',
    color: 'tertiary-container',
    badgeColor: 'tertiary',
    span: 'md:col-span-8',
  },
  {
    id: 'harvest',
    title: 'Ancestral Harvest',
    period: 'July - Aug',
    description: 'A period of abundance and celebration, where communities gather for traditional rites and vibrant market days.',
    image: '/Images/20260325222808 (2).jpg',
    color: 'secondary-container',
    badgeColor: 'secondary',
    span: 'md:col-span-4',
  },
  {
    id: 'dry',
    title: 'Golden Expedition',
    period: 'Sept - Jan',
    description: 'Ideal for deep-territory travel. Clear skies and accessible roads make this the peak time for discovery.',
    image: '/Images/IMG-20260314-WA0014 (2).jpg',
    color: 'surface-container-highest',
    badgeColor: 'primary',
    span: 'md:col-span-5',
  },
  {
    id: 'cultural',
    title: 'The Bull-Jumping Rites',
    period: 'Ongoing',
    description: 'Observe the profound "Ukuli Bula" ceremony, an ancient coming-of-age ritual that defines Hamar culture and identity.',
    image: '/Images/IMG_20260308_161830_750 (2).jpg',
    color: 'primary-container',
    badgeColor: 'primary',
    span: 'md:col-span-7',
  },
]

export const EXPEDITIONS = [
  {
    id: 'grand-circuit',
    title: 'The Grand Omo Circuit',
    description: 'A complete navigation of the valley\'s diverse tribal landscapes.',
    duration: '12 Days',
    price: '$4,850',
    image: '/Images/IMG-20260314-WA0001 (2).jpg',
  },
  {
    id: 'photographic-odyssey',
    title: 'The Photographic Odyssey',
    description: 'Master-led photography workshop in the heart of the tribes.',
    duration: '8 Days',
    price: '$3,200',
    image: '/Images/IMG-20260314-WA0004 (2).jpg',
  },
  {
    id: 'tribal-rhythms',
    title: 'Tribal Rhythms & Roots',
    description: 'Deep dive into the daily lives and rituals of the Hamar and Mursi.',
    duration: '6 Days',
    price: '$2,450',
    image: '/Images/IMG-20260314-WA0011 (2).jpg',
  },
]

export const TESTIMONIALS = [
  {
    id: 1,
    quote: '"Tem Omo didn\'t just show us the valley; they invited us into its heart. Their relationships with the local tribes are built on decades of genuine mutual respect."',
    author: 'Sarah & Mark Thompson',
    role: 'Explorers, United Kingdom',
    featured: true,
  },
  {
    id: 2,
    quote: '"As a photographer, I\'ve traveled many places. But the Omo Valley with Tem\'s team was different. They understood the light, the timing, and most importantly, the people."',
    author: 'David Chen',
    role: 'Visual Artist, Canada',
    featured: false,
  },
]

export const FOOTER_LINKS = {
  plan: [
    { label: 'Tours', href: '/tours' },
    { label: 'Custom Packages', href: '/custom-packages' },
    { label: 'Travel Guide', href: '/travel-guide' },
  ],
  about: [
    { label: 'Our Story', href: '/our-story' },
    { label: 'Contact', href: '/contact' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Blog', href: '/blog' },
  ],
  legal: [
    { label: 'Terms', href: '/terms' },
    { label: 'Visa Info', href: '/visa-info' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Inquiries', href: '/inquiries' },
  ],
}

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/temomo',
  instagram: 'https://instagram.com/temomo',
  youtube: 'https://youtube.com/temomo',
  twitter: 'https://twitter.com/temomo',
}

export const CONTACT_INFO = {
  phone: '+251 91 123 4567',
  email: 'info@temomo.com',
  address: 'Jinka, Ethiopia',
}

export const SOCIAL_ICONS = {
  public: Globe,
  photo_camera: Camera,
  alternate_email: Mail,
}

export const ICON_MAP: Record<string, LucideIcon> = {
  menu: Menu,
  search: Search,
  account_circle: User,
  expand_more: ChevronDown,
  chevron_left: ChevronLeft,
  chevron_right: ChevronRight,
  arrow_forward: ArrowRight,
  format_quote: Quote,
  north_east: ArrowUpRight,
  chat: MessageCircle,
  public: Globe,
  photo_camera: Camera,
  alternate_email: Mail,
  location_on: MapPin,
  call: Phone,
}
export const ABOUT_DATA = {
  hero: {
    title: 'Preserving the Soul of the Omo Valley',
    subtitle: 'Since 1994',
    description: 'A legacy of local ownership, radical authenticity, and the deep-rooted desire to bridge the gap between ancient traditions and modern exploration.',
    image: '/Images/about-hero.jpg',
  },
  narrative: {
    title: 'The Ancestral Echo',
    quote: '"We don\'t just show you the valley; we help you hear its heartbeat."',
    paragraphs: [
      'Tem Omo Valley was born not from a business plan, but from a necessity to protect. Founded by local elders and cultural historians, we recognized that the world\'s gaze was turning towards our home.',
      'We chose to lead the narrative. Instead of passive observation, we offer active immersion. Every journey with us is a handshake with history—a tactile, living experience that respects the rhythm of the valley while providing the safety and comfort of premium hospitality.',
    ],
  },
  values: [
    {
      icon: 'shield_with_heart',
      title: 'Cultural Integrity',
      description: 'We prioritize the dignity of our tribes over the demands of tourism, ensuring all interactions are consensual and respectful.',
    },
    {
      icon: 'leaf',
      title: 'Radical Sustainability',
      description: 'Our "Zero Footprint" protocols protect the Omo River ecosystem while 40% of all proceeds directly fund local school and clean water projects.',
    },
    {
      icon: 'verified_user',
      title: 'Safety & Comfort',
      description: 'Premium logistics paired with deep local knowledge ensure that even the most remote exploration is safe, secure, and serene.',
    },
  ],
  guides: [
    {
      name: "Bono 'The Bridge' Kula",
      role: 'Lead Guide • Hamer Community',
      quote: '"My mission is simple: to make sure you don\'t just see my people, but you understand our story. I am the bridge between two worlds."',
      description: 'Bono has led expeditions for over 20 years. He is a recognized historian within the valley and holds a master\'s degree in Social Anthropology. His tours are known for their profound philosophical depth and rare access to sacred ceremonies.',
      image: '/Images/guide-bono.jpg',
      tags: ['Expert Tracker', 'Linguist'],
    },
    {
      name: 'Aster Malé',
      role: 'Cultural Specialist • Mursi Community',
      quote: '"Women are the keepers of the Omo\'s secrets. I invite you into the heart of our domestic and spiritual life."',
      description: 'Aster specializes in ethnographic tours focusing on the roles of women and children in Omo societies. She is a tireless advocate for community-led education and has helped establish three artisan cooperatives in the lower valley.',
      image: '/Images/guide-aster.jpg',
      tags: ['Master Weaver', 'Community Liaison'],
    },
  ],
}
export const DEVELOPER_INFO = {
  name: 'Surafel Wondu',
  phone: '+251 964 945 647',
  portfolio: 'https://surafel-portifolio-snfe.vercel.app/',
  github: 'https://github.com/your-github',
  linkedin: 'https://linkedin.com/in/your-linkedin',
}