import Icon from "@/components/ui/icon";
import { TIRE_SLIDES, SERVICES } from "./homeData";

interface HomeHeroProps {
  activeService: number;
  tireSlide: number;
  tireFade: boolean;
  onContactOpen: () => void;
  onNavigate: (path: string) => void;
  onSetActiveService: (i: number) => void;
  onSetTireSlide: (i: number) => void;
  onSetTireFade: (v: boolean) => void;
}

export default function HomeHero({
  activeService,
  tireSlide,
  tireFade,
  onContactOpen,
  onNavigate,
  onSetActiveService,
  onSetTireSlide,
  onSetTireFade,
}: HomeHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-[120px] sm:pt-[128px]">
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
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-20 py-12 sm:py-16 lg:py-20 flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-12 items-stretch min-h-[calc(100vh-80px)]">

        {/* LEFT: Развал-Схождение крупным заголовком */}
        <div className="flex-1 flex flex-col justify-center order-1 lg:order-1">
          {/* Breadcrumb */}
          <div className="animate-fade-in-up flex items-center gap-3 mb-6 lg:mb-8">
            <span className="font-mono text-[10px] sm:text-xs text-amber-400 tracking-[0.2em] sm:tracking-[0.3em] uppercase">
              ◈ Профессиональный автосервис
            </span>
            <span className="h-[1px] bg-amber-400/30 w-8 sm:w-[60px]" />
          </div>

          {/* Main service heading */}
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
          <div className="animate-fade-in-up delay-400 flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4">
            <button
              onClick={onContactOpen}
              className="animate-pulse-glow relative px-6 sm:px-8 py-3 sm:py-4 bg-amber-400 text-background font-['Oswald'] font-semibold text-base sm:text-lg uppercase tracking-widest hover:bg-amber-300 transition-colors duration-200 corner-bracket"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Icon name="Phone" size={16} />
                Записаться
              </span>
            </button>
            <a
              href="https://yandex.ru/maps/2/saint-petersburg/?ll=30.330822%2C60.062673&mode=routes&rtext=60.064812%2C30.320827~60.062631%2C30.330231&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D17091308374&z=17.4"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-green-600/90 hover:bg-green-500 text-white font-['Oswald'] font-medium text-base sm:text-lg uppercase tracking-widest transition-colors duration-200"
            >
              <span className="flex items-center justify-center gap-2">
                <Icon name="Navigation" size={16} />
                Как проехать
              </span>
            </a>
            <button
              onClick={() => onNavigate("/vse-uslugi")}
              className="px-6 sm:px-8 py-3 sm:py-4 border border-border/60 text-foreground font-['Oswald'] font-medium text-base sm:text-lg uppercase tracking-widest hover:border-amber-400/50 hover:text-amber-400 transition-all duration-200"
            >
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

        {/* CENTER: слайдер износа протектора */}
        <div className="w-full lg:w-[300px] xl:w-[360px] 2xl:w-[420px] lg:flex-none order-2 lg:order-2 flex flex-col self-stretch">
          {/* Шапка */}
          <div className="flex items-center justify-between gap-3 mb-3">
            <span className="font-mono text-[9px] sm:text-[10px] text-amber-400 tracking-[0.2em] uppercase">◈ Диагностика износа</span>
            <span className="font-mono text-[9px] text-muted-foreground/50 tracking-widest">
              {tireSlide + 1} / {TIRE_SLIDES.length}
            </span>
          </div>

          {/* Главный слайдер */}
          <div
            className={`flex-1 relative border ${TIRE_SLIDES[tireSlide].accentColor} bg-card/70 backdrop-blur overflow-hidden flex flex-col min-h-[300px] lg:min-h-0`}
            style={{ transition: "border-color 0.4s" }}
          >
            {/* Фото протектора */}
            <div className="flex-1 relative overflow-hidden">
              <img
                key={tireSlide}
                src={TIRE_SLIDES[tireSlide].img}
                alt={TIRE_SLIDES[tireSlide].label}
                className="absolute inset-0 w-full h-full object-cover object-center"
                style={{ opacity: tireFade ? 1 : 0, transition: "opacity 0.3s ease" }}
              />

              {/* Тёмный градиент снизу */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

              {/* Статус badge */}
              <div
                className={`absolute top-3 right-3 font-mono text-[9px] sm:text-[10px] px-2 py-1 bg-background/90 ${TIRE_SLIDES[tireSlide].statusColor} tracking-wider border border-current/40`}
                style={{ opacity: tireFade ? 1 : 0, transition: "opacity 0.3s ease" }}
              >
                {TIRE_SLIDES[tireSlide].status}
              </div>

              {/* Код слайда */}
              <div className="absolute top-3 left-3 font-mono text-[8px] text-muted-foreground/50 tracking-widest bg-background/60 px-1.5 py-0.5">
                {TIRE_SLIDES[tireSlide].code}
              </div>

              {/* Индикаторы износа по бокам */}
              <div className="absolute left-0 top-0 bottom-0 w-1 flex flex-col">
                <div
                  className={`flex-1 transition-colors duration-500 ${
                    TIRE_SLIDES[tireSlide].wearSide === "inner" ? "bg-red-500/70" : "bg-transparent"
                  }`}
                />
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-1 flex flex-col">
                <div
                  className={`flex-1 transition-colors duration-500 ${
                    TIRE_SLIDES[tireSlide].wearSide === "outer" ? "bg-red-500/70" : "bg-transparent"
                  }`}
                />
              </div>
            </div>

            {/* Нижняя информационная панель */}
            <div
              className="p-3 sm:p-4 border-t border-border/40 bg-background/80 backdrop-blur"
              style={{ opacity: tireFade ? 1 : 0, transition: "opacity 0.3s ease" }}
            >
              <h4 className="font-['Oswald'] text-sm sm:text-base lg:text-lg font-bold uppercase tracking-wider mb-1 leading-tight">
                {TIRE_SLIDES[tireSlide].label}
              </h4>
              <p className={`font-mono text-[10px] sm:text-[11px] leading-relaxed ${TIRE_SLIDES[tireSlide].statusColor}`}>
                {TIRE_SLIDES[tireSlide].diagnosis}
              </p>

              {/* Прогресс-бар + точки */}
              <div className="flex items-center gap-2 mt-3">
                <div className="flex gap-1.5 flex-none">
                  {TIRE_SLIDES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { onSetTireFade(false); setTimeout(() => { onSetTireSlide(i); onSetTireFade(true); }, 200); }}
                      className={`h-[3px] transition-all duration-300 ${
                        i === tireSlide
                          ? `w-6 ${TIRE_SLIDES[tireSlide].barBg}`
                          : "w-3 bg-border hover:bg-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex-1 h-[1px] bg-border/40" />
                <span className="font-mono text-[8px] text-muted-foreground/40 tracking-widest">AUTO</span>
              </div>
            </div>
          </div>

          {/* Кнопка перехода */}
          <button
            onClick={() => onNavigate("/tire-wear")}
            className="mt-3 w-full flex items-center justify-between px-3 sm:px-4 py-2.5 border border-amber-400/30 bg-amber-400/5 hover:bg-amber-400/10 hover:border-amber-400/60 transition-all duration-200 group"
          >
            <div className="text-left">
              <div className="font-mono text-[8px] sm:text-[9px] text-amber-400/60 tracking-widest mb-0.5">ПОДРОБНЕЕ</div>
              <span className="font-['Oswald'] text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-400">
                Виды износа и неисправности →
              </span>
            </div>
            <Icon name="ExternalLink" size={13} className="text-amber-400 flex-none group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* RIGHT: слоган + панель услуг — слегка не в фокусе */}
        <div
          className="flex-1 flex flex-col justify-center gap-6 order-3 lg:order-3 w-full lg:max-w-[400px] xl:max-w-[480px] 2xl:max-w-[560px]"
          style={{ opacity: 0.72, filter: "blur(0.4px)" }}
        >
          {/* Слоган */}
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
            <div className="flex items-center justify-end mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-border/40">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-[10px] sm:text-xs text-green-400/70 tracking-widest">ОНЛАЙН</span>
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
                <div className="font-['Oswald'] text-xl sm:text-2xl font-bold text-amber-400">
                  {SERVICES[activeService].price}
                </div>
              </div>
              <button
                onClick={() => onNavigate(SERVICES[activeService].path)}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-amber-400/10 border border-amber-400/40 text-amber-400 font-['Oswald'] text-xs sm:text-sm uppercase tracking-widest hover:bg-amber-400/20 transition-colors"
              >
                Подробнее →
              </button>
            </div>

            {/* Navigation dots */}
            <div className="flex gap-2 mt-4 sm:mt-6">
              {SERVICES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => onSetActiveService(i)}
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
  );
}