import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import ContactModal from "@/components/ContactModal";

const TIRE_WEAR = [
  {
    img: "https://cdn.poehali.dev/projects/46745fea-3775-44bf-b9bf-65fdd59d5b7d/files/f9e29c0a-e0ad-4b0c-9e7c-755506705454.jpg",
    title: "Износ внутренней части",
    code: "TWR-01",
    status: "КРИТИЧНО",
    statusColor: "text-red-400",
    borderColor: "border-red-400/40",
    bgColor: "bg-red-400/5",
    cause: "Отрицательный развал колеса",
    details: [
      "Колесо «завалено» внутрь — угол развала отрицательный",
      "Резина стирается с внутренней стороны значительно быстрее наружной",
      "Автомобиль тянет в сторону при движении по прямой",
      "Ухудшается управляемость и устойчивость на дороге",
    ],
    fix: "Регулировка развала и схождения на 3D-стенде. Возможна замена рычагов или кулака поворотного.",
  },
  {
    img: "https://cdn.poehali.dev/projects/46745fea-3775-44bf-b9bf-65fdd59d5b7d/files/57ba25e0-aec3-42f4-98ea-0f89338d2256.jpg",
    title: "Нормальный износ",
    code: "TWR-02",
    status: "НОРМА",
    statusColor: "text-green-400",
    borderColor: "border-green-400/40",
    bgColor: "bg-green-400/5",
    cause: "Равномерный износ протектора",
    details: [
      "Протектор изнашивается равномерно по всей ширине",
      "Геометрия подвески в пределах допуска производителя",
      "Нагрузка распределяется правильно по всей площади контакта",
      "Ресурс шины используется оптимально",
    ],
    fix: "Проверка геометрии рекомендуется каждые 20 000 км или после значительных ударов.",
  },
  {
    img: "https://cdn.poehali.dev/projects/46745fea-3775-44bf-b9bf-65fdd59d5b7d/files/0db71407-7694-40d3-9772-53161a6aa51c.jpg",
    title: "Износ наружной части",
    code: "TWR-03",
    status: "КРИТИЧНО",
    statusColor: "text-red-400",
    borderColor: "border-red-400/40",
    bgColor: "bg-red-400/5",
    cause: "Положительный развал колеса",
    details: [
      "Колесо «завалено» наружу — угол развала положительный",
      "Интенсивный износ внешней кромки протектора",
      "Возможно нарушение схождения — колёса смотрят в разные стороны",
      "Повышенная нагрузка на наружные ступичные подшипники",
    ],
    fix: "Настройка углов развала и схождения. Проверка рычагов, шаровых опор и рулевых тяг.",
  },
];

const SUSPENSION_TYPES = [
  {
    icon: "Layers",
    title: "МакФерсон",
    code: "SUSP-01",
    desc: "Самая распространённая схема. Применяется на большинстве легковых автомобилей на передней оси.",
    faults: [
      { name: "Стойка амортизатора", symptom: "Стук при проезде неровностей, крен при торможении" },
      { name: "Опорный подшипник", symptom: "Скрип при повороте руля, щелчки в верхней части стойки" },
      { name: "Пружина", symptom: "Просадка кузова, разная высота бортов" },
      { name: "Шаровая опора", symptom: "Стук при маневрировании, люфт колеса" },
    ],
  },
  {
    icon: "GitBranch",
    title: "Двойные рычаги",
    code: "SUSP-02",
    desc: "Применяется на спортивных, премиальных авто и на задней оси. Обеспечивает точное следование геометрии.",
    faults: [
      { name: "Верхний рычаг", symptom: "Изменение развала при ходе подвески, стук" },
      { name: "Нижний рычаг", symptom: "Стук при торможении, вибрация рулевого" },
      { name: "Сайлентблоки", symptom: "Гул на скорости, нечёткость рулевого управления" },
      { name: "Амортизатор", symptom: "Раскачка кузова, пробои подвески" },
    ],
  },
  {
    icon: "Minus",
    title: "Торсионная балка",
    code: "SUSP-03",
    desc: "Задняя полузависимая подвеска. Распространена на бюджетных автомобилях.",
    faults: [
      { name: "Сайлентблоки балки", symptom: "Стук сзади, уход от прямолинейного движения" },
      { name: "Амортизаторы", symptom: "Раскачка, пробои при загрузке" },
      { name: "Пружины", symptom: "Просадка зада, разный клиренс" },
      { name: "Подшипники ступиц", symptom: "Гул на скорости, усиливающийся при перестроении" },
    ],
  },
  {
    icon: "Share2",
    title: "Многорычажная",
    code: "SUSP-04",
    desc: "Сложная схема на задней оси премиум-автомобилей. Даёт наилучшую управляемость и комфорт.",
    faults: [
      { name: "Рычаги (5 штук)", symptom: "Уход геометрии, стуки при ускорении и торможении" },
      { name: "Сайлентблоки", symptom: "Нечёткость реакций, вибрации" },
      { name: "Подрамник", symptom: "Гул, смещение оси при нагрузке" },
      { name: "Амортизаторы", symptom: "Раскачка кузова, неравномерный износ шин" },
    ],
  },
];

function MiniHero({ onContact }: { onContact: () => void }) {
  return (
    <div className="border border-border/60 bg-card/60 backdrop-blur p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="font-mono text-[9px] sm:text-[10px] text-amber-400 tracking-[0.2em] mb-1.5">◈ SRV-01 / ПОПУЛЯРНОЕ</div>
          <h3 className="font-['Oswald'] text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-wider leading-tight">
            <span className="text-foreground">Развал-</span>
            <span className="text-amber-400">Схождение</span>
          </h3>
          <p className="text-muted-foreground text-xs sm:text-sm mt-1">
            3D-стенд Technovector · Точность до 0.01° · от 2 500 ₽
          </p>
        </div>
        <div className="flex flex-row sm:flex-col lg:flex-row gap-2 w-full sm:w-auto">
          <button
            onClick={onContact}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-amber-400 text-background font-['Oswald'] font-semibold text-sm uppercase tracking-widest hover:bg-amber-300 transition-colors"
          >
            <Icon name="Phone" size={14} />
            Записаться
          </button>
          <button
            onClick={onContact}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 border border-amber-400/40 text-amber-400 font-['Oswald'] font-medium text-sm uppercase tracking-widest hover:bg-amber-400/10 transition-colors"
          >
            <Icon name="MessageCircle" size={14} />
            Связаться
          </button>
        </div>
      </div>
    </div>
  );
}

export default function TireWear() {
  const navigate = useNavigate();
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />

      {/* ── TOP BAR ── */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur border-b border-border">
        <div className="flex items-center justify-between px-3 sm:px-6 py-2 sm:py-3">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-amber-400 transition-colors"
          >
            <Icon name="ArrowLeft" size={16} />
            <span className="font-mono text-[10px] sm:text-xs tracking-widest">НАЗАД</span>
          </button>
          <span className="font-['Oswald'] text-sm sm:text-base font-bold tracking-widest text-amber-400">
            ◈ ДИАГНОСТИКА ИЗНОСА
          </span>
          <button
            onClick={() => setContactOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-400 text-background font-['Oswald'] font-semibold text-xs uppercase tracking-wider hover:bg-amber-300 transition-colors"
          >
            <Icon name="Phone" size={12} />
            <span className="hidden sm:inline">Записаться</span>
          </button>
        </div>
      </div>

      <div className="pt-[48px] sm:pt-[56px]">

        {/* ── MINI HERO TOP ── */}
        <div className="px-4 sm:px-6 lg:px-12 py-6 sm:py-8 max-w-[1920px] mx-auto border-b border-border/40">
          <MiniHero onContact={() => setContactOpen(true)} />
        </div>

        {/* ── PAGE HEADER ── */}
        <div className="px-4 sm:px-6 lg:px-12 py-8 sm:py-12 max-w-[1920px] mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[10px] sm:text-xs text-amber-400 tracking-[0.2em]">/ ДИАГНОСТИКА /</span>
            <span className="flex-1 h-[1px] bg-border" />
            <span className="font-mono text-[10px] sm:text-xs text-muted-foreground tracking-widest">TWR.MODULE</span>
          </div>
          <h1 className="font-['Oswald'] text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold uppercase tracking-tight mb-3">
            Виды износа резины
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
            По характеру износа протектора можно определить нарушения геометрии подвески ещё до появления серьёзных симптомов. Проверьте свои шины прямо сейчас.
          </p>
        </div>

        {/* ── TIRE WEAR CARDS ── */}
        <section className="px-4 sm:px-6 lg:px-12 pb-12 sm:pb-16 max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {TIRE_WEAR.map((t) => (
              <div key={t.code} className={`border ${t.borderColor} ${t.bgColor} overflow-hidden`}>
                {/* Фото */}
                <div className="relative overflow-hidden aspect-video md:aspect-square lg:aspect-video">
                  <img
                    src={t.img}
                    alt={t.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                  <div className={`absolute top-3 right-3 font-mono text-[9px] sm:text-[10px] px-2 py-1 bg-background/80 ${t.statusColor} tracking-wider border border-current/30`}>
                    {t.status}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="font-mono text-[9px] text-muted-foreground/60 tracking-widest mb-1">{t.code}</div>
                    <h3 className="font-['Oswald'] text-lg sm:text-xl font-bold uppercase tracking-wider">{t.title}</h3>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 sm:p-5 lg:p-6">
                  <div className="mb-4 pb-3 border-b border-border/40">
                    <div className="font-mono text-[9px] text-muted-foreground/50 tracking-widest mb-1">ПРИЧИНА</div>
                    <div className="font-['Oswald'] text-base font-semibold uppercase tracking-wider text-amber-400">
                      {t.cause}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {t.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                        <span className="text-amber-400/60 mt-0.5 flex-none">◈</span>
                        {d}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t border-border/40">
                    <div className="font-mono text-[9px] text-muted-foreground/50 tracking-widest mb-1.5">РЕШЕНИЕ</div>
                    <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">{t.fix}</p>
                  </div>

                  {t.status === "КРИТИЧНО" && (
                    <button
                      onClick={() => setContactOpen(true)}
                      className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 bg-amber-400 text-background font-['Oswald'] font-semibold text-sm uppercase tracking-widest hover:bg-amber-300 transition-colors"
                    >
                      <Icon name="Phone" size={14} />
                      Записаться на регулировку
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SUSPENSION FAULTS ── */}
        <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20 max-w-[1920px] mx-auto border-t border-border/60">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[10px] sm:text-xs text-amber-400 tracking-[0.2em]">/ ПОДВЕСКА /</span>
            <span className="flex-1 h-[1px] bg-border" />
          </div>
          <h2 className="font-['Oswald'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-3">
            Неисправности по типам подвески
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mb-10 sm:mb-12">
            Каждый тип подвески имеет характерные слабые места. Определите тип вашего автомобиля и проверьте симптомы.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
            {SUSPENSION_TYPES.map((s) => (
              <div key={s.code} className="border border-border/60 bg-card/50 hover:border-amber-400/30 transition-all duration-300">
                {/* Header */}
                <div className="p-4 sm:p-5 border-b border-border/40">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 border border-amber-400/30 bg-amber-400/5 flex items-center justify-center flex-none">
                      <Icon name={s.icon} size={16} className="text-amber-400" />
                    </div>
                    <div>
                      <div className="font-mono text-[9px] text-muted-foreground/50 tracking-widest">{s.code}</div>
                      <h3 className="font-['Oswald'] text-base sm:text-lg font-bold uppercase tracking-wider">{s.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
                </div>

                {/* Faults */}
                <div className="p-4 sm:p-5 space-y-3">
                  <div className="font-mono text-[9px] text-muted-foreground/50 tracking-widest mb-2">ТИПОВЫЕ НЕИСПРАВНОСТИ</div>
                  {s.faults.map((f, i) => (
                    <div key={i} className="group">
                      <div className="flex items-start gap-2">
                        <span className="text-amber-400/50 text-[10px] mt-0.5 flex-none">▸</span>
                        <div>
                          <div className="font-['Oswald'] text-sm font-semibold uppercase tracking-wide text-foreground/90">
                            {f.name}
                          </div>
                          <div className="text-muted-foreground text-[10px] sm:text-xs leading-relaxed mt-0.5">
                            {f.symptom}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-4 sm:px-5 pb-4">
                  <button
                    onClick={() => setContactOpen(true)}
                    className="w-full text-center py-2 border border-amber-400/30 text-amber-400 font-mono text-[10px] tracking-widest hover:bg-amber-400/10 hover:border-amber-400/60 transition-all duration-200"
                  >
                    ДИАГНОСТИКА →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── MINI HERO BOTTOM ── */}
        <div className="px-4 sm:px-6 lg:px-12 py-8 sm:py-10 max-w-[1920px] mx-auto border-t border-border/40">
          <MiniHero onContact={() => setContactOpen(true)} />
        </div>

        {/* ── FOOTER ── */}
        <footer className="border-t border-border/60 bg-background py-5 sm:py-6 px-4 sm:px-6">
          <div className="max-w-[1920px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-muted-foreground hover:text-amber-400 transition-colors"
            >
              <Icon name="ArrowLeft" size={14} />
              <span className="font-mono text-[10px] tracking-widest">НА ГЛАВНУЮ</span>
            </button>
            <span className="font-['Oswald'] text-base font-bold tracking-widest text-amber-400">◈ АВТОСЕРВИС</span>
            <div className="font-mono text-[10px] text-muted-foreground text-center sm:text-right">
              © 2024 АВТОСЕРВИС. ALL RIGHTS RESERVED.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
