import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { buildWhatsAppUrl } from '@/lib/utils'

export function HeroActions() {
  const whatsappUrl = buildWhatsAppUrl(
    'Olá! Gostaria de falar com a Alcântara Consultoria.'
  )

  return (
    <div className="hero-cta-group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-hero-primary"
      >
        <div className="btn-icon-label">
          <Image
            src="/images/wpp.png"
            alt="WhatsApp"
            width={20}
            height={20}
            className="btn-wpp-img"
          />
          <span>FALAR NO WHATSAPP</span>
        </div>
        <ChevronRight size={17} className="btn-chevron-arrow" />
      </a>
      <a href="#solucoes" className="btn-hero-secondary">
        <span>CONHECER NOSSOS SERVIÇOS</span>
        <ChevronRight size={17} className="btn-chevron-arrow" />
      </a>
    </div>
  )
}
