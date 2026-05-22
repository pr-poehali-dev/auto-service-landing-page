interface TireIllustrationProps {
  type: "inner" | "outer" | "normal";
}

export default function TireIllustration({ type }: TireIllustrationProps) {
  const isInner = type === "inner";
  const isOuter = type === "outer";
  const isNormal = type === "normal";

  // Цвет стёртых зон протектора
  const wornColor = "#ef4444";
  const wornGlow = "rgba(239,68,68,0.35)";
  const normalTreadColor = "#4b5563";
  const goodTreadColor = "#6b7280";

  // Параметры протектора (вид спереди)
  // Шина: прямоугольник с закруглёнными углами, вид спереди (боковина + протектор)
  // Ширина шины 320, высота 200
  // Протектор — верхняя полоса высотой ~56px
  // Сноски — линии с кружком и подписью

  return (
    <svg
      viewBox="0 0 360 260"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      style={{ display: "block" }}
    >
      <defs>
        <radialGradient id={`bg-${type}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </radialGradient>

        {/* Текстура резины */}
        <pattern id={`rubber-${type}`} x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
          <rect width="6" height="6" fill="#1c1c1c" />
          <rect x="0" y="0" width="3" height="3" fill="#181818" />
          <rect x="3" y="3" width="3" height="3" fill="#181818" />
        </pattern>

        {/* Стёртая резина — красноватый оттенок */}
        <pattern id={`worn-${type}`} x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
          <rect width="6" height="6" fill="#2a1212" />
          <rect x="0" y="0" width="3" height="3" fill="#241010" />
          <rect x="3" y="3" width="3" height="3" fill="#241010" />
        </pattern>

        <filter id={`glow-red-${type}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        <filter id={`shadow-${type}`}>
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" floodOpacity="0.6" />
        </filter>

        <linearGradient id={`sidewall-${type}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="40%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#111" />
        </linearGradient>

        <linearGradient id={`tread-top-${type}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#333" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>

        <linearGradient id={`highlight-${type}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>

      {/* Фон */}
      <rect width="360" height="260" fill={`url(#bg-${type})`} />

      {/* ══ ШИНА — вид спереди ══
          Шина занимает центр: x=30, y=70, ширина=300, высота=130
          Структура:
            - Боковина (sidewall): вся форма, тёмная резина
            - Протектор: верхняя полоса шириной 300, высотой 54
            - Беговая дорожка с канавками
      */}

      {/* Тень шины */}
      <rect
        x="30" y="74" width="300" height="128"
        rx="14" ry="14"
        fill="rgba(0,0,0,0.5)"
        filter={`url(#shadow-${type})`}
      />

      {/* ── БОКОВИНА (sidewall) ── */}
      <rect
        x="30" y="70" width="300" height="130"
        rx="14" ry="14"
        fill={`url(#sidewall-${type})`}
        stroke="#333"
        strokeWidth="1.5"
      />

      {/* Белая полоса — надпись на боковине (декор) */}
      <rect x="30" y="116" width="300" height="2" fill="rgba(255,255,255,0.06)" />
      <rect x="30" y="150" width="300" height="2" fill="rgba(255,255,255,0.04)" />

      {/* ── ПРОТЕКТОР (верхняя беговая поверхность шины) ── */}
      {/* Центральная полоса протектора */}
      <rect
        x="30" y="70" width="300" height="56"
        rx="0" ry="0"
        fill={`url(#tread-top-${type})`}
      />
      {/* Скругление только у верхних углов */}
      <path
        d="M44,70 H316 Q330,70 330,84 V126 H30 V84 Q30,70 44,70 Z"
        fill={`url(#tread-top-${type})`}
      />

      {/* ── ЗОНЫ ПРОТЕКТОРА с износом ──
          Делим протектор на 3 зоны по горизонтали:
          Наружная (right): x=240..330
          Центральная:      x=130..240
          Внутренняя (left): x=30..130
      */}

      {/* НАРУЖНАЯ зона (правая) — wear outer */}
      {isOuter && (
        <>
          <clipPath id="clip-outer-worn">
            <path d="M232,70 H316 Q330,70 330,84 V126 H232 Z" />
          </clipPath>
          <rect
            x="232" y="70" width="98" height="56"
            fill={`url(#worn-${type})`}
            clipPath="url(#clip-outer-worn)"
          />
          {/* Красная кромка износа */}
          <path
            d="M232,70 H316 Q330,70 330,84 V126 H232 Z"
            fill="none"
            stroke={wornColor}
            strokeWidth="2"
            opacity="0.7"
          />
          {/* Красное свечение */}
          <rect
            x="232" y="70" width="98" height="56"
            fill={wornGlow}
            clipPath="url(#clip-outer-worn)"
          />
        </>
      )}

      {/* ВНУТРЕННЯЯ зона (левая) — wear inner */}
      {isInner && (
        <>
          <clipPath id="clip-inner-worn">
            <path d="M44,70 H128 V126 H30 V84 Q30,70 44,70 Z" />
          </clipPath>
          <rect
            x="30" y="70" width="98" height="56"
            fill={`url(#worn-${type})`}
            clipPath="url(#clip-inner-worn)"
          />
          <path
            d="M44,70 H128 V126 H30 V84 Q30,70 44,70 Z"
            fill="none"
            stroke={wornColor}
            strokeWidth="2"
            opacity="0.7"
          />
          <rect
            x="30" y="70" width="98" height="56"
            fill={wornGlow}
            clipPath="url(#clip-inner-worn)"
          />
        </>
      )}

      {/* ── КАНАВКИ ПРОТЕКТОРА ── */}
      {/* 2 продольные канавки */}
      {[130, 180, 230].map((x) => (
        <rect
          key={x}
          x={x - 4} y="70" width="8" height="56"
          fill="#0d0d0d"
          opacity="0.9"
        />
      ))}

      {/* Поперечные ламели */}
      {Array.from({ length: 18 }, (_, i) => {
        const x = 38 + i * 16.2;
        if (x > 318) return null;
        return (
          <line
            key={i}
            x1={x} y1="72"
            x2={x} y2="124"
            stroke="#0d0d0d"
            strokeWidth="1.5"
            opacity="0.7"
          />
        );
      })}

      {/* Центральная продольная канавка (основная) */}
      <rect x="176" y="70" width="8" height="56" fill="#090909" opacity="1" />

      {/* ── БЛОКИ ПРОТЕКТОРА детализация ── */}
      {/* Мелкие насечки внутри блоков */}
      {Array.from({ length: 36 }, (_, i) => {
        const x = 34 + i * 8.1;
        if (x > 322) return null;
        return (
          <line
            key={i}
            x1={x} y1="80"
            x2={x + 4} y2="80"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="1"
          />
        );
      })}

      {/* ── ПЛЕЧО ПРОТЕКТОРА (скругления по бокам) ── */}
      {/* Левое плечо */}
      <path
        d="M30,84 Q30,70 44,70 H52 V126 H30 Z"
        fill={isInner ? `url(#worn-${type})` : "#222"}
        opacity="0.8"
      />
      {/* Правое плечо */}
      <path
        d="M308,70 H316 Q330,70 330,84 V126 H308 Z"
        fill={isOuter ? `url(#worn-${type})` : "#222"}
        opacity="0.8"
      />

      {/* ── БЛИКОВЫЙ ХАЙЛАЙТ протектора ── */}
      <rect
        x="30" y="70" width="300" height="12"
        fill={`url(#highlight-${type})`}
        opacity="0.6"
      />

      {/* ── ГРАНИЦА ПРОТЕКТОР / БОКОВИНА ── */}
      <line x1="30" y1="126" x2="330" y2="126" stroke="#444" strokeWidth="1.5" />

      {/* ── СТРЕЛКИ ВРАЩЕНИЯ (на боковине) ── */}
      <text x="180" y="155" textAnchor="middle" fill="rgba(255,255,255,0.12)" fontSize="9" fontFamily="monospace" letterSpacing="6">
        ▶ ▶ ▶ ▶ ▶ ▶
      </text>

      {/* ── МАРКИРОВКА шины (боковина) ── */}
      <text x="180" y="178" textAnchor="middle" fill="rgba(255,255,255,0.18)" fontSize="8" fontFamily="monospace" fontWeight="bold" letterSpacing="2">
        205/55 R16
      </text>
      <text x="180" y="191" textAnchor="middle" fill="rgba(255,255,255,0.10)" fontSize="7" fontFamily="monospace" letterSpacing="1.5">
        TUBELESS · RADIAL
      </text>

      {/* ════════════════════════════════
          ИНДИКАТОРЫ ИЗНОСА (TWI markers)
          ════════════════════════════════ */}
      {[72, 148, 224, 296].map((x, i) => (
        <rect
          key={i}
          x={x - 3} y="118"
          width="6" height="8"
          fill={isNormal ? "#22c55e" : (
            (isOuter && x > 200) || (isInner && x < 150) ? wornColor : "#22c55e"
          )}
          opacity="0.8"
          rx="1"
        />
      ))}

      {/* ════════════════════════════════
          СНОСКИ (выноски)
          ════════════════════════════════ */}

      {/* ── НОРМАЛЬНЫЙ ИЗНОС ── */}
      {isNormal && (
        <>
          {/* Сноска 1: Равномерный протектор */}
          <line x1="90" y1="90" x2="52" y2="38" stroke="#22c55e" strokeWidth="1.2" strokeDasharray="4 2" opacity="0.8" />
          <circle cx="90" cy="90" r="3.5" fill="#22c55e" opacity="0.9" />
          <circle cx="52" cy="36" r="5" fill="rgba(34,197,94,0.15)" stroke="#22c55e" strokeWidth="1.2" />
          <text x="14" y="28" fill="#22c55e" fontSize="8.5" fontFamily="monospace" fontWeight="bold">РАВНОМЕРНЫЙ</text>
          <text x="14" y="38" fill="rgba(34,197,94,0.7)" fontSize="7.5" fontFamily="monospace">ПРОТЕКТОР</text>

          {/* Сноска 2: Центральная канавка */}
          <line x1="180" y1="70" x2="180" y2="34" stroke="#fbbf24" strokeWidth="1.2" strokeDasharray="4 2" opacity="0.8" />
          <circle cx="180" cy="70" r="3.5" fill="#fbbf24" opacity="0.9" />
          <circle cx="180" cy="32" r="5" fill="rgba(251,191,36,0.15)" stroke="#fbbf24" strokeWidth="1.2" />
          <text x="146" y="24" fill="#fbbf24" fontSize="8.5" fontFamily="monospace" fontWeight="bold">ОСН. КАНАВКА</text>
          <text x="152" y="34" fill="rgba(251,191,36,0.7)" fontSize="7.5" fontFamily="monospace">В НОРМЕ</text>

          {/* Сноска 3: TWI индикатор */}
          <line x1="295" y1="120" x2="334" y2="148" stroke="#22c55e" strokeWidth="1.2" strokeDasharray="4 2" opacity="0.8" />
          <circle cx="295" cy="120" r="3.5" fill="#22c55e" opacity="0.9" />
          <circle cx="336" cy="150" r="5" fill="rgba(34,197,94,0.15)" stroke="#22c55e" strokeWidth="1.2" />
          <text x="316" y="162" fill="#22c55e" fontSize="8.5" fontFamily="monospace" fontWeight="bold">TWI — НОРМА</text>
          <text x="316" y="172" fill="rgba(34,197,94,0.7)" fontSize="7.5" fontFamily="monospace">ОСТ. ГЛУБ. 6мм</text>

          {/* Сноска 4: Боковина */}
          <line x1="60" y1="160" x2="26" y2="178" stroke="#6b7280" strokeWidth="1.2" strokeDasharray="4 2" opacity="0.7" />
          <circle cx="60" cy="160" r="3.5" fill="#6b7280" opacity="0.9" />
          <text x="4" y="185" fill="#6b7280" fontSize="8" fontFamily="monospace">БОКОВИНА</text>
          <text x="4" y="195" fill="rgba(107,114,128,0.7)" fontSize="7.5" fontFamily="monospace">БЕЗ ДЕФЕКТОВ</text>

          {/* Зелёная рамка — норма */}
          <rect x="30" y="70" width="300" height="56"
            fill="none" stroke="rgba(34,197,94,0.2)" strokeWidth="1"
          />
          {/* Подпись снизу */}
          <text x="180" y="248" textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="monospace" fontWeight="bold" letterSpacing="2">
            ◈ РАВНОМЕРНЫЙ ИЗНОС
          </text>
          <text x="180" y="259" textAnchor="middle" fill="rgba(34,197,94,0.5)" fontSize="8" fontFamily="monospace" letterSpacing="1">
            ГЕОМЕТРИЯ В НОРМЕ
          </text>
        </>
      )}

      {/* ── ИЗНОС СНАРУЖИ (outer / right) ── */}
      {isOuter && (
        <>
          {/* Стёртая зона — красная кромка */}
          <line x1="280" y1="80" x2="330" y2="38" stroke={wornColor} strokeWidth="1.4" strokeDasharray="4 2" opacity="0.9" />
          <circle cx="278" cy="82" r="4" fill={wornColor} opacity="0.95" />
          <circle cx="332" cy="36" r="6" fill="rgba(239,68,68,0.2)" stroke={wornColor} strokeWidth="1.4" />
          <text x="290" y="26" fill={wornColor} fontSize="9" fontFamily="monospace" fontWeight="bold">СТЁРТАЯ КРОМКА</text>
          <text x="294" y="36" fill="rgba(239,68,68,0.7)" fontSize="8" fontFamily="monospace">ПЛЕЧО ШИНЫ</text>

          {/* Причина — положительный развал */}
          <line x1="300" y1="100" x2="338" y2="110" stroke={wornColor} strokeWidth="1.2" strokeDasharray="4 2" opacity="0.8" />
          <circle cx="299" cy="100" r="3.5" fill={wornColor} opacity="0.9" />
          <text x="316" y="106" fill={wornColor} fontSize="8.5" fontFamily="monospace" fontWeight="bold">+РАЗВАЛ</text>
          <text x="316" y="116" fill="rgba(239,68,68,0.7)" fontSize="7.5" fontFamily="monospace">НАКЛОН НАРУЖУ</text>

          {/* Центр — норма */}
          <line x1="180" y1="70" x2="180" y2="36" stroke="#6b7280" strokeWidth="1.2" strokeDasharray="4 2" opacity="0.6" />
          <circle cx="180" cy="70" r="3" fill="#6b7280" opacity="0.7" />
          <text x="140" y="28" fill="#6b7280" fontSize="8" fontFamily="monospace">ЦЕНТР — НОРМА</text>

          {/* Внутренняя зона — норма */}
          <line x1="80" y1="90" x2="24" y2="50" stroke="#22c55e" strokeWidth="1.2" strokeDasharray="4 2" opacity="0.8" />
          <circle cx="82" cy="88" r="3.5" fill="#22c55e" opacity="0.9" />
          <circle cx="22" cy="48" r="5" fill="rgba(34,197,94,0.15)" stroke="#22c55e" strokeWidth="1.2" />
          <text x="2" y="40" fill="#22c55e" fontSize="8.5" fontFamily="monospace" fontWeight="bold">ВНУТР.</text>
          <text x="2" y="50" fill="rgba(34,197,94,0.7)" fontSize="7.5" fontFamily="monospace">НОРМА</text>

          {/* TWI индикатор наружный */}
          <line x1="296" y1="120" x2="336" y2="145" stroke={wornColor} strokeWidth="1.2" strokeDasharray="4 2" opacity="0.8" />
          <circle cx="295" cy="120" r="3.5" fill={wornColor} opacity="0.95" />
          <text x="314" y="140" fill={wornColor} fontSize="8.5" fontFamily="monospace" fontWeight="bold">TWI — КРИТИЧНО</text>
          <text x="314" y="150" fill="rgba(239,68,68,0.7)" fontSize="7.5" fontFamily="monospace">ЗАМЕНА СРОЧНО</text>

          {/* Красная рамка только справа */}
          <path
            d="M232,70 H316 Q330,70 330,84 V126 H232 Z"
            fill="none" stroke="rgba(239,68,68,0.4)" strokeWidth="1.5"
          />
          {/* Подпись снизу */}
          <text x="180" y="248" textAnchor="middle" fill={wornColor} fontSize="10" fontFamily="monospace" fontWeight="bold" letterSpacing="2">
            ◈ ИЗНОС СНАРУЖИ
          </text>
          <text x="180" y="259" textAnchor="middle" fill="rgba(239,68,68,0.5)" fontSize="8" fontFamily="monospace" letterSpacing="1">
            ПОЛОЖИТЕЛЬНЫЙ РАЗВАЛ КОЛЕСА
          </text>
        </>
      )}

      {/* ── ИЗНОС ВНУТРИ (inner / left) ── */}
      {isInner && (
        <>
          {/* Стёртая зона — левая */}
          <line x1="78" y1="80" x2="28" y2="38" stroke={wornColor} strokeWidth="1.4" strokeDasharray="4 2" opacity="0.9" />
          <circle cx="80" cy="82" r="4" fill={wornColor} opacity="0.95" />
          <circle cx="26" cy="36" r="6" fill="rgba(239,68,68,0.2)" stroke={wornColor} strokeWidth="1.4" />
          <text x="2" y="26" fill={wornColor} fontSize="9" fontFamily="monospace" fontWeight="bold">СТЁРТАЯ КРОМКА</text>
          <text x="4" y="36" fill="rgba(239,68,68,0.7)" fontSize="8" fontFamily="monospace">ПЛЕЧО ШИНЫ</text>

          {/* Причина — отрицательный развал */}
          <line x1="58" y1="100" x2="20" y2="112" stroke={wornColor} strokeWidth="1.2" strokeDasharray="4 2" opacity="0.8" />
          <circle cx="60" cy="99" r="3.5" fill={wornColor} opacity="0.9" />
          <text x="1" y="108" fill={wornColor} fontSize="8.5" fontFamily="monospace" fontWeight="bold">−РАЗВАЛ</text>
          <text x="1" y="118" fill="rgba(239,68,68,0.7)" fontSize="7.5" fontFamily="monospace">НАКЛОН ВНУТРЬ</text>

          {/* Центр — норма */}
          <line x1="180" y1="70" x2="180" y2="36" stroke="#6b7280" strokeWidth="1.2" strokeDasharray="4 2" opacity="0.6" />
          <circle cx="180" cy="70" r="3" fill="#6b7280" opacity="0.7" />
          <text x="144" y="28" fill="#6b7280" fontSize="8" fontFamily="monospace">ЦЕНТР — НОРМА</text>

          {/* Наружная зона — норма */}
          <line x1="278" y1="90" x2="334" y2="50" stroke="#22c55e" strokeWidth="1.2" strokeDasharray="4 2" opacity="0.8" />
          <circle cx="276" cy="92" r="3.5" fill="#22c55e" opacity="0.9" />
          <circle cx="336" cy="48" r="5" fill="rgba(34,197,94,0.15)" stroke="#22c55e" strokeWidth="1.2" />
          <text x="310" y="40" fill="#22c55e" fontSize="8.5" fontFamily="monospace" fontWeight="bold">НАРУЖН.</text>
          <text x="310" y="50" fill="rgba(34,197,94,0.7)" fontSize="7.5" fontFamily="monospace">НОРМА</text>

          {/* TWI индикатор внутренний */}
          <line x1="66" y1="120" x2="26" y2="145" stroke={wornColor} strokeWidth="1.2" strokeDasharray="4 2" opacity="0.8" />
          <circle cx="67" cy="120" r="3.5" fill={wornColor} opacity="0.95" />
          <text x="2" y="140" fill={wornColor} fontSize="8.5" fontFamily="monospace" fontWeight="bold">TWI — КРИТИЧНО</text>
          <text x="4" y="150" fill="rgba(239,68,68,0.7)" fontSize="7.5" fontFamily="monospace">ЗАМЕНА СРОЧНО</text>

          {/* Красная рамка только слева */}
          <path
            d="M44,70 H128 V126 H30 V84 Q30,70 44,70 Z"
            fill="none" stroke="rgba(239,68,68,0.4)" strokeWidth="1.5"
          />
          {/* Подпись снизу */}
          <text x="180" y="248" textAnchor="middle" fill={wornColor} fontSize="10" fontFamily="monospace" fontWeight="bold" letterSpacing="2">
            ◈ ИЗНОС ВНУТРИ
          </text>
          <text x="180" y="259" textAnchor="middle" fill="rgba(239,68,68,0.5)" fontSize="8" fontFamily="monospace" letterSpacing="1">
            ОТРИЦАТЕЛЬНЫЙ РАЗВАЛ КОЛЕСА
          </text>
        </>
      )}

      {/* ── Общие декоративные элементы ── */}
      {/* Угловые маркеры */}
      <line x1="30" y1="70" x2="14" y2="70" stroke="#333" strokeWidth="1" />
      <line x1="30" y1="70" x2="30" y2="54" stroke="#333" strokeWidth="1" />
      <line x1="330" y1="70" x2="346" y2="70" stroke="#333" strokeWidth="1" />
      <line x1="330" y1="70" x2="330" y2="54" stroke="#333" strokeWidth="1" />
      <line x1="30" y1="200" x2="14" y2="200" stroke="#333" strokeWidth="1" />
      <line x1="30" y1="200" x2="30" y2="216" stroke="#333" strokeWidth="1" />
      <line x1="330" y1="200" x2="346" y2="200" stroke="#333" strokeWidth="1" />
      <line x1="330" y1="200" x2="330" y2="216" stroke="#333" strokeWidth="1" />

      {/* Линейка ширины */}
      <line x1="30" y1="222" x2="330" y2="222" stroke="#333" strokeWidth="0.8" />
      <line x1="30" y1="218" x2="30" y2="226" stroke="#444" strokeWidth="1" />
      <line x1="330" y1="218" x2="330" y2="226" stroke="#444" strokeWidth="1" />
      <text x="180" y="234" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="7" fontFamily="monospace">205 mm</text>
    </svg>
  );
}
