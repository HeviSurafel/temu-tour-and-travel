import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tem Omo Valley Tours | Authentic Cultural Expeditions',
  description: 'Experience the timeless traditions and breathtaking landscapes of the Omo Valley with Ethiopia\'s leading cultural expedition masters.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-on-background font-body-md antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}