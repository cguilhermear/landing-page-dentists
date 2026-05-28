import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dra. Giovana Gomes | Educação, Palestras e Orientação em Saúde Bucal',
  description: 'Palestras, consultorias e orientações online em saúde bucal preventiva para famílias, empresas, escolas e eventos.',
  keywords: ['saúde bucal preventiva', 'educação em saúde bucal', 'palestras de saúde bucal', 'orientação online', 'consultoria preventiva', 'ações educativas'],
  authors: [{ name: 'Dra. Giovana Gomes' }],
  openGraph: {
    title: 'Dra. Giovana Gomes | Educação, Palestras e Orientação em Saúde Bucal',
    description: 'Informação clara, prevenção e orientação profissional para famílias, empresas, escolas e eventos.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dra. Giovana Gomes | Educação, Palestras e Orientação em Saúde Bucal',
    description: 'Palestras, consultorias e orientações online com foco educativo, preventivo e responsável.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f9f8f6' },
    { media: '(prefers-color-scheme: dark)', color: '#18181b' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${plusJakarta.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
