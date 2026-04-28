import SacredPortal from '@/components/SacredPortal'
import Sigil from '@/identity/sigil'

function GeometricField() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      preserveAspectRatio="xMidYMid slice"
    >
      <line x1="144" y1="80"  x2="144"  y2="720" stroke="#CFAE6A" strokeWidth="1"   strokeLinecap="square" />
      <line x1="360" y1="180" x2="360"  y2="540" stroke="#CFAE6A" strokeWidth="0.5" strokeLinecap="square" />
      <line x1="576" y1="40"  x2="576"  y2="860" stroke="#CFAE6A" strokeWidth="1"   strokeLinecap="square" />
      <line x1="900" y1="120" x2="900"  y2="780" stroke="#CFAE6A" strokeWidth="1"   strokeLinecap="square" />
      <line x1="1080" y1="300" x2="1080" y2="700" stroke="#CFAE6A" strokeWidth="0.5" strokeLinecap="square" />
      <line x1="1296" y1="60"  x2="1296" y2="840" stroke="#CFAE6A" strokeWidth="1"   strokeLinecap="square" />
      <line x1="144"  y1="200" x2="248"  y2="200" stroke="#CFAE6A" strokeWidth="1"   strokeLinecap="square" />
      <line x1="576"  y1="300" x2="720"  y2="300" stroke="#CFAE6A" strokeWidth="1"   strokeLinecap="square" />
      <line x1="900"  y1="240" x2="1004" y2="240" stroke="#CFAE6A" strokeWidth="1"   strokeLinecap="square" />
      <line x1="1296" y1="160" x2="1384" y2="160" stroke="#CFAE6A" strokeWidth="1"   strokeLinecap="square" />
      <line x1="144"  y1="800" x2="420"  y2="800" stroke="#CFAE6A" strokeWidth="1.5" strokeLinecap="square" />
      <line x1="720"  y1="840" x2="1080" y2="840" stroke="#CFAE6A" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  )
}

export default function VestibuleHero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#02040A' }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <GeometricField />
      </div>

      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ opacity: 0.38 }}
      >
        <div style={{ width: '720px', maxWidth: '100vw' }}>
          <SacredPortal />
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: '40%', background: 'linear-gradient(to top, #02040A 0%, transparent 100%)' }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-16">
        <div style={{ marginBottom: '3rem', animation: 'fadeInUp 0.9s cubic-bezier(0.16,1,0.3,1) both' }}>
          <Sigil size={72} color="#E8E2D3" />
        </div>

        <h1
          className="font-cinzel"
          style={{
            fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)',
            color: '#E8E2D3',
            letterSpacing: '0.08em',
            lineHeight: 1.2,
            marginBottom: '1.5rem',
            animation: 'fadeInUp 0.9s cubic-bezier(0.16,1,0.3,1) both',
            animationDelay: '0.3s',
          }}
        >
          LUMEN
        </h1>

        <p
          className="font-cinzel"
          style={{
            fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)',
            color: 'rgba(207,174,106,0.75)',
            lineHeight: 1.65,
            letterSpacing: '0.02em',
            maxWidth: '460px',
            animation: 'fadeInUp 0.9s cubic-bezier(0.16,1,0.3,1) both',
            animationDelay: '0.6s',
          }}
        >
          Voir juste. Nommer net.<br />
          Structurer profond. Transmettre haut.
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-px h-14 mx-auto" style={{ background: 'linear-gradient(to bottom, rgba(207,174,106,0.25), transparent)' }} />
      </div>
    </section>
  )
}
