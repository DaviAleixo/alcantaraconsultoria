import Image from 'next/image'
import { ArrowUp } from 'lucide-react'
import { siteConfig } from '@/config/site'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      {/* GLOW TOP ACCENT */}
      <div className="footer-top-accent" />

      <div className="shell footer-shell">
        <div className="footer-main-grid footer-2col">
          {/* COLUNA 1: MARCA E CREDIBILIDADE */}
          <div className="footer-brand-box">
            <a href="#inicio" className="footer-logo-wrap" aria-label={`${siteConfig.name} — Início`}>
              <Image
                src="/images/logohorizontal.png"
                alt={siteConfig.name}
                width={195}
                height={44}
                className="footer-logo-img"
              />
            </a>
            <p className="footer-desc">
              Consultoria mineral estratégica, soluções ambientais de alta complexidade, topografia com drones e gestão completa de direitos minerários.
            </p>
          </div>

          {/* COLUNA 2: NAVEGAÇÃO ESTRATÉGICA */}
          <div className="footer-nav-box">
            <h4 className="footer-box-title">
              <span>Navegação</span>
            </h4>
            <ul className="footer-nav-list footer-nav-2col">
              <li><a href="#inicio" className="footer-nav-link">Início</a></li>
              <li><a href="#sobre" className="footer-nav-link">Sobre Nós</a></li>
              <li><a href="#solucoes" className="footer-nav-link">Soluções Técnicas</a></li>
              <li><a href="#portfolio" className="footer-nav-link">Portfólio de Projetos</a></li>
              <li><a href="#aerolevantamento" className="footer-nav-link">Drones & VANT</a></li>
              <li><a href="#depoimentos" className="footer-nav-link">Depoimentos</a></li>
              <li><a href="#contato" className="footer-nav-link">Fale Conosco</a></li>
            </ul>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright-text">
            © {currentYear} <strong className="gold-text">{siteConfig.name}</strong>. Todos os direitos reservados.
          </div>
          
          <a href="#inicio" className="footer-scroll-top-btn" aria-label="Voltar ao início da página">
            <span>Voltar ao topo</span>
            <div className="scroll-top-arrow">
              <ArrowUp size={13} />
            </div>
          </a>
        </div>
      </div>
    </footer>
  )
}
