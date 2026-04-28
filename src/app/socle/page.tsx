import ThresholdLine from '@/components/ThresholdLine'
import Link from 'next/link'

export default function SoclePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24" style={{ background: '#02040A' }}>
      <div className="max-w-[520px] w-full text-center">
        <p
          className="font-cinzel"
          style={{
            fontSize: '9px',
            letterSpacing: '0.38em',
            textTransform: 'uppercase',
            color: 'rgba(207,174,106,0.5)',
            marginBottom: '2rem',
          }}
        >
          Le Socle
        </p>

        <h1
          className="font-cinzel"
          style={{
            fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)',
            color: '#E8E2D3',
            lineHeight: 1.4,
            marginBottom: '3rem',
          }}
        >
          Construire depuis zéro.<br />
          Avec la structure qui tient.
        </h1>

        <div style={{ marginBottom: '3rem' }}>
          <ThresholdLine />
        </div>

        <p
          className="font-manrope"
          style={{
            fontSize: '14px',
            color: 'rgba(232,226,211,0.42)',
            lineHeight: 1.85,
            marginBottom: '1rem',
          }}
        >
          Marché, offre, écriture, vente, exécution.<br />
          Dans l&apos;ordre où les fondations se posent.
        </p>

        <p
          className="font-manrope"
          style={{
            fontSize: '14px',
            color: 'rgba(232,226,211,0.28)',
            lineHeight: 1.85,
            marginBottom: '3rem',
          }}
        >
          Cet espace ouvre prochainement.<br />
          Pour être prévenu de l&apos;ouverture, écrivez à :
        </p>

        <a
          href="mailto:socle@lumen.fr"
          className="font-cinzel"
          style={{
            fontSize: '11px',
            letterSpacing: '0.2em',
            color: 'rgba(207,174,106,0.6)',
            textDecoration: 'none',
            display: 'block',
            marginBottom: '3.5rem',
          }}
        >
          socle@lumen.fr
        </a>

        <p
          className="font-cinzel"
          style={{
            fontSize: '9px',
            letterSpacing: '0.2em',
            color: 'rgba(207,174,106,0.25)',
            marginBottom: '2.5rem',
          }}
        >
          490€ — accès permanent
        </p>

        <Link
          href="/"
          className="font-cinzel"
          style={{
            fontSize: '10px',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'rgba(207,174,106,0.3)',
            textDecoration: 'none',
          }}
        >
          ← Retourner au Vestibule
        </Link>
      </div>
    </main>
  )
}
