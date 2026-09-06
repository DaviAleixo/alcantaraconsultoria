import { Camera, Layers, Mountain, TrendingUp, Target, Clock, Shield, Database } from 'lucide-react'

export interface DroneMetric {
  id: string
  icon: typeof Target
  tag: string
  value: string
  description: string
}

export interface DroneDeliverable {
  id: string
  number: string
  title: string
  description: string
  icon: typeof Camera
  image: string
}

export const droneMetrics: DroneMetric[] = [
  {
    id: 'centimetrica',
    icon: Target,
    tag: 'CENTIMÉTRICA',
    value: '2–5cm',
    description: 'Precisão relativa',
  },
  {
    id: 'produtividade',
    icon: Clock,
    tag: 'PRODUTIVIDADE',
    value: '10x',
    description: 'Mais rápido que o método convencional',
  },
  {
    id: 'seguranca',
    icon: Shield,
    tag: 'SEGURANÇA',
    value: '100%',
    description: 'Redução da exposição humana em áreas críticas',
  },
  {
    id: 'dados',
    icon: Database,
    tag: 'DADOS CONFIÁVEIS',
    value: '24h',
    description: 'Entrega ágil e consistente para tomada de decisão',
  },
]

export const droneDeliverables: DroneDeliverable[] = [
  {
    id: 'ortofoto',
    number: '01',
    title: 'Ortofoto de Alta Precisão',
    description:
      'Produção geométrica compatível à carta topográfica com riqueza visual fotográfica para extração detalhada de feições.',
    icon: Camera,
    image: '/images/ortofato.png',
  },
  {
    id: 'mdt',
    number: '02',
    title: 'MDT (Modelo Digital de Terreno)',
    description:
      'Representação real da superfície do solo desprovida de vegetação, ideal para cálculo volumétrico de pilhas e cavas.',
    icon: Layers,
    image: '/images/mdt.png',
  },
  {
    id: 'mds',
    number: '03',
    title: 'MDS (Modelo Digital de Superfície)',
    description:
      'Mapeamento com elevação de todas as estruturas e edificações para planejamento e gestão de infraestrutura.',
    icon: Mountain,
    image: '/images/mds.png',
  },
  {
    id: 'curvas',
    number: '04',
    title: 'Curvas de Nível & Volumes',
    description:
      'Geração ágil de curvas de nível e monitoramento periódico do avanço da lavra em ambiente computacional.',
    icon: TrendingUp,
    image: '/images/curvas.png',
  },
]
