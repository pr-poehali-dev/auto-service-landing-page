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
        <div className="flex items-center justify-between px-6 py-2 text-xs font-mono text-muted-foreground">
          <div className="flex items-center gap-6">
            <span className="text-amber-400 font-medium tracking-widest">◈ АВТОСЕРВИС</span>
            <span className="hidden md:block opacity-60">SYS.STATUS: <span className="text-green-400">ONLINE</span></span>
            <span className="hidden md:block opacity-60">UNITS: 4-ACTIVE</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden md:block">
              <span className="opacity-40">TIME: </span>
              <span className="text-amber-400">{formatTime(time)}</span>
              <span className="animate-blink text-amber-400 ml-0.5">_</span>
            </span>
            <a href="tel:+7XXXXXXXXXX" className="text-amber-400 hover:text-amber-300 transition-colors font-medium tracking-wider">
              +7 (XXX) XXX-XX-XX
            </a>
          </div>
        </div>
      </div>

      {/* ── HORIZONTAL SERVICES BAR ── */}
      <div className="fixed top-[37px] left-0 right-0 z-40 bg-background/95 backdrop-blur border-b border-border/60">
        <div className="flex overflow-x-auto">
          {SERVICES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActiveService(i)}
              className={`flex-none flex items-center gap-3 px-6 py-3 border-r border-border/40 transition-all duration-200 group relative ${
                activeService === i
                  ? "bg-amber-400/10 text-amber-400"
                  : "hover:bg-white/5 text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeService === i && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-400" />
              )}
              <span className="font-mono text-[10px] opacity-40">{s.code}</span>
              <Icon name={s.icon} size={14} />
              <span className="font-['Oswald'] text-sm font-medium tracking-wider whitespace-nowrap uppercase">
                {s.title}
              </span>
              {s.tag && (
                <span className="text-[9px] font-mono bg-amber-400/20 text-amber-400 px-1.5 py-0.5 rounded tracking-wider">
                  {s.tag}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen flex items-center pt-[80px]">
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
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-2 gap-16 items-center w-full">
          <div>
            {/* Breadcrumb / tag */}
            <div className="animate-fade-in-up flex items-center gap-3 mb-8">
              <span className="font-mono text-xs text-amber-400 tracking-[0.3em] uppercase">
                ◈ Профессиональный автосервис
              </span>
              <span className="flex-1 h-[1px] bg-amber-400/30 max-w-[60px]" />
            </div>

            {/* Main heading */}
            <h1
              className="animate-fade-in-up delay-100 font-['Oswald'] text-5xl lg:text-7xl font-bold uppercase leading-none tracking-tight mb-6"
              style={{ textShadow: "0 0 40px rgba(0,0,0,0.8)" }}
            >
              <span className="text-foreground">Точность</span>
              <br />
              <span className="text-amber-400">на каждом</span>
              <br />
              <span className="text-foreground">миллиметре</span>
            </h1>

            <p className="animate-fade-in-up delay-200 text-muted-foreground text-lg leading-relaxed mb-10 max-w-md font-light">
              Профессиональное обслуживание ходовой части, точная настройка геометрии и восстановление рулевого управления.
            </p>

            {/* CTA buttons */}
            <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4">
              <button className="animate-pulse-glow relative group px-8 py-4 bg-amber-400 text-background font-['Oswald'] font-semibold text-lg uppercase tracking-widest hover:bg-amber-300 transition-colors duration-200 corner-bracket">
                <span className="relative z-10 flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  Записаться
                </span>
              </button>
              <button className="px-8 py-4 border border-border/60 text-foreground font-['Oswald'] font-medium text-lg uppercase tracking-widest hover:border-amber-400/50 hover:text-amber-400 transition-all duration-200">
                <span className="flex items-center gap-2">
                  <Icon name="ClipboardList" size={18} />
                  Наши услуги
                </span>
              </button>
            </div>

            {/* Technical tag line */}
            <div className="animate-fade-in-up delay-400 mt-10 flex items-center gap-4">
              <div className="h-[1px] bg-border w-12" />
              <span className="font-mono text-xs text-muted-foreground tracking-widest">
                STAND: TECHNOVECTOR-7 / DIAG: 3D-LASER
              </span>
            </div>
          </div>

          {/* Right: active service panel */}
          <div className="hidden lg:block">
            <div className="relative border border-border/60 bg-background/60 backdrop-blur p-8 corner-bracket">
              {/* Panel header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/40">
                <div className="font-mono text-xs text-muted-foreground tracking-widest">
                  MODULE: {SERVICES[activeService].code}
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-mono text-xs text-green-400">АКТИВНО</span>
                </div>
              </div>

              {/* Service icon */}
              <div className="mb-6 w-16 h-16 border border-amber-400/30 flex items-center justify-center bg-amber-400/5">
                <Icon name={SERVICES[activeService].icon} size={32} className="text-amber-400" />
              </div>

              <h3 className="font-['Oswald'] text-3xl font-bold uppercase tracking-wider text-foreground mb-3">
                {SERVICES[activeService].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {SERVICES[activeService].desc}
              </p>

              <div className="flex items-end justify-between pt-4 border-t border-border/40">
                <div>
                  <div className="font-mono text-xs text-muted-foreground mb-1">СТОИМОСТЬ</div>
                  <div className="font-['Oswald'] text-2xl font-bold text-amber-400">
                    {SERVICES[activeService].price}
                  </div>
                </div>
                <button className="px-6 py-3 bg-amber-400/10 border border-amber-400/40 text-amber-400 font-['Oswald'] text-sm uppercase tracking-widest hover:bg-amber-400/20 transition-colors">
                  Подробнее →
                </button>
              </div>

              {/* Navigation dots */}
              <div className="flex gap-2 mt-6">
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
        <div className="flex animate-marquee whitespace-nowrap py-4">
          {[...STATS, ...STATS, ...STATS, ...STATS].map((s, i) => (
            <div key={i} className="flex items-center gap-3 px-10">
              <span className="font-['Oswald'] text-2xl font-bold text-amber-400">{s.value}</span>
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">{s.label}</span>
              <span className="text-border ml-6">◈</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs text-amber-400 tracking-[0.3em]">/ УСЛУГИ /</span>
            <span className="flex-1 h-[1px] bg-border" />
            <span className="font-mono text-xs text-muted-foreground tracking-widest">04 MODULE</span>
          </div>
          <h2 className="font-['Oswald'] text-4xl lg:text-5xl font-bold uppercase tracking-tight">
            Что мы делаем
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {SERVICES.map((s, i) => (
            <div
              key={s.id}
              className="group relative border border-border/60 bg-card hover:border-amber-400/40 transition-all duration-300 p-8 cursor-pointer"
              onMouseEnter={() => setActiveService(i)}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] text-muted-foreground/50 tracking-widest">{s.code}</span>
                {s.tag && (
                  <span className="font-mono text-[9px] bg-amber-400/20 text-amber-400 px-2 py-1 tracking-widest">
                    {s.tag}
                  </span>
                )}
              </div>

              <div className="mb-5 w-12 h-12 border border-border/60 group-hover:border-amber-400/40 flex items-center justify-center transition-colors duration-300">
                <Icon name={s.icon} size={22} className="text-muted-foreground group-hover:text-amber-400 transition-colors duration-300" />
              </div>

              <h3 className="font-['Oswald'] text-2xl font-bold uppercase tracking-wider mb-3 group-hover:text-amber-400 transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {s.desc}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border/40">
                <span className="font-['Oswald'] text-xl font-bold text-amber-400">{s.price}</span>
                <span className="font-mono text-xs text-muted-foreground group-hover:text-amber-400 transition-colors duration-300 tracking-widest">
                  ПОДРОБНЕЕ →
                </span>
              </div>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-amber-400 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-24 px-6 lg:px-12 bg-card/50 border-y border-border/60">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-xs text-amber-400 tracking-[0.3em]">/ ПРЕИМУЩЕСТВА /</span>
              <span className="flex-1 h-[1px] bg-border" />
            </div>
            <h2 className="font-['Oswald'] text-4xl lg:text-5xl font-bold uppercase tracking-tight">
              Почему выбирают нас
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "Shield", title: "Гарантия 12 мес", desc: "На все виды выполненных работ" },
              { icon: "Gauge", title: "Диагностика за 30 мин", desc: "Без записи и очередей" },
              { icon: "Award", title: "Сертифицированные мастера", desc: "Опыт от 5 лет каждого специалиста" },
              { icon: "BadgeCheck", title: "Оригинальные запчасти", desc: "Только сертифицированные поставщики" },
            ].map((item, i) => (
              <div key={i} className="group p-6 border border-border/40 hover:border-amber-400/30 transition-all duration-300 bg-background/50">
                <div className="mb-4 w-10 h-10 flex items-center justify-center border border-border/60 group-hover:border-amber-400/40 transition-colors duration-300">
                  <Icon name={item.icon} size={20} className="text-amber-400" />
                </div>
                <h4 className="font-['Oswald'] text-lg font-semibold uppercase tracking-wider mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="font-mono text-xs text-amber-400 tracking-[0.3em] mb-6">◈ ЗАПИСЬ ◈</div>
          <h2 className="font-['Oswald'] text-4xl lg:text-6xl font-bold uppercase tracking-tight mb-6">
            Записаться<br />
            <span className="text-amber-400">на сервис</span>
          </h2>
          <p className="text-muted-foreground mb-10 text-lg max-w-lg mx-auto">
            Оставьте заявку — мы перезвоним в течение 10 минут и подберём удобное время.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="animate-pulse-glow px-10 py-5 bg-amber-400 text-background font-['Oswald'] font-bold text-xl uppercase tracking-widest hover:bg-amber-300 transition-colors duration-200 flex items-center gap-3 mx-auto sm:mx-0">
              <Icon name="Phone" size={20} />
              Позвонить нам
            </button>
            <button className="px-10 py-5 border border-border/60 text-foreground font-['Oswald'] font-medium text-xl uppercase tracking-widest hover:border-amber-400/50 hover:text-amber-400 transition-all duration-200 flex items-center gap-3 mx-auto sm:mx-0">
              <Icon name="MessageSquare" size={20} />
              Написать в мессенджер
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border/60 bg-background py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="font-['Oswald'] text-xl font-bold tracking-widest text-amber-400">◈ АВТОСЕРВИС</span>
            <span className="font-mono text-xs text-muted-foreground">SYS.VER 1.0.0</span>
          </div>
          <div className="font-mono text-xs text-muted-foreground text-center">
            ПН–СБ 8:00–20:00 · ВС 9:00–18:00
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            © 2024 АВТОСЕРВИС. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}