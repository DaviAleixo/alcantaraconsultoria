import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { servicesList } from '../data/services.data'
import { buildWhatsAppUrl } from '@/lib/utils'

export function ServicesSection() {
  return (
    <section className="services-section" id="solucoes">
      {/* BACKGROUND DECORATIVE ELEMENTS */}
      <div className="services-bg-topography" aria-hidden="true" />
      <div className="services-bg-dots" aria-hidden="true" />

      <div className="shell">
        {/* SECTION HEADER - CENTERED */}
        <div className="services-header-center">
          <div className="services-accent-line-center" />
          <p className="services-eyebrow-center">NOSSOS SERVIÇOS</p>
          <h2 className="services-title-center">
            SOLUÇÕES COMPLETAS PARA<br />
            CADA ETAPA DA MINERAÇÃO
          </h2>
          <p className="services-subtitle-center">
            Atuamos de forma integrada em todo o ciclo mineral, combinando conhecimento técnico,
            conformidade legal e foco em resultados sustentáveis.
          </p>
        </div>

        {/* 6 CARDS GRID */}
        <div className="services-cards-grid">
          {servicesList.map((service) => {
            const Icon = service.icon
            const fullTitle = `${service.titleLine1} ${service.titleLine2 || ''}`.trim()
            const serviceWhatsAppUrl = buildWhatsAppUrl(
              `Olá! Gostaria de falar sobre o serviço de ${fullTitle}.`
            )

            return (
              <article key={service.id} className="service-card-item">
                {/* LEFT CONTENT */}
                <div className="service-card-info">
                  <div className="service-card-header">
                    <div className="service-card-icon-wrap">
                      <Icon size={24} strokeWidth={2.2} />
                    </div>
                    <span className="service-card-tag">{service.tag}</span>
                  </div>

                  <div className="service-card-body">
                    <h3 className="service-card-heading">
                      {service.titleLine1}
                      {service.titleLine2 && (
                        <>
                          <br />
                          {service.titleLine2}
                        </>
                      )}
                    </h3>
                    <p className="service-card-text">{service.description}</p>
                  </div>

                  <a
                    href={serviceWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-card-btn"
                    aria-label={`Solicitar informações sobre ${fullTitle}`}
                  >
                    <ArrowRight size={15} />
                  </a>
                </div>

                {/* RIGHT IMAGE WITH ASYMMETRIC TOP-LEFT CUT */}
                <div className="service-card-img-wrap">
                  <Image
                    src={service.image}
                    alt={fullTitle}
                    width={320}
                    height={260}
                    className="service-card-img"
                  />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
