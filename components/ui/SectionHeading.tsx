import React from 'react'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string | React.ReactNode
  description?: string | React.ReactNode
  className?: string
  light?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={cn('section-heading', className)}>
      <div>
        {eyebrow && <p className={cn('eyebrow', light && 'light')}>{eyebrow}</p>}
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  )
}
