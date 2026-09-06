'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Phone, Menu, X, ArrowRight, Mail, MapPin } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { buildWhatsAppUrl } from '@/lib/utils'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const headerWhatsappUrl = buildWhatsAppUrl(
    'Olá! Gostaria de conversar com um especialista da Alcântara Consultoria.'
  )

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          {/* BRAND LOGO */}
          <a href="#inicio" className="brand-logo-link" aria-label={`${siteConfig.name} — início`}>
            <Image
              src="/images/logonova.png"
              alt={siteConfig.name}
              width={185}
              height={42}
              priority
              className="navbar-logo"
            />
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="desktop-nav" aria-label="Navegação principal">
            {siteConfig.navigation.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`desktop-nav-link ${index === 0 ? 'active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* DESKTOP PHONE CTA */}
          <div className="header-actions">
            <a
              className="nav-cta-btn"
              href={headerWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone size={14} className="cta-icon" />
              <span>{siteConfig.phone}</span>
            </a>

            {/* MOBILE MENU TOGGLE BUTTON */}
            <button
              className="menu-toggle-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* LUXURY MOBILE DRAWER OVERLAY */}
      <div className={`mobile-drawer-overlay ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-backdrop" onClick={() => setMenuOpen(false)} />
        
        <div className="mobile-drawer-content">
          {/* DRAWER TOP BAR */}
          <div className="drawer-top-bar">
            <Image
              src="/images/logonova.png"
              alt={siteConfig.name}
              width={160}
              height={36}
              className="drawer-logo"
            />
            <button
              className="drawer-close-btn"
              onClick={() => setMenuOpen(false)}
              aria-label="Fechar menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* EDITORIAL NAV LINKS */}
          <nav className="drawer-nav-list">
            {siteConfig.navigation.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="drawer-nav-item"
                onClick={() => setMenuOpen(false)}
              >
                <div className="drawer-nav-left">
                  <span className="drawer-nav-index">0{index + 1}</span>
                  <span className="drawer-nav-label">{item.label}</span>
                </div>
                <ArrowRight size={16} className="drawer-nav-arrow" />
              </a>
            ))}
          </nav>

          {/* DRAWER FOOTER / CONTACT ACTIONS */}
          <div className="drawer-footer-card">
            <div className="drawer-contact-info">
              <a href={`tel:${siteConfig.phoneRaw}`} className="drawer-contact-row">
                <Phone size={14} />
                <span>{siteConfig.phone}</span>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="drawer-contact-row">
                <Mail size={14} />
                <span>{siteConfig.email}</span>
              </a>
              <div className="drawer-contact-row static">
                <MapPin size={14} />
                <span>Conselheiro Lafaiete — MG</span>
              </div>
            </div>

            <a
              href={headerWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-drawer-whatsapp"
              onClick={() => setMenuOpen(false)}
            >
              <span>FALAR COM ESPECIALISTA</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
