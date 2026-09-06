import { ElasticGallery } from '@/components/ui/elastic-gallery'

export function PortfolioSection() {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="shell">
        {/* SECTION HEADER */}
        <div className="portfolio-header-center">
          <div className="portfolio-accent-line" />
          <p className="portfolio-eyebrow">PORTFÓLIO & PROJETOS</p>
          <h2 className="portfolio-title">
            PROJETOS E RESULTADOS<br />
            NA PRÁTICA MINERAL
          </h2>
          <p className="portfolio-subtitle">
            Conheça frentes técnicas e projetos estratégicos conduzidos com excelência pela Alcântara.
          </p>
        </div>

        {/* ELASTIC GALLERY COMPONENT */}
        <ElasticGallery />
      </div>
    </section>
  )
}
