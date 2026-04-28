import { userProfile } from '@/data/profile'

const levels = [
  { key: 'voir', label: 'Voir', number: 'I', description: 'Niveau 1' },
  { key: 'comprendre', label: 'Comprendre', number: 'II', description: 'Niveau 2' },
  { key: 'maitriser', label: 'Maîtriser', number: 'III', description: 'Niveau 3' },
] as const

export default function ProgressPath() {
  const profile = userProfile

  return (
    <section>
      {/* Section header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <p
            className="section-label font-cinzel text-[10px] tracking-[0.35em] uppercase mb-3"
            style={{ color: 'rgba(207,174,106,0.7)' }}
          >
            Progression
          </p>
          <h2
            className="font-cinzel text-[clamp(1.4rem,2.5vw,2rem)] font-semibold"
            style={{ color: '#E8E2D3' }}
          >
            Ton chemin de clarté
          </h2>
        </div>

        <div className="text-right hidden sm:block">
          <div
            className="font-cinzel text-[11px] tracking-[0.1em] mb-0.5"
            style={{ color: '#CFAE6A' }}
          >
            Ton niveau actuel : {profile.levelName}
          </div>
          <div
            className="font-manrope text-[12px]"
            style={{ color: 'rgba(232,226,211,0.5)' }}
          >
            {profile.modulesCompleted} / {profile.totalModules} modules complétés
          </div>
        </div>
      </div>

      {/* Level steps */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {levels.map((level, idx) => {
          const prog = profile.levelProgress[level.key]
          const isActive = profile.levelName.toLowerCase() === level.key
          const isLocked = level.key === 'maitriser'

          return (
            <div
              key={level.key}
              className="relative p-5 border-gold-glow card-lift"
              style={{
                background: isActive
                  ? 'linear-gradient(140deg, rgba(16,24,38,1) 0%, rgba(11,18,32,0.95) 100%)'
                  : 'rgba(11,18,32,0.7)',
                borderColor: isActive
                  ? 'rgba(207,174,106,0.3)'
                  : 'rgba(207,174,106,0.1)',
                opacity: isLocked ? 0.55 : 1,
              }}
            >
              {/* Active indicator */}
              {isActive && (
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(207,174,106,0.55), transparent)',
                  }}
                />
              )}

              <div className="flex items-start justify-between mb-4">
                <div>
                  <span
                    className="font-cinzel text-[9px] tracking-[0.32em] uppercase block mb-1"
                    style={{ color: 'rgba(207,174,106,0.6)' }}
                  >
                    {level.description}
                  </span>
                  <h3
                    className="font-cinzel text-[1.15rem] font-semibold"
                    style={{
                      color: isActive ? '#CFAE6A' : '#E8E2D3',
                    }}
                  >
                    {level.label}
                  </h3>
                </div>
                <div
                  className="font-cinzel text-[1.6rem] font-bold leading-none"
                  style={{ color: 'rgba(207,174,106,0.15)' }}
                >
                  {level.number}
                </div>
              </div>

              {/* Progress bar */}
              <div
                className="h-1 rounded-full mb-2 overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.06)' }}
              >
                {!isLocked && (
                  <div
                    className="h-full progress-bar-fill"
                    style={{ width: `${prog}%` }}
                  />
                )}
              </div>

              <div
                className="font-manrope text-[11px]"
                style={{ color: 'rgba(232,226,211,0.4)' }}
              >
                {isLocked ? 'Verrouillé' : `${prog}% complété`}
              </div>
            </div>
          )
        })}
      </div>

      {/* Global progress bar */}
      <div
        className="p-5"
        style={{
          background: 'rgba(11,18,32,0.6)',
          border: '1px solid rgba(207,174,106,0.1)',
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <span
            className="font-cinzel text-[11px] tracking-[0.12em]"
            style={{ color: 'rgba(232,226,211,0.6)' }}
          >
            Continue ton exploration
          </span>
          <div className="flex items-center gap-3">
            {/* Circular progress */}
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle
                  cx="18" cy="18" r="14"
                  fill="none"
                  stroke="rgba(207,174,106,0.1)"
                  strokeWidth="2.5"
                />
                <circle
                  cx="18" cy="18" r="14"
                  fill="none"
                  stroke="#CFAE6A"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray={`${profile.overallProgress * 0.88} 88`}
                  style={{ filter: 'drop-shadow(0 0 3px rgba(207,174,106,0.5))' }}
                />
              </svg>
              <span
                className="absolute inset-0 flex items-center justify-center font-cinzel text-[9px] font-semibold"
                style={{ color: '#CFAE6A' }}
              >
                {profile.overallProgress}%
              </span>
            </div>

            <div className="text-right">
              <div
                className="font-cinzel text-[13px] font-semibold"
                style={{ color: '#CFAE6A' }}
              >
                {profile.overallProgress}%
              </div>
              <div
                className="font-manrope text-[10px]"
                style={{ color: 'rgba(232,226,211,0.4)' }}
              >
                progression globale
              </div>
            </div>
          </div>
        </div>

        <div
          className="h-1.5 rounded-full overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        >
          <div
            className="h-full progress-bar-fill"
            style={{ width: `${profile.overallProgress}%` }}
          />
        </div>
      </div>
    </section>
  )
}
