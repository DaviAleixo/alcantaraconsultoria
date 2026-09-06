import { ContactInfoList } from './ContactInfoList'
import { ContactForm } from './ContactForm'

export function ContactSection() {
  return (
    <section className="section contact-section" id="contato">
      {/* BACKGROUND DECORATIVE GLOW */}
      <div className="contact-bg-glow" aria-hidden="true" />

      <div className="shell contact-grid">
        {/* LEFT COLUMN: INFO & TRUST */}
        <div className="contact-left-col">
          <div className="contact-accent-line" />
          <p className="contact-eyebrow">FALE COM NOSSOS ESPECIALISTAS</p>
          <h2 className="contact-headline">
            VAMOS CONVERSAR SOBRE O SEU EMPREENDIMENTO
          </h2>
          <p className="contact-description">
            Nossa equipe técnica multidisciplinar está pronta para entender as especificidades do seu projeto, propor as melhores soluções minerárias e ambientais e assegurar a máxima conformidade legal.
          </p>

          <ContactInfoList />
        </div>

        {/* RIGHT COLUMN: PREMIUM FORM CARD */}
        <div className="contact-form-wrapper">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
