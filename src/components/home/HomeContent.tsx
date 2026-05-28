import Icon from "@/components/ui/icon";
import SiteFooter from "@/components/SiteFooter";
import { SERVICES, STATS } from "./homeData";

const WHY_US = [
  { icon: "Shield", title: "Гарантия и качество", desc: "Всех видов работ и запчастей" },
  { icon: "Gauge", title: "Диагностика за 30 мин", desc: "Без записи и очередей" },
  { icon: "Award", title: "Сертифицированные мастера", desc: "Опыт от 5 лет каждого специалиста" },
  { icon: "BadgeCheck", title: "Оригинальные запчасти", desc: "Только сертифицированные поставщики" },
];

interface HomeContentProps {
  activeService: number;
  onServiceHover: (i: number) => void;
  onServiceClick: (path: string) => void;
  onNavigate: (path: string) => void;
}

export default function HomeContent({
  activeService,
  onServiceHover,
  onServiceClick,
  onNavigate,
}: HomeContentProps) {
  return (
    <>
      {/* ── STATS TICKER ── */}
      <section className="border-y border-border/60 bg-background/50 backdrop-blur-sm overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-3 sm:py-4">
          {[...STATS, ...STATS, ...STATS, ...STATS].map((s, i) => (
            <div key={i} className="flex items-center gap-2 sm:gap-3 px-6 sm:px-10">
              <span className="font-['Oswald'] text-lg sm:text-2xl font-bold text-amber-400">{s.value}</span>
              <span className="font-mono text-[9px] sm:text-xs text-muted-foreground uppercase tracking-widest">{s.label}</span>
              <span className="text-border ml-4 sm:ml-6">◈</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 max-w-[1920px] mx-auto relative z-10">
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="flex items-center gap-4 mb-3 sm:mb-4">
            <span className="font-mono text-[10px] sm:text-xs text-amber-400 tracking-[0.2em] sm:tracking-[0.3em]">/ УСЛУГИ /</span>
            <span className="flex-1 h-[1px] bg-border" />
          </div>
          <h2 className="font-['Oswald'] text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold uppercase tracking-tight">
            Что мы делаем
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
          {SERVICES.map((s, i) => (
            <div
              key={s.id}
              onClick={() => onServiceClick(s.path)}
              className="group relative border border-border/40 bg-card/40 backdrop-blur-sm hover:border-amber-400/40 hover:bg-card/60 transition-all duration-300 p-5 sm:p-6 lg:p-8 cursor-pointer"
              onMouseEnter={() => onServiceHover(i)}
            >
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                {s.tag && (
                  <span className="font-mono text-[8px] sm:text-[9px] bg-amber-400/20 text-amber-400 px-1.5 sm:px-2 py-0.5 sm:py-1 tracking-widest">
                    {s.tag}
                  </span>
                )}
              </div>

              <div className="mb-4 sm:mb-5 w-10 h-10 sm:w-12 sm:h-12 border border-border/60 group-hover:border-amber-400/40 flex items-center justify-center transition-colors duration-300">
                <Icon name={s.icon} size={18} className="text-muted-foreground group-hover:text-amber-400 transition-colors duration-300" />
              </div>

              <h3 className="font-['Oswald'] text-lg sm:text-xl lg:text-2xl font-bold uppercase tracking-wider mb-2 sm:mb-3 group-hover:text-amber-400 transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                {s.desc}
              </p>

              <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-border/40">
                <span className="font-['Oswald'] text-lg sm:text-xl font-bold text-amber-400">{s.price}</span>
                <span className="font-mono text-[9px] sm:text-xs text-muted-foreground group-hover:text-amber-400 transition-colors duration-300 tracking-widest">
                  ПОДРОБНЕЕ →
                </span>
              </div>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-amber-400 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 bg-card/30 backdrop-blur-sm border-y border-border/40">
        <div className="max-w-[1920px] mx-auto">
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <div className="flex items-center gap-4 mb-3 sm:mb-4">
              <span className="font-mono text-[10px] sm:text-xs text-amber-400 tracking-[0.2em] sm:tracking-[0.3em]">/ ПРЕИМУЩЕСТВА /</span>
              <span className="flex-1 h-[1px] bg-border" />
            </div>
            <h2 className="font-['Oswald'] text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold uppercase tracking-tight">
              Почему выбирают нас
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
            {WHY_US.map((item, i) => (
              <div key={i} className="group p-5 sm:p-6 border border-border/40 hover:border-amber-400/30 transition-all duration-300 bg-background/30 backdrop-blur-sm">
                <div className="mb-3 sm:mb-4 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-border/60 group-hover:border-amber-400/40 transition-colors duration-300">
                  <Icon name={item.icon} size={18} className="text-amber-400" />
                </div>
                <h4 className="font-['Oswald'] text-base sm:text-lg font-semibold uppercase tracking-wider mb-1.5 sm:mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden bg-background/20 backdrop-blur-sm">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="font-mono text-[10px] sm:text-xs text-amber-400 tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6">◈ КОНТАКТЫ ◈</div>
          <h2 className="font-['Oswald'] text-3xl sm:text-4xl lg:text-6xl 2xl:text-7xl font-bold uppercase tracking-tight mb-4 sm:mb-6">
            Позвоните<br />
            <span className="text-amber-400">нам сейчас</span>
          </h2>
          <p className="text-muted-foreground mb-8 sm:mb-10 text-sm sm:text-base lg:text-lg max-w-lg mx-auto">
            Подберём удобное время без очереди и ответим на все вопросы.
          </p>
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="tel:+79117478057"
              className="animate-pulse-glow px-8 sm:px-10 py-4 sm:py-5 bg-amber-400 text-background font-['Oswald'] font-bold text-lg sm:text-xl uppercase tracking-widest hover:bg-amber-300 transition-colors duration-200 flex items-center justify-center gap-2 sm:gap-3 w-full xs:w-auto"
            >
              <Icon name="Phone" size={18} />
              +7 (911) 747-80-57
            </a>
            <a
              href="tel:+79218770797"
              className="px-8 sm:px-10 py-4 sm:py-5 border border-border/60 text-foreground font-['Oswald'] font-medium text-lg sm:text-xl uppercase tracking-widest hover:border-amber-400/50 hover:text-amber-400 transition-all duration-200 flex items-center justify-center gap-2 sm:gap-3 w-full xs:w-auto"
            >
              <Icon name="Phone" size={18} />
              +7 (921) 877-07-97
            </a>
          </div>
        </div>
      </section>

      {/* ── SEO / ПЕРЕЛИНКОВКА ── */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-12 bg-card/20 backdrop-blur-sm border-t border-border/40">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[10px] sm:text-xs text-amber-400 tracking-[0.2em]">/ ПОЛЕЗНОЕ /</span>
            <span className="flex-1 h-[1px] bg-border" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">

            {/* Блок 1 — Диагностика износа шин */}
            <article className="group">
              <button
                onClick={() => onNavigate("/tire-wear")}
                className="w-full text-left border border-border/50 hover:border-amber-400/40 bg-background/50 hover:bg-amber-400/5 transition-all duration-300 p-4 sm:p-5"
              >
                <h2 className="font-['Oswald'] text-base sm:text-lg font-bold uppercase tracking-wider mb-2 group-hover:text-amber-400 transition-colors">
                  Виды износа резины
                </h2>
                <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                  По характеру стирания протектора определяем нарушения геометрии подвески: износ с внутренней стороны — признак отрицательного развала, с внешней — положительного. Проверьте свои шины.
                </p>
                <span className="font-mono text-[10px] text-amber-400 tracking-wider group-hover:underline">
                  Смотреть диагностику →
                </span>
              </button>
            </article>

            {/* Блок 2 — Развал-Схождение */}
            <article className="group">
              <div className="border border-border/50 bg-background/50 p-4 sm:p-5 h-full">
                <h2 className="font-['Oswald'] text-base sm:text-lg font-bold uppercase tracking-wider mb-2">
                  Развал-Схождение в СПб
                </h2>
                <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                  3D-стенд Technovector с точностью измерения до 0.01°. Неправильные углы ускоряют износ шин, увеличивают расход топлива и снижают управляемость. Рекомендуем проверку каждые 15 000 км.
                </p>
                <a
                  href="tel:+79117478057"
                  className="font-mono text-[10px] text-amber-400 tracking-wider hover:underline"
                >
                  Позвонить: +7 (911) 747-80-57 →
                </a>
              </div>
            </article>

            {/* Блок 3 — Ремонт ходовой */}
            <article className="group">
              <div className="border border-border/50 bg-background/50 p-4 sm:p-5 h-full">
                <h2 className="font-['Oswald'] text-base sm:text-lg font-bold uppercase tracking-wider mb-2">
                  Ремонт Ходовой Части
                </h2>
                <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                  Диагностика подвески, замена амортизаторов, шаровых опор, рычагов, сайлентблоков и ступичных подшипников. Работаем со всеми марками. Стук, крен, вибрация руля — диагностика бесплатно при заказе ремонта.
                </p>
                <a
                  href="tel:+79117478057"
                  className="font-mono text-[10px] text-amber-400 tracking-wider hover:underline"
                >
                  Позвонить: +7 (911) 747-80-57 →
                </a>
              </div>
            </article>

            {/* Блок 4 — Ремонт рулевых реек + кондиционер */}
            <article className="group">
              <div className="border border-border/50 bg-background/50 p-4 sm:p-5 h-full">
                <h2 className="font-['Oswald'] text-base sm:text-lg font-bold uppercase tracking-wider mb-2">
                  Кондиционер и Рулевая Рейка
                </h2>
                <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                  Заправка кондиционера фреоном R134a и R1234yf с проверкой герметичности. Ремонт и восстановление рулевых реек без замены с гарантией 12 месяцев — от 5 000 ₽.
                </p>
                <a
                  href="tel:+79218770797"
                  className="font-mono text-[10px] text-amber-400 tracking-wider hover:underline"
                >
                  Позвонить: +7 (921) 877-07-97 →
                </a>
              </div>
            </article>
          </div>

          {/* Адрес — SEO-текст */}
          <div className="mt-8 pt-6 border-t border-border/40">
            <p className="text-muted-foreground/60 text-[10px] sm:text-xs leading-relaxed font-mono max-w-4xl">
              <strong className="text-muted-foreground/80">AGS Автосервис</strong> — Санкт-Петербург, ул. Симонова, 15, заезд с Суздальского проспекта.
              Работаем с легковыми автомобилями всех марок: отечественные, японские, европейские, корейские.
              Гарантия на все виды работ 12 месяцев. ПН–СБ 8:00–20:00 · ВС 9:00–18:00.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}