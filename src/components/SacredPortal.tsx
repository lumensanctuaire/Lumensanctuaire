'use client'

export default function SacredPortal() {
  const flutingLinesLeft = [
    { x1: 50, y1: 900, x2: 130, y2: 260 },
    { x1: 82, y1: 900, x2: 143, y2: 260 },
    { x1: 118, y1: 900, x2: 158, y2: 260 },
    { x1: 152, y1: 900, x2: 172, y2: 260 },
    { x1: 176, y1: 900, x2: 183, y2: 260 },
  ]

  const flutingLinesRight = [
    { x1: 750, y1: 900, x2: 670, y2: 260 },
    { x1: 718, y1: 900, x2: 657, y2: 260 },
    { x1: 682, y1: 900, x2: 642, y2: 260 },
    { x1: 648, y1: 900, x2: 628, y2: 260 },
    { x1: 624, y1: 900, x2: 617, y2: 260 },
  ]

  const steps = [
    { y1: 720, y2: 698, xl: 212, xr: 588 },
    { y1: 698, y2: 678, xl: 230, xr: 570 },
    { y1: 678, y2: 659, xl: 246, xr: 554 },
    { y1: 659, y2: 641, xl: 261, xr: 539 },
    { y1: 641, y2: 625, xl: 274, xr: 526 },
    { y1: 625, y2: 610, xl: 285, xr: 515 },
  ]

  return (
    <div className="relative w-full flex items-center justify-center select-none">
      <svg
        viewBox="0 0 800 900"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full relative z-10"
      >
        <defs>
          <radialGradient id="sp_archLight" cx="50%" cy="15.5%" r="42%">
            <stop offset="0%" stopColor="#FFF8E8" stopOpacity="0.96" />
            <stop offset="10%" stopColor="#F5E098" stopOpacity="0.72" />
            <stop offset="28%" stopColor="#CFAE6A" stopOpacity="0.42" />
            <stop offset="52%" stopColor="#8A6020" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#02040A" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="sp_ambGlow" cx="50%" cy="22%" r="68%">
            <stop offset="0%" stopColor="#C49030" stopOpacity="0.16" />
            <stop offset="38%" stopColor="#7A5018" stopOpacity="0.07" />
            <stop offset="100%" stopColor="#02040A" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="sp_blueDepth" cx="50%" cy="40%" r="72%">
            <stop offset="0%" stopColor="#0C1E3C" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#07101E" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#02040A" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="sp_colL" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#030608" />
            <stop offset="25%" stopColor="#060D18" />
            <stop offset="65%" stopColor="#0A1422" />
            <stop offset="100%" stopColor="#07101A" />
          </linearGradient>

          <linearGradient id="sp_colR" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#030608" />
            <stop offset="25%" stopColor="#060D18" />
            <stop offset="65%" stopColor="#0A1422" />
            <stop offset="100%" stopColor="#07101A" />
          </linearGradient>

          <linearGradient id="sp_archStone" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#050A14" />
            <stop offset="50%" stopColor="#080E1C" />
            <stop offset="100%" stopColor="#060A14" />
          </linearGradient>

          <linearGradient id="sp_floor" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#01030A" />
            <stop offset="100%" stopColor="#050C18" />
          </linearGradient>

          <linearGradient id="sp_floorRefl" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#CFAE6A" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#CFAE6A" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="sp_sil" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0E0B07" />
            <stop offset="100%" stopColor="#050403" />
          </linearGradient>

          <linearGradient id="sp_vigL" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#02040A" stopOpacity="1" />
            <stop offset="100%" stopColor="#02040A" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="sp_vigR" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#02040A" stopOpacity="1" />
            <stop offset="100%" stopColor="#02040A" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="sp_vigT" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#02040A" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#02040A" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="sp_vigB" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#02040A" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#02040A" stopOpacity="0" />
          </linearGradient>

          <filter id="sp_coreBloom" x="-150%" y="-150%" width="400%" height="400%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="22" />
          </filter>
          <filter id="sp_rimGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ══ 1. FOND ══ */}
        <rect width="800" height="900" fill="#02040A" />

        {/* ══ 2. ATMOSPHÈRE ══ */}
        <ellipse cx="400" cy="300" rx="390" ry="380" fill="url(#sp_ambGlow)" />
        <ellipse cx="400" cy="340" rx="390" ry="380" fill="url(#sp_blueDepth)" />

        {/* ══ 3. SOURCE LUMINEUSE ══ */}
        <ellipse cx="400" cy="148" rx="160" ry="185" fill="url(#sp_archLight)" />
        <ellipse cx="400" cy="122" rx="65" ry="78" fill="#F5E098" fillOpacity="0.28" filter="url(#sp_coreBloom)" />
        <ellipse cx="400" cy="108" rx="26" ry="32" fill="#FFF5D0" fillOpacity="0.52" />
        <ellipse cx="400" cy="100" rx="9" ry="11" fill="#FFF8E8" fillOpacity="0.92" />
        <ellipse cx="400" cy="98" rx="4" ry="5" fill="#FFF8E8" fillOpacity="1" />

        {/* ══ 4. SOL ══ */}
        <polygon points="0,900 800,900 800,260 0,260" fill="url(#sp_floor)" />
        {[0, 140, 270, 400, 530, 660, 800].map((x, i) => (
          <line key={i} x1={x} y1={900} x2={400} y2={220}
            stroke="#CFAE6A" strokeOpacity={i === 0 || i === 6 ? 0.06 : 0.03} strokeWidth="0.5" />
        ))}
        {[800, 700, 600, 500, 420, 360].map((y, i) => {
          const spread = (y - 220) / 680
          const x1 = 400 - spread * 400
          const x2 = 400 + spread * 400
          return <line key={i} x1={x1} y1={y} x2={x2} y2={y}
            stroke="#CFAE6A" strokeOpacity={0.05 - i * 0.005} strokeWidth="0.4" />
        })}
        <polygon points="320,580 480,580 520,900 280,900" fill="url(#sp_floorRefl)" />

        {/* ══ 5. COLONNE GAUCHE ══ */}
        <polygon points="15,900 200,900 200,260 115,260" fill="url(#sp_colL)" />
        <line x1="15" y1="900" x2="115" y2="260" stroke="#CFAE6A" strokeOpacity="0.09" strokeWidth="0.5" />
        <line x1="200" y1="260" x2="200" y2="900" stroke="#CFAE6A" strokeOpacity="0.06" strokeWidth="0.5" />
        {flutingLinesLeft.map((l, i) => (
          <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
            stroke="rgba(207,174,106,0.025)" strokeWidth="0.5" />
        ))}
        <polygon points="100,253 215,253 215,264 100,264" fill="#0A1520" />
        <line x1="100" y1="253" x2="215" y2="253" stroke="#CFAE6A" strokeOpacity="0.28" strokeWidth="1" />
        <line x1="108" y1="257" x2="210" y2="257" stroke="#CFAE6A" strokeOpacity="0.1" strokeWidth="0.5" />
        <polygon points="8,878 205,878 205,900 8,900" fill="#060B14" />
        <line x1="8" y1="878" x2="205" y2="878" stroke="#CFAE6A" strokeOpacity="0.12" strokeWidth="0.5" />
        <polygon points="18,862 202,862 202,878 18,878" fill="#07101A" />
        <line x1="18" y1="862" x2="202" y2="862" stroke="#CFAE6A" strokeOpacity="0.06" strokeWidth="0.5" />

        {/* ══ 6. COLONNE DROITE ══ */}
        <polygon points="600,260 685,260 785,900 600,900" fill="url(#sp_colR)" />
        <line x1="785" y1="900" x2="685" y2="260" stroke="#CFAE6A" strokeOpacity="0.09" strokeWidth="0.5" />
        <line x1="600" y1="260" x2="600" y2="900" stroke="#CFAE6A" strokeOpacity="0.06" strokeWidth="0.5" />
        {flutingLinesRight.map((l, i) => (
          <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
            stroke="rgba(207,174,106,0.025)" strokeWidth="0.5" />
        ))}
        <polygon points="585,253 700,253 700,264 585,264" fill="#0A1520" />
        <line x1="585" y1="253" x2="700" y2="253" stroke="#CFAE6A" strokeOpacity="0.28" strokeWidth="1" />
        <line x1="590" y1="257" x2="692" y2="257" stroke="#CFAE6A" strokeOpacity="0.1" strokeWidth="0.5" />
        <polygon points="595,878 792,878 792,900 595,900" fill="#060B14" />
        <line x1="595" y1="878" x2="792" y2="878" stroke="#CFAE6A" strokeOpacity="0.12" strokeWidth="0.5" />
        <polygon points="598,862 782,862 782,878 598,878" fill="#07101A" />
        <line x1="598" y1="862" x2="782" y2="862" stroke="#CFAE6A" strokeOpacity="0.06" strokeWidth="0.5" />

        {/* ══ 7. ARC ══ */}
        <path
          fillRule="evenodd"
          fill="url(#sp_archStone)"
          d="
            M 200,260 A 200,200 0 0,0 600,260 Z
            M 285,260 A 115,115 0 0,0 515,260 Z
          "
        />
        <path fill="none" stroke="#CFAE6A" strokeOpacity="0.12" strokeWidth="1"
          d="M200,260 A200,200 0 0,0 600,260" />
        <path fill="none" stroke="#CFAE6A" strokeOpacity="0.35" strokeWidth="1.2"
          d="M285,260 A115,115 0 0,0 515,260" filter="url(#sp_rimGlow)" />
        <path fill="none" stroke="#CFAE6A" strokeOpacity="0.12" strokeWidth="0.5"
          d="M292,260 A108,108 0 0,0 508,260" />
        {[
          "M200,260 L220,260", "M202,240 L216,218", "M210,215 L228,188",
          "M222,180 L246,150", "M240,142 L272,112", "M266,104 L310,76", "M305,70 L360,52",
        ].map((d, i) => (
          <path key={i} d={d} fill="none" stroke="#CFAE6A" strokeOpacity="0.055" strokeWidth="0.5" />
        ))}
        {[
          "M600,260 L580,260", "M598,240 L584,218", "M590,215 L572,188",
          "M578,180 L554,150", "M560,142 L528,112", "M534,104 L490,76", "M495,70 L440,52",
        ].map((d, i) => (
          <path key={i} d={d} fill="none" stroke="#CFAE6A" strokeOpacity="0.055" strokeWidth="0.5" />
        ))}

        {/* ══ 8. CLEF DE VOÛTE ══ */}
        <path fill="#08111E" stroke="#CFAE6A" strokeOpacity="0.22" strokeWidth="0.5"
          d="M389,58 L400,48 L411,58 L414,82 L386,82 Z" />
        <ellipse cx="400" cy="65" r="3.5" fill="#CFAE6A" fillOpacity="0.45" />
        <ellipse cx="400" cy="65" r="1.8" fill="#F5E098" fillOpacity="0.85" />

        {/* ══ 9. DEGRÉS ══ */}
        {steps.map((s, i) => (
          <g key={i}>
            <polygon
              points={`${s.xl},${s.y1} ${s.xr},${s.y1} ${s.xr - 14},${s.y2} ${s.xl + 14},${s.y2}`}
              fill={i % 2 === 0 ? '#05080E' : '#060A12'}
            />
            <line x1={s.xl} y1={s.y1} x2={s.xr} y2={s.y1}
              stroke="#CFAE6A" strokeOpacity={Math.max(0.04, 0.13 - i * 0.015)} strokeWidth="0.5" />
          </g>
        ))}
        <polygon points="285,610 515,610 504,594 296,594" fill="#07101C" />
        <line x1="285" y1="610" x2="515" y2="610" stroke="#CFAE6A" strokeOpacity="0.09" strokeWidth="0.5" />

        {/* ══ 10. SILHOUETTE ══ */}
        <ellipse cx="400" cy="660" rx="30" ry="5" fill="#000307" fillOpacity="0.7" />
        <ellipse cx="400" cy="530" rx="12" ry="14" fill="url(#sp_sil)" />
        <rect x="397.5" y="542" width="5" height="7" rx="1.5" fill="#0C0A08" />
        <path d="M386,549 Q379,552 376,559 Q388,555 400,554 Q412,555 424,559 Q421,552 414,549Z" fill="#0D0B09" />
        <path d="
          M386,549 Q380,564 376,580 Q372,598 370,620 Q369,638 370,652
          Q379,655 400,655 Q421,655 430,652
          Q431,638 430,620 Q428,598 424,580 Q420,564 414,549
          Q407,546 400,545 Q393,546 386,549Z
        " fill="url(#sp_sil)" />
        <path d="
          M373,574 Q361,592 356,618 Q354,636 356,652
          Q363,656 373,652 Q371,635 372,616 Q374,596 378,578Z
        " fill="#090708" />
        <path d="
          M427,574 Q439,592 444,618 Q446,636 444,652
          Q437,656 427,652 Q429,635 428,616 Q426,596 422,578Z
        " fill="#090708" />
        <path d="M382,556 Q373,564 371,578 Q375,580 380,577 Q381,568 387,559Z" fill="#0C0A08" />
        <path d="M418,556 Q427,564 429,578 Q425,580 420,577 Q419,568 413,559Z" fill="#0C0A08" />
        <path d="M400,530 Q389,545 385,565 Q382,582 381,604 Q384,628 390,650"
          fill="none" stroke="#CFAE6A" strokeOpacity="0.14" strokeWidth="1.2" filter="url(#sp_rimGlow)" />
        <path d="M400,530 Q411,545 415,565 Q418,582 419,604 Q416,628 410,650"
          fill="none" stroke="#CFAE6A" strokeOpacity="0.14" strokeWidth="1.2" filter="url(#sp_rimGlow)" />

        {/* ══ 11. VIGNETTTES ══ */}
        <rect x="0" y="0" width="240" height="900" fill="url(#sp_vigL)" />
        <rect x="560" y="0" width="240" height="900" fill="url(#sp_vigR)" />
        <rect x="0" y="0" width="800" height="130" fill="url(#sp_vigT)" />
        <rect x="0" y="760" width="800" height="140" fill="url(#sp_vigB)" />
      </svg>
    </div>
  )
}
