import { useParams, useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import SEOHead from "@/components/SEOHead";
import SiteFooter from "@/components/SiteFooter";
import NotFound from "@/pages/NotFound";
import { ARTICLE_CATEGORIES, ARTICLES, getArticleBySlug, getArticlesByCategory } from "@/data/articles";

const LOGO_URL = "/media78/img/logo-azimut.png";

export default function StatiArticle() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <NotFound />;
  }

  const category = ARTICLE_CATEGORIES.find((c) => c.slug === article.category);
  const sameCategory = getArticlesByCategory(article.category).filter((a) => a.slug !== article.slug);

  // Соседние статьи той же категории — до 6 штук для быстрого перехода
  const relatedArticles = sameCategory.slice(0, 6);

  // Ещё немного статей из других категорий, если в текущей их мало
  const otherArticles =
    relatedArticles.length < 6
      ? ARTICLES.filter((a) => a.category !== article.category).slice(0, 6 - relatedArticles.length)
      : [];

  const suggestions = [...relatedArticles, ...otherArticles];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <SEOHead
        title={`${article.title} — Азимут Автосервис СПб`}
        description={`${article.title}. Статья из раздела «${category?.title ?? ""}» — база знаний автосервиса Азимут о ремонте и диагностике подвески.`}
        path={`/stati/${article.slug}`}
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

            <div className="flex items-center gap-2">
              <button
                onClick={() => navigate("/stati")}
                className="flex items-center gap-1.5 px-3 py-1.5 border border-border/60 text-muted-foreground hover:text-amber-400 hover:border-amber-400/40 transition-colors font-mono text-[10px] tracking-widest"
              >
                <Icon name="ArrowLeft" size={11} />
                <span className="hidden sm:inline">ВСЕ СТАТЬИ</span>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-[95px]">

          {/* Хлебные крошки */}
          <div className="px-4 sm:px-6 lg:px-12 py-3 border-b border-border/30 bg-card/20">
            <div className="max-w-[840px] mx-auto flex items-center gap-2 font-mono text-[10px] text-muted-foreground/60 flex-wrap">
              <button onClick={() => navigate("/")} className="hover:text-amber-400 transition-colors">Главная</button>
              <span>/</span>
              <button onClick={() => navigate("/stati")} className="hover:text-amber-400 transition-colors">Статьи</button>
              {category && (
                <>
                  <span>/</span>
                  <button onClick={() => navigate(`/stati#${category.slug}`)} className="hover:text-amber-400 transition-colors">{category.title}</button>
                </>
              )}
            </div>
          </div>

          {/* Заголовок */}
          <div className="px-4 sm:px-6 lg:px-12 py-8 sm:py-12 border-b border-border/40 bg-gradient-to-br from-card/40 to-background">
            <div className="max-w-[840px] mx-auto">
              <div className="flex items-center gap-4 mb-3">
                <span className="font-mono text-[10px] text-amber-400 tracking-[0.2em] uppercase">
                  {category?.title ?? "Статья"}
                </span>
                <span className="flex-1 h-px bg-border" />
              </div>
              <h1 className="font-['Oswald'] text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-tight">
                {article.title}
              </h1>
            </div>
          </div>

          {/* Заглушка контента */}
          <div className="px-4 sm:px-6 lg:px-12 py-10 sm:py-14 max-w-[840px] mx-auto">
            <div className="p-6 sm:p-8 border border-amber-400/20 bg-amber-400/5 flex flex-col sm:flex-row items-start gap-5">
              <div className="w-12 h-12 flex-none flex items-center justify-center border border-amber-400/30 bg-amber-400/10">
                <Icon name="PenLine" size={20} className="text-amber-400" />
              </div>
              <div>
                <h2 className="font-['Oswald'] text-lg sm:text-xl font-bold uppercase tracking-wide mb-2 text-amber-400">
                  Статья готовится
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Мы работаем над подробным материалом на тему «{article.title.replace(/\?$/, "")}». Скоро здесь появится развёрнутый разбор от мастеров автосервиса Азимут — с примерами из практики, фотографиями и рекомендациями.
                </p>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mt-3">
                  А если вопрос актуален прямо сейчас — не ждите публикации, позвоните нам: разберём вашу ситуацию бесплатно по телефону.
                </p>
              </div>
            </div>

            <a
              href="tel:+79675378404"
              className="mt-6 flex items-center justify-center gap-2 px-6 py-4 bg-amber-400 text-background font-['Oswald'] font-semibold text-base uppercase tracking-widest hover:bg-amber-300 transition-colors w-full sm:w-auto"
            >
              <Icon name="Phone" size={16} />
              Записаться за 1 звонок
            </a>
          </div>

          {/* Другие темы статей — быстрый переход */}
          {suggestions.length > 0 && (
            <section className="px-4 sm:px-6 lg:px-12 py-10 sm:py-14 border-t border-border/40 bg-card/20">
              <div className="max-w-[1200px] mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-[10px] text-amber-400 tracking-[0.2em]">/ ЧИТАЙТЕ ТАКЖЕ /</span>
                  <span className="flex-1 h-px bg-border" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {suggestions.map((a) => (
                    <button
                      key={a.slug}
                      onClick={() => navigate(`/stati/${a.slug}`)}
                      className="group text-left border border-border/50 hover:border-amber-400/40 bg-background/50 hover:bg-amber-400/5 transition-all duration-300 p-4 flex flex-col justify-between"
                    >
                      <h3 className="font-['Oswald'] text-sm font-bold uppercase tracking-wider leading-snug mb-2 group-hover:text-amber-400 transition-colors">
                        {a.title}
                      </h3>
                      <span className="font-mono text-[10px] text-amber-400 tracking-wider">Подробнее →</span>
                    </button>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <button
                    onClick={() => navigate("/stati")}
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-amber-400/40 text-amber-400 font-['Oswald'] font-medium text-xs uppercase tracking-widest hover:bg-amber-400/10 transition-colors"
                  >
                    Все статьи
                    <Icon name="ArrowRight" size={12} />
                  </button>
                </div>
              </div>
            </section>
          )}

          <SiteFooter showBackButton onBack={() => navigate("/")} />
        </div>
      </div>
    </div>
  );
}
