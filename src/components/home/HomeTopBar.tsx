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
        <div className="grid grid-cols-[auto_1fr_auto] items-center px-2 xs:px-3 sm:px-4 lg:px-6 font-mono text-muted-foreground" style={{ minHeight: '68px' }}>

          {/* LEFT: логотип AGS */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 sm:gap-3 lg:gap-4 flex-none py-1 hover:opacity-90 transition-all duration-300 group/logo"
          >
            <div className="flex-none w-[40px] h-[40px] sm:w-[56px] sm:h-[56px] lg:w-[66px] lg:h-[66px] flex items-center justify-center overflow-hidden rounded-full transition-all duration-300 group-hover/logo:drop-shadow-[0_0_12px_rgba(251,191,36,0.7)]">
              <img
                src="/media78/img/logo.png"
                alt="AGS Автосервис — на главную"
                className="w-full h-full object-contain transition-transform duration-300 group-hover/logo:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-['Oswald'] text-amber-400 font-bold tracking-[0.1em] uppercase leading-none text-sm sm:text-xl lg:text-2xl">
                AGS
              </span>
              <span className="font-['Oswald'] text-amber-400/80 font-medium uppercase leading-none text-[7px] sm:text-[10px] lg:text-sm mt-0.5 whitespace-nowrap tracking-[0.03em]">
                Станция техобслуживания
              </span>
            </div>
          </button>

          {/* CENTER: телефоны на всех экранах */}
          <div className="flex items-center justify-center gap-1 xs:gap-2 sm:gap-4 px-1 sm:px-3">
            {/* xs–sm: компактные полные номера вертикально */}
            <a href="tel:+79117478057" className="flex flex-col items-center gap-0 sm:gap-0.5 hover:opacity-80 transition-opacity">
              <span className="font-mono text-[6px] xs:text-[7px] sm:text-[9px] text-muted-foreground/50 tracking-widest hidden xs:block">МАС. РАЗВАЛЬЩИК</span>
              <span className="font-['Oswald'] text-amber-400 font-semibold leading-none text-[11px] xs:text-xs sm:text-lg lg:text-xl tracking-wide whitespace-nowrap">
                +7 (911) 747-80-57
              </span>
            </a>
            <div className="w-px h-5 bg-border/40 hidden xs:block" />
            <a href="tel:+79218770797" className="flex flex-col items-center gap-0 sm:gap-0.5 hover:opacity-80 transition-opacity">
              <span className="font-mono text-[6px] xs:text-[7px] sm:text-[9px] text-muted-foreground/50 tracking-widest hidden xs:block">МАС. СМЕНЫ</span>
              <span className="font-['Oswald'] text-amber-400 font-semibold leading-none text-[11px] xs:text-xs sm:text-lg lg:text-xl tracking-wide whitespace-nowrap">
                +7 (921) 877-07-97
              </span>
            </a>
            {/* Время — только md+ */}
            <div className="hidden md:flex items-center gap-2 ml-2 border-l border-border/40 pl-4">
              <span className="opacity-40 text-[10px]">TIME:</span>
              <span className="text-amber-400 text-[10px]">{formatTime(time)}</span>
              <span className="animate-blink text-amber-400 text-[10px]">_</span>
            </div>
          </div>

          {/* RIGHT: кнопка карты */}
          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col xs:flex-row items-center justify-center gap-0.5 xs:gap-1.5 px-2 xs:px-3 py-1.5 bg-green-600/90 hover:bg-green-500 text-white transition-colors rounded-sm flex-none"
          >
            <Icon name="Navigation" size={13} />
            <span className="font-mono text-[7px] xs:text-[9px] sm:text-[10px] tracking-widest whitespace-nowrap leading-none">
              <span className="hidden xs:inline">КАК </span>ПРОЕХАТЬ
            </span>
          </a>
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