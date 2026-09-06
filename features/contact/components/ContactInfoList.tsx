import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { siteConfig } from '@/config/site'

export function ContactInfoList() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${siteConfig.address.street}, ${siteConfig.address.city} - ${siteConfig.address.state}`
  )}`

  return (
    <div className="contact-info-list">
      {/* PHONE / WHATSAPP CARD */}
      <a 
        href={`https://wa.me/${siteConfig.phoneRaw}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="contact-info-card"
      >
        <div className="contact-icon-circle">
          <Phone size={18} />
        </div>
        <div className="contact-card-content">
          <div className="contact-card-header">
            <strong>Telefone & WhatsApp</strong>
          </div>
          <span className="contact-card-value">{siteConfig.phone}</span>
        </div>
      </a>

      {/* EMAIL CARD */}
      <a 
        href={`mailto:${siteConfig.email}`}
        className="contact-info-card"
      >
        <div className="contact-icon-circle">
          <Mail size={18} />
        </div>
        <div className="contact-card-content">
          <div className="contact-card-header">
            <strong>E-mail Corporativo</strong>
          </div>
          <span className="contact-card-value">{siteConfig.email}</span>
        </div>
      </a>

      {/* LOCATION CARD */}
      <a 
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-info-card"
      >
        <div className="contact-icon-circle">
          <MapPin size={18} />
        </div>
        <div className="contact-card-content">
          <div className="contact-card-header">
            <strong>Sede Operacional</strong>
          </div>
          <span className="contact-card-value">{siteConfig.address.street}</span>
          <span className="contact-card-sub">{siteConfig.address.city} — {siteConfig.address.state}</span>
        </div>
      </a>

      {/* HOURS CARD */}
      <div className="contact-info-card">
        <div className="contact-icon-circle">
          <Clock size={18} />
        </div>
        <div className="contact-card-content">
          <div className="contact-card-header">
            <strong>Horário de Atendimento</strong>
          </div>
          <span className="contact-card-value">{siteConfig.hours.weekdays}</span>
        </div>
      </div>
    </div>
  )
}
