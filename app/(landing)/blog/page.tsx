'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight, 
  Tag, 
  BookOpen,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Container } from '@/app/components/ui/container'
import { Button } from '@/app/components/ui/button'
import { cn } from '@/app/lib/utils'

// Blog post data
const BLOG_POSTS = [
  {
    id: 1,
    title: 'The Ancient Bull-Jumping Ceremony of the Hamar Tribe',
    excerpt: 'Discover the profound coming-of-age ritual that has been practiced for generations in the Omo Valley, where young men prove their courage and strength by leaping over cattle.',
    image: '/Images/blog-bull-jumping.jpg',
    category: 'Culture',
    author: 'Sarah Thompson',
    date: 'June 15, 2024',
    readTime: '8 min read',
    featured: true,
    slug: 'bull-jumping-ceremony-hamar-tribe',
    tags: ['Hamar', 'Ceremony', 'Coming of Age'],
  },
  {
    id: 2,
    title: 'A Photographer\'s Guide to Capturing the Omo Valley',
    excerpt: 'Essential tips and techniques for photographing the vibrant cultures, stunning landscapes, and intimate moments of Ethiopia\'s Omo Valley.',
    image: '/Images/blog-photography.jpg',
    category: 'Photography',
    author: 'David Chen',
    date: 'June 10, 2024',
    readTime: '6 min read',
    featured: false,
    slug: 'photographers-guide-omo-valley',
    tags: ['Photography', 'Tips', 'Landscape'],
  },
  {
    id: 3,
    title: 'The Best Time to Visit the Omo Valley: A Seasonal Guide',
    excerpt: 'Plan your perfect expedition with our comprehensive guide to the valley\'s seasons, weather patterns, and cultural events throughout the year.',
    image: '/Images/blog-seasons.jpg',
    category: 'Travel Tips',
    author: 'Maria Rodriguez',
    date: 'June 5, 2024',
    readTime: '10 min read',
    featured: false,
    slug: 'best-time-visit-omo-valley',
    tags: ['Seasons', 'Travel Tips', 'Planning'],
  },
  {
    id: 4,
    title: 'Preserving Indigenous Traditions in a Modern World',
    excerpt: 'Exploring the delicate balance between cultural preservation and modernization in the Omo Valley\'s indigenous communities.',
    image: '/Images/blog-traditions.jpg',
    category: 'Cultural Preservation',
    author: 'Dr. James Wilson',
    date: 'May 28, 2024',
    readTime: '12 min read',
    featured: false,
    slug: 'preserving-indigenous-traditions',
    tags: ['Preservation', 'Culture', 'Sustainability'],
  },
  {
    id: 5,
    title: 'The Art of Body Painting: A Visual Journey',
    excerpt: 'Explore the rich tradition of body painting among the tribes of the Omo Valley, where natural pigments tell stories of identity, status, and celebration.',
    image: '/Images/blog-body-painting.jpg',
    category: 'Culture',
    author: 'Elena Martinez',
    date: 'May 20, 2024',
    readTime: '7 min read',
    featured: false,
    slug: 'art-of-body-painting',
    tags: ['Body Art', 'Tradition', 'Visual Culture'],
  },
  {
    id: 6,
    title: 'Navigating the Omo River: A Guide for Adventurers',
    excerpt: 'Everything you need to know about exploring the Omo River, from boat safaris to riverside village visits and wildlife encounters.',
    image: '/Images/blog-river.jpg',
    category: 'Adventure',
    author: 'Marcus Johnson',
    date: 'May 15, 2024',
    readTime: '9 min read',
    featured: false,
    slug: 'navigating-omo-river',
    tags: ['Adventure', 'River', 'Wildlife'],
  },
]

const CATEGORIES = ['All', 'Culture', 'Photography', 'Travel Tips', 'Cultural Preservation', 'Adventure']
const FEATURED_POST = BLOG_POSTS.find(post => post.featured)
const REGULAR_POSTS = BLOG_POSTS.filter(post => !post.featured)

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [activeCategory, setActiveCategory] = React.useState('All')
  const [currentPage, setCurrentPage] = React.useState(1)
  const postsPerPage = 6

  // Filter posts based on search and category
  const filteredPosts = REGULAR_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory
    return matchesSearch && matchesCategory
  })

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  )

  const resetPagination = () => {
    setCurrentPage(1)
  }

  React.useEffect(() => {
    resetPagination()
  }, [searchQuery, activeCategory])

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Images/blog-hero.jpg"
            alt="A beautiful landscape of the Omo Valley with acacia trees at sunset"
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
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/20 border border-primary/30 text-white font-label-md text-label-md backdrop-blur-sm">
              Our Journal
            </span>
            <h1 className="font-display-lg text-display-lg text-white mb-6">
              Stories from the Valley
            </h1>
            <p className="font-body-lg text-body-lg text-white/90 max-w-xl">
              Insights, stories, and photography from the heart of the Omo Valley, written by our team of cultural experts and travelers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {FEATURED_POST && (
        <section className="py-section-gap-sm bg-surface-container-low">
          <Container maxWidth="xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={`/blog/${FEATURED_POST.slug}`} className="block">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-surface rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  {/* Image */}
                  <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px]">
                    <Image
                      src={FEATURED_POST.image}
                      alt={FEATURED_POST.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                      Featured
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-on-surface-variant mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {FEATURED_POST.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {FEATURED_POST.readTime}
                      </span>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                        {FEATURED_POST.category}
                      </span>
                    </div>
                    <h2 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-primary transition-colors">
                      {FEATURED_POST.title}
                    </h2>
                    <p className="text-on-surface-variant mb-4 line-clamp-3">
                      {FEATURED_POST.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <User className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-on-surface">{FEATURED_POST.author}</p>
                          <p className="text-xs text-on-surface-variant">{FEATURED_POST.category}</p>
                        </div>
                      </div>
                      <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </Container>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-section-gap-lg">
        <Container maxWidth="xl">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-on-surface-variant/40" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-surface border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                      activeCategory === category
                        ? "bg-primary text-white shadow-lg"
                        : "bg-surface-container text-on-surface-variant hover:bg-surface-container-highest"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Posts Grid */}
          {paginatedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {paginatedPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-surface rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <Tag className="h-3 w-3" />
                        {post.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-xs text-on-surface-variant mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-on-surface-variant text-sm line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <User className="h-4 w-4 text-primary" />
                          </div>
                          <span className="text-xs font-medium text-on-surface line-clamp-1">{post.author}</span>
                        </div>
                        <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read
                          <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-on-surface-variant/30 mx-auto mb-4" />
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">No articles found</h3>
              <p className="text-on-surface-variant">Try adjusting your search or filter criteria.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="flex justify-center items-center gap-2 mt-12">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className={cn(
                  "w-10 h-10 flex items-center justify-center rounded-full border transition-colors",
                  currentPage === 1
                    ? "border-outline-variant/30 text-on-surface-variant/30 cursor-not-allowed"
                    : "border-outline text-on-surface hover:bg-surface-container"
                )}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={cn(
                    "w-10 h-10 flex items-center justify-center rounded-full font-bold transition-colors",
                    currentPage === page
                      ? "bg-primary text-white"
                      : "text-on-surface hover:bg-surface-container"
                  )}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className={cn(
                  "w-10 h-10 flex items-center justify-center rounded-full border transition-colors",
                  currentPage === totalPages
                    ? "border-outline-variant/30 text-on-surface-variant/30 cursor-not-allowed"
                    : "border-outline text-on-surface hover:bg-surface-container"
                )}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </nav>
          )}
        </Container>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-surface-container-low py-section-gap-sm">
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-on-surface-variant mb-6">
              Get the latest stories, travel tips, and cultural insights from the Omo Valley delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-outline-variant/30 bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                required
              />
              <Button variant="primary" size="default" className="whitespace-nowrap">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
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