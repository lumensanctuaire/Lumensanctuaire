import Link from 'next/link'
import Header from '@/components/Header'
import ThresholdLine from '@/components/ThresholdLine'
import ChamberMark, { type ChamberMarkSlug } from '@/identity/chamberMarks'
import { chambers } from '@/data/chambers'

export default function ChambresPage() {
  return (
    <main className="min-h-screen" style={{ background: '#02040A' }}>
      <Header />

      <div className="max-w-[980px] mx-auto px-6 pt-36 pb-24">

        <div style={{ marginBottom: '4rem' }}>
          <p
            className="font-cinzel"
            style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(207,174,106,0.6)', marginBottom: '1.5rem' }}
          >
            LUMEN · Architecture
          </p>
          <h1
            className="font-cinzel"
            style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: '600', letterSpacing: '0.04em', color: '#E8E2D3', lineHeight: 1.2, marginBottom: '1.5rem' }}
          >
            Les Chambres
          </h1>
          <p
            className="font-manrope"
            style={{ fontSize: '14px', color: 'rgba(232,226,211,0.48)', lineHeight: 1.85, maxWidth: '500px' }}
          >
            Sept espaces. Chacun contient une dimension du système.
            Entrer dans une Chambre, c'est entrer dans une façon de voir.
          </p>
        </div>

        <div style={{ marginBottom: '3.5rem' }}><ThresholdLine /></div>

        {/* Card Grid */}
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}
        >
          {chambers.map((chamber, i) => {
            const cardContent = (
              <>
                {/* Muted number background */}
                <span
                  className="absolute bottom-4 right-5 font-cinzel font-semibold select-none pointer-events-none"
                  style={{
                    fontSize: '5.5rem',
                    color: chamber.isOpen ? 'rgba(207,174,106,0.04)' : 'rgba(232,226,211,0.02)',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    {/* Dimension label + sceau de chambre */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center" style={{ gap: '0.6rem' }}>
                        <ChamberMark
                          slug={chamber.slug as ChamberMarkSlug}
                          size={16}
                          color={chamber.isOpen ? 'rgba(207,174,106,0.5)' : 'rgba(207,174,106,0.2)'}
                        />
                        <span
                          className="font-cinzel"
                          style={{
                            fontSize: '9px',
                            letterSpacing: '0.38em',
                            textTransform: 'uppercase',
                            color: chamber.isOpen ? 'rgba(207,174,106,0.5)' : 'rgba(207,174,106,0.2)',
                          }}
                        >
                          Dim. {chamber.dimension}
                        </span>
                      </div>
                      {!chamber.isOpen && (
                        <span
                          className="font-cinzel"
                          style={{ fontSize: '8px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(232,226,211,0.2)' }}
                        >
                          À venir
                        </span>
                      )}
                    </div>

                    {/* Chamber name */}
                    <h2
                      className="font-cinzel font-semibold"
                      style={{
                        fontSize: 'clamp(0.95rem,1.6vw,1.1rem)',
                        color: chamber.isOpen ? '#E8E2D3' : 'rgba(232,226,211,0.28)',
                        lineHeight: 1.3,
                        marginBottom: '0.85rem',
                      }}
                    >
                      {chamber.name}
                    </h2>

                    {/* Declaration */}
                    <p
                      className="font-manrope"
                      style={{
                        fontSize: '13px',
                        color: chamber.isOpen ? 'rgba(232,226,211,0.42)' : 'rgba(232,226,211,0.18)',
                        lineHeight: 1.75,
                      }}
                    >
                      {chamber.declaration}
                    </p>
                  </div>

                  {/* Footer */}
                  <div
                    style={{
                      marginTop: '1.75rem',
                      paddingTop: '1rem',
                      borderTop: chamber.isOpen
                        ? '1px solid rgba(207,174,106,0.1)'
                        : '1px solid rgba(232,226,211,0.04)',
                    }}
                  >
                    <span
                      className="font-cinzel"
                      style={{
                        fontSize: '9px',
                        letterSpacing: '0.28em',
                        textTransform: 'uppercase',
                        color: chamber.isOpen ? 'rgba(207,174,106,0.4)' : 'rgba(232,226,211,0.15)',
                      }}
                    >
                      {chamber.isOpen ? 'Entrer →' : '—'}
                    </span>
                  </div>
                </div>
              </>
            )

            if (chamber.isOpen) {
              return (
                <Link
                  key={chamber.slug}
                  href={`/chambres/${chamber.slug}`}
                  className="card-lift border-gold-glow group relative overflow-hidden"
                  style={{
                    padding: '1.75rem',
                    minHeight: '220px',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'linear-gradient(135deg, rgba(207,174,106,0.04) 0%, transparent 55%)',
                  }}
                >
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse 70% 55% at 20% 20%, rgba(207,174,106,0.05) 0%, transparent 70%)' }}
                  />
                  {cardContent}
                </Link>
              )
            }

            return (
              <div
                key={chamber.slug}
                className="relative overflow-hidden"
                style={{
                  padding: '1.75rem',
                  minHeight: '220px',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid rgba(232,226,211,0.04)',
                  background: 'transparent',
                }}
              >
                {cardContent}
              </div>
            )
          })}
        </div>

        <div style={{ marginTop: '5rem' }}>
          <Link
            href="/"
            className="font-cinzel text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 hover:text-[#CFAE6A]"
            style={{ color: 'rgba(207,174,106,0.4)' }}
          >
            ← Portail
          </Link>
        </div>
      </div>
    </main>
  )
}
