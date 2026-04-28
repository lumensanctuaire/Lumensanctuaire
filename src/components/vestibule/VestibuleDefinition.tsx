import ThresholdLine from '@/components/ThresholdLine'

const dimensions = [
  {
    rang: 'I',
    nom: 'Voir',
    accroche: 'Les lois du réel.',
    corps: "Ce qui gouverne les systèmes humains sans jamais s'annoncer. Les structures invisibles derrière les événements visibles. La perception avant l'action.",
    couleur: 'rgba(207,174,106,0.05)',
    bordure: 'rgba(207,174,106,0.14)',
    chambres: 'Lois · Figures · Lectures',
  },
  {
    rang: 'II',
    nom: 'Comprendre',
    accroche: 'Les cartes du pouvoir et du réel.',
    corps: "Les schémas qui tiennent sous pression. Ce que les domaines — travail, transmission, psychologie, création — révèlent quand on les lit sans illusion.",
    couleur: 'rgba(107,91,142,0.05)',
    bordure: 'rgba(107,91,142,0.14)',
    chambres: 'Cartes · Réel',
  },
  {
    rang: 'III',
    nom: 'Transmettre',
    accroche: 'Les formes qui durent.',
    corps: "Quand ce qui a été compris s'installe et devient formation. Les œuvres, les manifestes, le feu — la connaissance portée à la précision de la transmission.",
    couleur: 'rgba(138,136,128,0.04)',
    bordure: 'rgba(138,136,128,0.12)',
    chambres: 'Œuvres · Feu',
  },
]

export default function VestibuleDefinition() {
  return (
    <section className="py-28" style={{ background: '#02040A' }}>
      <div className="max-w-[860px] mx-auto px-6">
        <div style={{ marginBottom: '3rem' }}>
          <ThresholdLine />
        </div>

        <div style={{ maxWidth: '560px', margin: '0 auto 4rem' }}>
          <p
            className="font-cinzel text-center"
            style={{
              fontSize: 'clamp(0.85rem, 1.4vw, 1rem)',
              color: 'rgba(207,174,106,0.6)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: '2rem',
            }}
          >
            Un sanctuaire doctrinal
          </p>
          <p
            className="font-manrope text-center"
            style={{
              fontSize: '14px',
              color: 'rgba(232,226,211,0.42)',
              lineHeight: 1.95,
            }}
          >
            Pas un cours. Pas une plateforme. Un corps de travail construit pour
            ceux qui cherchent à élever leur regard, leur jugement, leur façon
            de tenir dans le réel — et d&apos;y transmettre quelque chose de précis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {dimensions.map(({ rang, nom, accroche, corps, couleur, bordure, chambres }) => (
            <div
              key={rang}
              className="relative flex flex-col overflow-hidden"
              style={{
                background: `linear-gradient(160deg, ${couleur} 0%, transparent 55%)`,
                border: `1px solid ${bordure}`,
                padding: '2rem 1.75rem',
                minHeight: '260px',
              }}
            >
              <span
                className="absolute bottom-3 right-4 font-cinzel font-semibold select-none pointer-events-none"
                style={{ fontSize: '5rem', color: 'rgba(232,226,211,0.025)', lineHeight: 1 }}
              >
                {rang}
              </span>

              <p
                className="font-cinzel"
                style={{
                  fontSize: '9px',
                  letterSpacing: '0.38em',
                  textTransform: 'uppercase',
                  color: 'rgba(207,174,106,0.5)',
                  marginBottom: '0.5rem',
                }}
              >
                Dimension {rang}
              </p>

              <h3
                className="font-cinzel"
                style={{
                  fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
                  color: '#E8E2D3',
                  lineHeight: 1.3,
                  marginBottom: '0.5rem',
                }}
              >
                {nom}
              </h3>

              <p
                className="font-cinzel"
                style={{
                  fontSize: '11px',
                  color: 'rgba(207,174,106,0.5)',
                  lineHeight: 1.5,
                  marginBottom: '1rem',
                }}
              >
                {accroche}
              </p>

              <p
                className="font-manrope"
                style={{ fontSize: '13px', color: 'rgba(232,226,211,0.38)', lineHeight: 1.8, flex: 1 }}
              >
                {corps}
              </p>

              <p
                className="font-cinzel"
                style={{
                  fontSize: '9px',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: '#6B5B8E',
                  marginTop: '1.5rem',
                }}
              >
                {chambres}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}