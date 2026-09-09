import { heroContent } from '../data/hero.data'

export function HeroHeadline() {
  return (
    <>
      <p className="hero-eyebrow">{heroContent.eyebrow}</p>
      <h1 className="hero-headline">
        <span className="hl-line">ENGENHARIA QUE</span>
        <span className="hl-line">ACOMPANHA</span>
        <span className="hl-line hero-gradient-text">A OPERAÇÃO</span>
        <span className="hl-line hero-gradient-text">POR INTEIRO.</span>
      </h1>
      <div className="my-4 h-[3px] w-12 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full" />
      <p className="hero-description">
        Atuamos com engenharia de minas, gestão de direitos minerários, licenciamento ambiental,
        perícias e <strong className="text-gold">aerolevantamento com drones</strong> para entregar
        segurança, eficiência e valor em cada etapa do projeto.
      </p>
    </>
  )
}
