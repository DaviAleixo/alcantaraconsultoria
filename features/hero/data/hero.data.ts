import { HardHat, MapPin, Star, Target } from 'lucide-react'
import type { HeroCredential, HeroDifferential } from '../types/hero.types'

export const heroContent = {
  eyebrow: 'CONSULTORIA & ENGENHARIA MINERAL ESPECIALIZADA',
  headlineLines: [
    { text: 'ENGENHARIA QUE', highlight: false },
    { text: 'ACOMPANHA', highlight: false },
    { highlightText: 'A OPERAÇÃO' },
    { highlightText: 'POR INTEIRO.' },
  ],
  description:
    'Atuamos com engenharia de minas, gestão de direitos minerários, licenciamento ambiental, perícias e aerolevantamento com drones para entregar segurança, eficiência e valor em cada etapa do projeto.',
}

export const heroDifferentials: HeroDifferential[] = [
  {
    id: 'exp',
    label: '+10 ANOS DE EXPERIÊNCIA',
    icon: Star,
  },
  {
    id: 'brasil',
    label: 'ATUAÇÃO EM TODO O BRASIL',
  },
  {
    id: 'tech',
    label: 'TECNOLOGIA DE PONTA',
  },
  {
    id: 'results',
    label: 'FOCO EM RESULTADOS',
    icon: Target,
  },
]

export const heroCredentials: HeroCredential[] = [
  {
    id: 'market',
    title: '+10',
    label: 'ANOS DE MERCADO',
    subtext: 'e presença no campo',
    icon: HardHat,
  },
  {
    id: 'anm',
    title: 'ANM',
    label: 'GESTÃO COMPLETA DE',
    subtext: 'direitos minerários',
  },
  {
    id: 'crea',
    title: 'CREA',
    label: 'RESPONSABILIDADE TÉCNICA',
    subtext: 'e terceirização de mina',
  },
  {
    id: 'vant',
    title: 'VANT',
    label: 'TOPOGRAFIA E ORTOFOTOS',
    subtext: 'com tecnologia drone',
  },
  {
    id: 'location',
    title: '',
    label: 'CONSELHEIRO LAFAIETE / MG',
    subtext: 'ATENDIMENTO NACIONAL',
    icon: MapPin,
    isLocation: true,
  },
]
