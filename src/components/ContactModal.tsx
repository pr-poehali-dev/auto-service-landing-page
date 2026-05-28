import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const MASTERS = [
  {
    role: "Мастер Развальщик",
    name: "Специалист по геометрии",
    phone: "+79117478057",
    phoneDisplay: "+7 (911) 747-80-57",
    icon: "CircleDot",
    desc: "Развал-схождение, геометрия подвески",
  },
  {
    role: "Мастер Смены",
    name: "Специалист по ходовой",
    phone: "+79218770797",
    phoneDisplay: "+7 (921) 877-07-97",
    icon: "Wrench",
    desc: "Ремонт ходовой, кондиционеры, рейки",
  },
];

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.matchMedia("(max-width: 1023px)").matches);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative z-10 w-full sm:max-w-md mx-4 mb-0 sm:mb-0 border border-border/60 bg-background shadow-2xl"
        style={{ boxShadow: "0 0 60px rgba(0,0,0,0.8)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-border/60">
          <div>
            <div className="font-mono text-[10px] text-amber-400 tracking-[0.2em] mb-1">◈ СВЯЗЬ С МАСТЕРОМ</div>
            <h3 className="font-['Oswald'] text-lg sm:text-xl font-bold uppercase tracking-wider">
              {isMobile ? "Выберите кому позвонить" : "Запись на консультацию"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center border border-border/60 hover:border-amber-400/50 hover:text-amber-400 transition-colors"
          >
            <Icon name="X" size={16} />
          </button>
        </div>

        {/* Masters list */}
        <div className="p-4 sm:p-5 flex flex-col gap-3">
          {MASTERS.map((m) => (
            <div
              key={m.phone}
              className="group border border-border/60 hover:border-amber-400/40 transition-all duration-200 p-4 relative overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-amber-400 group-hover:w-full transition-all duration-400" />

              <div className="flex items-start gap-3 mb-3">
                <div className="flex-none w-9 h-9 border border-amber-400/30 bg-amber-400/5 flex items-center justify-center">
                  <Icon name={m.icon} size={16} className="text-amber-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-[9px] text-muted-foreground/60 tracking-widest mb-0.5">{m.role.toUpperCase()}</div>
                  <div className="font-['Oswald'] text-base font-bold uppercase tracking-wider">{m.role}</div>
                  <div className="text-muted-foreground text-xs mt-0.5">{m.desc}</div>
                </div>
              </div>

              {/* Mobile: call button | Desktop: phone display + whatsapp */}
              {isMobile ? (
                <div className="flex flex-col gap-2">
                  <div className="text-center font-['Oswald'] text-xl font-bold text-amber-400 tracking-wider">
                    {m.phoneDisplay}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={`tel:${m.phone}`}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-amber-400 text-background font-['Oswald'] font-semibold text-sm uppercase tracking-widest hover:bg-amber-300 transition-colors"
                    >
                      <Icon name="Phone" size={14} />
                      Позвонить
                    </a>
                    <a
                      href={`https://wa.me/${m.phone.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-3 py-2.5 border border-green-500/40 text-green-400 hover:bg-green-500/10 transition-colors"
                    >
                      <Icon name="MessageCircle" size={14} />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <a
                    href={`tel:${m.phone}`}
                    className="font-['Oswald'] text-xl font-bold text-amber-400 hover:text-amber-300 transition-colors tracking-wider"
                  >
                    {m.phoneDisplay}
                  </a>
                  <div className="flex gap-2">
                    <a
                      href={`tel:${m.phone}`}
                      className="flex items-center gap-1.5 px-3 py-2 bg-amber-400/10 border border-amber-400/30 text-amber-400 font-mono text-xs hover:bg-amber-400/20 transition-colors"
                    >
                      <Icon name="Phone" size={12} />
                      Звонок
                    </a>
                    <a
                      href={`https://wa.me/${m.phone.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-2 border border-green-500/30 text-green-400 font-mono text-xs hover:bg-green-500/10 transition-colors"
                    >
                      <Icon name="MessageCircle" size={12} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-5 sm:px-6 py-3 border-t border-border/40 bg-card/50">
          <div className="font-mono text-[10px] text-muted-foreground/60 tracking-widest text-center">
            ПН–СБ 8:00–20:00 · ВС 9:00–18:00
          </div>
        </div>
      </div>
    </div>
  );
}