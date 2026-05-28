import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import ContactModal from "@/components/ContactModal";
import SiteFooter from "@/components/SiteFooter";

export interface ServiceLink {
  title: string;
  path: string;
  icon: string;
  code: string;
  tag?: string;
}

export const ALL_SERVICES: ServiceLink[] = [
  { title: "Все услуги", path: "/vse-uslugi", icon: "ClipboardList", code: "ALL" },
  { title: "Развал-Схождение", path: "/razvalskhozhdenie", icon: "CircleDot", code: "SRV-01", tag: "ПОПУЛЯРНОЕ" },
  { title: "Ремонт Ходовой", path: "/remont-hodovoy", icon: "Settings2", code: "SRV-02" },
  { title: "Заправка Кондиционеров", path: "/zapravka-kondicionera", icon: "Thermometer", code: "SRV-03", tag: "СЕЗОН" },
  { title: "Ремонт Рулевых Реек", path: "/remont-rulevyh-reek", icon: "Wrench", code: "SRV-04" },
];

interface ServicePageLayoutProps {
  currentPath: string;
  title: string;
  subtitle: string;
  price: string;
  children: React.ReactNode;
  relatedLinks?: { title: string; path: string; desc: string }[];
}

export default function ServicePageLayout({
  currentPath,
  title,
  subtitle,
  price,
  children,
  relatedLinks = [],
}: ServicePageLayoutProps) {
  const navigate = useNavigate();
  const [time, setTime] = useState(new Date());
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const formatTime = (d: Date) =>
    d.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Фоновое изображение — единое для всего сайта */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(https://cdn.poehali.dev/files/f8dd42f9-4eba-45d2-bf61-2a5ce8e51ca3.jpg)" }}
      />
      <div className="fixed inset-0 z-0 bg-background/80" />
      <div className="fixed inset-0 z-0 grid-bg opacity-30" />

      <div className="relative z-10">
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />

      {/* ── TOP BAR ── */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="flex items-center justify-between px-3 sm:px-4 lg:px-6" style={{ minHeight: "76px" }}>
          {/* Логотип — ссылка на главную */}
          <button onClick={() => navigate("/")} className="flex items-center gap-2 sm:gap-3 flex-none py-1 hover:opacity-90 transition-all duration-300 group/logo">
            <div className="flex-none w-[62px] h-[62px] sm:w-[68px] sm:h-[68px] lg:w-[74px] lg:h-[74px] flex items-center justify-center overflow-hidden rounded-full transition-all duration-300 group-hover/logo:drop-shadow-[0_0_12px_rgba(251,191,36,0.7)]">
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

          {/* Время */}
          <div className="hidden md:flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <span className="opacity-40">TIME:</span>
            <span className="text-amber-400">{formatTime(time)}</span>
          </div>

          {/* Кнопки */}
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

      {/* ── SERVICES NAV BAR ── */}
      <div className="fixed top-[76px] left-0 right-0 z-40 bg-background/95 backdrop-blur border-b border-border/60">
        <div className="flex overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {ALL_SERVICES.map((s) => {
            const isActive = currentPath === s.path;
            return (
              <button
                key={s.path}
                onClick={() => navigate(s.path)}
                className={`flex-none flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 border-r border-border/40 transition-all duration-200 relative ${
                  isActive
                    ? "bg-amber-400/10 text-amber-400"
                    : "hover:bg-white/5 text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-400" />}

                <Icon name={s.icon} size={12} />
                <span className="font-['Oswald'] text-[11px] sm:text-sm font-medium tracking-wider whitespace-nowrap uppercase">
                  {s.title}
                </span>
                {s.tag && (
                  <span className="hidden sm:block text-[8px] font-mono bg-amber-400/20 text-amber-400 px-1.5 py-0.5 rounded tracking-wider">
                    {s.tag}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="pt-[128px] sm:pt-[132px]">

        {/* Хлебные крошки */}
        <div className="px-4 sm:px-6 lg:px-12 py-3 border-b border-border/30 bg-card/20">
          <div className="max-w-[1200px] mx-auto flex items-center gap-2 font-mono text-[10px] text-muted-foreground/60">
            <button onClick={() => navigate("/")} className="hover:text-amber-400 transition-colors">Главная</button>
            <span>/</span>
            <span className="text-muted-foreground">{title}</span>
          </div>
        </div>

        {/* Hero заголовок */}
        <div className="px-4 sm:px-6 lg:px-12 py-8 sm:py-12 border-b border-border/40 bg-gradient-to-br from-card/40 to-background">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center gap-4 mb-3">
              <span className="font-mono text-[10px] text-amber-400 tracking-[0.2em]">/ AGS АВТОСЕРВИС /</span>
              <span className="flex-1 h-px bg-border" />
            </div>
            <h1 className="font-['Oswald'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-3">
              {title}
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mb-5">{subtitle}</p>
            <div className="flex flex-wrap items-center gap-3">
              <div className="font-['Oswald'] text-2xl sm:text-3xl font-bold text-amber-400">{price}</div>
              <button
                onClick={() => setContactOpen(true)}
                className="flex items-center gap-2 px-5 py-2.5 bg-amber-400 text-background font-['Oswald'] font-semibold text-sm uppercase tracking-widest hover:bg-amber-300 transition-colors"
              >
                <Icon name="Phone" size={14} />
                Позвонить
              </button>
            </div>
          </div>
        </div>

        {/* Основной контент страницы */}
        <div className="px-4 sm:px-6 lg:px-12 py-8 sm:py-12 max-w-[1200px] mx-auto">
          {children}
        </div>

        {/* Перелинковка — другие услуги */}
        {relatedLinks.length > 0 && (
          <section className="px-4 sm:px-6 lg:px-12 py-8 sm:py-10 border-t border-border/40 bg-card/20">
            <div className="max-w-[1200px] mx-auto">
              <div className="flex items-center gap-4 mb-5">
                <span className="font-mono text-[10px] text-amber-400 tracking-[0.2em]">/ ДРУГИЕ УСЛУГИ /</span>
                <span className="flex-1 h-px bg-border" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedLinks.map((l) => (
                  <button
                    key={l.path}
                    onClick={() => navigate(l.path)}
                    className="group text-left border border-border/50 hover:border-amber-400/40 bg-background/50 hover:bg-amber-400/5 transition-all duration-300 p-4"
                  >
                    <h3 className="font-['Oswald'] text-sm font-bold uppercase tracking-wider mb-1.5 group-hover:text-amber-400 transition-colors">
                      {l.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed mb-2">{l.desc}</p>
                    <span className="font-mono text-[10px] text-amber-400 tracking-wider">Подробнее →</span>
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        <SiteFooter showBackButton onBack={() => navigate("/")} onLeadOpen={() => setLeadOpen(true)} />
      </div>
      </div>
    </div>
  );
}