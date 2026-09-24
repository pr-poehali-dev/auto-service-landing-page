import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import SEOHead from "@/components/SEOHead";
import SiteFooter from "@/components/SiteFooter";
import { ARTICLE_CATEGORIES, getArticlesByCategory } from "@/data/articles";
import { ARTICLE_CONTENTS } from "@/data/articleContents";
import { getArticleImages } from "@/data/articleImages";

const LOGO_URL = "/media78/img/logo-azimut.png";

export default function Stati() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <SEOHead
        title="Статьи об автоподвеске — 300 тем, Азимут Автосервис СПб"
        description="Развал-схождение, ремонт ходовой, диагностика неисправностей подвески. База знаний автосервиса Азимут: от основ устройства до тюнинга и особенностей марок."
        path="/stati"
      />
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(https://cdn.poehali.dev/projects/46745fea-3775-44bf-b9bf-65fdd59d5b7d/bucket/794df628-917a-44ed-ae2f-a692359b7f22.jpg)" }}
      />
      <div className="fixed inset-0 z-0 bg-background/85" />
      <div className="fixed inset-0 z-0 grid-bg opacity-30" />

      <div className="relative z-10">
        {/* TOP BAR */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
          <div className="flex items-center justify-between px-3 sm:px-4 lg:px-6" style={{ minHeight: "95px" }}>
            <button onClick={() => navigate("/")} className="flex items-center gap-2.5 sm:gap-4 flex-none py-1 hover:opacity-90 transition-all duration-300 group/logo">
              <div className="flex-none w-[78px] h-[78px] sm:w-[85px] sm:h-[85px] flex items-center justify-center overflow-hidden rounded-full transition-all duration-300 group-hover/logo:drop-shadow-[0_0_12px_rgba(251,191,36,0.7)]">
                <img
                  src={LOGO_URL}
                  alt="Азимут — Станция техобслуживания — на главную"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover/logo:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-['Oswald'] text-amber-400 font-bold tracking-wider uppercase leading-none text-xl sm:text-2xl lg:text-3xl">Азимут</span>
                <span className="font-['Oswald'] text-amber-400/70 font-medium tracking-wider uppercase leading-none text-[11px] sm:text-sm lg:text-base mt-0.5 whitespace-nowrap">Станция техобслуживания</span>
              </div>
            </button>

            <span className="font-['Oswald'] text-xs sm:text-sm font-bold tracking-widest text-amber-400 hidden sm:block">
              ◈ СТАТЬИ
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-1.5 px-3 py-1.5 border border-border/60 text-muted-foreground hover:text-amber-400 hover:border-amber-400/40 transition-colors font-mono text-[10px] tracking-widest"
              >
                <Icon name="ArrowLeft" size={11} />
                <span className="hidden sm:inline">ГЛАВНАЯ</span>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-[95px]">

          {/* HERO */}
          <div className="px-4 sm:px-6 lg:px-12 py-10 sm:py-16 border-b border-border/40 bg-gradient-to-br from-card/40 to-background">
            <div className="max-w-[1200px] mx-auto">
              <div className="flex items-center gap-4 mb-3">
                <span className="font-mono text-[10px] text-amber-400 tracking-[0.2em]">/ АЗИМУТ АВТОСЕРВИС /</span>
                <span className="flex-1 h-px bg-border" />
              </div>
              <h1 className="font-['Oswald'] text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-3">
                База <span className="text-amber-400">знаний</span>
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
                Всё о подвеске автомобиля: от устройства и диагностики до тюнинга и особенностей ремонта разных марок. {" "}
                <strong className="text-foreground">300 статей</strong> в 10 разделах.
              </p>
              <div className="mt-6">
                <a
                  href="tel:+79675378404"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 text-background font-['Oswald'] font-semibold text-sm uppercase tracking-widest hover:bg-amber-300 transition-colors"
                >
                  <Icon name="Phone" size={14} />
                  Записаться за 1 звонок
                </a>
              </div>
            </div>
          </div>

          {/* КАТЕГОРИИ + СТАТЬИ */}
          <div className="px-4 sm:px-6 lg:px-12 py-10 sm:py-16 max-w-[1200px] mx-auto space-y-14 sm:space-y-20">
            {ARTICLE_CATEGORIES.map((cat) => {
              const articles = getArticlesByCategory(cat.slug);
              return (
                <section key={cat.slug} id={cat.slug}>
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className="font-['Oswald'] text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight whitespace-nowrap">
                      {cat.title}
                    </h2>
                    <span className="flex-1 h-px bg-border" />
                    <span className="font-mono text-[10px] text-muted-foreground/50 tracking-widest flex-none">
                      {articles.length} СТАТЕЙ
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {articles.map((a) => {
                      const isReady = Boolean(ARTICLE_CONTENTS[a.slug]);
                      const preview = isReady ? getArticleImages(a.title, a.id, 1)[0] : undefined;
                      return (
                        <button
                          key={a.slug}
                          onClick={() => navigate(`/stati/${a.slug}`)}
                          className="group text-left border border-border/40 bg-card/30 hover:border-amber-400/40 hover:bg-card/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                        >
                          {preview && (
                            <img
                              src={preview.url}
                              alt={preview.alt}
                              loading="lazy"
                              className="w-full aspect-video object-cover"
                            />
                          )}
                          <div className="p-4 flex flex-col justify-between flex-1">
                            <h3 className="font-['Oswald'] text-sm font-semibold uppercase tracking-wide leading-snug mb-3 group-hover:text-amber-400 transition-colors">
                              {a.title}
                            </h3>
                            <div className="flex items-center justify-between">
                              <span className="font-mono text-[10px] text-amber-400/80 tracking-wider inline-flex items-center gap-1.5">
                                Читать
                                <Icon name="ArrowRight" size={11} />
                              </span>
                              {isReady && (
                                <span className="font-mono text-[8px] bg-green-500/15 text-green-400 px-1.5 py-0.5 tracking-widest">
                                  ГОТОВО
                                </span>
                              )}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>

          <SiteFooter showBackButton onBack={() => navigate("/")} />
        </div>
      </div>
    </div>
  );
}