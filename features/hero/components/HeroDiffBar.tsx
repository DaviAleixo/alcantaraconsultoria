import { Star, Target } from 'lucide-react'

export function HeroDiffBar() {
  return (
    <div className="hero-diff-bar">
      <div className="diff-item">
        <Star size={18} className="diff-icon" />
        <span>+10 ANOS DE EXPERIÊNCIA</span>
      </div>

      <div className="diff-item">
        <svg
          className="diff-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 6.5c1.2-1.5 3.5-2.2 5.5-1.2 2 1 4-.2 5.5.8 1.5 1 2.5 2.5 2 4.5-.5 2 .8 3.8 0 5.5-.8 1.8-2 3.2-3.8 3.8-1.8.5-3-.8-4.8-.4-1.8.4-3-1.2-3.5-2.8-.5-2 .8-3.8 0-5.5-.8-1.5-1.5-3-.9-4.7z" />
        </svg>
        <span>ATUAÇÃO EM TODO O BRASIL</span>
      </div>

      <div className="diff-item">
        <svg
          className="diff-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="9" y="9" width="6" height="6" rx="1.5" />
          <path d="m4.5 4.5 4.5 4.5m6 0 4.5-4.5M4.5 19.5l4.5-4.5m6 0 4.5 4.5" />
          <circle cx="4" cy="4" r="1.5" />
          <circle cx="20" cy="4" r="1.5" />
          <circle cx="4" cy="20" r="1.5" />
          <circle cx="20" cy="20" r="1.5" />
        </svg>
        <span>TECNOLOGIA DE PONTA</span>
      </div>

      <div className="diff-item">
        <Target size={18} className="diff-icon" />
        <span>FOCO EM RESULTADOS</span>
      </div>
    </div>
  )
}
