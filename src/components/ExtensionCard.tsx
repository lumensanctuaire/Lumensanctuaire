import type { Extension } from '@/data/extensions'

interface ExtensionCardProps {
  extension: Extension
}

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  )
}

export default function ExtensionCard({ extension }: ExtensionCardProps) {
  return (
    <div
      className="relative p-5 card-lift group overflow-hidden"
      style={{
        background: extension.locked
          ? 'rgba(11,18,32,0.6)'
          : 'linear-gradient(145deg, rgba(16,24,38,0.98) 0%, rgba(11,18,32,0.95) 100%)',
        border: '1px solid rgba(207,174,106,0.1)',
        opacity: extension.locked ? 0.65 : 1,
      }}
    >
      {/* Top shimmer on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(207,174,106,0.5), transparent)',
        }}
      />

      {/* Locked overlay */}
      {extension.locked && (
        <div className="absolute top-4 right-4" style={{ color: 'rgba(207,174,106,0.35)' }}>
          <LockIcon />
        </div>
      )}

      {/* Name */}
      <h4
        className="font-cinzel text-[0.9rem] font-semibold mb-1.5 leading-snug"
        style={{ color: '#E8E2D3' }}
      >
        {extension.name}
      </h4>

      {/* Description */}
      <p
        className="font-manrope text-[12px] leading-snug mb-4"
        style={{ color: 'rgba(232,226,211,0.45)' }}
      >
        {extension.description}
      </p>

      {/* Progress info */}
      <div className="flex items-center justify-between mb-2">
        <span
          className="font-manrope text-[11px]"
          style={{ color: 'rgba(232,226,211,0.4)' }}
        >
          {extension.locked
            ? 'Verrouillé'
            : `${extension.unlocked} / ${extension.total} débloquées`}
        </span>
        <span
          className="font-cinzel text-[11px] font-semibold"
          style={{ color: 'rgba(207,174,106,0.8)' }}
        >
          {extension.percentage}%
        </span>
      </div>

      {/* Progress bar */}
      <div
        className="h-0.5 rounded-full overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.05)' }}
      >
        {!extension.locked && (
          <div
            className="h-full"
            style={{
              width: `${extension.percentage}%`,
              background: 'linear-gradient(90deg, #CFAE6A, #D8B980)',
            }}
          />
        )}
      </div>
    </div>
  )
}
