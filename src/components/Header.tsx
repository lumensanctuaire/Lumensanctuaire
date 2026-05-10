'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navItems } from '@/data/navigation'
import Sigil from '@/identity/sigil'

function NavLink({ label, href, onClick }: { label: string; href: string; onClick?: () => void }) {
  const pathname = usePathname()
  const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative font-cinzel text-[12px] tracking-[0.12em] transition-colors duration-300 ${
        isActive ? 'text-[#CFAE6A]' : 'text-[rgba(232,226,211,0.58)] hover:text-[#E8E2D3]'
      }`}
    >
      {label}
      <span
        className="absolute -bottom-0.5 left-0 h-px bg-[#CFAE6A] transition-all duration-300"
        style={{ width: isActive ? '100%' : '0%' }}
      />
    </Link>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Ferme le menu au changement de route
  const pathname = usePathname()
  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled || menuOpen ? 'rgba(2,4,10,0.97)' : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(16px)' : 'none',
          borderBottom: scrolled || menuOpen ? '1px solid rgba(207,174,106,0.1)' : '1px solid transparent',
        }}
      >
        <div
          className="max-w-[1400px] mx-auto px-6 flex items-center justify-between"
          style={{ height: '68px' }}
        >
          {/* Sigil */}
          <Link href="/" className="flex-shrink-0 transition-colors duration-300 text-[#E8E2D3] hover:text-[#CFAE6A]">
            <Sigil size={30} />
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <NavLink key={item.label} label={item.label} href={item.href} />
            ))}
          </nav>

          {/* Droite */}
          <div className="flex items-center gap-5">
            <Link
              href="/entrer"
              className="btn-outline hidden sm:inline-flex items-center px-5 py-2 font-cinzel text-[10.5px] tracking-[0.22em]"
            >
              Entrer
            </Link>

            {/* Bouton menu mobile */}
            <button
              className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              <span
                className="block w-5 h-px transition-all duration-300 origin-center"
                style={{
                  background: '#CFAE6A',
                  transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
                }}
              />
              <span
                className="block w-5 h-px transition-all duration-300"
                style={{
                  background: 'rgba(207,174,106,0.5)',
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-5 h-px transition-all duration-300 origin-center"
                style={{
                  background: '#CFAE6A',
                  transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile — tiroir */}
      <div
        className="fixed inset-0 z-40 md:hidden"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      >
        <nav
          className="absolute top-[68px] left-0 right-0"
          style={{
            background: 'rgba(2,4,10,0.97)',
            borderBottom: '1px solid rgba(207,174,106,0.1)',
            backdropFilter: 'blur(16px)',
            transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
            transition: 'transform 0.3s ease',
            paddingTop: '2rem',
            paddingBottom: '2.5rem',
          }}
        >
          <div className="max-w-[1400px] mx-auto px-6 flex flex-col gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                label={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              />
            ))}
            <div style={{ marginTop: '1rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(232,226,211,0.06)' }}>
              <Link
                href="/entrer"
                className="font-cinzel text-[10.5px] tracking-[0.22em] uppercase transition-colors duration-300"
                style={{ color: 'rgba(207,174,106,0.7)' }}
                onClick={() => setMenuOpen(false)}
              >
                Franchir le seuil →
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
