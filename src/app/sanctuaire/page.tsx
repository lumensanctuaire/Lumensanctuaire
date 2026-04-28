import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Sigil from '@/identity/sigil'
import ThresholdLine from '@/components/ThresholdLine'

export default async function SanctuairePage() {
  const h = await headers()
  const isMember = h.get('x-lumen-member') === '1'

  if (!isMember) {
    redirect('/entrer')
  }

  return (
    <main className="min-h-screen" style={{ background: '#02040A' }}>
      <Header />

      {/* — Accueil — */}
      <div className="max-w-[600px] mx-auto px-6 pt-36 pb-0 flex flex-col items-center text-center">
        <div style={{ marginBottom: '3rem' }}>
          <Sigil size={56} color="#CFAE6A" />
        </div>

        <p
          className="font-cinzel"
          style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(207,174,106,0.5)', marginBottom: '1.75rem' }}
        >
          LUMEN · Sanctuaire
        </p>

        <h1
          className="font-cinzel"
          style={{ fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: '600', letterSpacing: '0.04em', color: '#E8E2D3', lineHeight: 1.3, marginBottom: '1.5rem' }}
        >
          Tu es à l&apos;intérieur.
        </h1>

        <p
          className="font-manrope"
          style={{ fontSize: '14px', color: 'rgba(232,226,211,0.42)', lineHeight: 1.95, maxWidth: '420px', marginBottom: '3rem' }}
        >
          Sept chambres. Commence là où le système prend forme — les autres s&apos;éclaireront ensuite.
        </p>

        <div style={{ width: '100%', marginBottom: '3rem' }}><ThresholdLine /></div>
      </div>

      {/* — Premier fragment — */}
      <div className="max-w-[600px] mx-auto px-6 pb-0">
        <div
          style={{
            borderLeft: '1px solid rgba(207,174,106,0.2)',
            paddingLeft: '2rem',
            marginBottom: '1.5rem',
          }}
        >
          <p
            className="font-cinzel"
            style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(207,174,106,0.4)', marginBottom: '1.5rem' }}
          >
            Premier fragment
          </p>
          <p
            className="font-cinzel"
            style={{ fontSize: 'clamp(0.9rem,1.5vw,1.05rem)', color: 'rgba(232,226,211,0.68)', lineHeight: 1.8, marginBottom: '1.25rem' }}
          >
            &ldquo;L&apos;élévation n&apos;est pas un don. C&apos;est un travail que peu acceptent de commencer.
            L&apos;idée qu&apos;il existe des êtres naturellement élevés est l&apos;une des fictions les plus
            confortables de la paresse intellectuelle. Elle dispense de faire.&rdquo;
          </p>
          <p
            className="font-manrope"
            style={{ fontSize: '11px', letterSpacing: '0.12em', color: 'rgba(207,174,106,0.32)' }}
          >
            — Chambre du Feu · Sur l&apos;élévation
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '4rem' }}>
          <Link
            href="/chambres/feu"
            className="font-cinzel text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 hover:text-[#CFAE6A]"
            style={{ color: 'rgba(207,174,106,0.35)' }}
          >
            Lire la suite dans le Feu →
          </Link>
        </div>
      </div>

      {/* — Par où commencer — */}
      <div className="max-w-[600px] mx-auto px-6 pb-24">
        <div style={{ marginBottom: '3rem' }}><ThresholdLine /></div>

        <p
          className="font-cinzel"
          style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(207,174,106,0.5)', marginBottom: '2.5rem' }}
        >
          Par où commencer
        </p>

        {/* Porte principale — Lois */}
        <Link
          href="/chambres/lois"
          className="card-lift group relative overflow-hidden"
          style={{
            display: 'block',
            padding: '1.75rem',
            background: 'linear-gradient(135deg, rgba(207,174,106,0.04) 0%, transparent 55%)',
            border: '1px solid rgba(207,174,106,0.1)',
            marginBottom: '3rem',
            textDecoration: 'none',
          }}
        >
          <div className="relative z-10">
            <h2
              className="font-cinzel font-semibold"
              style={{ fontSize: 'clamp(0.88rem,1.4vw,1rem)', color: '#E8E2D3', lineHeight: 1.3, marginBottom: '0.85rem' }}
            >
              Par les Lois
            </h2>
            <p
              className="font-manrope"
              style={{ fontSize: '13px', color: 'rgba(232,226,211,0.42)', lineHeight: 1.8, marginBottom: '0.75rem' }}
            >
              Commencer par les structures invisibles. Ce qui gouverne le réel avant que le réel ne l&apos;annonce.
            </p>
            <p
              className="font-manrope"
              style={{ fontSize: '12px', color: 'rgba(207,174,106,0.35)', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1.5rem' }}
            >
              Pour ceux qui veulent d&apos;abord voir juste.
            </p>
            <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(207,174,106,0.08)' }}>
              <span
                className="font-cinzel"
                style={{ fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(207,174,106,0.45)' }}
              >
                Chambre des Lois →
              </span>
            </div>
          </div>
        </Link>

        {/* Portes secondaires */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '4rem' }}>

          <div>
            <Link
              href="/chambres/figures"
              className="font-cinzel transition-colors duration-300 hover:text-[#CFAE6A]"
              style={{ fontSize: '11px', letterSpacing: '0.12em', color: 'rgba(232,226,211,0.5)', textDecoration: 'none', display: 'block', marginBottom: '0.4rem' }}
            >
              Par les Figures →
            </Link>
            <p
              className="font-manrope"
              style={{ fontSize: '12.5px', color: 'rgba(232,226,211,0.28)', lineHeight: 1.75 }}
            >
              Les lignées qui ont traversé. Pour s&apos;orienter par rapport à ce qu&apos;elles incarnent.
            </p>
          </div>

          <div>
            <Link
              href="/chambres/oeuvres"
              className="font-cinzel transition-colors duration-300 hover:text-[#CFAE6A]"
              style={{ fontSize: '11px', letterSpacing: '0.12em', color: 'rgba(232,226,211,0.5)', textDecoration: 'none', display: 'block', marginBottom: '0.4rem' }}
            >
              Par les Œuvres →
            </Link>
            <p
              className="font-manrope"
              style={{ fontSize: '12.5px', color: 'rgba(232,226,211,0.28)', lineHeight: 1.75 }}
            >
              Les textes longs, les études de cas, les formes achevées. Pour ceux qui cherchent la traversée directe.
            </p>
          </div>

        </div>

        {/* Lien de fond */}
        <div style={{ paddingTop: '2rem', borderTop: '1px solid rgba(232,226,211,0.05)' }}>
          <Link
            href="/chambres"
            className="font-cinzel text-[10px] tracking-[0.28em] uppercase transition-colors duration-300 hover:text-[#CFAE6A]"
            style={{ color: 'rgba(232,226,211,0.2)' }}
          >
            Toutes les chambres →
          </Link>
        </div>

      </div>
    </main>
  )
}
