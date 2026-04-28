import type { Metadata } from 'next'
import { Cinzel, Manrope } from 'next/font/google'
import './globals.css'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-cinzel',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'LUMEN — Sanctuaire de la Connaissance',
  description:
    'Un sanctuaire numérique de connaissance. Voir. Comprendre. Maîtriser.',
  keywords: ['LUMEN', 'connaissance', 'sanctuaire', 'apprentissage', 'sagesse'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr"
      className={`${cinzel.variable} ${manrope.variable}`}
    >
      <body className="bg-[#05070D] text-[#E8E2D3] antialiased font-manrope">
        {children}
      </body>
    </html>
  )
}
