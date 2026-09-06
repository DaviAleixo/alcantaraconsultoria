import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { siteConfig } from '@/config/site'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function buildWhatsAppUrl(message: string, phone: string = siteConfig.phoneRaw): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

