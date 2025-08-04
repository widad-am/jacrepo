import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JAC Motors - Ever so Fun. Ever so Colorful.',
  description: 'Explore our range of vehicles including sedans, SUVs, trucks and electric vehicles',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* GSAP et Swiper CDN */}
        <script src="https://unpkg.com/gsap@3.12.2/dist/gsap.min.js"></script>
        <script src="https://unpkg.com/gsap@3.12.2/dist/ScrollTrigger.min.js"></script>
        <script src="https://unpkg.com/gsap@3.12.2/dist/ScrollToPlugin.min.js"></script>
        <script src="https://unpkg.com/swiper@11/swiper-bundle.min.js"></script>
        <link rel="stylesheet" href="https://unpkg.com/swiper@11/swiper-bundle.min.css" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 