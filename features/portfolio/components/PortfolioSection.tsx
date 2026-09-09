import { ElasticGallery } from '@/components/ui/elastic-gallery'

export function PortfolioSection() {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="shell">
        {/* SECTION HEADER */}
        <div className="portfolio-header-center">
          <div className="portfolio-accent-line" />
          <p className="portfolio-eyebrow">PORTFÓLIO INSTITUCIONAL</p>
          <h2 className="portfolio-title">
            PROJETOS & RESULTADOS
          </h2>
          <p className="portfolio-subtitle">
            Conheça as frentes técnicas e operacionais conduzidas com excelência pela Alcântara.
          </p>
        </div>

        {/* ELASTIC GALLERY COMPONENT */}
        <ElasticGallery />
      </div>
    </section>
  )
}
