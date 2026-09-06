import { FileText, Layers, Target, Leaf, ShieldCheck, Briefcase } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface ServiceItem {
  id: string
  number: string
  titleLine1: string
  titleLine2?: string
  description: string
  image: string
  icon: LucideIcon
}

export const servicesList: ServiceItem[] = [
  {
    id: 'regularizacao-mineraria',
    number: '01',
    titleLine1: 'REGULARIZAÇÃO',
    titleLine2: 'MINERÁRIA',
    description:
      'Processos, requisitos e licenças junto à ANM para garantir conformidade e segurança jurídica.',
    image: '/images/services/service-01.jpg',
    icon: FileText,
  },
  {
    id: 'planejamento-mina',
    number: '02',
    titleLine1: 'PLANEJAMENTO',
    titleLine2: 'DE MINA',
    description:
      'Planejamento de lavra, produção e operações com foco em eficiência, segurança e viabilidade.',
    image: '/images/services/service-02.jpg',
    icon: Layers,
  },
  {
    id: 'estudos-projetos',
    number: '03',
    titleLine1: 'ESTUDOS E PROJETOS',
    titleLine2: 'DE MINERAÇÃO',
    description:
      'Estudos técnicos, econômicos e ambientais para embasar decisões e viabilizar empreendimentos.',
    image: '/images/services/service-03.jpg',
    icon: Target,
  },
  {
    id: 'meio-ambiente',
    number: '04',
    titleLine1: 'MEIO AMBIENTE',
    description:
      'Licenciamento ambiental e gestão de condicionantes com responsabilidade e compromisso socioambiental.',
    image: '/images/services/service-04.jpg',
    icon: Leaf,
  },
  {
    id: 'ssma',
    number: '05',
    titleLine1: 'SSMA',
    description:
      'Segurança do Trabalho, Saúde Ocupacional e Meio Ambiente integrados à rotina operacional.',
    image: '/images/services/service-05.jpg',
    icon: ShieldCheck,
  },
  {
    id: 'consultoria-estrategica',
    number: '06',
    titleLine1: 'CONSULTORIA',
    titleLine2: 'ESTRATÉGICA',
    description:
      'Análises, diagnósticos e suporte técnico para decisões assertivas e crescimento sustentável.',
    image: '/images/services/service-06.jpg',
    icon: Briefcase,
  },
]
