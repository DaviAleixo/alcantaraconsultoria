"use client"

import React, { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { cn } from '@/lib/utils'

const SQRT_5000 = Math.sqrt(5000)

export interface StaggerTestimonial {
  tempId: number
  testimonial: string
  by: string
  role: string
  company: string
  imgSrc: string
}

export const defaultMiningTestimonials: StaggerTestimonial[] = [
  {
    tempId: 0,
    testimonial: "A consultoria da Alcântara foi decisiva para o nosso plano de lavra e adequação rigorosa aos prazos da ANM. Segurança total em campo.",
    by: "Carlos Eduardo Silveira",
    role: "Diretor de Operações",
    company: "Mineração Vale do Aço",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    tempId: 1,
    testimonial: "Conduziram todo o nosso processo de licenciamento ambiental e outorgas hídricas com agilidade ímpar e domínio técnico impecável.",
    by: "Mariana Guimarães",
    role: "Gerente de Meio Ambiente & ESG",
    company: "Grupo Terra Mineral",
    imgSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
  },
  {
    tempId: 2,
    testimonial: "O aerolevantamento por drones e controle topográfico otimizou nosso cálculo volumétrico de pilhas e cavas em mais de 30%.",
    by: "Roberto Mendes",
    role: "Engenheiro Chefe de Mina",
    company: "Minérios do Brasil S.A.",
    imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  },
  {
    tempId: 3,
    testimonial: "Equipe altamente capacitada, atendimento direto dos sócios e respostas ágeis para todas as demandas técnicas e regulatórias.",
    by: "Fernando Braga",
    role: "Coordenador de SSMA",
    company: "Vetor Mineração",
    imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80"
  },
  {
    tempId: 4,
    testimonial: "Parceria sólida há anos. Confiamos 100% nos estudos de viabilidade, projetos de mineração e responsabilidade técnica da Alcântara.",
    by: "André Luiz Sampaio",
    role: "Diretor Técnico",
    company: "Pedreira & Britagem Aliança",
    imgSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80"
  },
  {
    tempId: 5,
    testimonial: "Precisão absoluta nos relatórios técnicos e integração perfeita entre a engenharia de mina e a conformidade ambiental.",
    by: "Juliana Vasconcelos",
    role: "Gerente de Projetos",
    company: "Minas Gerais Minérios",
    imgSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80"
  }
]

interface TestimonialCardProps {
  position: number
  testimonial: StaggerTestimonial
  handleMove: (steps: number) => void
  cardSize: number
  hasDragged: () => boolean
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize,
  hasDragged
}) => {
  const isCenter = position === 0

  return (
    <div
      onClick={(e) => {
        if (!hasDragged()) {
          handleMove(position)
        }
      }}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-7 sm:p-8 transition-all duration-500 ease-in-out select-none",
        isCenter 
          ? "z-10 bg-[#1e1f23] text-white border-[#B16821]" 
          : "z-0 bg-[#ffffff] text-[#333334] border-[#e2e0d8] hover:border-[#B16821]/60"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(45px 0%, calc(100% - 45px) 0%, 100% 45px, 100% 100%, calc(100% - 45px) 100%, 45px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.45) * position}px)
          translateY(${isCenter ? -55 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 12px 28px rgba(0, 0, 0, 0.35)" : "0px 4px 16px rgba(0, 0, 0, 0.04)"
      }}
    >
      {/* CORNER ACCENT LINE */}
      <span
        className={cn(
          "absolute block origin-top-right rotate-45",
          isCenter ? "bg-[#FCBF78]" : "bg-[#B16821]/40"
        )}
        style={{
          right: -2,
          top: 43,
          width: SQRT_5000,
          height: 2
        }}
      />

      {/* TOP ROW: PHOTO + STARS */}
      <div className="mb-4 flex items-center justify-between pointer-events-none">
        <img
          src={testimonial.imgSrc}
          alt={testimonial.by}
          draggable={false}
          className={cn(
            "h-12 w-12 rounded-sm object-cover object-top border",
            isCenter ? "border-[#FCBF78]/40" : "border-[#e0ded6]"
          )}
          style={{
            boxShadow: isCenter ? "2px 2px 0px #B16821" : "2px 2px 0px #d0cdc4"
          }}
        />
        <div className="flex gap-1 text-[#FCBF78]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
          ))}
        </div>
      </div>

      {/* TESTIMONIAL QUOTE */}
      <h3 className={cn(
        "text-[13.5px] sm:text-[14.5px] font-normal leading-relaxed line-clamp-4 [font-family:var(--font-secondary)] pointer-events-none",
        isCenter ? "text-white/95" : "text-[#424340]"
      )}>
        "{testimonial.testimonial}"
      </h3>

      {/* CLIENT FOOTER */}
      <div className={cn(
        "absolute bottom-6 left-7 right-7 pt-3 border-t pointer-events-none",
        isCenter ? "border-white/10" : "border-neutral-200"
      )}>
        <p className={cn(
          "text-xs font-bold leading-tight [font-family:var(--font-secondary)]",
          isCenter ? "text-[#FCBF78]" : "text-[#B16821]"
        )}>
          {testimonial.by}
        </p>
        <p className={cn(
          "text-[11px] truncate [font-family:var(--font-secondary)]",
          isCenter ? "text-neutral-400" : "text-[#7b7c78]"
        )}>
          {testimonial.role} • {testimonial.company}
        </p>
      </div>
    </div>
  )
}

export const StaggerTestimonials: React.FC<{ items?: StaggerTestimonial[] }> = ({
  items = defaultMiningTestimonials
}) => {
  const [cardSize, setCardSize] = useState(360)
  const [testimonialsList, setTestimonialsList] = useState(items)
  const [isDragging, setIsDragging] = useState(false)

  const dragStartX = useRef<number | null>(null)
  const dragStartY = useRef<number | null>(null)
  const totalDragDistance = useRef<number>(0)
  const didDrag = useRef<boolean>(false)

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList]
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift()
        if (!item) return
        newList.push({ ...item, tempId: Math.random() })
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop()
        if (!item) return
        newList.unshift({ ...item, tempId: Math.random() })
      }
    }
    setTestimonialsList(newList)
  }

  // Pointer/Touch Drag handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragStartX.current = e.clientX
    dragStartY.current = e.clientY
    totalDragDistance.current = 0
    didDrag.current = false
    setIsDragging(true)
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return
    const deltaX = e.clientX - dragStartX.current
    totalDragDistance.current = deltaX

    if (Math.abs(deltaX) > 10) {
      didDrag.current = true
    }
  }

  const handlePointerUp = () => {
    if (dragStartX.current !== null) {
      const threshold = 40
      if (totalDragDistance.current > threshold) {
        handleMove(-1) // Arrasta para a direita -> volta
      } else if (totalDragDistance.current < -threshold) {
        handleMove(1) // Arrasta para a esquerda -> avança
      }
    }
    dragStartX.current = null
    dragStartY.current = null
    setIsDragging(false)
    setTimeout(() => {
      didDrag.current = false
    }, 50)
  }

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)")
      setCardSize(matches ? 360 : 285)
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden touch-pan-y select-none",
        isDragging ? "cursor-grabbing" : "cursor-grab"
      )}
      style={{ height: 500 }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
            hasDragged={() => didDrag.current}
          />
        )
      })}
      
      {/* NAVIGATION CONTROLS */}
      <div 
        className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-3 z-20"
        onPointerDown={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full transition-all duration-200",
            "bg-white border-2 border-[#dcdad2] text-[#333334] shadow-sm hover:bg-[#B16821] hover:text-white hover:border-[#B16821]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B16821]"
          )}
          aria-label="Depoimento anterior"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full transition-all duration-200",
            "bg-white border-2 border-[#dcdad2] text-[#333334] shadow-sm hover:bg-[#B16821] hover:text-white hover:border-[#B16821]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B16821]"
          )}
          aria-label="Próximo depoimento"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  )
}
