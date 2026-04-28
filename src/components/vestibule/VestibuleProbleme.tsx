import ThresholdLine from '@/components/ThresholdLine'

export default function VestibuleProbleme() {
  return (
    <section className="py-32" style={{ background: '#02040A' }}>
      <div className="max-w-[580px] mx-auto px-6">
        <div style={{ marginBottom: '4rem' }}>
          <ThresholdLine />
        </div>

        <p
          className="font-cinzel text-center"
          style={{
            fontSize: 'clamp(1.05rem, 1.9vw, 1.35rem)',
            color: '#E8E2D3',
            lineHeight: 1.6,
            marginBottom: '3rem',
          }}
        >
          On peut passer une vie à comprendre<br />
          sans jamais se former.
        </p>

        <div className="flex flex-col gap-7 max-w-[460px] mx-auto">
          {[
            "Vous avez lu les bons livres, fréquenté les bonnes idées. Quelque chose reste non installé — entre ce que vous savez et la façon dont vous tenez.",
            "Vous percevez avec précision. Vous n'avez pas toujours les mots pour le nommer, ni la structure pour le transmettre sans le dégrader.",
            "L'intelligence est disponible. Ce qui la forme — ce qui la transforme en regard juste, en décision claire, en rang réel — est rare.",
          ].map((ligne, i) => (
            <div key={i} className="flex items-start gap-5">
              <span
                className="font-cinzel shrink-0"
                style={{
                  fontSize: '9px',
                  letterSpacing: '0.3em',
                  color: 'rgba(207,174,106,0.3)',
                  marginTop: '4px',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <p
                className="font-manrope"
                style={{
                  fontSize: '14px',
                  color: 'rgba(232,226,211,0.55)',
                  lineHeight: 1.9,
                }}
              >
                {ligne}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}