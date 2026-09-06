export interface TestimonialItem {
  id: string
  name: string
  role: string
  company: string
  location: string
  content: string
  rating: number
  serviceTag: string
  initials: string
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: '1',
    name: 'Carlos Eduardo Silveira',
    role: 'Diretor de Operações',
    company: 'Mineração Vale do Aço',
    location: 'Congonhas / MG',
    content:
      'A consultoria da Alcântara foi decisiva para o redimensionamento do nosso plano de lavra e adequação aos prazos da ANM. A precisão técnica e a presença constante em campo nos deram total segurança operacional.',
    rating: 5,
    serviceTag: 'Gestão de Mina & ANM',
    initials: 'CS',
  },
  {
    id: '2',
    name: 'Mariana Guimarães',
    role: 'Gerente de Meio Ambiente e ESG',
    company: 'Grupo Terra Mineral',
    location: 'Itabira / MG',
    content:
      'Conduziram todo o nosso processo de licenciamento ambiental e outorga com agilidade ímpar. A equipe domina tanto a legislação quanto a realidade prática das operações minerárias.',
    rating: 5,
    serviceTag: 'Licenciamento Ambiental',
    initials: 'MG',
  },
  {
    id: '3',
    name: 'Roberto Mendes',
    role: 'Engenheiro Chefe de Mina',
    company: 'Minérios do Brasil S.A.',
    location: 'Belo Horizonte / MG',
    content:
      'O suporte com levantamentos topográficos por drones e batimetria superou as expectativas. Os modelos 3D gerados otimizaram nosso controle volumétrico de pilhas e cavas em mais de 30%.',
    rating: 5,
    serviceTag: 'Topografia & Drones',
    initials: 'RM',
  },
]
