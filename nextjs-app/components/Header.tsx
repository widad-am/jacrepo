'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log(`🔍 Recherche: ${searchQuery}`)
      alert(`Recherche pour: ${searchQuery}`)
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="app-header">
      <div className="header-container">
        <div className="header-left">
          <a href="/" className="logo">
            <Image 
              src="/assets/images/logo-nav-pc.fb0453d.png" 
              alt="JAC Motors" 
              width={120} 
              height={40}
            />
          </a>
        </div>

        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#models">Vehicles</a>
            </li>
            <li className="nav-item">
              <a href="#about">About</a>
            </li>
            <li className="nav-item">
              <a href="#news">News</a>
            </li>
            <li className="nav-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="header-right">
          {/* Barre de recherche */}
          <div className="search-container">
            <input 
              type="text" 
              className="search-input" 
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button className="search-btn" onClick={handleSearch}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
          </div>

          {/* Sélecteur de langue */}
          <div className="language-selector">
            <ul className="language-menu">
              <li><a href="#" className="active">EN</a></li>
              <li><a href="#">中文</a></li>
              <li><a href="#">ES</a></li>
              <li><a href="#">العربية</a></li>
            </ul>
          </div>

          {/* Menu mobile */}
          <button 
            className="mobile-menu-btn" 
            onClick={toggleMobileMenu}
            aria-label="Menu mobile"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-list">
          <li><a href="#models">Vehicles</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </header>
  )
} 