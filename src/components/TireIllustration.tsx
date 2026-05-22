interface TireIllustrationProps {
  type: "inner" | "outer" | "normal";
}

export default function TireIllustration({ type }: TireIllustrationProps) {
  const isInner = type === "inner";
  const isOuter = type === "outer";
  const isNormal = type === "normal";

  const red = "#ef4444";
  const green = "#22c55e";
  const amber = "#f59e0b";
  const accent = isNormal ? green : red;

  return (
    <svg
      viewBox="0 0 400 320"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      style={{ display: "block" }}
    >
      <defs>
        <radialGradient id={`bg-${type}`} cx="35%" cy="55%" r="65%">
          <stop offset="0%" stopColor="#151a1e" />
          <stop offset="100%" stopColor="#080b0d" />
        </radialGradient>

        {/* Резина — тёмная */}
        <radialGradient id={`tire-body-${type}`} cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="60%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#111" />
        </radialGradient>

        {/* Стёртая зона */}
        <radialGradient id={`worn-${type}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3a1010" />
          <stop offset="100%" stopColor="#1a0808" />
        </radialGradient>

        <filter id={`glow-${type}`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        <filter id={`glow-sm-${type}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        <filter id={`shadow-${type}`}>
          <feDropShadow dx="6" dy="6" stdDeviation="12" floodColor="#000" floodOpacity="0.7" />
        </filter>

        {/* Металл подвески */}
        <linearGradient id={`metal-${type}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4a5568" />
          <stop offset="40%" stopColor="#2d3748" />
          <stop offset="100%" stopColor="#1a202c" />
        </linearGradient>

        <linearGradient id={`metal2-${type}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5a6478" />
          <stop offset="100%" stopColor="#2a3040" />
        </linearGradient>

        <linearGradient id={`spring-${type}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3a4455" />
          <stop offset="50%" stopColor="#6a7a90" />
          <stop offset="100%" stopColor="#3a4455" />
        </linearGradient>

        {/* Протектор — текстура */}
        <pattern id={`tread-${type}`} x="0" y="0" width="8" height="14" patternUnits="userSpaceOnUse">
          <rect width="8" height="14" fill="#252525" />
          <rect x="1" y="1" width="6" height="5" rx="1" fill="#2e2e2e" />
          <rect x="1" y="8" width="6" height="5" rx="1" fill="#2e2e2e" />
        </pattern>

        {/* Стёртый протектор */}
        <pattern id={`tread-worn-${type}`} x="0" y="0" width="8" height="14" patternUnits="userSpaceOnUse">
          <rect width="8" height="14" fill="#1e0f0f" />
          <rect x="1" y="1" width="6" height="5" rx="1" fill="#261414" />
          <rect x="1" y="8" width="6" height="5" rx="1" fill="#261414" />
        </pattern>

        <clipPath id={`tire-clip-${type}`}>
          <circle cx="145" cy="185" r="108" />
        </clipPath>
      </defs>

      {/* ═══════════════════════════════
          ФОН
      ═══════════════════════════════ */}
      <rect width="400" height="320" fill={`url(#bg-${type})`} />

      {/* Сетка-фон (технический стиль) */}
      {Array.from({ length: 20 }, (_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 17} x2="400" y2={i * 17}
          stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
      ))}
      {Array.from({ length: 24 }, (_, i) => (
        <line key={`v${i}`} x1={i * 17} y1="0" x2={i * 17} y2="320"
          stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
      ))}

      {/* ═══════════════════════════════
          ЭЛЕМЕНТЫ ПОДВЕСКИ (МакФерсон)
          Правая сторона от шины
      ═══════════════════════════════ */}

      {/* Амортизаторная стойка — труба */}
      <rect x="270" y="40" width="14" height="110" rx="3"
        fill={`url(#metal-${type})`} stroke="#5a6478" strokeWidth="0.8" />
      {/* Внутренний шток */}
      <rect x="274" y="30" width="6" height="75" rx="2"
        fill={`url(#metal2-${type})`} stroke="#7a8898" strokeWidth="0.5" />
      {/* Поршень (верхний крепёж) */}
      <ellipse cx="277" cy="30" rx="10" ry="5"
        fill="#3a4455" stroke="#6a7a90" strokeWidth="1" />
      <ellipse cx="277" cy="27" rx="8" ry="4"
        fill="#4a5568" stroke="#8a9aaa" strokeWidth="1" />
      {/* Болты крепления верх */}
      <circle cx="270" cy="27" r="2.5" fill="#1a202c" stroke="#6a7a90" strokeWidth="0.8" />
      <circle cx="284" cy="27" r="2.5" fill="#1a202c" stroke="#6a7a90" strokeWidth="0.8" />

      {/* Пружина */}
      {Array.from({ length: 9 }, (_, i) => {
        const y = 68 + i * 10;
        const flip = i % 2 === 0;
        return (
          <path key={i}
            d={flip
              ? `M260,${y} Q250,${y + 3} 260,${y + 5} Q270,${y + 7} 280,${y + 5} Q290,${y + 3} 280,${y}`
              : `M280,${y} Q290,${y + 3} 280,${y + 5} Q270,${y + 7} 260,${y + 5} Q250,${y + 3} 260,${y}`
            }
            fill="none"
            stroke={`url(#spring-${type})`}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        );
      })}
      {/* Тарелки пружины */}
      <rect x="254" y="64" width="32" height="5" rx="2" fill="#3a4455" stroke="#5a6478" strokeWidth="0.8" />
      <rect x="254" y="155" width="32" height="5" rx="2" fill="#3a4455" stroke="#5a6478" strokeWidth="0.8" />

      {/* Корпус амортизатора нижняя часть */}
      <rect x="268" y="155" width="18" height="55" rx="3"
        fill={`url(#metal-${type})`} stroke="#5a6478" strokeWidth="0.8" />

      {/* Нижний кронштейн амортизатора */}
      <path d="M258,205 Q270,215 282,205 L285,220 Q270,228 255,220 Z"
        fill="#2d3748" stroke="#4a5568" strokeWidth="0.8" />

      {/* Нижний рычаг (А-образный) */}
      <path d="M240,228 L305,218 L310,235 L240,245 Z"
        fill={`url(#metal-${type})`} stroke="#5a6478" strokeWidth="0.8" />
      <path d="M240,228 L190,250 L188,268 L240,245 Z"
        fill={`url(#metal-${type})`} stroke="#4a5568" strokeWidth="0.8" />
      {/* Сайлентблок */}
      <ellipse cx="194" cy="259" rx="8" ry="6"
        fill="#1a1a1a" stroke="#5a6478" strokeWidth="1.2" />
      <ellipse cx="194" cy="259" rx="4" ry="3"
        fill="#2a2a2a" stroke="#8a9aaa" strokeWidth="0.8" />

      {/* Шаровая опора */}
      <circle cx="237" cy="237" r="7"
        fill="#2d3748" stroke="#6a7a90" strokeWidth="1.2" />
      <circle cx="237" cy="237" r="3.5"
        fill="#3a4455" stroke="#8a9aaa" strokeWidth="0.8" />

      {/* Поворотный кулак */}
      <path d="M225,195 Q238,188 248,210 Q252,228 237,237 Q222,246 215,230 Q210,212 225,195 Z"
        fill="#2a3040" stroke="#4a5568" strokeWidth="1" />

      {/* Ступица */}
      <circle cx="230" cy="215" r="16"
        fill="#1a2030" stroke="#5a6478" strokeWidth="1.5" />
      <circle cx="230" cy="215" r="10"
        fill="#252530" stroke="#6a7a90" strokeWidth="1" />
      <circle cx="230" cy="215" r="5"
        fill="#1a1a22" stroke="#8a9aaa" strokeWidth="0.8" />
      {/* Болты ступицы */}
      {[0, 72, 144, 216, 288].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <circle key={i}
            cx={230 + 12 * Math.cos(rad)} cy={215 + 12 * Math.sin(rad)}
            r="1.8" fill="#3a4050" stroke="#6a7a90" strokeWidth="0.5" />
        );
      })}

      {/* Рулевая тяга */}
      <line x1="248" y1="210" x2="340" y2="195" stroke="#4a5568" strokeWidth="4" strokeLinecap="round" />
      <line x1="248" y1="210" x2="340" y2="195" stroke="#6a7a90" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="340" cy="195" r="5" fill="#2d3748" stroke="#6a7a90" strokeWidth="1" />
      <circle cx="248" cy="210" r="4" fill="#2d3748" stroke="#6a7a90" strokeWidth="1" />

      {/* ═══════════════════════════════
          ШИНА (вид сбоку)
      ═══════════════════════════════ */}

      {/* Тень */}
      <ellipse cx="148" cy="310" rx="95" ry="12"
        fill="rgba(0,0,0,0.6)" filter={`url(#shadow-${type})`} />

      {/* Боковина шины — внешняя */}
      <circle cx="145" cy="185" r="110"
        fill={`url(#tire-body-${type})`}
        stroke="#2a2a2a" strokeWidth="2"
        filter={`url(#shadow-${type})`}
      />

      {/* Протектор — кольцо */}
      <circle cx="145" cy="185" r="110" fill="none"
        stroke={`url(#tread-${type})`} strokeWidth="28" />

      {/* ── ЗОНЫ ИЗНОСА ── */}

      {/* Износ СНАРУЖИ: правая часть шины (270°→90° по часовой) */}
      {isOuter && (
        <>
          {/* Стёртая зона — правый сектор */}
          <path
            d="M145,75 A110,110 0 0,1 255,185 A110,110 0 0,1 145,295 A82,82 0 0,0 145,103 Z"
            fill={`url(#worn-${type})`}
            clipPath={`url(#tire-clip-${type})`}
          />
          <circle cx="145" cy="185" r="110" fill="none"
            stroke={`url(#tread-worn-${type})`} strokeWidth="28"
            strokeDasharray="344 344" strokeDashoffset="0"
            transform="rotate(-90 145 185)"
          />
          {/* Красная дуга — правый борт */}
          <path
            d="M145,75 A110,110 0 0,1 255,185 A110,110 0 0,1 145,295"
            fill="none" stroke={red} strokeWidth="3"
            opacity="0.9" filter={`url(#glow-${type})`}
          />
          {/* Красная дуга внутренняя граница */}
          <path
            d="M145,103 A82,82 0 0,1 227,185 A82,82 0 0,1 145,267"
            fill="none" stroke={red} strokeWidth="1.5" opacity="0.4"
          />
        </>
      )}

      {/* Износ ВНУТРИ: левая часть шины (90°→270°) */}
      {isInner && (
        <>
          <path
            d="M145,295 A110,110 0 0,1 35,185 A110,110 0 0,1 145,75 A82,82 0 0,0 145,103 Z"
            fill={`url(#worn-${type})`}
            clipPath={`url(#tire-clip-${type})`}
          />
          <circle cx="145" cy="185" r="110" fill="none"
            stroke={`url(#tread-worn-${type})`} strokeWidth="28"
            strokeDasharray="344 344" strokeDashoffset="344"
            transform="rotate(-90 145 185)"
          />
          <path
            d="M145,295 A110,110 0 0,1 35,185 A110,110 0 0,1 145,75"
            fill="none" stroke={red} strokeWidth="3"
            opacity="0.9" filter={`url(#glow-${type})`}
          />
          <path
            d="M145,267 A82,82 0 0,1 63,185 A82,82 0 0,1 145,103"
            fill="none" stroke={red} strokeWidth="1.5" opacity="0.4"
          />
        </>
      )}

      {/* Разделяющая канавка (внешний борт протектора) */}
      <circle cx="145" cy="185" r="110" fill="none" stroke="#111" strokeWidth="2" opacity="0.7" />
      <circle cx="145" cy="185" r="82" fill="none" stroke="#111" strokeWidth="2" opacity="0.7" />

      {/* Центральная канавка */}
      <circle cx="145" cy="185" r="96" fill="none" stroke="#0d0d0d" strokeWidth="4" opacity="0.8" />

      {/* Боковина — надписи */}
      <text
        x="145" y="185" textAnchor="middle" dominantBaseline="middle"
        fill="rgba(255,255,255,0.06)" fontSize="9"
        fontFamily="monospace" fontWeight="bold" letterSpacing="2"
        transform="rotate(-60 145 185)"
      >
        205/55 R16 91V
      </text>
      <circle cx="145" cy="185" r="80"
        fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"
        strokeDasharray="3 6"
      />

      {/* Диск — обод */}
      <circle cx="145" cy="185" r="62"
        fill="#111820"
        stroke="#3a4455" strokeWidth="2"
      />
      {/* Диск — спицы */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 145 + 20 * Math.cos(rad);
        const y1 = 185 + 20 * Math.sin(rad);
        const x2 = 145 + 56 * Math.cos(rad);
        const y2 = 185 + 56 * Math.sin(rad);
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#3a4a5a" strokeWidth="6" strokeLinecap="round" />
        );
      })}
      {/* Диск — обод спиц */}
      <circle cx="145" cy="185" r="55"
        fill="none" stroke="#2a3a4a" strokeWidth="4" />
      <circle cx="145" cy="185" r="20"
        fill="#0d1420" stroke="#4a5a6a" strokeWidth="1.5" />
      {/* Центр диска */}
      <circle cx="145" cy="185" r="10"
        fill="#1a2030" stroke="#6a7a90" strokeWidth="1" />
      <circle cx="145" cy="185" r="5"
        fill="#0d1018" stroke="#8a9aaa" strokeWidth="0.8" />

      {/* ═══════════════════════════════
          TWI — ИНДИКАТОР ИЗНОСА
      ═══════════════════════════════ */}
      {/* Маленькие блоки-индикаторы в канавке */}
      {[0, 90, 180, 270].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const x = 145 + 96 * Math.cos(rad);
        const y = 185 + 96 * Math.sin(rad);
        const isWorn = (isOuter && (deg === 0 || deg === 270)) ||
          (isInner && (deg === 90 || deg === 180));
        return (
          <circle key={i} cx={x} cy={y} r="3.5"
            fill={isWorn ? red : green}
            opacity="0.85"
          />
        );
      })}

      {/* ═══════════════════════════════
          СНОСКИ И ПОДПИСИ
      ═══════════════════════════════ */}

      {/* ─── НОРМАЛЬНЫЙ ИЗНОС ─── */}
      {isNormal && (
        <>
          {/* Сноска: РАВНОМЕРНЫЙ ПРОТЕКТОР — нижняя правая зона */}
          <circle cx="220" cy="270" r="5" fill="rgba(34,197,94,0.2)" stroke={green} strokeWidth="1.5" />
          <circle cx="220" cy="270" r="2.5" fill={green} />
          <line x1="225" y1="270" x2="310" y2="280" stroke={green} strokeWidth="1.2" strokeDasharray="5 3" />
          <rect x="308" y="268" width="86" height="26" rx="2" fill="rgba(34,197,94,0.12)" stroke={green} strokeWidth="1" />
          <text x="314" y="279" fill={green} fontSize="8" fontFamily="monospace" fontWeight="bold">РАВНОМЕРНЫЙ</text>
          <text x="314" y="290" fill="rgba(34,197,94,0.7)" fontSize="7.5" fontFamily="monospace">ПРОТЕКТОР</text>

          {/* Сноска: СХОЖДЕНИЕ В НОРМЕ — снизу-слева */}
          <circle cx="80" cy="278" r="5" fill="rgba(34,197,94,0.2)" stroke={green} strokeWidth="1.5" />
          <circle cx="80" cy="278" r="2.5" fill={green} />
          <line x1="75" y1="278" x2="8" y2="290" stroke={green} strokeWidth="1.2" strokeDasharray="5 3" />
          <rect x="2" y="278" width="72" height="26" rx="2" fill="rgba(34,197,94,0.12)" stroke={green} strokeWidth="1" />
          <text x="8" y="289" fill={green} fontSize="7.5" fontFamily="monospace" fontWeight="bold">СХОЖДЕНИЕ</text>
          <text x="8" y="300" fill="rgba(34,197,94,0.7)" fontSize="7.5" fontFamily="monospace">В НОРМЕ</text>

          {/* Сноска: РАЗВАЛ КОЛЕСА — правая часть */}
          <circle cx="253" cy="185" r="5" fill="rgba(34,197,94,0.2)" stroke={green} strokeWidth="1.5" />
          <circle cx="253" cy="185" r="2.5" fill={green} />
          <line x1="258" y1="185" x2="312" y2="160" stroke={green} strokeWidth="1.2" strokeDasharray="5 3" />
          <rect x="310" y="148" width="80" height="26" rx="2" fill="rgba(34,197,94,0.12)" stroke={green} strokeWidth="1" />
          <text x="316" y="159" fill={green} fontSize="7.5" fontFamily="monospace" fontWeight="bold">РАЗВАЛ</text>
          <text x="316" y="170" fill="rgba(34,197,94,0.7)" fontSize="7.5" fontFamily="monospace">В НОРМЕ 0°</text>

          {/* TWI маркер */}
          <circle cx="241" cy="185" r="4" fill="rgba(34,197,94,0.2)" stroke={green} strokeWidth="1.2" />
          <circle cx="241" cy="185" r="2" fill={green} />
          <line x1="245" y1="183" x2="312" y2="132" stroke={green} strokeWidth="1.2" strokeDasharray="5 3" />
          <rect x="310" y="120" width="80" height="26" rx="2" fill="rgba(34,197,94,0.12)" stroke={green} strokeWidth="1" />
          <text x="316" y="131" fill={green} fontSize="7.5" fontFamily="monospace" fontWeight="bold">TWI — НОРМА</text>
          <text x="316" y="142" fill="rgba(34,197,94,0.7)" fontSize="7.5" fontFamily="monospace">ОСТАТОК 6мм</text>

          {/* Метка снизу */}
          <rect x="60" y="302" width="170" height="16" rx="2" fill="rgba(34,197,94,0.1)" />
          <text x="145" y="313" textAnchor="middle" fill={green} fontSize="9" fontFamily="monospace" fontWeight="bold" letterSpacing="2">
            ◈ РАВНОМЕРНЫЙ ИЗНОС
          </text>
        </>
      )}

      {/* ─── ИЗНОС СНАРУЖИ ─── */}
      {isOuter && (
        <>
          {/* Сноска: СТЁРТЫЙ БОРТ СНАРУЖИ */}
          <circle cx="248" cy="220" r="5" fill="rgba(239,68,68,0.2)" stroke={red} strokeWidth="1.5" />
          <circle cx="248" cy="220" r="2.5" fill={red} />
          <line x1="253" y1="218" x2="315" y2="238" stroke={red} strokeWidth="1.4" strokeDasharray="5 3" />
          <rect x="313" y="226" width="84" height="34" rx="2" fill="rgba(239,68,68,0.12)" stroke={red} strokeWidth="1" />
          <text x="319" y="238" fill={red} fontSize="8" fontFamily="monospace" fontWeight="bold">СТЁРТ БОРТ</text>
          <text x="319" y="249" fill="rgba(239,68,68,0.7)" fontSize="7.5" fontFamily="monospace">СНАРУЖИ</text>
          <text x="319" y="258" fill="rgba(239,68,68,0.55)" fontSize="7" fontFamily="monospace">+РАЗВАЛ</text>

          {/* Сноска: ПОЛОЖИТЕЛЬНЫЙ РАЗВАЛ */}
          <circle cx="255" cy="155" r="5" fill="rgba(239,68,68,0.2)" stroke={red} strokeWidth="1.5" />
          <circle cx="255" cy="155" r="2.5" fill={red} />
          <line x1="260" y1="153" x2="318" y2="138" stroke={red} strokeWidth="1.4" strokeDasharray="5 3" />
          <rect x="316" y="126" width="82" height="34" rx="2" fill="rgba(239,68,68,0.12)" stroke={red} strokeWidth="1" />
          <text x="322" y="138" fill={red} fontSize="8" fontFamily="monospace" fontWeight="bold">ПОЛОЖИТ.</text>
          <text x="322" y="149" fill="rgba(239,68,68,0.7)" fontSize="7.5" fontFamily="monospace">РАЗВАЛ</text>
          <text x="322" y="158" fill="rgba(239,68,68,0.55)" fontSize="7" fontFamily="monospace">КОЛЕСО НАРУЖУ</text>

          {/* Сноска: TWI критично */}
          <circle cx="241" cy="185" r="4" fill="rgba(239,68,68,0.2)" stroke={red} strokeWidth="1.2" />
          <circle cx="241" cy="185" r="2" fill={red} />
          <line x1="245" y1="183" x2="318" y2="100" stroke={red} strokeWidth="1.2" strokeDasharray="5 3" />
          <rect x="316" y="88" width="82" height="26" rx="2" fill="rgba(239,68,68,0.12)" stroke={red} strokeWidth="1" />
          <text x="322" y="99" fill={red} fontSize="7.5" fontFamily="monospace" fontWeight="bold">TWI — КРИТИЧНО</text>
          <text x="322" y="110" fill="rgba(239,68,68,0.7)" fontSize="7.5" fontFamily="monospace">ЗАМЕНА СРОЧНО</text>

          {/* Сноска: ВНУТРЕННЯЯ ЗОНА — НОРМА */}
          <circle cx="80" cy="180" r="4" fill="rgba(34,197,94,0.15)" stroke={green} strokeWidth="1" />
          <circle cx="80" cy="180" r="2" fill={green} opacity="0.7" />
          <line x1="76" y1="180" x2="14" y2="165" stroke={green} strokeWidth="1" strokeDasharray="4 3" />
          <rect x="2" y="153" width="68" height="26" rx="2" fill="rgba(34,197,94,0.1)" stroke={green} strokeWidth="0.8" />
          <text x="8" y="164" fill={green} fontSize="7.5" fontFamily="monospace" opacity="0.9">ВНУТР. ЗОНА</text>
          <text x="8" y="175" fill="rgba(34,197,94,0.6)" fontSize="7" fontFamily="monospace">В НОРМЕ</text>

          {/* Метка снизу */}
          <rect x="60" y="302" width="170" height="16" rx="2" fill="rgba(239,68,68,0.1)" />
          <text x="145" y="313" textAnchor="middle" fill={red} fontSize="9" fontFamily="monospace" fontWeight="bold" letterSpacing="2">
            ◈ ИЗНОС СНАРУЖИ
          </text>
        </>
      )}

      {/* ─── ИЗНОС ВНУТРИ ─── */}
      {isInner && (
        <>
          {/* Сноска: СТЁРТЫЙ БОРТ ВНУТРИ */}
          <circle cx="42" cy="220" r="5" fill="rgba(239,68,68,0.2)" stroke={red} strokeWidth="1.5" />
          <circle cx="42" cy="220" r="2.5" fill={red} />
          <line x1="37" y1="218" x2="2" y2="238" stroke={red} strokeWidth="1.4" strokeDasharray="5 3" />
          <rect x="0" y="226" width="84" height="34" rx="2" fill="rgba(239,68,68,0.12)" stroke={red} strokeWidth="1" />
          <text x="6" y="238" fill={red} fontSize="8" fontFamily="monospace" fontWeight="bold">СТЁРТ БОРТ</text>
          <text x="6" y="249" fill="rgba(239,68,68,0.7)" fontSize="7.5" fontFamily="monospace">ВНУТРИ</text>
          <text x="6" y="258" fill="rgba(239,68,68,0.55)" fontSize="7" fontFamily="monospace">−РАЗВАЛ</text>

          {/* Сноска: ОТРИЦАТЕЛЬНЫЙ РАЗВАЛ */}
          <circle cx="40" cy="155" r="5" fill="rgba(239,68,68,0.2)" stroke={red} strokeWidth="1.5" />
          <circle cx="40" cy="155" r="2.5" fill={red} />
          <line x1="35" y1="153" x2="2" y2="138" stroke={red} strokeWidth="1.4" strokeDasharray="5 3" />
          <rect x="0" y="126" width="82" height="34" rx="2" fill="rgba(239,68,68,0.12)" stroke={red} strokeWidth="1" />
          <text x="6" y="138" fill={red} fontSize="8" fontFamily="monospace" fontWeight="bold">ОТРИЦАТ.</text>
          <text x="6" y="149" fill="rgba(239,68,68,0.7)" fontSize="7.5" fontFamily="monospace">РАЗВАЛ</text>
          <text x="6" y="158" fill="rgba(239,68,68,0.55)" fontSize="7" fontFamily="monospace">КОЛЕСО ВНУТРЬ</text>

          {/* Сноска: TWI критично */}
          <circle cx="49" cy="185" r="4" fill="rgba(239,68,68,0.2)" stroke={red} strokeWidth="1.2" />
          <circle cx="49" cy="185" r="2" fill={red} />
          <line x1="45" y1="183" x2="2" y2="100" stroke={red} strokeWidth="1.2" strokeDasharray="5 3" />
          <rect x="0" y="88" width="82" height="26" rx="2" fill="rgba(239,68,68,0.12)" stroke={red} strokeWidth="1" />
          <text x="6" y="99" fill={red} fontSize="7.5" fontFamily="monospace" fontWeight="bold">TWI — КРИТИЧНО</text>
          <text x="6" y="110" fill="rgba(239,68,68,0.7)" fontSize="7.5" fontFamily="monospace">ЗАМЕНА СРОЧНО</text>

          {/* Сноска: НАРУЖНАЯ ЗОНА — НОРМА */}
          <circle cx="215" cy="180" r="4" fill="rgba(34,197,94,0.15)" stroke={green} strokeWidth="1" />
          <circle cx="215" cy="180" r="2" fill={green} opacity="0.7" />
          <line x1="219" y1="180" x2="328" y2="165" stroke={green} strokeWidth="1" strokeDasharray="4 3" />
          <rect x="326" y="153" width="70" height="26" rx="2" fill="rgba(34,197,94,0.1)" stroke={green} strokeWidth="0.8" />
          <text x="332" y="164" fill={green} fontSize="7.5" fontFamily="monospace" opacity="0.9">НАРУЖ. ЗОНА</text>
          <text x="332" y="175" fill="rgba(34,197,94,0.6)" fontSize="7" fontFamily="monospace">В НОРМЕ</text>

          {/* Метка снизу */}
          <rect x="60" y="302" width="170" height="16" rx="2" fill="rgba(239,68,68,0.1)" />
          <text x="145" y="313" textAnchor="middle" fill={red} fontSize="9" fontFamily="monospace" fontWeight="bold" letterSpacing="2">
            ◈ ИЗНОС ВНУТРИ
          </text>
        </>
      )}

      {/* ═══════════════════════════════
          СОЕДИНЕНИЕ ДИСК → СТУПИЦА
      ═══════════════════════════════ */}
      <line x1="145" y1="185" x2="230" y2="215"
        stroke="#3a4a5a" strokeWidth="3" opacity="0.6" />
    </svg>
  );
}
