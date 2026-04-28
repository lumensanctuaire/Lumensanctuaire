import Link from 'next/link'
import ThresholdLine from '@/components/ThresholdLine'

type ResultType =
  | 'structure_absente'
  | 'vision_sans_execution'
  | 'execution_sans_vision'
  | 'illusion_de_stabilite'

const results: Record<ResultType, {
  title: string
  text: string
  chambreSlug: string
  chambreNom: string
  chambreRaison: string
}> = {
  structure_absente: {
    title: "Tu n'as pas de structure pour penser.",
    text: "Tu accumules, tu réfléchis, tu avances parfois. Mais rien ne tient. Sans structure, tout effort se dissout.",
    chambreSlug: 'lois',
    chambreNom: 'Chambre des Lois',
    chambreRaison: "Les lois donnent la charpente qui manque. Elles nomment les structures invisibles sans lesquelles rien ne tient.",
  },
  vision_sans_execution: {
    title: "Tu vois, mais tu ne traverses pas.",
    text: "Tu comprends plus que la moyenne. Mais ce que tu vois ne transforme pas ta réalité.",
    chambreSlug: 'cartes',
    chambreNom: 'Chambre des Cartes',
    chambreRaison: "Les cartes transforment la compréhension en architecture. Elles donnent une forme transmissible à ce qui reste encore diffus.",
  },
  execution_sans_vision: {
    title: "Tu agis, mais tu ne vois pas.",
    text: "Tu avances vite. Mais sans voir ce qui te dirige, tu renforces ce qui te limite.",
    chambreSlug: 'reel',
    chambreNom: 'Chambre du Réel',
    chambreRaison: "Le Réel confronte l'action aux mécanismes concrets. Il oblige à voir ce qui dirige déjà sans être nommé.",
  },
  illusion_de_stabilite: {
    title: "Rien ne semble poser problème.",
    text: "Ce qui ne se voit pas ne se corrige pas. L'absence de tension n'est pas la preuve d'un équilibre.",
    chambreSlug: 'feu',
    chambreNom: 'Chambre du Feu',
    chambreRaison: "Le Feu est le lieu des paroles de seuil. C'est l'entrée la plus juste pour fissurer ce qui paraît encore stable.",
  },
}

interface Props {
  type: string
}

export default function DiagnosticResultat({ type }: Props) {
  const result = results[type as ResultType] ?? results.illusion_de_stabilite

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24"
      style={{ background: '#02040A' }}
    >
      <div className="max-w-[480px] w-full">

        <p
          className="font-cinzel text-center"
          style={{
            fontSize: '9px',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: 'rgba(207,174,106,0.4)',
            marginBottom: '3.5rem',
          }}
        >
          LUMEN · Diagnostic
        </p>

        <h1
          className="font-cinzel text-center"
          style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.85rem)',
            color: '#E8E2D3',
            lineHeight: 1.5,
            marginBottom: '3rem',
          }}
        >
          {result.title}
        </h1>

        <div style={{ marginBottom: '3rem' }}>
          <ThresholdLine />
        </div>

        <p
          className="font-manrope text-center"
          style={{
            fontSize: '15px',
            color: 'rgba(232,226,211,0.5)',
            lineHeight: 1.95,
            marginBottom: '4rem',
          }}
        >
          {result.text}
        </p>

        <div style={{ marginBottom: '4.5rem' }}>
          <p
            className="font-cinzel"
            style={{
              fontSize: '9px',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: 'rgba(207,174,106,0.4)',
              marginBottom: '1rem',
            }}
          >
            Par où commencer
          </p>
          <p
            className="font-cinzel"
            style={{
              fontSize: '13px',
              letterSpacing: '0.06em',
              color: 'rgba(232,226,211,0.7)',
              marginBottom: '0.75rem',
            }}
          >
            {result.chambreNom}
          </p>
          <p
            className="font-manrope"
            style={{
              fontSize: '13px',
              color: 'rgba(232,226,211,0.35)',
              lineHeight: 1.85,
            }}
          >
            {result.chambreRaison}
          </p>
        </div>

        <div className="flex justify-center">
          <Link
            href="/entrer"
            className="btn-primary inline-flex items-center font-cinzel text-[11px] tracking-[0.22em] uppercase px-10 py-4"
          >
            Franchir le seuil
          </Link>
        </div>

        <div className="text-center" style={{ marginTop: '2.5rem' }}>
          <Link
            href={`/chambres/${result.chambreSlug}`}
            className="font-cinzel"
            style={{
              fontSize: '10px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(207,174,106,0.28)',
              textDecoration: 'none',
            }}
          >
            Voir {result.chambreNom} →
          </Link>
        </div>

      </div>
    </div>
  )
}
