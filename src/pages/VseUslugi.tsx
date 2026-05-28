import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import ContactModal from "@/components/ContactModal";
import SiteFooter from "@/components/SiteFooter";
import { useState } from "react";

const SERVICES = [
  {
    icon: "CircleDot",
    title: "Развал-Схождение 3D",
    code: "SRV-01",
    tag: "ПОПУЛЯРНОЕ",
    price: "от 2 500 ₽",
    desc: "3D-стенд Technovector. Точность до 0.01°. Кастер, развал и схождение передней и задней оси. Выдаём распечатку до и после.",
    details: ["Все марки и модели", "Стенд Technovector", "Распечатка до/после", "Опыт мастера 10+ лет"],
    path: "/razvalskhozhdenie",
  },
  {
    icon: "Settings2",
    title: "Ремонт Ходовой Части",
    code: "SRV-02",
    tag: "",
    price: "от 1 500 ₽",
    desc: "Диагностика, замена амортизаторов, шаровых опор, рычагов и сайлентблоков. Бесплатная диагностика при заказе ремонта.",
    details: ["Диагностика бесплатно", "Оригинальные запчасти", "Гарантия на работы", "Все виды ходовой"],
    path: "/remont-hodovoy",
  },
  {
    icon: "Thermometer",
    title: "Заправка Кондиционеров",
    code: "SRV-03",
    tag: "СЕЗОН",
    price: "от 3 000 ₽",
    desc: "Заправка фреоном R134a / R1234yf. Проверка герметичности системы. Добавление масла и антикоррозийных присадок.",
    details: ["Фреон R134a / R1234yf", "Проверка герметичности", "Масло и присадки", "Все марки авто"],
    path: "/zapravka-kondicionera",
  },
  {
    icon: "Wrench",
    title: "Ремонт Рулевых Реек",
    code: "SRV-04",
    tag: "",
    price: "от 5 000 ₽",
    desc: "Восстановление рулевой рейки без замены. Гарантия 12 месяцев. Экономия до 70% от стоимости новой рейки.",
    details: ["Без замены агрегата", "Гарантия 12 месяцев", "Экономия до 70%", "Электро и гидро рейки"],
    path: "/remont-rulevyh-reek",
  },
];

const WHY = [
  { icon: "Shield", title: "Гарантия на все работы", desc: "Оформляем письменно" },
  { icon: "Gauge", title: "Диагностика за 30 мин", desc: "Без записи и очередей" },
  { icon: "Award", title: "Мастера с опытом 10+ лет", desc: "Сертифицированные специалисты" },
  { icon: "BadgeCheck", title: "Оригинальные запчасти", desc: "Только проверенные поставщики" },
];

export default function VseUslugi() {
  const navigate = useNavigate();
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(https://cdn.poehali.dev/files/f8dd42f9-4eba-45d2-bf61-2a5ce8e51ca3.jpg)" }} />
      <div className="fixed inset-0 z-0 bg-background/85" />
      <div className="fixed inset-0 z-0 grid-bg opacity-30" />

      <div className="relative z-10">
        <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />

        {/* TOP BAR */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
          <div className="flex items-center justify-between px-3 sm:px-4 lg:px-6" style={{ minHeight: "76px" }}>
            <button onClick={() => navigate("/")} className="flex items-center gap-2 sm:gap-3 flex-none py-1 hover:opacity-90 transition-all duration-300 group/logo">
              <div className="flex-none w-[62px] h-[62px] sm:w-[68px] sm:h-[68px] flex items-center justify-center overflow-hidden rounded-full transition-all duration-300 group-hover/logo:drop-shadow-[0_0_12px_rgba(251,191,36,0.7)]">
                <img
                  src="https://cdn.poehali.dev/projects/46745fea-3775-44bf-b9bf-65fdd59d5b7d/bucket/4e9d725c-17d8-4e4d-b482-8ed26c0d71f8.png"
                  alt="AGS Автосервис — на главную"
                  className="w-full h-full object-contain transition-transform duration-300 group-hover/logo:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-['Oswald'] text-amber-400 font-bold tracking-wider uppercase leading-none text-lg sm:text-xl lg:text-2xl">AGS</span>
                <span className="font-['Oswald'] text-amber-400/70 font-medium tracking-wider uppercase leading-none text-[9px] sm:text-[11px] lg:text-xs mt-0.5 whitespace-nowrap">Станция техобслуживания</span>
              </div>
            </button>

            <span className="font-['Oswald'] text-xs sm:text-sm font-bold tracking-widest text-amber-400 hidden sm:block">
              ◈ ВСЕ УСЛУГИ
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => navigate("/")}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 border border-border/60 text-muted-foreground hover:text-amber-400 hover:border-amber-400/40 transition-colors font-mono text-[10px] tracking-widest"
              >
                <Icon name="ArrowLeft" size={11} />
                ГЛАВНАЯ
              </button>
              <button
                onClick={() => setContactOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-400 text-background font-['Oswald'] font-semibold text-xs uppercase tracking-wider hover:bg-amber-300 transition-colors"
              >
                <Icon name="Phone" size={11} />
                <span className="hidden sm:inline">Записаться</span>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-[76px]">

          {/* HERO */}
          <div className="px-4 sm:px-6 lg:px-12 py-10 sm:py-16 border-b border-border/40 bg-gradient-to-br from-card/40 to-background">
            <div className="max-w-[1200px] mx-auto">
              <div className="flex items-center gap-4 mb-3">
                <span className="font-mono text-[10px] text-amber-400 tracking-[0.2em]">/ AGS АВТОСЕРВИС /</span>
                <span className="flex-1 h-px bg-border" />
              </div>
              <h1 className="font-['Oswald'] text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-3">
                Все <span className="text-amber-400">услуги</span>
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
                Профессиональный автосервис в Санкт-Петербурге. Развал-схождение, ремонт ходовой, заправка кондиционеров, ремонт рулевых реек.
              </p>
            </div>
          </div>

          {/* SERVICES GRID */}
          <div className="px-4 sm:px-6 lg:px-12 py-10 sm:py-16 max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {SERVICES.map((s) => (
                <div
                  key={s.code}
                  className="group relative border border-border/40 bg-card/40 backdrop-blur-sm hover:border-amber-400/40 hover:bg-card/60 transition-all duration-300 p-6 sm:p-8 flex flex-col"
                >
                  {/* Линия снизу при ховере */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-amber-400 group-hover:w-full transition-all duration-500" />

                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 border border-border/60 group-hover:border-amber-400/40 flex items-center justify-center transition-colors duration-300">
                        <Icon name={s.icon} size={18} className="text-muted-foreground group-hover:text-amber-400 transition-colors duration-300" />
                      </div>
                      <span className="font-mono text-[9px] text-muted-foreground/50 tracking-widest">{s.code}</span>
                    </div>
                    {s.tag && (
                      <span className="font-mono text-[8px] bg-amber-400/20 text-amber-400 px-2 py-0.5 tracking-widest">
                        {s.tag}
                      </span>
                    )}
                  </div>

                  <h2 className="font-['Oswald'] text-xl sm:text-2xl font-bold uppercase tracking-wider mb-2 group-hover:text-amber-400 transition-colors duration-300">
                    {s.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                    {s.desc}
                  </p>

                  <ul className="grid grid-cols-2 gap-1.5 mb-6">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="text-amber-400 flex-none">◈</span>
                        {d}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-4 border-t border-border/40">
                    <span className="font-['Oswald'] text-xl font-bold text-amber-400">{s.price}</span>
                    <button
                      onClick={() => navigate(s.path)}
                      className="flex items-center gap-2 px-4 py-2 border border-amber-400/40 text-amber-400 font-['Oswald'] font-medium text-xs uppercase tracking-widest hover:bg-amber-400/10 transition-colors"
                    >
                      Подробнее
                      <Icon name="ArrowRight" size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WHY US */}
          <div className="px-4 sm:px-6 lg:px-12 py-10 sm:py-14 bg-card/30 border-y border-border/40">
            <div className="max-w-[1200px] mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-[10px] text-amber-400 tracking-[0.2em]">/ ПРЕИМУЩЕСТВА /</span>
                <span className="flex-1 h-[1px] bg-border" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                {WHY.map((item) => (
                  <div key={item.title} className="p-5 border border-border/40 hover:border-amber-400/30 transition-all duration-300 bg-background/30">
                    <div className="mb-3 w-9 h-9 flex items-center justify-center border border-border/60 hover:border-amber-400/40 transition-colors">
                      <Icon name={item.icon} size={16} className="text-amber-400" />
                    </div>
                    <h4 className="font-['Oswald'] text-base font-semibold uppercase tracking-wider mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16 text-center">
            <div className="max-w-xl mx-auto">
              <div className="font-mono text-[10px] text-amber-400 tracking-[0.3em] mb-4">◈ ЗАПИСЬ ◈</div>
              <h2 className="font-['Oswald'] text-3xl sm:text-4xl font-bold uppercase tracking-tight mb-4">
                Готовы помочь<br /><span className="text-amber-400">прямо сейчас</span>
              </h2>
              <p className="text-muted-foreground text-sm mb-8">
                Позвоните или напишите — подберём удобное время без очереди.
              </p>
              <button
                onClick={() => setContactOpen(true)}
                className="animate-pulse-glow inline-flex items-center gap-2 px-8 py-4 bg-amber-400 text-background font-['Oswald'] font-bold text-lg uppercase tracking-widest hover:bg-amber-300 transition-colors"
              >
                <Icon name="Phone" size={18} />
                Записаться
              </button>
            </div>
          </div>

          <SiteFooter showBackButton onBack={() => navigate("/")} />
        </div>
      </div>
    </div>
  );
}