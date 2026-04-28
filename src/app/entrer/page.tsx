import Link from 'next/link'
import Header from '@/components/Header'
import Sigil from '@/identity/sigil'
import ThresholdLine from '@/components/ThresholdLine'

function CorpusLine({ count, label, detail }: { count: string; label: string; detail: string }) {
  return (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'baseline', paddingBottom: '1.25rem', borderBottom: '1px solid rgba(232,226,211,0.05)' }}>
      <span
        className="font-cinzel"
        style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'rgba(207,174,106,0.7)', letterSpacing: '0.04em', minWidth: '3rem', flexShrink: 0 }}
      >
        {count}
      </span>
      <div>
        <span className="font-cinzel" style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#E8E2D3', display: 'block', marginBottom: '0.3rem' }}>
          {label}
        </span>
        <span className="font-manrope" style={{ fontSize: '12.5px', color: 'rgba(232,226,211,0.35)', lineHeight: 1.7 }}>
          {detail}
        </span>
      </div>
    </div>
  )
}

export default function EntrerPage() {
  return (
    <main className="min-h-screen flex flex-col" style={{ background: '#02040A' }}>
      <Header />

      <div className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-[600px] w-full py-32">

          <div className="flex justify-center" style={{ marginBottom: '5rem' }}>
            <Sigil size={80} color="#CFAE6A" />
          </div>

          <p
            className="font-cinzel"
            style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(207,174,106,0.6)', marginBottom: '1.5rem' }}
          >
            LUMEN · Seuil
          </p>

          <h1
            className="font-cinzel"
            style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: '600', letterSpacing: '0.05em', color: '#E8E2D3', lineHeight: 1.25, marginBottom: '4rem' }}
          >
            Le sanctuaire ne se visite pas.<br />
            Il se traverse.
          </h1>

          <div style={{ marginBottom: '4rem' }}><ThresholdLine /></div>

          <p
            className="font-manrope"
            style={{ fontSize: '14px', color: 'rgba(232,226,211,0.48)', lineHeight: 1.9, marginBottom: '5rem' }}
          >
            La surface est visible — trois lois, quelques présences, quelques textes.
            Assez pour sentir qu&apos;il y a un système derrière.
            Pas assez pour comprendre ce qu&apos;il contient, ni comment il tient.
          </p>

          {/* Corpus inventory */}
          <p
            className="font-cinzel"
            style={{ fontSize: '9px', letterSpacing: '0.38em', textTransform: 'uppercase', color: 'rgba(207,174,106,0.4)', marginBottom: '2rem' }}
          >
            Ce qui s&apos;ouvre au-delà de ce seuil
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '5rem' }}>
            <CorpusLine
              count="20"
              label="Lois doctrinales"
              detail="Trois visibles en surface. Dix-sept s'ouvrent avec le passage — chacune avec son développement complet, ses exemples historiques, ses connexions aux figures et aux textes qui l'incarnent."
            />
            <CorpusLine
              count="6"
              label="Lignées de figures fondatrices"
              detail="Dix-neuf présences au total. Pour chacune : apport, thèse, méthode, textes clés commentés, limites identifiées. Trois lignées visibles. Trois s'ouvrent avec le passage."
            />
            <CorpusLine
              count="30"
              label="Textes commentés"
              detail="Bibliothèque annotée — essais, traités, journaux, dialogues. Trois visibles. Vingt-sept s'ouvrent avec le passage."
            />
            <CorpusLine
              count="6"
              label="Cartes mentales"
              detail="Schémas, taxonomies, architectures de pensée. Structures qui rendent le réel lisible d'un seul regard."
            />
            <CorpusLine
              count="5"
              label="Domaines du réel"
              detail="Pouvoir, travail, transmission, psychologie, création — analysés depuis les lois qui les gouvernent."
            />
            <CorpusLine
              count="7"
              label="Chambres ouvertes"
              detail="Lois, Figures, Lectures, Cartes, Réel, Œuvres, Feu. Chaque chambre est un mode de perception distinct."
            />
          </div>

          <div style={{ marginBottom: '4rem' }}>
            <p
              className="font-manrope"
              style={{ fontSize: '13px', color: 'rgba(232,226,211,0.32)', lineHeight: 1.85, borderLeft: '1px solid rgba(207,174,106,0.15)', paddingLeft: '1.5rem' }}
            >
              Les connexions internes sont le cœur du corpus.
              Chaque loi renvoie aux figures qui l&apos;incarnent et aux textes qui la fondent.
              Chaque figure renvoie aux lois qu&apos;elle illustre.
              Le sanctuaire se traverse dans tous les sens.
            </p>
          </div>

          <div style={{ marginBottom: '4rem' }}><ThresholdLine /></div>

          <p
            className="font-cinzel"
            style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', letterSpacing: '0.04em', color: 'rgba(207,174,106,0.9)', marginBottom: '0.75rem' }}
          >
            190 €
          </p>

          <p
            className="font-manrope"
            style={{ fontSize: '12px', color: 'rgba(232,226,211,0.28)', lineHeight: 1.8, marginBottom: '0.5rem' }}
          >
            Accès permanent — sans abonnement.
          </p>
          <p
            className="font-manrope"
            style={{ fontSize: '11.5px', color: 'rgba(207,174,106,0.3)', lineHeight: 1.8, marginBottom: '3.5rem' }}
          >
            Accès fondateur — le prix augmente à mesure que le corpus s&apos;enrichit.
          </p>

          <form method="POST" action="/api/checkout">
            <button
              type="submit"
              className="btn-primary inline-flex items-center font-cinzel text-[11px] tracking-[0.22em] uppercase px-10 py-4 mb-4"
            >
              Franchir le seuil
            </button>
          </form>

          <div style={{ marginTop: '6rem' }}>
            <Link
              href="/chambres"
              className="font-cinzel text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 hover:text-[#CFAE6A]"
              style={{ color: 'rgba(207,174,106,0.4)' }}
            >
              ← Les Chambres
            </Link>
          </div>

        </div>
      </div>
    </main>
  )
}
