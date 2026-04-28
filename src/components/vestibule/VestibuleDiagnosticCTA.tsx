import ThresholdLine from '@/components/ThresholdLine'

export default function VestibuleDiagnosticCTA() {
  return (
    <section className="py-28" style={{ background: '#02040A' }}>
      <div className="max-w-[520px] mx-auto px-6 text-center">
        <div style={{ marginBottom: '3.5rem' }}>
          <ThresholdLine />
        </div>

        <p
          className="font-cinzel"
          style={{
            fontSize: 'clamp(1.05rem, 1.9vw, 1.3rem)',
            color: '#E8E2D3',
            lineHeight: 1.55,
            marginBottom: '1.5rem',
          }}
        >
          Trouver sa porte d&apos;entrée.
        </p>

        <p
          className="font-manrope"
          style={{
            fontSize: '14px',
            color: 'rgba(232,226,211,0.42)',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}
        >
          Cinq questions. Pas de score, pas de catégorie flatteuse.
          Une orientation vers ce qui correspond à l&apos;endroit précis où vous en êtes.
        </p>

        <p
          className="font-manrope"
          style={{
            fontSize: '13px',
            color: 'rgba(232,226,211,0.28)',
            lineHeight: 1.85,
            marginBottom: '3rem',
          }}
        >
          Pour ne pas entrer par la mauvaise chambre.
        </p>

        <a
          href="/diagnostic"
          className="btn-primary inline-flex items-center font-cinzel text-[11px] tracking-[0.22em] uppercase px-10 py-4"
        >
          Commencer le diagnostic
        </a>

        <div style={{ marginTop: '2rem' }}>
          <a
            href="/entrer"
            className="font-cinzel text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 hover:text-[#CFAE6A]"
            style={{ color: 'rgba(207,174,106,0.35)' }}
          >
            Ou entrer directement dans le sanctuaire →
          </a>
        </div>
      </div>
    </section>
  )
}