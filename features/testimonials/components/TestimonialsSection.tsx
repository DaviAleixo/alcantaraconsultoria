import { StaggerTestimonials } from '@/components/ui/stagger-testimonials'

export function TestimonialsSection() {
  return (
    <section className="testimonials-section" id="depoimentos">
      <div className="shell">
        {/* HEADER */}
        <div className="testimonials-header-center">
          <div className="testimonials-accent-line" />
          <p className="testimonials-eyebrow">DEPOIMENTOS & CONFIANÇA</p>
          <h2 className="testimonials-title">
            QUEM CONFIA NA ENGENHARIA<br />
            DA ALCÂNTARA CONSULTORIA
          </h2>
          <p className="testimonials-subtitle">
            Relatos de diretores, gerentes e engenheiros de empreendimentos minerais que contam com nossa assessoria técnica contínua.
          </p>
        </div>

        {/* STAGGER TESTIMONIALS SLIDER */}
        <div className="testimonials-slider-wrap">
          <StaggerTestimonials />
        </div>
      </div>
    </section>
  )
}
