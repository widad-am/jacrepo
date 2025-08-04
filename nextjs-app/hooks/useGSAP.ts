'use client'

import { useEffect, useState } from 'react'

declare global {
  interface Window {
    gsap: any
    ScrollTrigger: any
  }
}

export function useGSAP() {
  const [gsap, setGsap] = useState<any>(null)
  const [ScrollTrigger, setScrollTrigger] = useState<any>(null)

  useEffect(() => {
    // Attendre que GSAP soit chargé
    const checkGSAP = () => {
      if (window.gsap) {
        setGsap(window.gsap)
        
        // Enregistrer ScrollTrigger
        if (window.ScrollTrigger) {
          window.gsap.registerPlugin(window.ScrollTrigger)
          setScrollTrigger(window.ScrollTrigger)
        }
      } else {
        // Réessayer après 100ms
        setTimeout(checkGSAP, 100)
      }
    }

    checkGSAP()
  }, [])

  return { gsap, ScrollTrigger }
} 