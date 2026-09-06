import { heroContent } from '../data/hero.data'

export function HeroHeadline() {
  return (
    <>
      <p className="hero-eyebrow">{heroContent.eyebrow}</p>
      <h1 className="hero-headline">
        <span className="hl-line">SOLUÇÕES TÉCNICAS</span>
        <span className="hl-line">
          QUE <span className="hero-gradient-text">TRANSFORMAM</span>
        </span>
        <span className="hl-line">DESAFIOS MINERAIS</span>
        <span className="hl-line">
          EM <span className="hero-gradient-text">RESULTADOS REAIS.</span>
        </span>
      </h1>
      <p className="hero-description">
        Atuamos com engenharia de minas, gestão de direitos minerários, licenciamento ambiental,
        perícias e <strong className="text-gold">aerolevantamento com drones</strong> para entregar
        segurança, eficiência e valor em cada etapa do projeto.
      </p>
    </>
  )
}
