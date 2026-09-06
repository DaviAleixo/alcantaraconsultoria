import Image from 'next/image'

export function FieldSection() {
  return (
    <section className="field-section">
      <div className="field-grid">
        <div className="field-image-wrap">
          <Image
            src="/images/alcantara-field.png"
            alt="Engenheiro da Alcântara Consultoria em vistoria de campo"
            fill
            className="field-image"
          />
          <span className="image-caption">Engenharia aplicada com rigor técnico</span>
        </div>
        <div className="field-statement">
          <p className="eyebrow">Parceiro Técnico & Estratégico</p>
          <blockquote>
            “Precisão técnica,<br />
            <em>resultados sólidos.</em>”
          </blockquote>
          <p>
            Oferecemos terceirização dos serviços de Engenharia de Minas e responsabilidade técnica (CREA / DNPM / ANM),
            levando tranquilidade e segurança para o seu investimento.
          </p>
        </div>
      </div>
    </section>
  )
}
