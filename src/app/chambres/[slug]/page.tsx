import { notFound } from 'next/navigation'
import Link from 'next/link'
import { headers } from 'next/headers'
import Header from '@/components/Header'
import ThresholdLine from '@/components/ThresholdLine'
import ConnexionsBlock from '@/components/ConnexionsBlock'
import ChamberMark, { type ChamberMarkSlug } from '@/identity/chamberMarks'
import { getChamber } from '@/data/chambers'
import { lois } from '@/data/chambers/lois'
import {
  getLoisPourFigure,
  getLoisPourLecture,
  getCartesPourFigure,
  getCartesPourLecture,
  getDomainesPourFigure,
  getDomainesPourLecture,
} from '@/data/chambers/connexions'
import { ligneeFigures } from '@/data/chambers/figures'
import { lectures } from '@/data/chambers/lectures'
import { cartes } from '@/data/chambers/cartes'
import { domainesReel } from '@/data/chambers/reel'
import { oeuvres } from '@/data/chambers/oeuvres'
import { fragmentsFeu } from '@/data/chambers/feu'

interface Props {
  params: Promise<{ slug: string }>
}

function PageHeader({ chamber }: { chamber: { slug: string; name: string; declaration: string; dimension: string } }) {
  return (
    <div style={{ marginBottom: '4rem' }}>
      <div className="flex items-center" style={{ gap: '0.75rem', marginBottom: '1.5rem' }}>
        <ChamberMark
          slug={chamber.slug as ChamberMarkSlug}
          size={18}
          color="rgba(207,174,106,0.6)"
        />
        <p
          className="font-cinzel"
          style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(207,174,106,0.6)' }}
        >
          LUMEN · {chamber.dimension}
        </p>
      </div>
      <h1
        className="font-cinzel"
        style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: '600', letterSpacing: '0.04em', color: '#E8E2D3', lineHeight: 1.2, marginBottom: '1.5rem' }}
      >
        {chamber.name}
      </h1>
      <p
        className="font-manrope"
        style={{ fontSize: '14px', color: 'rgba(232,226,211,0.48)', lineHeight: 1.85, maxWidth: '500px' }}
      >
        {chamber.declaration}
      </p>
    </div>
  )
}

function DepthGate({ count, label, hints }: { count: number; label: string; hints: string[] }) {
  return (
    <div style={{ paddingTop: '3rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(232,226,211,0.06)' }}>
      {/* Gradient veil suggesting continuation */}
      <div style={{
        background: 'linear-gradient(to bottom, transparent 0%, rgba(2,4,10,0.85) 100%)',
        marginBottom: '2.5rem',
        paddingTop: '1.5rem',
        paddingBottom: '2rem',
      }}>
        {hints.map((hint, i) => (
          <p
            key={i}
            className="font-cinzel"
            style={{
              fontSize: '11px',
              letterSpacing: '0.1em',
              color: `rgba(232,226,211,${0.12 - i * 0.04})`,
              lineHeight: 1.9,
              marginBottom: '0.5rem',
              userSelect: 'none',
            }}
          >
            {hint}
          </p>
        ))}
      </div>

      <p
        className="font-cinzel"
        style={{ fontSize: '9px', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(207,174,106,0.35)', marginBottom: '1rem' }}
      >
        {count} {label} réservé{count > 1 ? 's' : ''} aux membres
      </p>

      <p
        className="font-manrope"
        style={{ fontSize: '13px', color: 'rgba(232,226,211,0.28)', lineHeight: 1.85, maxWidth: '460px', marginBottom: '2rem' }}
      >
        La profondeur de cette chambre ne s&apos;aperçoit pas — elle se traverse.
        Un passage unique ouvre l&apos;accès permanent à l&apos;ensemble du corpus.
      </p>

      <Link
        href="/entrer"
        className="btn-primary inline-flex items-center font-cinzel text-[10px] tracking-[0.25em] uppercase px-8 py-3"
      >
        Franchir le seuil — 190 €
      </Link>
    </div>
  )
}

function BottomNav({ right }: { right?: { label: string; href: string } }) {
  return (
    <div className="flex items-center gap-8" style={{ marginTop: '5rem' }}>
      <Link
        href="/chambres"
        className="font-cinzel text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 hover:text-[#CFAE6A]"
        style={{ color: 'rgba(207,174,106,0.4)' }}
      >
        ← Les Chambres
      </Link>
      {right && (
        <Link
          href={right.href}
          className="font-cinzel text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 hover:text-[#CFAE6A]"
          style={{ color: 'rgba(207,174,106,0.4)' }}
        >
          {right.label} →
        </Link>
      )}
    </div>
  )
}

export default async function ChambrePage({ params }: Props) {
  const { slug } = await params
  const chamber = getChamber(slug)
  if (!chamber) notFound()

  const h = await headers()
  const isMember = h.get('x-lumen-member') === '1'

  if (!chamber.isOpen) {
    return (
      <main className="min-h-screen" style={{ background: '#02040A' }}>
        <Header />
        <div className="max-w-[860px] mx-auto px-6 pt-36 pb-24">
          <p
            className="font-cinzel"
            style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(207,174,106,0.6)', marginBottom: '1.5rem' }}
          >
            LUMEN · Chambre
          </p>
          <h1
            className="font-cinzel font-semibold"
            style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', color: '#E8E2D3', marginBottom: '1.5rem' }}
          >
            {chamber.name}
          </h1>
          <p
            className="font-manrope"
            style={{ fontSize: '14px', color: 'rgba(232,226,211,0.48)', lineHeight: 1.85, marginBottom: '3rem' }}
          >
            {chamber.declaration}
          </p>
          <p
            className="font-manrope"
            style={{ fontSize: '13px', color: 'rgba(232,226,211,0.22)', lineHeight: 1.8 }}
          >
            Cette chambre n'est pas encore ouverte.
          </p>
          <div style={{ marginTop: '4rem' }}>
            <Link
              href="/chambres"
              className="font-cinzel text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 hover:text-[#CFAE6A]"
              style={{ color: 'rgba(207,174,106,0.4)' }}
            >
              ← Les Chambres
            </Link>
          </div>
        </div>
      </main>
    )
  }

  // --- FIGURES ---
  if (slug === 'figures') {
    const visible = isMember ? ligneeFigures : ligneeFigures.filter((l) => l.surface)

    return (
      <main className="min-h-screen" style={{ background: '#02040A' }}>
        <Header />
        <div className="max-w-[860px] mx-auto px-6 pt-36 pb-24">
          <PageHeader chamber={chamber} />
          <div style={{ marginBottom: '3rem' }}><ThresholdLine /></div>

          <div>
            {visible.map((lignee) => {
              const territoires = lignee.territoires ?? []
              return (
                <div key={lignee.slug} id={lignee.slug} className="py-14 border-b" style={{ borderColor: 'rgba(232,226,211,0.06)', scrollMarginTop: '88px' }}>
                  <p className="font-cinzel" style={{ fontSize: '9px', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(207,174,106,0.35)', marginBottom: '1rem' }}>
                    {lignee.orientation}
                  </p>
                  <h2 className="font-cinzel font-semibold" style={{ fontSize: 'clamp(1rem,1.8vw,1.2rem)', color: '#E8E2D3', lineHeight: 1.35, marginBottom: '0.75rem' }}>
                    {lignee.lignee}
                  </h2>

                  {/* Analyse de la lignée */}
                  <p className="font-manrope" style={{ fontSize: '13.5px', color: 'rgba(232,226,211,0.44)', lineHeight: 1.9, maxWidth: '560px', marginBottom: '3rem' }}>
                    {lignee.analyse ?? lignee.role}
                  </p>

                  {/* Présences — surface: apport / membre: traitement complet */}
                  <div className="flex flex-col" style={{ gap: '2.5rem' }}>
                    {lignee.presences.map((p) => (
                      <div key={p.nom} style={{ paddingLeft: '1.5rem', borderLeft: '1px solid rgba(207,174,106,0.12)' }}>
                        <div style={{ display: 'flex', alignItems: p.imageSlug ? 'flex-start' : 'baseline', gap: '1rem', marginBottom: '0.4rem' }}>
                          {p.imageSlug && (
                            <img
                              src={`/figures/${p.imageSlug}`}
                              alt={p.nom}
                              width={52}
                              height={52}
                              style={{
                                width: '52px',
                                height: '52px',
                                objectFit: 'cover',
                                objectPosition: 'center top',
                                flexShrink: 0,
                                filter: 'grayscale(100%) brightness(0.7) sepia(15%)',
                                border: '1px solid rgba(207,174,106,0.12)',
                              }}
                            />
                          )}
                          <div>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', flexWrap: 'wrap' }}>
                              <span className="font-cinzel" style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(207,174,106,0.6)' }}>{p.nom}</span>
                              {p.dates && (
                                <span className="font-manrope" style={{ fontSize: '10px', color: 'rgba(232,226,211,0.22)', letterSpacing: '0.04em' }}>{p.dates}</span>
                              )}
                            </div>
                          </div>
                        </div>
                        <span className="font-manrope" style={{ fontSize: '12px', color: 'rgba(232,226,211,0.32)', lineHeight: 1.7, display: 'block', marginBottom: isMember ? '1.25rem' : 0 }}>{p.apport}</span>

                        {isMember && (
                          <>
                            <p className="font-manrope" style={{ fontSize: '13.5px', color: 'rgba(232,226,211,0.48)', lineHeight: 1.9, maxWidth: '520px', marginBottom: '1.25rem' }}>
                              {p.these}
                            </p>
                            <span className="font-cinzel" style={{ fontSize: '8px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(207,174,106,0.35)', display: 'block', marginBottom: '0.5rem' }}>Méthode</span>
                            <p className="font-manrope" style={{ fontSize: '13px', color: 'rgba(232,226,211,0.36)', lineHeight: 1.85, maxWidth: '520px', marginBottom: '1.5rem' }}>
                              {p.methode}
                            </p>
                            {p.textesCles.length > 0 && (
                              <div style={{ marginBottom: '1.25rem' }}>
                                <span className="font-cinzel" style={{ fontSize: '8px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(207,174,106,0.35)', display: 'block', marginBottom: '0.75rem' }}>Textes clés</span>
                                <div className="flex flex-col gap-3">
                                  {p.textesCles.map((t) => (
                                    <div key={t.titre} style={{ paddingLeft: '1rem', borderLeft: '1px solid rgba(207,174,106,0.08)' }}>
                                      {t.slug ? (
                                        <Link
                                          href={`/chambres/lectures#${t.slug}`}
                                          className="font-cinzel transition-colors duration-300 hover:text-[#CFAE6A]"
                                          style={{ fontSize: '9px', letterSpacing: '0.15em', color: 'rgba(232,226,211,0.7)', display: 'block', marginBottom: '0.25rem' }}
                                        >
                                          {t.titre}
                                        </Link>
                                      ) : (
                                        <span className="font-cinzel" style={{ fontSize: '9px', letterSpacing: '0.15em', color: '#E8E2D3', display: 'block', marginBottom: '0.25rem', opacity: 0.7 }}>{t.titre}</span>
                                      )}
                                      <span className="font-manrope" style={{ fontSize: '12.5px', color: 'rgba(232,226,211,0.32)', lineHeight: 1.8 }}>{t.pourquoi}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                            {p.limite && (
                              <div style={{ paddingLeft: '1rem', borderLeft: '1px solid rgba(107,91,142,0.2)' }}>
                                <span className="font-cinzel" style={{ fontSize: '8px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(107,91,142,0.5)', display: 'block', marginBottom: '0.4rem' }}>Limite</span>
                                <p className="font-manrope" style={{ fontSize: '12.5px', color: 'rgba(232,226,211,0.28)', lineHeight: 1.8, fontStyle: 'italic', maxWidth: '480px' }}>{p.limite}</p>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    ))}
                  </div>

                  {lignee.periode && (
                    <p className="font-manrope" style={{ fontSize: '11.5px', color: 'rgba(232,226,211,0.18)', letterSpacing: '0.04em', marginTop: '2rem' }}>
                      {lignee.periode}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-3" style={{ marginTop: '1.25rem' }}>
                    <span className="font-cinzel text-[9px] tracking-[0.28em] uppercase" style={{ color: 'rgba(207,174,106,0.28)' }}>Dim. {lignee.dimension}</span>
                    {territoires.map((t) => (
                      <span key={t} className="font-cinzel text-[9px] tracking-[0.28em] uppercase" style={{ color: '#6B5B8E', opacity: 0.7 }}>{t}</span>
                    ))}
                  </div>
                  <ConnexionsBlock
                    lois={getLoisPourFigure(lignee.slug)}
                    cartes={getCartesPourFigure(lignee.slug)}
                    domaines={getDomainesPourFigure(lignee.slug)}
                  />
                </div>
              )
            })}
          </div>

          {!isMember && <DepthGate count={3} label="lignées" hints={['La Stratégie du flux', 'La Rupture comme clarté', 'Le Signal dans le bruit']} />}
          <BottomNav right={{ label: 'Bibliothèque', href: '/bibliotheque' }} />
        </div>
      </main>
    )
  }

  // --- LECTURES ---
  if (slug === 'lectures') {
    const visible = isMember ? lectures : lectures.filter((l) => l.surface)

    return (
      <main className="min-h-screen" style={{ background: '#02040A' }}>
        <Header />
        <div className="max-w-[860px] mx-auto px-6 pt-36 pb-24">
          <PageHeader chamber={chamber} />
          <div style={{ marginBottom: '3rem' }}><ThresholdLine /></div>

          <div>
            {visible.map((lecture) => {
              const territoires = lecture.territoires ?? []
              return (
                <div key={lecture.slug} id={lecture.slug} className="py-11 border-b" style={{ borderColor: 'rgba(232,226,211,0.06)', scrollMarginTop: '88px' }}>
                  <p className="font-cinzel" style={{ fontSize: '9px', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(207,174,106,0.35)', marginBottom: '1rem' }}>
                    {lecture.forme}
                  </p>
                  <h2 className="font-cinzel font-semibold" style={{ fontSize: 'clamp(1rem,1.8vw,1.2rem)', color: '#E8E2D3', lineHeight: 1.35, marginBottom: '0.25rem' }}>
                    {lecture.titre}
                  </h2>
                  <p className="font-manrope" style={{ fontSize: '11px', color: 'rgba(232,226,211,0.4)', letterSpacing: '0.04em', marginBottom: '1.5rem' }}>
                    {lecture.auteur}
                  </p>
                  <p className="font-manrope" style={{ fontSize: '13.5px', color: 'rgba(232,226,211,0.44)', lineHeight: 1.9, maxWidth: '520px' }}>
                    {lecture.apport}
                  </p>
                  {lecture.extrait && (
                    /* Bloc-Citation — artefact canonique */
                    <div style={{ paddingLeft: '24px', borderLeft: '2px solid #CFAE6A', marginTop: '1.5rem' }}>
                      <p className="font-manrope" style={{ fontSize: '13px', fontStyle: 'italic', color: 'rgba(232,226,211,0.38)', lineHeight: 1.85 }}>
                        {lecture.extrait}
                      </p>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-3" style={{ marginTop: '1.5rem' }}>
                    <span className="font-cinzel text-[9px] tracking-[0.28em] uppercase" style={{ color: 'rgba(207,174,106,0.28)' }}>Dim. {lecture.dimension}</span>
                    {territoires.map((t) => (
                      <span key={t} className="font-cinzel text-[9px] tracking-[0.28em] uppercase" style={{ color: '#6B5B8E', opacity: 0.7 }}>{t}</span>
                    ))}
                  </div>
                  <ConnexionsBlock
                    lois={getLoisPourLecture(lecture.slug)}
                    cartes={getCartesPourLecture(lecture.slug)}
                    domaines={getDomainesPourLecture(lecture.slug)}
                  />
                </div>
              )
            })}
          </div>

          {!isMember && <DepthGate count={27} label="textes" hints={['Pensées pour moi-même — Marc Aurèle', 'Les Essais — Montaigne', 'De la brièveté de la vie — Sénèque']} />}
          <BottomNav right={{ label: 'Bibliothèque', href: '/bibliotheque' }} />
        </div>
      </main>
    )
  }

  // --- CARTES ---
  if (slug === 'cartes') {
    const visible = isMember ? cartes : cartes.filter((c) => c.surface)
    return (
      <main className="min-h-screen" style={{ background: '#02040A' }}>
        <Header />
        <div className="max-w-[860px] mx-auto px-6 pt-36 pb-24">
          <PageHeader chamber={chamber} />
          <div style={{ marginBottom: '3rem' }}><ThresholdLine /></div>
          <div>
            {visible.map((carte) => (
              <div key={carte.slug} className="py-11 border-b" style={{ borderColor: 'rgba(232,226,211,0.06)' }}>
                <p className="font-cinzel" style={{ fontSize: '9px', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(207,174,106,0.35)', marginBottom: '1rem' }}>
                  {carte.territoire}
                </p>
                <h2 className="font-cinzel font-semibold" style={{ fontSize: 'clamp(1rem,1.8vw,1.2rem)', color: '#E8E2D3', lineHeight: 1.35, marginBottom: '1.25rem' }}>
                  {carte.titre}
                </h2>
                <p className="font-manrope" style={{ fontSize: '13.5px', color: 'rgba(232,226,211,0.44)', lineHeight: 1.9, maxWidth: '520px', marginBottom: '1.5rem' }}>
                  {carte.description}
                </p>
                <div style={{ paddingLeft: '24px', borderLeft: '2px solid rgba(232,226,211,0.08)', marginBottom: '1.5rem' }}>
                  <span className="font-cinzel" style={{ fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(207,174,106,0.4)', display: 'block', marginBottom: '0.5rem' }}>Lecture</span>
                  <p className="font-manrope" style={{ fontSize: '13px', color: 'rgba(232,226,211,0.32)', lineHeight: 1.85 }}>
                    {carte.lecture}
                  </p>
                </div>
                {carte.exemple && (
                  <div style={{ paddingLeft: '24px', borderLeft: '2px solid #CFAE6A', marginBottom: '1.5rem' }}>
                    <p className="font-manrope" style={{ fontSize: '13px', fontStyle: 'italic', color: 'rgba(232,226,211,0.32)', lineHeight: 1.85 }}>
                      {carte.exemple}
                    </p>
                  </div>
                )}
                <span className="font-cinzel text-[9px] tracking-[0.32em] uppercase inline-block" style={{ color: 'rgba(207,174,106,0.3)', marginTop: '1.5rem' }}>
                  Dimension {carte.dimension}
                </span>
                {carte.connexions && (
                  <ConnexionsBlock figures={carte.connexions.figures} lectures={carte.connexions.lectures} />
                )}
              </div>
            ))}
          </div>
          {!isMember && <DepthGate count={5} label="cartes" hints={["L'Architecture de la transmission", 'Les Cycles du pouvoir', 'La Carte des dimensions']} />}
          <BottomNav right={{ label: 'Chambre du Réel', href: '/chambres/reel' }} />
        </div>
      </main>
    )
  }

  // --- RÉEL ---
  if (slug === 'reel') {
    const visible = isMember ? domainesReel : domainesReel.filter((d) => d.surface)
    return (
      <main className="min-h-screen" style={{ background: '#02040A' }}>
        <Header />
        <div className="max-w-[860px] mx-auto px-6 pt-36 pb-24">
          <PageHeader chamber={chamber} />
          <div style={{ marginBottom: '3rem' }}><ThresholdLine /></div>
          <div>
            {visible.map((domaine) => (
              <div key={domaine.slug} className="py-11 border-b" style={{ borderColor: 'rgba(232,226,211,0.06)' }}>
                <p className="font-cinzel" style={{ fontSize: '9px', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(207,174,106,0.35)', marginBottom: '1rem' }}>
                  {domaine.territoire}
                </p>
                <h2 className="font-cinzel font-semibold" style={{ fontSize: 'clamp(1rem,1.8vw,1.2rem)', color: '#E8E2D3', lineHeight: 1.35, marginBottom: '1.25rem' }}>
                  {domaine.domaine}
                </h2>
                <p className="font-manrope" style={{ fontSize: '13.5px', color: 'rgba(232,226,211,0.44)', lineHeight: 1.9, maxWidth: '520px', marginBottom: '1.5rem' }}>
                  {domaine.observation}
                </p>
                <div style={{ paddingLeft: '24px', borderLeft: '2px solid rgba(232,226,211,0.08)', marginBottom: '1.5rem' }}>
                  <span className="font-cinzel" style={{ fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(207,174,106,0.4)', display: 'block', marginBottom: '0.5rem' }}>Mécanisme</span>
                  <p className="font-manrope" style={{ fontSize: '13px', color: 'rgba(232,226,211,0.32)', lineHeight: 1.85 }}>
                    {domaine.mecanisme}
                  </p>
                </div>
                {domaine.exemple && (
                  <div style={{ paddingLeft: '24px', borderLeft: '2px solid #CFAE6A', marginBottom: '1.5rem' }}>
                    <p className="font-manrope" style={{ fontSize: '13px', fontStyle: 'italic', color: 'rgba(232,226,211,0.32)', lineHeight: 1.85 }}>
                      {domaine.exemple}
                    </p>
                  </div>
                )}
                <span className="font-cinzel text-[9px] tracking-[0.32em] uppercase inline-block" style={{ color: 'rgba(207,174,106,0.3)', marginTop: '1.5rem' }}>
                  Dimension {domaine.dimension}
                </span>
                {domaine.connexions && (
                  <ConnexionsBlock figures={domaine.connexions.figures} lectures={domaine.connexions.lectures} />
                )}
              </div>
            ))}
          </div>
          {!isMember && <DepthGate count={4} label="domaines" hints={['Travail', 'Transmission', 'Psychologie', 'Création']} />}
          <BottomNav right={{ label: 'Chambre des Œuvres', href: '/chambres/oeuvres' }} />
        </div>
      </main>
    )
  }

  // --- ŒUVRES ---
  if (slug === 'oeuvres') {
    const visible = isMember ? oeuvres : oeuvres.filter((o) => o.surface)
    return (
      <main className="min-h-screen" style={{ background: '#02040A' }}>
        <Header />
        <div className="max-w-[860px] mx-auto px-6 pt-36 pb-24">
          <PageHeader chamber={chamber} />
          <div style={{ marginBottom: '3rem' }}><ThresholdLine /></div>
          <div>
            {visible.map((oeuvre) => (
              <div key={oeuvre.slug} className="py-11 border-b" style={{ borderColor: 'rgba(232,226,211,0.06)' }}>
                <p className="font-cinzel" style={{ fontSize: '9px', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(207,174,106,0.35)', marginBottom: '1rem' }}>
                  {oeuvre.forme}
                  {oeuvre.enConstruction && (
                    <span style={{ marginLeft: '1.5rem', color: 'rgba(232,226,211,0.18)' }}>· En constitution</span>
                  )}
                </p>
                <h2 className="font-cinzel font-semibold" style={{ fontSize: 'clamp(1rem,1.8vw,1.2rem)', color: oeuvre.enConstruction ? 'rgba(232,226,211,0.35)' : '#E8E2D3', lineHeight: 1.35, marginBottom: '1.25rem' }}>
                  {oeuvre.titre}
                </h2>
                <p className="font-manrope" style={{ fontSize: '13.5px', color: 'rgba(232,226,211,0.38)', lineHeight: 1.9, maxWidth: '520px' }}>
                  {oeuvre.description}
                </p>

                {/* Essai — extrait pour non-membre, texte complet pour membre */}
                {!oeuvre.enConstruction && oeuvre.contenu && (
                  isMember ? (
                    <div style={{ marginTop: '2rem' }}>
                      {oeuvre.contenu.map((para, i) => (
                        <p key={i} className="font-manrope" style={{ fontSize: '14px', color: 'rgba(232,226,211,0.52)', lineHeight: 2, maxWidth: '600px', marginBottom: i < oeuvre.contenu!.length - 1 ? '1.5rem' : 0 }}>
                          {para}
                        </p>
                      ))}
                    </div>
                  ) : (
                    oeuvre.extrait && (
                      <div style={{ paddingLeft: '24px', borderLeft: '2px solid #CFAE6A', marginTop: '1.5rem' }}>
                        <p className="font-manrope" style={{ fontSize: '13px', fontStyle: 'italic', color: 'rgba(232,226,211,0.38)', lineHeight: 1.85 }}>
                          {oeuvre.extrait}
                        </p>
                      </div>
                    )
                  )
                )}

                {/* Lexique — termes complets pour membre */}
                {!oeuvre.enConstruction && oeuvre.termes && isMember && (
                  <div style={{ marginTop: '2.5rem' }}>
                    {oeuvre.termes.map((terme) => (
                      <div key={terme.mot} className="flex gap-6 py-3 border-b" style={{ borderColor: 'rgba(232,226,211,0.04)' }}>
                        <span className="font-cinzel shrink-0" style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(207,174,106,0.6)', width: '8rem', paddingTop: '2px' }}>
                          {terme.mot}
                        </span>
                        <p className="font-manrope" style={{ fontSize: '13px', color: 'rgba(232,226,211,0.44)', lineHeight: 1.8 }}>
                          {terme.definition}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <span className="font-cinzel text-[9px] tracking-[0.32em] uppercase inline-block" style={{ color: 'rgba(207,174,106,0.25)', marginTop: '1.5rem' }}>
                  Dimension {oeuvre.dimension}
                </span>
              </div>
            ))}
          </div>
          {!isMember && <DepthGate count={3} label="œuvres" hints={["Anatomie d'une décision", 'Fragments de seuil', 'La Carte du passage']} />}
          <BottomNav right={{ label: 'Chambre du Feu', href: '/chambres/feu' }} />
        </div>
      </main>
    )
  }

  // --- FEU ---
  if (slug === 'feu') {
    const visible = isMember ? fragmentsFeu : fragmentsFeu.filter((f) => f.surface)
    return (
      <main className="min-h-screen" style={{ background: '#02040A' }}>
        <Header />
        <div className="max-w-[860px] mx-auto px-6 pt-36 pb-24">
          <PageHeader chamber={chamber} />
          <div style={{ marginBottom: '3rem' }}><ThresholdLine /></div>
          <div>
            {visible.map((fragment) => (
              <div key={fragment.slug} className="py-14 border-b" style={{ borderColor: 'rgba(232,226,211,0.06)' }}>
                <h2 className="font-cinzel font-semibold" style={{ fontSize: 'clamp(1.1rem,2vw,1.4rem)', color: '#E8E2D3', lineHeight: 1.3, marginBottom: '2.5rem', letterSpacing: '0.02em' }}>
                  {fragment.incipit}
                </h2>
                <div className="font-manrope" style={{ fontSize: '14px', color: 'rgba(232,226,211,0.5)', lineHeight: 2, maxWidth: '540px' }}>
                  {fragment.corps.split('\n\n').map((para, i) => (
                    <p key={i} style={{ marginBottom: i < fragment.corps.split('\n\n').length - 1 ? '1.5rem' : 0 }}>{para}</p>
                  ))}
                </div>
                {fragment.attribution && (
                  <p className="font-cinzel" style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(207,174,106,0.35)', marginTop: '2rem' }}>
                    — {fragment.attribution}
                  </p>
                )}
                <span className="font-cinzel text-[9px] tracking-[0.32em] uppercase inline-block" style={{ color: 'rgba(207,174,106,0.3)', marginTop: '1.5rem' }}>
                  Dimension {fragment.dimension}
                </span>
              </div>
            ))}
          </div>
          {!isMember && <DepthGate count={4} label="fragments" hints={["La clarté n'est pas une option.", 'Le rang ne se déclare pas.', 'Le seuil sépare.']} />}
          <BottomNav />
        </div>
      </main>
    )
  }

  // --- LOIS (défaut) ---
  const visible = isMember ? lois : lois.filter((l) => l.surface)

  return (
    <main className="min-h-screen" style={{ background: '#02040A' }}>
      <Header />
      <div className="max-w-[860px] mx-auto px-6 pt-36 pb-24">
        <PageHeader chamber={chamber} />
        <div style={{ marginBottom: '3rem' }}><ThresholdLine /></div>

        <div>
          {visible.map((loi) => (
            <div key={loi.numero} id={loi.numero} className="py-11 border-b" style={{ borderColor: 'rgba(232,226,211,0.06)', scrollMarginTop: '88px' }}>
              <div className="flex items-start gap-8">
                <span
                  className="font-cinzel font-semibold shrink-0"
                  style={{ fontSize: '1.6rem', color: 'rgba(207,174,106,0.12)', lineHeight: 1, width: '2rem' }}
                >
                  {loi.numero}
                </span>
                <div className="flex-1">
                  <p
                    className="font-cinzel font-semibold"
                    style={{ fontSize: 'clamp(1rem,1.8vw,1.2rem)', color: '#E8E2D3', lineHeight: 1.35, marginBottom: '1.25rem' }}
                  >
                    {loi.enonce}
                  </p>
                  <p
                    className="font-manrope"
                    style={{ fontSize: '13.5px', color: 'rgba(232,226,211,0.44)', lineHeight: 1.9, maxWidth: '520px' }}
                  >
                    {loi.developpement}
                  </p>

                  {/* Bloc-Citation — exemple ancré */}
                  {loi.exemple && (
                    <div style={{ paddingLeft: '24px', borderLeft: '2px solid #CFAE6A', marginTop: '1.75rem' }}>
                      <p
                        className="font-manrope"
                        style={{ fontSize: '13px', fontStyle: 'italic', color: 'rgba(232,226,211,0.32)', lineHeight: 1.85 }}
                      >
                        {loi.exemple}
                      </p>
                    </div>
                  )}

                  {/* Interrogation — épine doctrinale, sans label, sans interaction */}
                  {loi.interrogation && (
                    <div
                      style={{
                        paddingLeft: '24px',
                        borderLeft: '1px solid rgba(107,91,142,0.35)',
                        marginTop: '2.25rem',
                      }}
                    >
                      <p
                        className="font-cinzel"
                        style={{
                          fontSize: '13px',
                          fontStyle: 'italic',
                          color: 'rgba(232,226,211,0.5)',
                          lineHeight: 1.8,
                          letterSpacing: '0.01em',
                        }}
                      >
                        {loi.interrogation}
                      </p>
                    </div>
                  )}

                  <span
                    className="font-cinzel text-[9px] tracking-[0.32em] uppercase inline-block"
                    style={{ color: 'rgba(207,174,106,0.3)', marginTop: '1.5rem' }}
                  >
                    Dimension {loi.dimension}
                  </span>
                  {loi.connexions && (
                    <ConnexionsBlock figures={loi.connexions.figures} lectures={loi.connexions.lectures} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {!isMember && <DepthGate count={17} label="lois" hints={['IV — Un système mal nommé se retourne toujours contre son auteur.', 'V — La transmission est une architecture, non un geste.', 'VI — La confusion persistante est un signal — rarement du réel, toujours du regard.']} />}
        <BottomNav right={{ label: 'Entrer', href: '/entrer' }} />
      </div>
    </main>
  )
}
