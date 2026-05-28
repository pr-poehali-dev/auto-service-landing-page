import { useState } from "react";
import Icon from "@/components/ui/icon";

const MAP_URL = "https://yandex.ru/maps/2/saint-petersburg/?ll=30.330822%2C60.062673&mode=routes&rtext=60.064812%2C30.320827~60.062631%2C30.330231&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D17091308374&z=17.4";

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
                  ул. Симонова, 15 — заезд с Суздальского проспекта
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
              src="/media78/img/map.jpg"
              alt="Карта проезда AGS Автосервис — ул. Симонова 15, Санкт-Петербург"
              className="w-full h-auto block"
            />
            <div className="px-4 py-3 border-t border-border/60 flex items-center justify-between">
              <span className="font-mono text-[10px] text-muted-foreground">Санкт-Петербург, ул. Симонова, 15</span>
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
                    src="/media78/img/logo-footer.png"
                    alt="AGS Автосервис — на главную"
                    className="w-full h-full object-contain transition-transform duration-300 group-hover/logo:scale-105"
                  />
                </div>
                <div>
                  <div className="font-['Oswald'] text-amber-400 font-bold tracking-wider uppercase text-xl sm:text-2xl leading-none">
                    AGS
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
                      Санкт-Петербург, ул. Симонова, 15
                    </div>
                    <div className="font-mono text-[9px] text-muted-foreground/60 leading-snug">
                      заезд с Суздальского проспекта
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
              <div className="font-mono text-[10px] sm:text-xs text-muted-foreground">ПН–СБ 8:00–20:00</div>
              <div className="font-mono text-[10px] sm:text-xs text-muted-foreground">ВС 9:00–18:00</div>
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
                © 2024 AGS. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
              </div>

            </div>
          </div>

          {/* ── НИЖНЯЯ СТРОКА — ДИСКЛЕЙМЕР + ТЕЛЕФОН ── */}
          <div className="pt-4 border-t border-border/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="font-mono text-[9px] text-muted-foreground/50 leading-relaxed max-w-xl">
              Информация на сайте не является публичной офертой. Для уточнения цен и условий звоните:
            </p>
            <a
              href="tel:+79218770797"
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/10 border border-amber-400/40 text-amber-400 hover:bg-amber-400/20 transition-colors rounded-sm flex-none"
            >
              <Icon name="Phone" size={13} />
              <span className="font-mono text-[10px] sm:text-xs tracking-wider">+7 (921) 877-07-97</span>
            </a>
          </div>

        </div>
      </footer>
    </>
  );
}