import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { HeroHeadline } from './HeroHeadline'
import { HeroActions } from './HeroActions'
import { HeroCredBar } from './HeroCredBar'

export function HeroSection() {
  return (
    <section id="inicio" className="hero-section">
      {/* DESKTOP BACKGROUND & GRADIENT OVERLAY */}
      <div className="hero-bg-wrapper hero-bg-desktop">
        <Image
          src="/images/herodesktop.png"
          alt="Operação de engenharia mineral da Alcântara Consultoria"
          fill
          priority
          quality={95}
          className="hero-bg-img"
        />
        <div className="hero-bg-overlay" />
      </div>

      {/* MOBILE BACKGROUND */}
      <div className="hero-bg-wrapper hero-bg-mobile">
        <Image
          src="/images/backgroundmobile.png"
          alt="Operação de engenharia mineral da Alcântara Consultoria com aerolevantamento"
          fill
          priority
          quality={95}
          className="hero-bg-img hero-bg-img-mobile"
        />
        <div className="hero-bg-overlay hero-bg-overlay-mobile" />
      </div>

      <div className="hero-container hero-inner">
        {/* MAIN HERO CONTENT (MIDDLE) */}
        <div className="hero-main-row">
          <div className="hero-left-col">
            <HeroHeadline />
            <HeroActions />
          </div>
        </div>

        {/* BOTTOM CREDENTIALS FRAME AREA */}
        <div className="hero-bottom-bars">
          <HeroCredBar />

          {/* MOBILE MOTTO & SCROLL DOWN */}
          <div className="hero-scroll-indicator">
            <div className="hero-motto">
              <span>DO PLANEJAMENTO</span>
              <span>À REALIZAÇÃO</span>
              <strong className="motto-gold">RESULTADOS REAIS.</strong>
            </div>
            <a href="#sobre" className="hero-scroll-down-btn" aria-label="Rolar para a próxima seção">
              <ChevronDown size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
