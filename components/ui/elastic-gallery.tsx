"use client"

import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export interface ElasticItemProps {
  id: string
  title: string
  category: string
  src: string
  alt: string
  href?: string
}

interface ElasticGalleryProps {
  items?: ElasticItemProps[]
  className?: string
}

const defaultItems: ElasticItemProps[] = [
  {
    id: "01",
    title: "Gestão Integrada de Lavra",
    category: "Engenharia de Minas",
    src: "/images/services/service-02.jpg",
    alt: "Planejamento e acompanhamento de lavra mineral",
  },
  {
    id: "02",
    title: "Licenciamento & Regularização",
    category: "Meio Ambiente & ANM",
    src: "/images/services/service-01.jpg",
    alt: "Processos e conformidade regulatória junto à ANM",
  },
  {
    id: "03",
    title: "Mapeamento Aéreo & Drones",
    category: "Tecnologia & Topografia",
    src: "/images/services/service-04.jpg",
    alt: "Aerofotogrametria e monitoramento de cavas",
  },
  {
    id: "04",
    title: "Estudos Ambientais & SSMA",
    category: "Sustentabilidade",
    src: "/images/services/service-05.jpg",
    alt: "Segurança operacional e conformidade ambiental",
  },
  {
    id: "05",
    title: "Consultoria & Otimização",
    category: "Operações Minerais",
    src: "/images/services/service-03.jpg",
    alt: "Otimização de processos e beneficiamento",
  },
]

export function ElasticGallery({ items = defaultItems, className }: ElasticGalleryProps) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id || "01")

  return (
    <div className={cn("w-full py-4 md:py-8", className)}>
      {/* Container: Fixed height on mobile/desktop to ensure animation stability */}
      <div className="mx-auto flex h-[480px] w-full max-w-6xl flex-col gap-2 px-2 md:h-[580px] md:flex-row md:gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => setActiveId(item.id)}
            onClick={() => setActiveId(item.id)} // Touch support
            className={cn(
              "relative cursor-pointer overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-900 shadow-md",
              // Layout & Flex Transition
              "transition-[flex,filter] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
              // Flex Logic:
              // If active, take up 4 parts of space. If inactive, take 1 part.
              activeId === item.id ? "flex-[4]" : "flex-[1]",
              // Brightness logic for focus
              activeId === item.id
                ? "brightness-100"
                : "brightness-75 hover:brightness-90"
            )}
          >
            {/* Background Image Layer */}
            <div className="absolute inset-0 h-full w-full">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className={cn(
                  "object-cover transition-transform duration-1000",
                  // Subtle zoom on active
                  activeId === item.id ? "scale-100" : "scale-110"
                )}
              />
              {/* Gradient Overlay for Text Readability */}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent transition-opacity duration-500",
                  activeId === item.id ? "opacity-100" : "opacity-40"
                )}
              />
            </div>

            {/* --- Content Container --- */}
            <div className="absolute bottom-0 left-0 right-0 flex h-full flex-col justify-end p-4 md:p-8">
              {/* Active Content: Title & Button */}
              <div
                className={cn(
                  "flex flex-col gap-2 transition-all duration-500",
                  // Hide/Show based on active state with translation for smooth entry
                  activeId === item.id
                    ? "translate-y-0 opacity-100 delay-200"
                    : "translate-y-12 opacity-0 pointer-events-none"
                )}
              >
                {/* Category Tag */}
                <div className="flex items-center gap-2">
                  <span className="rounded-full border border-white/30 bg-black/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-300 backdrop-blur-md md:px-3 md:text-xs font-sans">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-normal uppercase leading-tight text-white md:text-3xl lg:text-4xl [font-family:var(--font-primary)]">
                  {item.title}
                </h3>

                {/* Call to Action */}
                <div className="mt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-300/90 md:mt-4 md:text-sm font-sans">
                  Conhecer Projeto{" "}
                  <ArrowUpRight className="h-3 w-3 md:h-4 md:w-4" />
                </div>
              </div>

              {/* Inactive Content: Vertical Text (Desktop) / Short Label (Mobile) */}
              <div
                className={cn(
                  "absolute transition-all duration-500",
                  // Position logic
                  "bottom-4 left-1/2 -translate-x-1/2 md:bottom-8",
                  // Hide when active
                  activeId === item.id
                    ? "opacity-0 scale-50"
                    : "opacity-100 delay-500"
                )}
              >
                {/* Desktop: Vertical Text */}
                <span className="hidden whitespace-nowrap text-xs lg:text-sm font-bold uppercase tracking-widest text-white/90 [writing-mode:vertical-rl] md:block font-sans">
                  {item.title}
                </span>

                {/* Mobile: Horizontal ID/Label */}
                <span className="block text-xs font-bold text-white md:hidden font-sans">
                  {item.id}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
