'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import HeroSlider from '@/components/HeroSlider'
import ModelsSection from '@/components/ModelsSection'
import Footer from '@/components/Footer'
import { useGSAP } from '@/hooks/useGSAP'

export default function Home() {
  const { gsap } = useGSAP()

  useEffect(() => {
    // Initialisation des animations GSAP
    if (gsap) {
      // Animation du header au scroll
      gsap.to('.app-header', {
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: '+=100',
          scrub: true
        },
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(15px)'
      })

      // Animation des éléments du header
      gsap.from('.header-left .logo', {
        duration: 0.6,
        opacity: 0,
        x: -50,
        ease: 'power2.out'
      })

      gsap.from('.nav-item', {
        duration: 0.6,
        opacity: 0,
        y: -20,
        stagger: 0.1,
        ease: 'power2.out'
      })
    }
  }, [gsap])

  return (
    <main className="main-content">
      <Header />
      <HeroSlider />
      <ModelsSection />
      <Footer />
    </main>
  )
} 