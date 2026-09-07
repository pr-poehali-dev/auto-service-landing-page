import { useState } from "react";
import Icon from "@/components/ui/icon";

const MAP_URL = "https://yandex.ru/maps/2/saint-petersburg/?ll=30.477239%2C59.964755&mode=routes&routes%5BactiveComparisonMode%5D=auto&rtext=60.064812%2C30.320827~59.964795%2C30.477207&rtt=comparison&ruri=~&z=17.39";
const LOGO_URL = "https://cdn.poehali.dev/projects/46745fea-3775-44bf-b9bf-65fdd59d5b7d/bucket/efa2803e-3b6d-4ed9-bf7e-c246a1fd06dd.jpg";
const SCHEME_URL = "https://cdn.poehali.dev/projects/46745fea-3775-44bf-b9bf-65fdd59d5b7d/bucket/2ed12400-eb0d-463c-b9ab-f0f4041bf611.jpg";

interface SiteFooterProps {
  showBackButton?: boolean;
  onBack?: () => void;
}

export default function SiteFooter({ showBackButton = false, onBack }: SiteFooterProps) {
  const [mapOpen, setMapOpen] = useState(false);

  return (
    <>
      {/* ── КАРТА — ПОПАП ── */}
      {mapOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setMapOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl bg-background border border-border/80 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/60">
              <div>
                <div className="font-mono text-[9px] text-amber-400 tracking-widest mb-0.5">◈ МАРШРУТ</div>
                <h3 className="font-['Oswald'] text-base font-bold uppercase tracking-wider">
                  шоссе Революции, 83
                </h3>
              </div>
              <button
                onClick={() => setMapOpen(false)}
                className="w-8 h-8 flex items-center justify-center border border-border/40 hover:border-amber-400/40 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon name="X" size={16} />
              </button>
            </div>
            <img
              src={SCHEME_URL}
              alt="Карта проезда Азимут Автосервис — шоссе Революции, 83, Санкт-Петербург"
              className="w-full h-auto block"
            />
            <div className="px-4 py-3 border-t border-border/60 flex items-center justify-between">
              <span className="font-mono text-[10px] text-muted-foreground">Санкт-Петербург, шоссе Революции, 83</span>
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-[10px] text-amber-400 hover:text-amber-300 transition-colors tracking-wider"
              >
                <Icon name="ExternalLink" size={12} />
                ЯНДЕКС КАРТЫ
              </a>
            </div>
          </div>
        </div>
      )}

      <footer className="border-t border-border/60 bg-background/80 backdrop-blur-sm py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-[1920px] mx-auto space-y-5">

          {/* ── ОСНОВНАЯ СТРОКА ── */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0">

            {/* ЛЕВЫЙ блок — логотип + адрес + кнопки */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:flex-1">
              {/* Логотип — ссылка на главную */}
              <a href="/" className="flex items-center gap-3 flex-none hover:opacity-90 transition-all duration-300 group/logo">
                <div className="w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] flex-none overflow-hidden rounded-full transition-all duration-300 group-hover/logo:drop-shadow-[0_0_16px_rgba(251,191,36,0.65)]">
                  <img
                    src={LOGO_URL}
                    alt="Азимут — Станция техобслуживания — на главную"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/logo:scale-105"
                  />
                </div>
                <div>
                  <div className="font-['Oswald'] text-amber-400 font-bold tracking-wider uppercase text-xl sm:text-2xl leading-none">
                    Азимут
                  </div>
                  <div className="font-['Oswald'] text-amber-400/70 font-medium tracking-wider uppercase text-[10px] sm:text-xs mt-0.5 leading-none">
                    Станция техобслуживания
                  </div>
                </div>
              </a>

              {/* Разделитель */}
              <div className="hidden sm:block w-px h-14 bg-border/40" />

              {/* Адрес + кнопки */}
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <Icon name="MapPin" size={13} className="text-amber-400 flex-none mt-0.5" />
                  <div>
                    <div className="font-mono text-[10px] sm:text-xs text-foreground/80 leading-snug">
                      Санкт-Петербург, шоссе Революции, 83
                    </div>
                  </div>
                </div>
                {/* Кнопки под адресом */}
                <div className="flex flex-wrap gap-2">
                  <a
                    href={MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-600/90 hover:bg-green-500 text-white font-mono text-[9px] sm:text-[10px] tracking-widest transition-colors rounded-sm"
                  >
                    <Icon name="Navigation" size={10} />
                    КАК ПРОЕХАТЬ
                  </a>
                  <button
                    onClick={() => setMapOpen(true)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-border/60 text-muted-foreground hover:text-amber-400 hover:border-amber-400/40 font-mono text-[9px] sm:text-[10px] tracking-widest transition-colors rounded-sm"
                  >
                    <Icon name="Map" size={10} />
                    СХЕМА ПРОЕЗДА
                  </button>
                </div>
              </div>
            </div>

            {/* ЦЕНТРАЛЬНЫЙ блок — режим работы */}
            <div className="flex flex-col items-start md:items-center gap-1 md:flex-1">
              <div className="font-mono text-[8px] text-muted-foreground/40 tracking-widest">РЕЖИМ РАБОТЫ</div>
              <div className="font-mono text-[10px] sm:text-xs text-muted-foreground">ЕЖЕДНЕВНО 10:00–20:00</div>
            </div>

            {/* ПРАВЫЙ блок */}
            <div className="flex flex-col items-start md:items-end gap-2 md:flex-1">
              {showBackButton && onBack && (
                <button
                  onClick={onBack}
                  className="flex items-center gap-2 text-muted-foreground hover:text-amber-400 transition-colors"
                >
                  <Icon name="ArrowLeft" size={13} />
                  <span className="font-mono text-[10px] tracking-widest">НА ГЛАВНУЮ</span>
                </button>
              )}
              <div className="font-mono text-[9px] sm:text-[10px] text-muted-foreground">
                © 2024 АЗИМУТ. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
              </div>

            </div>
          </div>

          {/* ── НИЖНЯЯ СТРОКА — ДИСКЛЕЙМЕР + ТЕЛЕФОН ── */}
          <div className="pt-4 border-t border-border/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="font-mono text-[9px] text-muted-foreground/50 leading-relaxed max-w-xl">
              Информация на сайте не является публичной офертой. Для уточнения цен и условий звоните:
            </p>
            <a
              href="tel:+79675378404"
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/10 border border-amber-400/40 text-amber-400 hover:bg-amber-400/20 transition-colors rounded-sm flex-none"
            >
              <Icon name="Phone" size={13} />
              <span className="font-mono text-[10px] sm:text-xs tracking-wider">+7 (967) 537-84-04</span>
            </a>
          </div>

        </div>
      </footer>
    </>
  );
}