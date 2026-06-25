'use client'

import * as React from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowRight, Tag, BookOpen } from 'lucide-react'
import { Container } from '@/app/components/ui/container'
import { Button } from '@/app/components/ui/button'
import { cn } from '@/app/lib/utils'

// Blog post data
const BLOG_POSTS = [
  {
    id: 1,
    title: 'The Ancient Bull-Jumping Ceremony of the Hamar Tribe',
    excerpt: 'Discover the profound coming-of-age ritual that has been practiced for generations in the Omo Valley, where young men prove their courage and strength.',
    image: '/Images/20260402_133245 (2).jpg',
    category: 'Culture',
    author: 'Sarah Thompson',
    date: 'June 15, 2024',
    readTime: '8 min read',
    featured: true,
    slug: 'bull-jumping-ceremony-hamar-tribe',
  },
  {
    id: 2,
    title: 'A Photographer\'s Guide to Capturing the Omo Valley',
    excerpt: 'Essential tips and techniques for photographing the vibrant cultures, stunning landscapes, and intimate moments of Ethiopia\'s Omo Valley.',
    image: '/Images/IMG_3459 (2).jpg',
    category: 'Photography',
    author: 'David Chen',
    date: 'June 10, 2024',
    readTime: '6 min read',
    featured: false,
    slug: 'photographers-guide-omo-valley',
  },
  {
    id: 3,
    title: 'The Best Time to Visit the Omo Valley: A Seasonal Guide',
    excerpt: 'Plan your perfect expedition with our comprehensive guide to the valley\'s seasons, weather patterns, and cultural events throughout the year.',
    image: '/Images/IMG_4001 (2).jpg',
    category: 'Travel Tips',
    author: 'Maria Rodriguez',
    date: 'June 5, 2024',
    readTime: '10 min read',
    featured: false,
    slug: 'best-time-visit-omo-valley',
  },
  {
    id: 4,
    title: 'Preserving Indigenous Traditions in a Modern World',
    excerpt: 'Exploring the delicate balance between cultural preservation and modernization in the Omo Valley\'s indigenous communities.',
    image: '/Images/IMG_3104 (2).jpg',
    category: 'Cultural Preservation',
    author: 'Dr. James Wilson',
    date: 'May 28, 2024',
    readTime: '12 min read',
    featured: false,
    slug: 'preserving-indigenous-traditions',
  },
]

const CATEGORIES = ['All', 'Culture', 'Photography', 'Travel Tips', 'Cultural Preservation']

export function Blog() {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = React.useState('All')

  const filteredPosts = activeCategory === 'All' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory)

  const featuredPost = BLOG_POSTS.find(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <section id="blog" className="py-section-gap-lg bg-surface-container-low">
      <Container maxWidth="xl">
        {/* Header */}
        <div ref={ref} className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.1 }}
                className="inline-block text-sm font-semibold tracking-[0.3em] uppercase text-primary mb-3"
              >
                Our Journal
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2 }}
                className="font-headline-md text-headline-md text-on-surface mb-2"
              >
                Stories from the Valley
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3 }}
                className="text-on-surface-variant max-w-xl"
              >
                Insights, stories, and photography from the heart of the Omo Valley.
              </motion.p>
            </div>
            <Link href="/blog">
              <Button 
                variant="outline" 
                size="default"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
              >
                View All Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-2 mb-8"
        >
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
        </motion.div>

        {/* Featured Post */}
        {featuredPost && activeCategory === 'All' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.5 }}
            className="mb-12 group"
          >
            <Link href={`/blog/${featuredPost.slug}`} className="block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-surface rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                {/* Image */}
                <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px]">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
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
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-on-surface-variant mb-4 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-on-surface">{featuredPost.author}</p>
                        <p className="text-xs text-on-surface-variant">{featuredPost.category}</p>
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
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {regularPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.3 + index * 0.1 }}
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
                  <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-on-surface-variant text-sm line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-xs font-medium text-on-surface">{post.author}</span>
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

     
      </Container>
    </section>
  )
}