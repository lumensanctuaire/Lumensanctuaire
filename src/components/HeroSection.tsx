import Link from 'next/link'
import SacredPortal from './SacredPortal'
import Sigil from '@/identity/sigil'
import ThresholdLine from './ThresholdLine'
import { fragments } from '@/data/fragments'

function GeometricField() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Verticals */}
      <line x1="144" y1="80"  x2="144"  y2="720" stroke="#CFAE6A" strokeWidth="1"   strokeLinecap="square" />
      <line x1="360" y1="180" x2="360"  y2="540" stroke="#CFAE6A" strokeWidth="0.5" strokeLinecap="square" />
      <line x1="576" y1="40"  x2="576"  y2="860" stroke="#CFAE6A" strokeWidth="1"   strokeLinecap="square" />
      <line x1="900" y1="120" x2="900"  y2="780" stroke="#CFAE6A" strokeWidth="1"   strokeLinecap="square" />
      <line x1="1080" y1="300" x2="1080" y2="700" stroke="#CFAE6A" strokeWidth="0.5" strokeLinecap="square" />
      <line x1="1296" y1="60"  x2="1296" y2="840" stroke="#CFAE6A" strokeWidth="1"   strokeLinecap="square" />
      {/* Traverses */}
      <line x1="144"  y1="200" x2="248"  y2="200" stroke="#CFAE6A" strokeWidth="1"   strokeLinecap="square" />
      <line x1="360"  y1="420" x2="476"  y2="420" stroke="#CFAE6A" strokeWidth="0.5" strokeLinecap="square" />
      <line x1="576"  y1="300" x2="720"  y2="300" stroke="#CFAE6A" strokeWidth="1"   strokeLinecap="square" />
      <line x1="576"  y1="600" x2="680"  y2="600" stroke="#CFAE6A" strokeWidth="0.5" strokeLinecap="square" />
      <line x1="900"  y1="240" x2="1004" y2="240" stroke="#CFAE6A" strokeWidth="1"   strokeLinecap="square" />
      <line x1="900"  y1="560" x2="1080" y2="560" stroke="#CFAE6A" strokeWidth="0.5" strokeLinecap="square" />
      <line x1="1080" y1="500" x2="1200" y2="500" stroke="#CFAE6A" strokeWidth="0.5" strokeLinecap="square" />
      <line x1="1296" y1="160" x2="1384" y2="160" stroke="#CFAE6A" strokeWidth="1"   strokeLinecap="square" />
      {/* Bases longues */}
      <line x1="144"  y1="800" x2="420"  y2="800" stroke="#CFAE6A" strokeWidth="1.5" strokeLinecap="square" />
      <line x1="720"  y1="840" x2="1080" y2="840" stroke="#CFAE6A" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  )
}

export default function HeroSection() {
  return (
    <>
      {/* ── I. ARRÊT ── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: '#02040A' }}
      >
        {/* Geometric field — ADN du Sigil, sous-perceptible */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <GeometricField />
        </div>

        {/* Portal as full-bleed atmospheric background */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: 0.38 }}
        >
          <div style={{ width: '720px', maxWidth: '100vw' }}>
            <SacredPortal />
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{ height: '40%', background: 'linear-gradient(to top, #02040A 0%, transparent 100%)' }}
        />

        {/* Content overlay */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-16">
          <div style={{ marginBottom: '3rem' }}>
            <Sigil size={72} color="#E8E2D3" />
          </div>
          <p
            className="font-cinzel"
            style={{ fontSize: 'clamp(1rem,1.8vw,1.3rem)', color: 'rgba(207,174,106,0.75)', lineHeight: 1.65, letterSpacing: '0.02em' }}
          >
            Voir juste. Nommer net.<br />
            Structurer profond. Transmettre haut.
          </p>
          <div style={{ marginTop: '3.5rem' }}>
            <Link
              href="/chambres"
              className="btn-primary inline-flex items-center font-cinzel text-[11px] tracking-[0.22em] uppercase px-10 py-4"
            >
              Entrer dans les Chambres
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-14 mx-auto" style={{ background: 'linear-gradient(to bottom, rgba(207,174,106,0.25), transparent)' }} />
        </div>
      </section>

      {/* ── II. CONSÉCRATION ── */}
      <section className="py-32" style={{ background: '#02040A' }}>
        <div className="max-w-[580px] mx-auto px-6">
          <div style={{ marginBottom: '4rem' }}><ThresholdLine /></div>
          <p
            className="font-cinzel text-center"
            style={{ fontSize: 'clamp(1.05rem,1.9vw,1.4rem)', color: '#E8E2D3', lineHeight: 1.55 }}
          >
            LUMEN n'est pas un cours.<br />
            C'est un sanctuaire de perception.
          </p>
          <p
            className="font-manrope text-center mt-10 max-w-[440px] mx-auto"
            style={{ fontSize: '14px', color: 'rgba(232,226,211,0.44)', lineHeight: 1.95 }}
          >
            Ce qui entre dans LUMEN en ressort nommé, ordonné, transmissible.
            Non pour accumuler — pour tenir.
          </p>
        </div>
      </section>

      {/* ── II.b FRAGMENTS DOCTRINAUX ── */}
      <section className="py-20" style={{ background: '#02040A' }}>
        <div className="max-w-[580px] mx-auto px-6">
          <div className="flex flex-col gap-8">
            {fragments.map((f, i) => (
              <div key={f.id} className="flex items-start gap-7">
                <span
                  className="font-cinzel shrink-0"
                  style={{ fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(207,174,106,0.22)', marginTop: '3px', minWidth: '1.25rem' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p
                  className="font-manrope"
                  style={{ fontSize: '14px', color: 'rgba(232,226,211,0.52)', lineHeight: 1.8 }}
                >
                  {f.texte}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── III. ORIENTATION — 4 CARDS ── */}
      <section className="py-24" style={{ background: '#02040A' }}>
        <div className="max-w-[900px] mx-auto px-6">
          <div style={{ marginBottom: '3.5rem' }}><ThresholdLine /></div>

          <div
            className="grid gap-4"
            style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}
          >
            {[
              {
                label:  'Parcours',
                desc:   'I · II · III — trois dimensions du regard',
                sub:    "La traversée suit l\u2019ordre naturel de la perception.",
                href:   '/parcours',
                accent: 'rgba(207,174,106,0.06)',
                border: 'rgba(207,174,106,0.12)',
              },
              {
                label:  'Chambres',
                desc:   'Sept espaces — chacun une façon de tenir le monde',
                sub:    "Entrer dans une Chambre, c\u2019est entrer dans une façon de voir.",
                href:   '/chambres',
                accent: 'rgba(207,174,106,0.08)',
                border: 'rgba(207,174,106,0.14)',
              },
              {
                label:  'Bibliothèque',
                desc:   'Le corpus intérieur — cartes, lectures, œuvres',
                sub:    'Les textes fondateurs. Commentés, non catalogués.',
                href:   '/bibliotheque',
                accent: 'rgba(107,91,142,0.06)',
                border: 'rgba(107,91,142,0.14)',
              },
              {
                label:  'Figures',
                desc:   'Les lignées que LUMEN reconnaît comme fondatrices',
                sub:    "Non pour idolâtrer — pour s\u2019orienter.",
                href:   '/figures',
                accent: 'rgba(138,136,128,0.05)',
                border: 'rgba(138,136,128,0.12)',
              },
            ].map(({ label, desc, sub, href, accent, border }) => (
              <Link
                key={label}
                href={href}
                className="card-lift group relative flex flex-col justify-between overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${accent} 0%, transparent 60%)`,
                  border: `1px solid ${border}`,
                  padding: '2rem 1.75rem',
                  minHeight: '200px',
                  transition: 'border-color 0.35s ease, box-shadow 0.35s ease',
                }}
              >
                {/* Large muted label bg */}
                <span
                  className="absolute bottom-3 right-4 font-cinzel font-semibold select-none pointer-events-none"
                  style={{ fontSize: '5rem', color: 'rgba(232,226,211,0.025)', lineHeight: 1, letterSpacing: '-0.02em' }}
                >
                  {label[0]}
                </span>

                <div>
                  <p
                    className="font-cinzel"
                    style={{ fontSize: '9px', letterSpacing: '0.38em', textTransform: 'uppercase', color: 'rgba(207,174,106,0.5)', marginBottom: '0.75rem' }}
                  >
                    {label}
                  </p>
                  <h3
                    className="font-cinzel font-semibold"
                    style={{ fontSize: 'clamp(0.9rem,1.5vw,1.05rem)', color: '#E8E2D3', lineHeight: 1.35, marginBottom: '0.85rem' }}
                  >
                    {desc}
                  </h3>
                  <p
                    className="font-manrope"
                    style={{ fontSize: '13px', color: 'rgba(232,226,211,0.36)', lineHeight: 1.7 }}
                  >
                    {sub}
                  </p>
                </div>

                <div style={{ marginTop: '1.5rem' }}>
                  <span
                    className="font-cinzel text-[9px] tracking-[0.28em] uppercase transition-colors duration-300 group-hover:text-[#CFAE6A]"
                    style={{ color: 'rgba(207,174,106,0.35)' }}
                  >
                    Entrer →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
