"use client"

import { cn } from "@/lib/utils"
import { ArrowUpRight, CheckCircle2, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export interface ElasticItemProps {
  id: string
  title: string
  category: string
  src: string
  alt: string
  description: string
  highlights?: string[]
  href?: string
}

interface ElasticGalleryProps {
  items?: ElasticItemProps[]
  className?: string
}

const defaultItems: ElasticItemProps[] = [
  {
    id: "01",
    title: "TRANSFORMAÇÃO GERENCIAL DE PEDREIRA — MG",
    category: "Gestão & Inteligência",
    src: "/images/portfolio/transformacao-gerencial-pedreira.jpg",
    alt: "Transformação Gerencial de Pedreira em Minas Gerais",
    description: "Regularização ambiental e minerária que evoluiu para uma atuação integrada na estruturação operacional e gerencial da mina.",
    highlights: ["Atuação Integrada", "Estruturação Operacional", "Gestão de Mina"],
  },
  {
    id: "02",
    title: "RETOMADA REGULATÓRIA — ROCHAS ORNAMENTAIS",
    category: "Licenciamento & Lavra",
    src: "/images/portfolio/retomada-regulatoria-mg.jpg",
    alt: "Retomada Regulatória de Rochas Ornamentais em MG e ES",
    description: "Regularização de empreendimentos em Minas Gerais e Espírito Santo, com tratamento de pendências ambientais, minerárias e documentais e avanço dos processos de lavra.",
    highlights: ["MG & Espírito Santo", "Tratamento de Pendências", "Avanço de Processos de Lavra"],
  },
  {
    id: "03",
    title: "MONITORAMENTO MENSAL DA LAVRA",
    category: "Aerolevantamento & Drones",
    src: "/images/portfolio/monitoramento-mensal-lavra.jpg",
    alt: "Monitoramento Mensal da Lavra por Drones",
    description: "Levantamentos aéreos periódicos para registrar, comparar e acompanhar a evolução da operação ao longo do tempo.",
    highlights: ["Levantamentos Aéreos Periódicos", "Comparação Evolutiva", "Histórico da Operação"],
  },
  {
    id: "04",
    title: "ACOMPANHAMENTO DE DETONAÇÕES",
    category: "Operações Críticas",
    src: "/images/portfolio/acompanhamento-detonacoes.jpg",
    alt: "Acompanhamento Técnico de Detonações na Mina",
    description: "Registro aéreo e acompanhamento técnico de atividades de desmonte, criando histórico visual e apoiando planejamento e segurança.",
    highlights: ["Registro Aéreo de Desmonte", "Histórico Visual", "Planejamento & Segurança"],
  },
]

export function ElasticGallery({ items = defaultItems, className }: ElasticGalleryProps) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id || "01")
  const [selectedItem, setSelectedItem] = useState<ElasticItemProps | null>(null)

  return (
    <div className={cn("w-full py-4 md:py-8 select-none", className)}>
      {/* Gallery Grid / Flex Container with Hardware Acceleration */}
      <div className="mx-auto flex min-h-[520px] w-full max-w-7xl flex-col gap-3.5 px-2 md:h-[580px] md:flex-row md:gap-4 transform-gpu">
        {items.map((item) => {
          const isActive = activeId === item.id

          return (
            <div
              key={item.id}
              onMouseEnter={() => setActiveId(item.id)}
              onClick={() => setActiveId(item.id)}
              style={{
                willChange: "flex, transform",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
              className={cn(
                "relative cursor-pointer overflow-hidden rounded-2xl border bg-neutral-950 shadow-2xl transition-all transform-gpu",
                // Buttery smooth cubic-bezier timing
                "duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                isActive
                  ? "flex-[4.5] border-amber-500/50 brightness-100 ring-1 ring-amber-500/30 shadow-amber-950/20"
                  : "flex-[1] border-neutral-800/80 brightness-75 hover:brightness-95 hover:border-neutral-700"
              )}
            >
              {/* Background Image Layer */}
              <div className="absolute inset-0 h-full w-full overflow-hidden transform-gpu">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  priority={item.id === "01" || item.id === "02"}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{
                    willChange: "transform",
                    transform: "translateZ(0)",
                  }}
                  className={cn(
                    "object-cover transition-transform transform-gpu duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    isActive ? "scale-100" : "scale-[1.06]"
                  )}
                />

                {/* Smooth Gradient Overlays for legibility */}
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/15 transition-opacity duration-500 ease-out",
                    isActive ? "opacity-100" : "opacity-60"
                  )}
                />
              </div>

              {/* Card Content Container */}
              <div className="absolute bottom-0 left-0 right-0 flex h-full flex-col justify-end p-5 md:p-8 z-10 pointer-events-none">
                {/* Active Content Block */}
                <div
                  className={cn(
                    "flex flex-col gap-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu",
                    isActive
                      ? "translate-y-0 opacity-100 pointer-events-auto delay-100"
                      : "translate-y-8 opacity-0 pointer-events-none"
                  )}
                >
                  {/* Category & Badge */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-amber-500/40 bg-black/70 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-amber-300 backdrop-blur-md font-sans shadow-sm">
                      {item.category}
                    </span>
                    <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-300 font-sans">
                      Projeto #{item.id}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-medium uppercase leading-snug text-white md:text-2xl lg:text-3xl font-sans tracking-wide">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="max-w-2xl text-xs leading-relaxed text-neutral-200 md:text-sm font-sans font-light">
                    {item.description}
                  </p>

                  {/* Highlights Pills */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="mt-1 flex flex-wrap gap-2">
                      {item.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1.5 rounded-lg border border-amber-500/30 bg-amber-950/50 px-2.5 py-1 text-[11px] font-medium text-amber-200 backdrop-blur-xs font-sans"
                        >
                          <CheckCircle2 className="h-3 w-3 text-amber-400 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Call to Action Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedItem(item)
                    }}
                    className="mt-2.5 inline-flex w-fit items-center gap-2 rounded-lg bg-gradient-to-r from-amber-600 to-amber-700 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:from-amber-500 hover:to-amber-600 hover:shadow-amber-900/50 font-sans cursor-pointer active:scale-95"
                  >
                    Ver Detalhes do Projeto
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>

                {/* Inactive Label (Vertical Desktop / Horizontal Mobile) */}
                <div
                  className={cn(
                    "absolute transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu",
                    "bottom-5 left-1/2 -translate-x-1/2 md:bottom-8",
                    isActive ? "scale-75 opacity-0 pointer-events-none" : "opacity-100 delay-200"
                  )}
                >
                  {/* Desktop Vertical Text */}
                  <span className="hidden whitespace-nowrap text-xs font-bold uppercase tracking-widest text-amber-200/90 [writing-mode:vertical-rl] md:block font-sans drop-shadow-md">
                    {item.title}
                  </span>

                  {/* Mobile ID Badge */}
                  <div className="flex items-center gap-1 rounded-full border border-amber-500/40 bg-black/80 px-3 py-1 text-xs font-bold text-amber-300 md:hidden font-sans shadow-md">
                    <span>#{item.id}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* --- Detail Modal Dialog --- */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-amber-500/30 bg-neutral-900 shadow-2xl transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative h-64 w-full md:h-80">
              <Image
                src={selectedItem.src}
                alt={selectedItem.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
              
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/60 p-2 text-white transition-colors hover:bg-black/90 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Category Badge on Image */}
              <div className="absolute bottom-4 left-6">
                <span className="rounded-full border border-amber-500/40 bg-amber-950/80 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-amber-300 backdrop-blur-md font-sans">
                  {selectedItem.category}
                </span>
              </div>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold uppercase text-white md:text-3xl font-sans tracking-wide">
                {selectedItem.title}
              </h2>
              
              <p className="mt-3 text-sm leading-relaxed text-neutral-300 md:text-base font-sans">
                {selectedItem.description}
              </p>

              {/* Highlights & Results section */}
              {selectedItem.highlights && selectedItem.highlights.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans">
                    Destaques Técnicos & Resultados
                  </h4>
                  <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {selectedItem.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 rounded-xl border border-neutral-800 bg-neutral-950/70 p-3 text-xs font-semibold text-amber-200 font-sans"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-400" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-8 flex items-center justify-end gap-3 border-t border-neutral-800 pt-5">
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="rounded-lg border border-neutral-700 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-300 transition-colors hover:bg-neutral-800 font-sans cursor-pointer"
                >
                  Fechar
                </button>
                <a
                  href="#contato"
                  onClick={() => setSelectedItem(null)}
                  className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-amber-500 font-sans"
                >
                  Solicitar Diagnóstico
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
