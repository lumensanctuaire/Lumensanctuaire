import type { Module } from '@/data/modules'

interface ModuleCardProps {
  module: Module
}

export default function ModuleCard({ module }: ModuleCardProps) {
  const levelLabel = `Niveau ${module.levelNumber}`

  return (
    <div
      className="relative p-5 card-lift group overflow-hidden"
      style={{
        background: 'linear-gradient(145deg, rgba(16,24,38,0.98) 0%, rgba(11,18,32,0.95) 100%)',
        border: '1px solid rgba(207,174,106,0.1)',
        minHeight: '150px',
      }}
    >
      {/* Accent top border on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px transition-opacity duration-400 opacity-0 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${module.accentColor}70, transparent)`,
        }}
      />

      {/* Background subtle glow */}
      <div
        className="absolute -top-4 -right-4 w-20 h-20 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle, ${module.accentColor}15 0%, transparent 70%)`,
          filter: 'blur(12px)',
        }}
      />

      {/* Level tag */}
      <span
        className="inline-block font-cinzel text-[8.5px] tracking-[0.28em] uppercase mb-3 px-2 py-0.5"
        style={{
          color: `${module.accentColor}`,
          background: `${module.accentColor}14`,
          border: `1px solid ${module.accentColor}30`,
        }}
      >
        {levelLabel}
      </span>

      {/* Title */}
      <h4
        className="font-cinzel text-[0.92rem] font-semibold mb-1.5 leading-snug"
        style={{ color: '#E8E2D3' }}
      >
        {module.title}
      </h4>

      {/* Subtitle */}
      <p
        className="font-manrope text-[12px] leading-snug mb-4"
        style={{ color: 'rgba(232,226,211,0.48)' }}
      >
        {module.subtitle}
      </p>

      {/* Progress */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <span
            className="font-manrope text-[10.5px]"
            style={{ color: 'rgba(232,226,211,0.38)' }}
          >
            Progression
          </span>
          <span
            className="font-cinzel text-[11px] font-semibold"
            style={{ color: module.accentColor }}
          >
            {module.progress}%
          </span>
        </div>
        <div
          className="h-0.5 rounded-full overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.06)' }}
        >
          <div
            className="h-full rounded-full"
            style={{
              width: `${module.progress}%`,
              background: `linear-gradient(90deg, ${module.accentColor}, ${module.accentColor}CC)`,
              boxShadow: `0 0 6px ${module.accentColor}50`,
            }}
          />
        </div>
      </div>
    </div>
  )
}
