import { ElasticGallery } from '@/components/ui/elastic-gallery'

export function PortfolioSection() {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="shell">
        {/* SECTION HEADER */}
        <div className="portfolio-header-center">
          <div className="portfolio-accent-line" />
          <p className="portfolio-eyebrow">PORTFÓLIO & CASOS DE SUCESSO</p>
          <h2 className="portfolio-title">
            SOLUÇÕES PRÁTICAS E<br />
            RESULTADOS NA MINERAÇÃO
          </h2>
          <p className="portfolio-subtitle">
            Conheça nossas frentes técnicas de regularização, inteligência operacional, aerolevantamento e segurança em minas.
          </p>
        </div>

        {/* ELASTIC GALLERY COMPONENT */}
        <ElasticGallery />
      </div>
    </section>
  )
}
