import { userProfile } from '@/data/profile'

function StatBlock({ value, label }: { value: string | number; label: string }) {
  return (
    <div
      className="flex-1 p-3 text-center"
      style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(207,174,106,0.08)' }}
    >
      <div
        className="font-cinzel text-[1.15rem] font-bold mb-0.5"
        style={{ color: '#CFAE6A' }}
      >
        {value}
      </div>
      <div
        className="font-manrope text-[10.5px]"
        style={{ color: 'rgba(232,226,211,0.45)' }}
      >
        {label}
      </div>
    </div>
  )
}

export default function ProfileSidebar() {
  const profile = userProfile
  const levelBars = [
    { label: 'Voir', value: profile.levelProgress.voir, color: '#CFAE6A' },
    { label: 'Comprendre', value: profile.levelProgress.comprendre, color: '#8BA4C8' },
    { label: 'Maîtriser', value: profile.levelProgress.maitriser, color: '#9A8A6A' },
  ]

  return (
    <div
      className="w-full"
      style={{
        background: 'linear-gradient(180deg, rgba(11,18,32,0.98) 0%, rgba(16,24,38,0.95) 100%)',
        border: '1px solid rgba(207,174,106,0.14)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
      }}
    >
      {/* Top gold rule */}
      <div
        className="h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(207,174,106,0.45), transparent)',
        }}
      />

      <div className="p-6">
        {/* Section label */}
        <p
          className="section-label font-cinzel text-[9.5px] tracking-[0.35em] uppercase mb-6"
          style={{ color: 'rgba(207,174,106,0.6)' }}
        >
          Ton sanctuaire
        </p>

        {/* Profile */}
        <div className="flex flex-col items-center text-center mb-6">
          {/* Avatar */}
          <div className="relative mb-4">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center font-cinzel text-[1.2rem] font-bold"
              style={{
                background: 'linear-gradient(135deg, #CFAE6A, #8A6B2E)',
                color: '#05070D',
                boxShadow: '0 0 25px rgba(207,174,106,0.3)',
              }}
            >
              A
            </div>
            {/* Active indicator */}
            <div
              className="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full"
              style={{
                background: '#4CAF7D',
                border: '2px solid #0B1220',
                boxShadow: '0 0 6px rgba(76,175,125,0.5)',
              }}
            />
          </div>

          <h3
            className="font-cinzel text-[1.05rem] font-semibold mb-1"
            style={{ color: '#E8E2D3' }}
          >
            {profile.name}
          </h3>
          <p
            className="font-manrope text-[12px] mb-3"
            style={{ color: 'rgba(232,226,211,0.5)' }}
          >
            {profile.title}
          </p>

          {/* Badge */}
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1"
            style={{
              background: 'rgba(207,174,106,0.1)',
              border: '1px solid rgba(207,174,106,0.3)',
            }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#CFAE6A' }}
            />
            <span
              className="font-cinzel text-[9.5px] tracking-[0.2em] uppercase"
              style={{ color: '#CFAE6A' }}
            >
              {profile.badge}
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-2 mb-6">
          <StatBlock value={profile.modulesCompleted} label="modules" />
          <StatBlock value={`${profile.learningHours}h`} label="apprent." />
          <StatBlock value={profile.extensionsUnlocked} label="extens." />
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <span
              className="font-cinzel text-[10px] tracking-[0.12em]"
              style={{ color: 'rgba(232,226,211,0.55)' }}
            >
              Progression
            </span>
            <span
              className="font-cinzel text-[14px] font-semibold"
              style={{ color: '#CFAE6A' }}
            >
              {profile.overallProgress}%
            </span>
          </div>

          {/* Circular progress */}
          <div className="flex items-center justify-center mb-4">
            <div className="relative w-20 h-20">
              <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
                <circle cx="40" cy="40" r="32" fill="none" stroke="rgba(207,174,106,0.08)" strokeWidth="4" />
                <circle
                  cx="40" cy="40" r="32"
                  fill="none"
                  stroke="#CFAE6A"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray={`${profile.overallProgress * 2.01} 201`}
                  style={{ filter: 'drop-shadow(0 0 4px rgba(207,174,106,0.5))' }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span
                  className="font-cinzel text-[1.1rem] font-bold"
                  style={{ color: '#CFAE6A' }}
                >
                  {profile.overallProgress}%
                </span>
              </div>
            </div>
          </div>

          {/* Level bars */}
          <div className="space-y-2.5">
            {levelBars.map((bar) => (
              <div key={bar.label}>
                <div className="flex items-center justify-between mb-1">
                  <span
                    className="font-cinzel text-[10px] tracking-[0.08em]"
                    style={{ color: 'rgba(232,226,211,0.5)' }}
                  >
                    {bar.label}
                  </span>
                  <span
                    className="font-manrope text-[10px]"
                    style={{ color: `${bar.color}90` }}
                  >
                    {bar.value}%
                  </span>
                </div>
                <div
                  className="h-1 rounded-full overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${bar.value}%`,
                      background: `linear-gradient(90deg, ${bar.color}, ${bar.color}BB)`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="gold-divider mb-5" />

        {/* Keys unlocked */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span
              className="font-cinzel text-[10px] tracking-[0.15em] uppercase"
              style={{ color: 'rgba(232,226,211,0.5)' }}
            >
              Clés débloquées
            </span>
            <span
              className="font-cinzel text-[12px] font-semibold"
              style={{ color: '#CFAE6A' }}
            >
              {profile.keysUnlocked} / {profile.totalKeys}
            </span>
          </div>

          {/* Key dots grid */}
          <div className="flex flex-wrap gap-1.5">
            {Array.from({ length: profile.totalKeys }).map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-sm transition-all duration-200"
                style={{
                  background:
                    i < profile.keysUnlocked
                      ? 'rgba(207,174,106,0.7)'
                      : 'rgba(255,255,255,0.05)',
                  border:
                    i < profile.keysUnlocked
                      ? '1px solid rgba(207,174,106,0.4)'
                      : '1px solid rgba(255,255,255,0.06)',
                  boxShadow:
                    i < profile.keysUnlocked
                      ? '0 0 4px rgba(207,174,106,0.25)'
                      : 'none',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
