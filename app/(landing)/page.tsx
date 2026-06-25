import { Hero } from '@/app/components/sections/Hero'

import { WhyChooseUs } from '@/app/components/sections/WhyChooseUs'
import { SeasonsGrid } from '@/app/components/sections/SeasonsGrid'
import { Expeditions } from '@/app/components/sections/Expeditions'
import { Testimonials } from '@/app/components/sections/Testimonials'
import { Blog } from '@/app/components/sections/Blog'

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <SeasonsGrid />
      <Expeditions />
      <Testimonials />
      <Blog />
    </>
  )
}