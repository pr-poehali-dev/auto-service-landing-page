import { useState } from "react";
import Icon from "@/components/ui/icon";

interface LeadModalProps {
  open: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  phone: string;
  car: string;
  year: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  car?: string;
  year?: string;
}

export default function LeadModal({ open, onClose }: LeadModalProps) {
  const [form, setForm] = useState<FormData>({ name: "", phone: "", car: "", year: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState("");

  if (!open) return null;

  function validate(): boolean {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Введите ваше имя";
    if (!form.phone.trim()) {
      e.phone = "Введите номер телефона";
    } else if (!/^[\d\s+\-()]{7,}$/.test(form.phone.trim())) {
      e.phone = "Некорректный номер телефона";
    }
    if (!form.car.trim()) e.car = "Введите модель автомобиля";
    if (!form.year.trim()) {
      e.year = "Введите год выпуска";
    } else {
      const y = parseInt(form.year);
      if (isNaN(y) || y < 1970 || y > new Date().getFullYear()) {
        e.year = "Год от 1970 до " + new Date().getFullYear();
      }
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    setServerError("");
    try {
      const res = await fetch("https://functions.poehali.dev/b262cd04-21dc-4d6e-b19e-4ca1d7c35834", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Ошибка сервера");
      setSent(true);
    } catch {
      setServerError("Не удалось отправить. Попробуйте ещё раз или позвоните нам.");
    } finally {
      setSending(false);
    }
  }

  function handleClose() {
    setForm({ name: "", phone: "", car: "", year: "" });
    setErrors({});
    setSent(false);
    setServerError("");
    onClose();
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-background border border-border/80 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border/60">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex-none overflow-hidden">
              <img
                src="/media78/img/logo.png"
                alt="AGS"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="font-mono text-[9px] text-amber-400 tracking-widest">◈ AGS / ЗАЯВКА</div>
              <h2 className="font-['Oswald'] text-lg font-bold uppercase tracking-wider leading-none">
                Оставить заявку
              </h2>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground border border-border/40 hover:border-border transition-colors"
          >
            <Icon name="X" size={16} />
          </button>
        </div>

        {sent ? (
          /* Успешная отправка */
          <div className="px-5 py-10 flex flex-col items-center text-center gap-4">
            <div className="w-14 h-14 rounded-full bg-green-400/10 border border-green-400/30 flex items-center justify-center">
              <Icon name="CheckCircle" size={28} className="text-green-400" />
            </div>
            <div>
              <h3 className="font-['Oswald'] text-xl font-bold uppercase tracking-wider text-green-400 mb-1">
                Заявка принята!
              </h3>
              <p className="text-muted-foreground text-sm">
                Мы свяжемся с вами в ближайшее время.
              </p>
            </div>
            <button
              onClick={handleClose}
              className="mt-2 px-6 py-2.5 bg-amber-400 text-background font-['Oswald'] font-semibold text-sm uppercase tracking-widest hover:bg-amber-300 transition-colors"
            >
              Закрыть
            </button>
          </div>
        ) : (
          /* Форма */
          <form onSubmit={handleSubmit} noValidate>
            <div className="px-5 py-5 space-y-4">
              {/* Имя */}
              <div>
                <label className="block font-mono text-[9px] text-muted-foreground/60 tracking-widest mb-1.5">
                  ИМЯ *
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => { setForm(f => ({ ...f, name: e.target.value })); setErrors(er => ({ ...er, name: undefined })); }}
                  placeholder="Иван Иванов"
                  className={`w-full bg-card/50 border px-3 py-2.5 text-sm font-['Oswald'] tracking-wide outline-none transition-colors placeholder:text-muted-foreground/30 ${errors.name ? "border-red-400/60 focus:border-red-400" : "border-border/60 focus:border-amber-400/60"}`}
                />
                {errors.name && <p className="mt-1 text-red-400 text-[10px] font-mono">{errors.name}</p>}
              </div>

              {/* Телефон */}
              <div>
                <label className="block font-mono text-[9px] text-muted-foreground/60 tracking-widest mb-1.5">
                  ТЕЛЕФОН *
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => { setForm(f => ({ ...f, phone: e.target.value })); setErrors(er => ({ ...er, phone: undefined })); }}
                  placeholder="+7 (999) 000-00-00"
                  className={`w-full bg-card/50 border px-3 py-2.5 text-sm font-['Oswald'] tracking-wide outline-none transition-colors placeholder:text-muted-foreground/30 ${errors.phone ? "border-red-400/60 focus:border-red-400" : "border-border/60 focus:border-amber-400/60"}`}
                />
                {errors.phone && <p className="mt-1 text-red-400 text-[10px] font-mono">{errors.phone}</p>}
              </div>

              {/* Модель авто */}
              <div>
                <label className="block font-mono text-[9px] text-muted-foreground/60 tracking-widest mb-1.5">
                  МОДЕЛЬ АВТОМОБИЛЯ *
                </label>
                <input
                  type="text"
                  value={form.car}
                  onChange={(e) => { setForm(f => ({ ...f, car: e.target.value })); setErrors(er => ({ ...er, car: undefined })); }}
                  placeholder="Toyota Camry"
                  className={`w-full bg-card/50 border px-3 py-2.5 text-sm font-['Oswald'] tracking-wide outline-none transition-colors placeholder:text-muted-foreground/30 ${errors.car ? "border-red-400/60 focus:border-red-400" : "border-border/60 focus:border-amber-400/60"}`}
                />
                {errors.car && <p className="mt-1 text-red-400 text-[10px] font-mono">{errors.car}</p>}
              </div>

              {/* Год выпуска */}
              <div>
                <label className="block font-mono text-[9px] text-muted-foreground/60 tracking-widest mb-1.5">
                  ГОД ВЫПУСКА *
                </label>
                <input
                  type="number"
                  value={form.year}
                  onChange={(e) => { setForm(f => ({ ...f, year: e.target.value })); setErrors(er => ({ ...er, year: undefined })); }}
                  placeholder="2020"
                  min="1970"
                  max={new Date().getFullYear()}
                  className={`w-full bg-card/50 border px-3 py-2.5 text-sm font-['Oswald'] tracking-wide outline-none transition-colors placeholder:text-muted-foreground/30 ${errors.year ? "border-red-400/60 focus:border-red-400" : "border-border/60 focus:border-amber-400/60"}`}
                />
                {errors.year && <p className="mt-1 text-red-400 text-[10px] font-mono">{errors.year}</p>}
              </div>

              {serverError && (
                <p className="text-red-400 text-xs font-mono bg-red-400/5 border border-red-400/20 px-3 py-2">
                  {serverError}
                </p>
              )}
            </div>

            {/* Footer */}
            <div className="px-5 pb-5 flex gap-3">
              <button
                type="button"
                onClick={handleClose}
                className="flex-1 py-2.5 border border-border/60 text-muted-foreground font-['Oswald'] font-medium text-sm uppercase tracking-widest hover:border-border hover:text-foreground transition-colors"
              >
                Отмена
              </button>
              <button
                type="submit"
                disabled={sending}
                className="flex-[2] flex items-center justify-center gap-2 py-2.5 bg-amber-400 text-background font-['Oswald'] font-semibold text-sm uppercase tracking-widest hover:bg-amber-300 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
              >
                {sending ? (
                  <>
                    <Icon name="Loader2" size={14} className="animate-spin" />
                    Отправка...
                  </>
                ) : (
                  <>
                    <Icon name="Send" size={14} />
                    Отправить заявку
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}