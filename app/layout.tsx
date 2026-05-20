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
  title: 'Dra. Sofia Mendes | Odontologia Estética Premium',
  description: 'Clínica odontológica de alto padrão especializada em lentes de contato dental, implantes, Invisalign e harmonização facial. Tecnologia de ponta e atendimento humanizado.',
  keywords: ['dentista', 'odontologia estética', 'lentes de contato dental', 'implantes', 'Invisalign', 'harmonização facial', 'clareamento dental'],
  authors: [{ name: 'Dra. Sofia Mendes' }],
  openGraph: {
    title: 'Dra. Sofia Mendes | Odontologia Estética Premium',
    description: 'Transforme seu sorriso com tecnologia de ponta e atendimento humanizado.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dra. Sofia Mendes | Odontologia Estética Premium',
    description: 'Transforme seu sorriso com tecnologia de ponta e atendimento humanizado.',
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
