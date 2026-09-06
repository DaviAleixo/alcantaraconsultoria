import type { LicensingStep } from '../types/licensing.types'

export const licensingSteps: LicensingStep[] = [
  {
    phase: 'LP',
    name: 'Licença Prévia',
    desc: 'Solicitada na fase de planejamento. Avalia a localização e viabilidade ambiental, aprovando a concepção do empreendimento.',
  },
  {
    phase: 'LI',
    name: 'Licença de Instalação',
    desc: 'Autoriza a instalação do empreendimento e início das obras conforme projetos aprovados e medidas de controle.',
  },
  {
    phase: 'LO',
    name: 'Licença de Operação',
    desc: 'Autoriza o início e a continuidade do funcionamento da atividade após a verificação do cumprimento das condicionantes.',
  },
  {
    phase: 'Outorga',
    name: 'Recursos Hídricos',
    desc: 'Garante o direito legal de captação e uso das águas superficiais ou subterrâneas junto ao IGAM / órgãos gestores.',
  },
]
