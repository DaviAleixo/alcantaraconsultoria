import { Droplets } from 'lucide-react'
import { licensingSteps } from '../data/licensing.data'

export function LicensingSection() {
  return (
    <section className="section licensing-section" id="licenciamento">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Meio Ambiente & Legislação</p>
            <h2>Etapas do Licenciamento Ambiental</h2>
          </div>
          <p>
            Conforme a Resolução CONAMA 237/1997 e órgãos estaduais (FEAM / SEMAD), garantimos o cumprimento de cada condicionante legal.
          </p>
        </div>

        <div className="licensing-grid">
          {licensingSteps.map((step) => (
            <div key={step.phase} className="licensing-card">
              <div className="licensing-badge">{step.phase}</div>
              <h3>{step.name}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="water-rights-banner">
          <div className="water-icon-wrap">
            <Droplets size={28} />
          </div>
          <div>
            <h4>Outorga para Uso de Recursos Hídricos</h4>
            <p>
              Assegure legalmente o direito de captação e uso de águas superficiais ou subterrâneas junto aos órgãos competentes (IGAM / ANA),
              evitando multas, paralisações e garantindo a sustentabilidade hídrica da sua operação.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
