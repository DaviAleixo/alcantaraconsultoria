import type { LucideIcon } from 'lucide-react'
import type React from 'react'

export interface HeroDifferential {
  id: string
  label: string
  icon?: LucideIcon
  customIcon?: React.ReactNode
}

export interface HeroCredential {
  id: string
  title: string
  label: string
  subtext: string
  icon?: LucideIcon
  isLocation?: boolean
}
