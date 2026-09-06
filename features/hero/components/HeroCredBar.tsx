import { HardHat, TrendingUp, Settings, MapPin } from 'lucide-react'

function DroneIcon({ size = 26, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="2.2" />
      <line x1="6" y1="6" x2="10.5" y2="10.5" />
      <line x1="18" y1="6" x2="13.5" y2="10.5" />
      <line x1="6" y1="18" x2="10.5" y2="13.5" />
      <line x1="18" y1="18" x2="13.5" y2="13.5" />
      <circle cx="5" cy="5" r="2.2" />
      <circle cx="19" cy="5" r="2.2" />
      <circle cx="5" cy="19" r="2.2" />
      <circle cx="19" cy="19" r="2.2" />
    </svg>
  )
}

export function HeroCredBar() {
  return (
    <div className="hero-cred-bar">
      {/* 1: +10 ANOS DE MERCADO */}
      <div className="cred-col cred-col-1">
        <div className="cred-icon-wrap">
          <HardHat size={32} strokeWidth={1.5} />
        </div>
        <div className="cred-content">
          <strong className="cred-title">+10</strong>
          <small className="cred-label">ANOS DE MERCADO</small>
          <span className="cred-sub">e presença no campo</span>
        </div>
      </div>

      {/* 2: ANM */}
      <div className="cred-col cred-col-anm">
        <div className="cred-icon-wrap">
          <TrendingUp size={28} strokeWidth={1.6} />
        </div>
        <div className="cred-content">
          <strong className="cred-title">ANM</strong>
          <small className="cred-label">GESTÃO COMPLETA DE</small>
          <span className="cred-sub">direitos minerários</span>
        </div>
      </div>

      {/* 3: CREA */}
      <div className="cred-col cred-col-crea">
        <div className="cred-icon-wrap">
          <Settings size={28} strokeWidth={1.6} />
        </div>
        <div className="cred-content">
          <strong className="cred-title">CREA</strong>
          <small className="cred-label">RESPONSABILIDADE TÉCNICA</small>
          <span className="cred-sub">e terceirização de mina</span>
        </div>
      </div>

      {/* 4: VANT */}
      <div className="cred-col cred-col-vant">
        <div className="cred-icon-wrap">
          <DroneIcon size={28} />
        </div>
        <div className="cred-content">
          <strong className="cred-title">VANT</strong>
          <small className="cred-label">TOPOGRAFIA E ORTOFOTOS</small>
          <span className="cred-sub">com tecnologia drone</span>
        </div>
      </div>

      {/* 5: LOCALIZAÇÃO */}
      <div className="cred-col cred-col-loc">
        <div className="cred-icon-wrap cred-loc-icon">
          <MapPin size={26} strokeWidth={1.6} />
        </div>
        <div className="cred-content">
          <small className="cred-label cred-label-loc">CONSELHEIRO LAFAIETE / MG</small>
          <span className="cred-sub cred-sub-loc">ATENDIMENTO NACIONAL</span>
        </div>
      </div>
    </div>
  )
}

