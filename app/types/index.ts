export interface NavItem {
  label: string
  href: string
}

export interface Season {
  id: string
  title: string
  period: string
  description: string
  image: string
  color: string
  badgeColor: string
  span: string
}

export interface Expedition {
  id: string
  title: string
  description: string
  duration: string
  price: string
  image: string
}

export interface Testimonial {
  id: number
  quote: string
  author: string
  role: string
  featured: boolean
}

export interface FooterLink {
  label: string
  href: string
}