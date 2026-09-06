import React from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={cn('hero-container', className)} {...props}>
      {children}
    </div>
  )
}

export function Shell({ children, className, ...props }: ContainerProps) {
  return (
    <div className={cn('shell', className)} {...props}>
      {children}
    </div>
  )
}
