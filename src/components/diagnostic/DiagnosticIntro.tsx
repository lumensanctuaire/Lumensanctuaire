import Sigil from '@/identity/sigil'

interface Props {
  onDemarrer: () => void
}

export default function DiagnosticIntro({ onDemarrer }: Props) {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ background: '#02040A' }}
    >
      <div style={{ marginBottom: '3rem' }}>
        <Sigil size={48} color="rgba(232,226,211,0.35)" />
      </div>

      <p
        className="font-cinzel text-center"
        style={{
          fontSize: '9px',
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          color: 'rgba(207,174,106,0.45)',
          marginBottom: '2.5rem',
        }}
      >
        LUMEN · Diagnostic
      </p>

      <h1
        className="font-cinzel text-center"
        style={{
          fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)',
          color: '#E8E2D3',
          lineHeight: 1.55,
          marginBottom: '2rem',
          maxWidth: '480px',
        }}
      >
        Cinq questions.<br />
        Pas de score. Une révélation.
      </h1>

      <p
        className="font-manrope text-center"
        style={{
          fontSize: '14px',
          color: 'rgba(232,226,211,0.36)',
          lineHeight: 1.95,
          maxWidth: '360px',
          marginBottom: '4rem',
        }}
      >
        Ce diagnostic ne te classe pas.<br />
        Il met en évidence ce qui est déjà là —<br />
        et qui opère à ton insu.
      </p>

      <button
        onClick={onDemarrer}
        className="btn-primary font-cinzel text-[11px] tracking-[0.22em] uppercase px-10 py-4"
      >
        Commencer
      </button>
    </div>
  )
}