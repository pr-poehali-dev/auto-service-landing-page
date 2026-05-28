import Icon from "@/components/ui/icon";
import { SERVICES } from "./homeData";

const MAP_URL = "https://yandex.ru/maps/2/saint-petersburg/?ll=30.330822%2C60.062673&mode=routes&rtext=60.064812%2C30.320827~60.062631%2C30.330231&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D17091308374&z=17.4";

interface HomeTopBarProps {
  activeService: number;
  time: Date;
  onServiceHover: (i: number) => void;
  onServiceClick: (path: string) => void;
}

export default function HomeTopBar({ activeService, time, onServiceHover, onServiceClick }: HomeTopBarProps) {
  const formatTime = (d: Date) =>
    d.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

  return (
    <>
      {/* ── TOP STATUS BAR ── */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="flex items-center justify-between px-3 sm:px-4 lg:px-6 text-[10px] sm:text-xs font-mono text-muted-foreground" style={{ minHeight: '76px' }}>

          {/* LEFT: логотип AGS */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 sm:gap-3 lg:gap-4 flex-none py-1 hover:opacity-90 transition-all duration-300 group/logo"
          >
            <div className="flex-none w-[44px] h-[44px] sm:w-[60px] sm:h-[60px] lg:w-[72px] lg:h-[72px] flex items-center justify-center overflow-hidden rounded-full transition-all duration-300 group-hover/logo:drop-shadow-[0_0_12px_rgba(251,191,36,0.7)]">
              <img
                src="https://cdn.poehali.dev/projects/46745fea-3775-44bf-b9bf-65fdd59d5b7d/bucket/4e9d725c-17d8-4e4d-b482-8ed26c0d71f8.png"
                alt="AGS Автосервис — на главную"
                className="w-full h-full object-contain transition-transform duration-300 group-hover/logo:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-['Oswald'] text-amber-400 font-bold tracking-[0.12em] uppercase leading-none text-base sm:text-xl lg:text-2xl">
                AGS
              </span>
              <span className="font-['Oswald'] text-amber-400/80 font-medium tracking-[0.04em] uppercase leading-none text-[8px] sm:text-[10px] lg:text-sm mt-0.5 whitespace-nowrap">
                Станция техобслуживания
              </span>
            </div>
          </button>

          {/* CENTER: время — только на md+ */}
          <div className="hidden md:flex items-center gap-2">
            <span className="opacity-40">TIME: </span>
            <span className="text-amber-400">{formatTime(time)}</span>
            <span className="animate-blink text-amber-400">_</span>
          </div>

          {/* RIGHT: телефоны + кнопка карты */}
          <div className="flex flex-row items-center gap-2 sm:gap-3 flex-none py-1">
            {/* На мобиле — иконки-кнопки для звонка, на sm+ — полные номера */}
            <div className="flex sm:hidden items-center gap-2">
              <a href="tel:+79117478057" className="flex flex-col items-center gap-0.5 px-2 py-1 border border-amber-400/30 rounded-sm hover:bg-amber-400/10 transition-colors">
                <Icon name="Phone" size={14} className="text-amber-400" />
                <span className="font-mono text-[8px] text-amber-400 tracking-wider">747-80-57</span>
              </a>
              <a href="tel:+79218770797" className="flex flex-col items-center gap-0.5 px-2 py-1 border border-amber-400/30 rounded-sm hover:bg-amber-400/10 transition-colors">
                <Icon name="Phone" size={14} className="text-amber-400" />
                <span className="font-mono text-[8px] text-amber-400 tracking-wider">877-07-97</span>
              </a>
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-0.5 px-2 py-1 bg-green-600/90 hover:bg-green-500 text-white rounded-sm transition-colors"
              >
                <Icon name="Navigation" size={14} />
                <span className="font-mono text-[8px] tracking-wider">КАРТА</span>
              </a>
            </div>
            {/* На sm+ — полные номера */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="flex flex-col items-center gap-0.5">
                <span className="font-mono text-[9px] text-muted-foreground/50 tracking-widest">МАС. РАЗВАЛЬЩИК</span>
                <a href="tel:+79117478057" className="text-amber-400 hover:text-amber-300 transition-colors font-medium tracking-wider text-lg lg:text-xl whitespace-nowrap">
                  +7 (911) 747-80-57
                </a>
              </div>
              <div className="w-[1px] h-6 bg-border/40" />
              <div className="flex flex-col items-center gap-0.5">
                <span className="font-mono text-[9px] text-muted-foreground/50 tracking-widest">МАС. СМЕНЫ</span>
                <a href="tel:+79218770797" className="text-amber-400 hover:text-amber-300 transition-colors font-medium tracking-wider text-lg lg:text-xl whitespace-nowrap">
                  +7 (921) 877-07-97
                </a>
              </div>
              <div className="w-[1px] h-6 bg-border/40" />
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-green-600/90 hover:bg-green-500 text-white font-mono text-[10px] tracking-widest transition-colors rounded-sm whitespace-nowrap"
              >
                <Icon name="Navigation" size={10} />
                КАК ПРОЕХАТЬ
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── HORIZONTAL SERVICES BAR ── */}
      <div className="fixed top-[76px] left-0 right-0 z-40 bg-background/95 backdrop-blur border-b border-border/60">
        <div className="flex overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
          {SERVICES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => onServiceClick(s.path)}
              onMouseEnter={() => onServiceHover(i)}
              className={`flex-none flex items-center gap-1.5 sm:gap-3 px-3 sm:px-5 lg:px-6 py-2 sm:py-3 border-r border-border/40 transition-all duration-200 group relative ${
                activeService === i
                  ? "bg-amber-400/10 text-amber-400"
                  : "hover:bg-white/5 text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeService === i && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-400" />
              )}
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
    </>
  );
}