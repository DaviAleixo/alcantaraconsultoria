import type { LucideIcon } from 'lucide-react'

export interface ServiceCategory {
  id: string
  title: string
  icon: LucideIcon
  badge: string
  tagline: string
  description: string
  highlights: string[]
}
