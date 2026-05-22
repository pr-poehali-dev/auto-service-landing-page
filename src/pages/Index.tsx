import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const SERVICES = [
  {
    id: 1,
    icon: "CircleDot",
    title: "Развал-Схождение",
    code: "SRV-01",
    desc: "3D-стенд Technovector. Точность до 0.01°. Все марки авто.",
    price: "от 2 500 ₽",
    tag: "ПОПУЛЯРНОЕ",
  },
  {
    id: 2,
    icon: "Settings2",
    title: "Ремонт Ходовой",
    code: "SRV-02",
    desc: "Диагностика, замена амортизаторов, шаровых, сайлентблоков.",
    price: "от 1 500 ₽",
    tag: "",
  },
  {
    id: 3,
    icon: "Thermometer",
    title: "Заправка Кондиционеров",
    code: "SRV-03",
    desc: "Заправка фреоном R134a / R1234yf. Проверка герметичности системы.",
    price: "от 3 000 ₽",
    tag: "СЕЗОН",
  },
  {
    id: 4,
    icon: "Wrench",
    title: "Ремонт Рулевых Реек",
    code: "SRV-04",
    desc: "Восстановление без замены. Гарантия 12 месяцев.",
    price: "от 5 000 ₽",
    tag: "",
  },
];

const STATS = [
  { value: "15+", label: "лет на рынке" },
  { value: "18 000+", label: "выполненных работ" },
  { value: "98%", label: "довольных клиентов" },
  { value: "12 мес", label: "гарантия на работы" },
];

export default function Index() {
  const [activeService, setActiveService] = useState(0);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const formatTime = (d: Date) =>
    d.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── TOP STATUS BAR ── */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur border-b border-border">
        <div className="flex items-center justify-between px-3 sm:px-6 py-1.5 sm:py-2 text-[10px] sm:text-xs font-mono text-muted-foreground">
          <div className="flex items-center gap-3 sm:gap-6">
            <span className="text-amber-400 font-medium tracking-widest text-xs sm:text-sm">◈ АВТОСЕРВИС</span>
            <span className="hidden lg:block opacity-60">SYS.STATUS: <span className="text-green-400">ONLINE</span></span>
            <span className="hidden xl:block opacity-60">UNITS: 4-ACTIVE</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-6">
            <span className="hidden sm:block">
              <span className="opacity-40">TIME: </span>
              <span className="text-amber-400">{formatTime(time)}</span>
              <span className="animate-blink text-amber-400 ml-0.5">_</span>
            </span>
            <a href="tel:+7XXXXXXXXXX" className="text-amber-400 hover:text-amber-300 transition-colors font-medium tracking-wider text-[10px] sm:text-xs">
              +7 (XXX) XXX-XX-XX
            </a>
          </div>
        </div>
      </div>

      {/* ── HORIZONTAL SERVICES BAR ── */}
      <div className="fixed top-[33px] sm:top-[37px] left-0 right-0 z-40 bg-background/95 backdrop-blur border-b border-border/60">
        <div className="flex overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
          {SERVICES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActiveService(i)}
              className={`flex-none flex items-center gap-1.5 sm:gap-3 px-3 sm:px-5 lg:px-6 py-2 sm:py-3 border-r border-border/40 transition-all duration-200 group relative ${
                activeService === i
                  ? "bg-amber-400/10 text-amber-400"
                  : "hover:bg-white/5 text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeService === i && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-400" />
              )}
              <span className="hidden sm:block font-mono text-[9px] sm:text-[10px] opacity-40">{s.code}</span>
              <Icon name={s.icon} size={12} />
              <span className="font-['Oswald'] text-[11px] sm:text-sm font-medium tracking-wider whitespace-nowrap uppercase">
                {s.title}
              </span>
              {s.tag && (
                <span className="hidden sm:block text-[8px] sm:text-[9px] font-mono bg-amber-400/20 text-amber-400 px-1 sm:px-1.5 py-0.5 rounded tracking-wider">
                  {s.tag}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen flex items-center pt-[68px] sm:pt-[80px]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(https://cdn.poehali.dev/files/f8dd42f9-4eba-45d2-bf61-2a5ce8e51ca3.jpg)" }}
        />

        {/* Dark overlay layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />

        {/* Engineering grid overlay */}
        <div className="absolute inset-0 grid-bg opacity-60" />

        {/* Scan line effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"
            style={{ animation: "scanline 8s linear infinite" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-20 py-12 sm:py-16 lg:py-20 flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20 items-center min-h-[calc(100vh-80px)]">

          {/* LEFT: Развал-Схождение крупным заголовком */}
          <div className="flex-1 flex flex-col justify-center order-2 lg:order-1">
            {/* Breadcrumb */}
            <div className="animate-fade-in-up flex items-center gap-3 mb-6 lg:mb-8">
              <span className="font-mono text-[10px] sm:text-xs text-amber-400 tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                ◈ Профессиональный автосервис
              </span>
              <span className="h-[1px] bg-amber-400/30 w-8 sm:w-[60px]" />
            </div>

            {/* Main service heading — крупный Oswald как был "Точность" */}
            <h1
              className="animate-fade-in-up delay-100 font-['Oswald'] font-bold uppercase leading-none tracking-tight mb-4 lg:mb-6
                text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl 4xl:text-9xl"
              style={{ textShadow: "0 0 60px rgba(0,0,0,0.9)" }}
            >
              <span className="text-foreground">Развал-</span>
              <br />
              <span className="text-amber-400">Схождение</span>
            </h1>

            {/* Service meta */}
            <div className="animate-fade-in-up delay-200 flex flex-wrap items-center gap-3 sm:gap-4 mb-6 lg:mb-8">
              <span className="font-mono text-[10px] sm:text-xs text-muted-foreground/60 tracking-widest">SRV-01</span>
              <span className="h-[1px] bg-border w-6" />
              <span className="font-mono text-[10px] sm:text-xs bg-amber-400/15 text-amber-400 px-2 py-1 tracking-wider">ПОПУЛЯРНОЕ</span>
              <span className="h-[1px] bg-border w-6" />
              <span className="font-['Oswald'] text-lg sm:text-xl lg:text-2xl font-bold text-amber-400">от 2 500 ₽</span>
            </div>

            <p className="animate-fade-in-up delay-300 text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed mb-8 lg:mb-10 max-w-sm sm:max-w-md font-light">
              3D-стенд Technovector. Точность до 0.01°. Все марки и модели автомобилей. Выдаём распечатку до и после.
            </p>

            {/* CTA buttons */}
            <div className="animate-fade-in-up delay-400 flex flex-col xs:flex-row gap-3 sm:gap-4">
              <button className="animate-pulse-glow relative px-6 sm:px-8 py-3 sm:py-4 bg-amber-400 text-background font-['Oswald'] font-semibold text-base sm:text-lg uppercase tracking-widest hover:bg-amber-300 transition-colors duration-200 corner-bracket">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Icon name="Phone" size={16} />
                  Записаться
                </span>
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 border border-border/60 text-foreground font-['Oswald'] font-medium text-base sm:text-lg uppercase tracking-widest hover:border-amber-400/50 hover:text-amber-400 transition-all duration-200">
                <span className="flex items-center justify-center gap-2">
                  <Icon name="ClipboardList" size={16} />
                  Все услуги
                </span>
              </button>
            </div>

            {/* Technical tag line */}
            <div className="animate-fade-in-up delay-500 mt-8 lg:mt-10 flex items-center gap-3 sm:gap-4">
              <div className="h-[1px] bg-border w-8 sm:w-12" />
              <span className="font-mono text-[9px] sm:text-xs text-muted-foreground tracking-widest">
                STAND: TECHNOVECTOR-7 · DIAG: 3D-LASER
              </span>
            </div>
          </div>

          {/* RIGHT: слоган + панель услуг */}
          <div className="flex-1 flex flex-col gap-6 order-1 lg:order-2 w-full lg:max-w-[480px] xl:max-w-[560px] 2xl:max-w-[640px]">

            {/* Слоган "Точность на каждом миллиметре" — меньше, чем было слева */}
            <div className="animate-fade-in-up">
              <h2
                className="font-['Oswald'] font-bold uppercase leading-none tracking-tight
                  text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
                style={{ textShadow: "0 0 30px rgba(0,0,0,0.8)" }}
              >
                <span className="text-foreground/70">Точность</span>
                <br />
                <span className="text-amber-400/80">на каждом</span>
                <br />
                <span className="text-foreground/70">миллиметре</span>
              </h2>
              <div className="mt-3 flex items-center gap-3">
                <div className="h-[1px] bg-amber-400/30 w-8" />
                <span className="font-mono text-[9px] sm:text-[10px] text-muted-foreground/50 tracking-widest uppercase">precision engineering</span>
              </div>
            </div>

            {/* Панель активной услуги */}
            <div className="relative border border-border/60 bg-background/60 backdrop-blur p-5 sm:p-6 lg:p-8 corner-bracket">
              {/* Panel header */}
              <div className="flex items-center justify-between mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-border/40">
                <div className="font-mono text-[10px] sm:text-xs text-muted-foreground tracking-widest">
                  MODULE: {SERVICES[activeService].code}
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-mono text-[10px] sm:text-xs text-green-400">АКТИВНО</span>
                </div>
              </div>

              {/* Service icon + title row */}
              <div className="flex items-start gap-4 sm:gap-5 mb-4">
                <div className="flex-none w-12 h-12 sm:w-14 sm:h-14 border border-amber-400/30 flex items-center justify-center bg-amber-400/5">
                  <Icon name={SERVICES[activeService].icon} size={24} className="text-amber-400" />
                </div>
                <div>
                  <h3 className="font-['Oswald'] text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-bold uppercase tracking-wider text-foreground leading-tight">
                    {SERVICES[activeService].title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mt-1.5">
                    {SERVICES[activeService].desc}
                  </p>
                </div>
              </div>

              <div className="flex items-end justify-between pt-3 sm:pt-4 border-t border-border/40">
                <div>
                  <div className="font-mono text-[9px] sm:text-xs text-muted-foreground mb-1">СТОИМОСТЬ</div>
                  <div className="font-['Oswald'] text-xl sm:text-2xl font-bold text-amber-400">
                    {SERVICES[activeService].price}
                  </div>
                </div>
                <button className="px-4 sm:px-6 py-2 sm:py-3 bg-amber-400/10 border border-amber-400/40 text-amber-400 font-['Oswald'] text-xs sm:text-sm uppercase tracking-widest hover:bg-amber-400/20 transition-colors">
                  Подробнее →
                </button>
              </div>

              {/* Navigation dots */}
              <div className="flex gap-2 mt-4 sm:mt-6">
                {SERVICES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveService(i)}
                    className={`h-[3px] transition-all duration-300 ${
                      i === activeService ? "w-8 bg-amber-400" : "w-3 bg-border hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-mono text-[10px] text-muted-foreground tracking-widest">SCROLL</span>
          <Icon name="ChevronDown" size={16} className="text-muted-foreground" />
        </div>
      </section>

      {/* ── STATS TICKER ── */}
      <section className="border-y border-border/60 bg-background/80 overflow-hidden">
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
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 max-w-[1920px] mx-auto">
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="flex items-center gap-4 mb-3 sm:mb-4">
            <span className="font-mono text-[10px] sm:text-xs text-amber-400 tracking-[0.2em] sm:tracking-[0.3em]">/ УСЛУГИ /</span>
            <span className="flex-1 h-[1px] bg-border" />
            <span className="font-mono text-[10px] sm:text-xs text-muted-foreground tracking-widest">04 MODULE</span>
          </div>
          <h2 className="font-['Oswald'] text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold uppercase tracking-tight">
            Что мы делаем
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
          {SERVICES.map((s, i) => (
            <div
              key={s.id}
              className="group relative border border-border/60 bg-card hover:border-amber-400/40 transition-all duration-300 p-5 sm:p-6 lg:p-8 cursor-pointer"
              onMouseEnter={() => setActiveService(i)}
            >
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <span className="font-mono text-[9px] sm:text-[10px] text-muted-foreground/50 tracking-widest">{s.code}</span>
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
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 bg-card/50 border-y border-border/60">
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
            {[
              { icon: "Shield", title: "Гарантия 12 мес", desc: "На все виды выполненных работ" },
              { icon: "Gauge", title: "Диагностика за 30 мин", desc: "Без записи и очередей" },
              { icon: "Award", title: "Сертифицированные мастера", desc: "Опыт от 5 лет каждого специалиста" },
              { icon: "BadgeCheck", title: "Оригинальные запчасти", desc: "Только сертифицированные поставщики" },
            ].map((item, i) => (
              <div key={i} className="group p-5 sm:p-6 border border-border/40 hover:border-amber-400/30 transition-all duration-300 bg-background/50">
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
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="font-mono text-[10px] sm:text-xs text-amber-400 tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6">◈ ЗАПИСЬ ◈</div>
          <h2 className="font-['Oswald'] text-3xl sm:text-4xl lg:text-6xl 2xl:text-7xl font-bold uppercase tracking-tight mb-4 sm:mb-6">
            Записаться<br />
            <span className="text-amber-400">на сервис</span>
          </h2>
          <p className="text-muted-foreground mb-8 sm:mb-10 text-sm sm:text-base lg:text-lg max-w-lg mx-auto">
            Оставьте заявку — мы перезвоним в течение 10 минут и подберём удобное время.
          </p>

          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center">
            <button className="animate-pulse-glow px-8 sm:px-10 py-4 sm:py-5 bg-amber-400 text-background font-['Oswald'] font-bold text-lg sm:text-xl uppercase tracking-widest hover:bg-amber-300 transition-colors duration-200 flex items-center justify-center gap-2 sm:gap-3 w-full xs:w-auto">
              <Icon name="Phone" size={18} />
              Позвонить нам
            </button>
            <button className="px-8 sm:px-10 py-4 sm:py-5 border border-border/60 text-foreground font-['Oswald'] font-medium text-lg sm:text-xl uppercase tracking-widest hover:border-amber-400/50 hover:text-amber-400 transition-all duration-200 flex items-center justify-center gap-2 sm:gap-3 w-full xs:w-auto">
              <Icon name="MessageSquare" size={18} />
              В мессенджер
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border/60 bg-background py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-[1920px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="font-['Oswald'] text-base sm:text-xl font-bold tracking-widest text-amber-400">◈ АВТОСЕРВИС</span>
            <span className="font-mono text-[10px] sm:text-xs text-muted-foreground">SYS.VER 1.0.0</span>
          </div>
          <div className="font-mono text-[10px] sm:text-xs text-muted-foreground text-center">
            ПН–СБ 8:00–20:00 · ВС 9:00–18:00
          </div>
          <div className="font-mono text-[10px] sm:text-xs text-muted-foreground text-center sm:text-right">
            © 2024 АВТОСЕРВИС. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}