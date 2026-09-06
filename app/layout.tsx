import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alcântara Consultoria | Mineração, Meio Ambiente e Gestão de Mina',
  description: 'Consultoria especializada em mineração, regularização minerária, meio ambiente, SSMA, planejamento e gestão de mina. Fale com a Alcântara Consultoria.',
  generator: 'v0.app',
  keywords: ['mineração', 'consultoria mineral', 'gestão de mina', 'meio ambiente', 'SSMA', 'ANM'],
  openGraph: {
    title: 'Alcântara Consultoria | Soluções técnicas para o setor mineral',
    description: 'Precisão técnica para decisões que movimentam seu empreendimento.',
    type: 'website',
    locale: 'pt_BR',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
