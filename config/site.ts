export const siteConfig = {
  name: 'Alcântara Consultoria em Engenharia',
  shortName: 'Alcântara Consultoria',
  tagline: 'Consultoria & Engenharia Mineral Especializada',
  description:
    'Consultoria especializada em mineração, regularização minerária, meio ambiente, SSMA, planejamento e gestão de mina.',
  phone: '(31) 98834-1974',
  phoneRaw: '5531988341974',
  email: 'contato@alcantaraconsultoria.eng.br',
  instagram: 'https://instagram.com/alcantaraconsultoria',
  address: {
    street: 'Rua Eça de Queirós, 144 — Queluz',
    city: 'Conselheiro Lafaiete',
    state: 'MG',
    zip: '36400-000',
    full: 'Rua Eça de Queirós, 144 — Queluz, Conselheiro Lafaiete — MG, CEP 36400-000',
  },
  hours: {
    weekdays: 'Segunda a Sexta: 08:00 às 18:00',
    weekend: 'Sábado e Domingo: Fechado',
  },
  navigation: [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#solucoes' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Drones', href: '#aerolevantamento' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ],
}

export type SiteConfig = typeof siteConfig
