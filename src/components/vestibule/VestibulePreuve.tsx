import ThresholdLine from '@/components/ThresholdLine'

const extraits = [
  {
    texte: "Ce qui n'est pas nommé ne peut pas être tenu. La perception sans langage reste impression — vivante, mais non transmissible.",
    source: "Loi I — Chambre des Lois",
  },
  {
    texte: "Le seuil sépare ceux qui consomment de ceux qui traversent. Consommer : prendre ce qui est offert, passer à la suite. Traverser : s'exposer à ce qu'on rencontre jusqu'à ce que quelque chose change dans la façon dont on voit.",
    source: "Chambre du Feu — La Doctrine du seuil",
  },
  {
    texte: "Les événements sont des surfaces. Derrière une organisation qui s'effondre, une architecture d'incentives mal posée. Comprendre un système, c'est refuser de s'arrêter à ce qu'il affiche.",
    source: "Loi II — Chambre des Lois",
  },
  {
    texte: "L'élévation n'est pas un don. C'est un travail que peu acceptent de commencer. Ceux qui paraissent élevés ont payé un prix que ceux qui les admirent ne voient pas.",
    source: "Chambre du Feu — Sur l'élévation",
  },
]

export default function VestibulePreuve() {
  return (
    <section className="py-28" style={{ background: '#02040A' }}>
      <div className="max-w-[640px] mx-auto px-6">
        <div style={{ marginBottom: '3rem' }}>
          <ThresholdLine />
        </div>

        <p
          className="font-cinzel text-center"
          style={{
            fontSize: '9px',
            letterSpacing: '0.38em',
            textTransform: 'uppercase',
            color: 'rgba(207,174,106,0.4)',
            marginBottom: '3.5rem',
          }}
        >
          Extrait du corpus
        </p>

        <div className="flex flex-col gap-12">
          {extraits.map(({ texte, source }, i) => (
            <div
              key={i}
              style={{
                borderLeft: '1px solid rgba(207,174,106,0.18)',
                paddingLeft: '2rem',
              }}
            >
              <p
                className="font-cinzel"
                style={{
                  fontSize: 'clamp(0.88rem, 1.4vw, 1rem)',
                  color: 'rgba(232,226,211,0.72)',
                  lineHeight: 1.75,
                  marginBottom: '1.1rem',
                }}
              >
                &ldquo;{texte}&rdquo;
              </p>
              <p
                className="font-manrope"
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  color: 'rgba(207,174,106,0.32)',
                }}
              >
                — {source}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}