import Link from 'next/link'
import Header from '@/components/Header'
import ThresholdLine from '@/components/ThresholdLine'
import { levels } from '@/data/levels'
import { chambers } from '@/data/chambers'

export default function ParcoursPage() {
  return (
    <main className="min-h-screen" style={{ background: '#02040A' }}>
      <Header />

      <div className="max-w-[980px] mx-auto px-6 pt-36 pb-24">

        <div style={{ marginBottom: '4rem' }}>
          <p
            className="font-cinzel"
            style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(207,174,106,0.6)', marginBottom: '1.5rem' }}
          >
            LUMEN · Traversée
          </p>
          <h1
            className="font-cinzel"
            style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: '600', letterSpacing: '0.04em', color: '#E8E2D3', lineHeight: 1.2, marginBottom: '1.5rem' }}
          >
            Le Parcours
          </h1>
          <p
            className="font-manrope"
            style={{ fontSize: '14px', color: 'rgba(232,226,211,0.48)', lineHeight: 1.85, maxWidth: '500px' }}
          >
            Trois dimensions du regard. Chacune ouvre ce que la précédente
            ne pouvait pas encore voir.
          </p>
        </div>

        <div style={{ marginBottom: '3.5rem' }}><ThresholdLine /></div>

        {/* Dimension Cards — 3 columns */}
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
        >
          {levels.map((level, idx) => {
            const dimChambres = chambers.filter(
              (c) => c.dimension === level.romanNumeral || c.dimension === 'I–III'
            )
            const accents = [
              { bg: 'rgba(207,174,106,0.05)', border: 'rgba(207,174,106,0.14)' },
              { bg: 'rgba(107,91,142,0.05)',  border: 'rgba(107,91,142,0.14)' },
              { bg: 'rgba(138,136,128,0.04)', border: 'rgba(138,136,128,0.12)' },
            ]
            const a = accents[idx] ?? accents[0]

            return (
              <div
                key={level.number}
                className="card-lift relative overflow-hidden flex flex-col"
                style={{
                  padding: '2rem 1.75rem',
                  minHeight: '360px',
                  background: `linear-gradient(160deg, ${a.bg} 0%, transparent 50%)`,
                  border: `1px solid ${a.border}`,
                  transition: 'border-color 0.35s ease, box-shadow 0.35s ease',
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse 80% 60% at 15% 15%, ${a.bg} 0%, transparent 65%)` }}
                />
                {/* Large roman numeral background */}
                <span
                  className="absolute top-3 right-4 font-cinzel font-semibold select-none pointer-events-none"
                  style={{
                    fontSize: '7rem',
                    color: 'rgba(207,174,106,0.035)',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {level.romanNumeral}
                </span>

                <div className="relative z-10 flex flex-col justify-between h-full flex-1">
                  <div>
                    {/* Tagline */}
                    <p
                      className="font-cinzel"
                      style={{
                        fontSize: '9px',
                        letterSpacing: '0.38em',
                        textTransform: 'uppercase',
                        color: 'rgba(207,174,106,0.5)',
                        marginBottom: '1.25rem',
                      }}
                    >
                      {level.tagline}
                    </p>

                    {/* Level name */}
                    <h2
                      className="font-cinzel font-semibold"
                      style={{
                        fontSize: 'clamp(1.1rem,1.8vw,1.4rem)',
                        color: '#E8E2D3',
                        lineHeight: 1.25,
                        marginBottom: '1.25rem',
                      }}
                    >
                      {level.name}
                    </h2>

                    {/* Description */}
                    <p
                      className="font-manrope"
                      style={{
                        fontSize: '13px',
                        color: 'rgba(232,226,211,0.4)',
                        lineHeight: 1.8,
                      }}
                    >
                      {level.description}
                    </p>
                  </div>

                  {/* Chambers list footer */}
                  {dimChambres.length > 0 && (
                    <div
                      style={{
                        marginTop: '2rem',
                        paddingTop: '1.25rem',
                        borderTop: '1px solid rgba(232,226,211,0.06)',
                      }}
                    >
                      <div className="flex flex-col gap-2">
                        {dimChambres.map((c) =>
                          c.isOpen ? (
                            <Link
                              key={c.slug}
                              href={`/chambres/${c.slug}`}
                              className="font-cinzel text-[9px] tracking-[0.28em] uppercase transition-colors duration-300 hover:text-[#CFAE6A]"
                              style={{ color: 'rgba(207,174,106,0.45)' }}
                            >
                              {c.name} →
                            </Link>
                          ) : (
                            <span
                              key={c.slug}
                              className="font-cinzel text-[9px] tracking-[0.28em] uppercase"
                              style={{ color: 'rgba(232,226,211,0.15)' }}
                            >
                              {c.name}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div style={{ marginTop: '5rem', marginBottom: '4rem' }}>
          <div style={{ marginBottom: '4rem' }}><ThresholdLine /></div>
          <Link
            href="/chambres/lois"
            className="btn-primary inline-flex items-center font-cinzel text-[11px] tracking-[0.22em] uppercase px-10 py-4"
          >
            Entrer dans la Chambre des Lois
          </Link>
        </div>

        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="font-cinzel text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 hover:text-[#CFAE6A]"
            style={{ color: 'rgba(207,174,106,0.4)' }}
          >
            ← Portail
          </Link>
          <Link
            href="/chambres"
            className="font-cinzel text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 hover:text-[#CFAE6A]"
            style={{ color: 'rgba(207,174,106,0.4)' }}
          >
            Les Chambres →
          </Link>
        </div>
      </div>
    </main>
  )
}
