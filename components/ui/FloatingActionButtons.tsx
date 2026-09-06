'use client'

import Image from 'next/image'
import { Mail } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { buildWhatsAppUrl } from '@/lib/utils'

function InstagramIcon({ size = 22, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export function FloatingActionButtons() {
  const whatsappUrl = buildWhatsAppUrl(
    'Olá! Vim através do site da Alcântara Consultoria e gostaria de atendimento.'
  )

  return (
    <aside className="floating-actions-container" aria-label="Canais de Contato Rápido">
      {/* 1. TOP: WHATSAPP */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-btn-whatsapp"
        aria-label="Falar no WhatsApp"
        title="Falar no WhatsApp"
      >
        <span className="floating-tooltip">WhatsApp</span>
        <div className="floating-icon-wrap">
          <Image
            src="/images/wpp.png"
            alt="WhatsApp"
            width={26}
            height={26}
            className="floating-wpp-img"
          />
        </div>
      </a>

      {/* 2. MIDDLE: INSTAGRAM */}
      <a
        href={siteConfig.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-btn-instagram"
        aria-label="Acompanhe no Instagram"
        title="Instagram"
      >
        <span className="floating-tooltip">Instagram</span>
        <div className="floating-icon-wrap">
          <InstagramIcon size={22} />
        </div>
      </a>

      {/* 3. BOTTOM: EMAIL */}
      <a
        href={`mailto:${siteConfig.email}`}
        className="floating-btn floating-btn-email"
        aria-label="Enviar E-mail"
        title="Enviar E-mail"
      >
        <span className="floating-tooltip">E-mail</span>
        <div className="floating-icon-wrap">
          <Mail size={20} strokeWidth={2} />
        </div>
      </a>
    </aside>
  )
}

