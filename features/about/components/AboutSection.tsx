import Image from 'next/image'
import { ArrowUpRight, ChevronRight } from 'lucide-react'

export function AboutSection() {
  return (
    <section className="about-section" id="sobre">
      {/* BACKGROUND DECORATIVE ELEMENTS */}
      <div className="about-bg-topography" aria-hidden="true" />
      <div className="about-bg-dots" aria-hidden="true" />

      <div className="shell about-shell">
        {/* LEFT COLUMN */}
        <div className="about-col-left">
          <div className="about-header-group">
            <div className="about-accent-line" />
            <p className="about-eyebrow">SOBRE A ALCÂNTARA</p>
            <h2 className="about-headline">
              ENGENHARIA QUE<br />GERA RESULTADOS.
            </h2>
            <p className="about-subtitle">
              Soluções técnicas integradas para <strong>Mineração</strong>,{' '}
              <strong>Meio Ambiente, SSMA</strong> e <strong>Gestão de Mina</strong>.
            </p>
          </div>

          <div className="about-visual-container">
            <div className="about-image-frame">
              <Image
                src="/images/sobre.png"
                alt="Instalações de britagem e mineração — Alcântara Consultoria"
                width={720}
                height={500}
                className="about-image"
                priority
              />
            </div>

            {/* OVERLAPPING SERVICES CARD */}
            <div className="about-services-card">
              {/* ITEM 1: MINERAÇÃO */}
              <div className="about-service-item">
                <div className="about-service-icon">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 32h36" />
                    <path d="M10 32l-3-11h16l4 11" />
                    <path d="M27 21h9l5 5v6H27" />
                    <path d="M29 21l3-5h6l3 5" />
                    <circle cx="14" cy="35" r="4" />
                    <circle cx="34" cy="35" r="4" />
                    <line x1="12" y1="25" x2="20" y2="25" />
                    <line x1="10" y1="28" x2="22" y2="28" />
                  </svg>
                </div>
                <div className="about-service-content">
                  <h4>MINERAÇÃO</h4>
                  <p>Suporte técnico em todas as etapas do empreendimento mineral.</p>
                </div>
              </div>

              {/* ITEM 2: MEIO AMBIENTE */}
              <div className="about-service-item">
                <div className="about-service-icon">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="24" cy="24" r="18" />
                    <path d="M16 32 C 16 32, 17 21, 26 17 C 33 13, 34 14, 34 14 C 34 14, 34 22, 29 28 C 24 33, 16 32, 16 32 Z" />
                    <path d="M16 32 L 27 21" />
                  </svg>
                </div>
                <div className="about-service-content">
                  <h4>MEIO AMBIENTE</h4>
                  <p>Atuação responsável e sustentável em todas as fases do projeto.</p>
                </div>
              </div>

              {/* ITEM 3: SSMA + GESTÃO DE MINA */}
              <div className="about-service-item">
                <div className="about-service-icon">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 32h32" />
                    <path d="M10 32c0-8 6-15 14-15s14 7 14 15" />
                    <path d="M21 17v-4a3 3 0 0 1 6 0v4" />
                    <path d="M13 32v2a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-2" />
                    <line x1="24" y1="17" x2="24" y2="32" />
                  </svg>
                </div>
                <div className="about-service-content">
                  <h4>SSMA + GESTÃO DE MINA</h4>
                  <p>Segurança, saúde e gestão integrada para operações mais eficientes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="about-col-right">
          <ul className="about-bullet-list">
            <li className="about-bullet-item">
              <ChevronRight size={16} className="about-bullet-chevron" />
              <p>
                A <strong>Alcântara Consultoria</strong> é uma empresa especializada em soluções técnicas para os setores de Mineração, Meio Ambiente, SSMA e Gestão de Mina.
              </p>
            </li>

            <li className="about-bullet-item">
              <ChevronRight size={16} className="about-bullet-chevron" />
              <p>
                <strong>Fundada em 2014</strong>, a empresa nasceu com o propósito de oferecer aos empreendimentos minerais suporte técnico especializado, aliado a um atendimento próximo e personalizado.
              </p>
            </li>

            <li className="about-bullet-item">
              <ChevronRight size={16} className="about-bullet-chevron" />
              <p>
                Ao longo de sua trajetória, a Alcântara Consultoria acumulou experiência em diferentes etapas do setor mineral, desde a regularização e acompanhamento de processos junto à ANM, planejamento e acompanhamento de lavra, elaboração de estudos e projetos, até o suporte técnico e ambiental às operações.
              </p>
            </li>

            <li className="about-bullet-item">
              <ChevronRight size={16} className="about-bullet-chevron" />
              <p>
                Atualmente, a empresa atua na integração entre os aspectos técnicos, minerários, ambientais e operacionais dos empreendimentos, buscando oferecer soluções práticas, seguras e adequadas à realidade de cada cliente.
              </p>
            </li>

            <li className="about-bullet-item">
              <ChevronRight size={16} className="about-bullet-chevron" />
              <p>
                A equipe é formada por profissionais com experiência em mineração e gestão de operações, permitindo à Alcântara Consultoria atuar tanto no desenvolvimento de novos projetos quanto no acompanhamento e aprimoramento de empreendimentos já em operação.
              </p>
            </li>

            <li className="about-bullet-item">
              <ChevronRight size={16} className="about-bullet-chevron" />
              <p>
                Nosso objetivo é ser um parceiro técnico estratégico para nossos clientes, contribuindo para que seus empreendimentos sejam desenvolvidos de forma regular, eficiente, segura e sustentável.
              </p>
            </li>
          </ul>

          <div className="about-cta-container">
            <a href="#solucoes" className="about-cta-btn">
              CONHEÇA NOSSA ATUAÇÃO
              <ArrowUpRight size={17} className="about-cta-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
