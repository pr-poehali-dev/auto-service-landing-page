import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import ServicePageLayout from "@/components/ServicePageLayout";

const STEPS = [
  { num: "01", title: "Установка на стенд", desc: "Автомобиль заезжает на подъёмник, на колёса крепятся мишени Technovector" },
  { num: "02", title: "Измерение углов", desc: "Система автоматически фиксирует развал, схождение, кастер для каждого колеса" },
  { num: "03", title: "Анализ и регулировка", desc: "Мастер регулирует углы в соответствии с допусками завода-изготовителя" },
  { num: "04", title: "Контрольный замер", desc: "Повторное измерение подтверждает точность. Клиент получает распечатку до/после" },
];

const FAQ = [
  {
    q: "Как часто нужно делать развал-схождение?",
    a: "Рекомендуется проверять каждые 15 000–20 000 км или после значительных ударов о бордюр, ямы, ДТП. Также обязательно — после замены деталей подвески или рулевого управления.",
  },
  {
    q: "Сколько времени занимает процедура?",
    a: "Полная проверка и регулировка занимает 40–60 минут. Если требуется дополнительный ремонт деталей подвески — обсуждается отдельно.",
  },
  {
    q: "Что будет, если не делать развал-схождение?",
    a: "Неправильные углы приводят к ускоренному и неравномерному износу шин, увеличению расхода топлива на 10–15%, ухудшению управляемости и нагрузке на подшипники.",
  },
];

export default function RazvalSkhozhdenie() {
  const navigate = useNavigate();

  return (
    <ServicePageLayout
      currentPath="/razvalskhozhdenie"
      title="Развал-Схождение в Санкт-Петербурге"
      subtitle="3D-стенд Technovector. Точность измерения до 0.01°. Работаем со всеми марками и моделями автомобилей."
      price="от 2 500 ₽"
      relatedLinks={[
        { title: "Ремонт Ходовой Части", path: "/remont-hodovoy", desc: "Диагностика, замена амортизаторов, шаровых опор, рычагов и сайлентблоков." },
        { title: "Ремонт Рулевых Реек", path: "/remont-rulevyh-reek", desc: "Восстановление рулевой рейки без замены. Гарантия 12 месяцев." },
        { title: "Заправка Кондиционеров", path: "/zapravka-kondicionera", desc: "Заправка фреоном R134a / R1234yf. Проверка герметичности." },
      ]}
    >
      {/* SEO-текст */}
      <article className="mb-10">
        <h2 className="font-['Oswald'] text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-4">
          Что такое развал-схождение и зачем его делать?
        </h2>
        <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
          <p>
            <strong className="text-foreground">Развал-схождение</strong> — это регулировка углов установки колёс относительно дороги и кузова автомобиля. Правильно выставленные углы обеспечивают равномерный контакт шины с покрытием, минимизируют износ протектора и снижают нагрузку на все элементы ходовой части.
          </p>
          <p>
            В автосервисе <strong className="text-foreground">AGS</strong> мы используем профессиональный 3D-стенд <strong className="text-foreground">Technovector</strong> — одну из лучших систем на рынке с точностью измерения до <strong className="text-foreground">0.01°</strong>. Это позволяет выявить даже минимальные отклонения от заводских норм и устранить их до того, как начнётся ускоренный износ шин.
          </p>
          <p>
            Признаки того, что пора делать развал-схождение: автомобиль уводит в сторону при движении по прямой, шины изнашиваются с одного края быстрее, руль не возвращается в центральное положение, увеличился расход топлива. Все эти симптомы — прямое следствие неправильных углов колёс.
          </p>
          <p>
            Наш сервис находится в <strong className="text-foreground">Санкт-Петербурге на улице Симонова, 15</strong>, заезд с Суздальского проспекта. Мы работаем без выходных и принимаем автомобили всех марок: отечественные, японские, европейские, корейские и американские.
          </p>
        </div>
      </article>

      {/* Этапы работы */}
      <section className="mb-10">
        <h2 className="font-['Oswald'] text-xl sm:text-2xl font-bold uppercase tracking-tight mb-5">
          Как проходит процедура
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {STEPS.map((s) => (
            <div key={s.num} className="flex gap-4 p-4 border border-border/50 bg-card/30">
              <div className="font-['Oswald'] text-3xl font-bold text-amber-400/30 leading-none flex-none">{s.num}</div>
              <div>
                <div className="font-['Oswald'] text-base font-bold uppercase tracking-wider mb-1">{s.title}</div>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Цены */}
      <section className="mb-10">
        <h2 className="font-['Oswald'] text-xl sm:text-2xl font-bold uppercase tracking-tight mb-5">Стоимость услуг</h2>
        <div className="border border-border/60 overflow-hidden">
          {[
            { name: "Развал-схождение (2 оси)", price: "от 2 500 ₽" },
            { name: "Развал-схождение + проверка ходовой", price: "от 3 000 ₽" },
            { name: "Регулировка 1 оси", price: "от 1 500 ₽" },
            { name: "Распечатка протокола до/после", price: "включено" },
          ].map((row, i) => (
            <div key={i} className={`flex items-center justify-between px-4 py-3 ${i % 2 === 0 ? "bg-card/20" : "bg-background"} border-b border-border/30 last:border-0`}>
              <span className="text-sm text-foreground/80">{row.name}</span>
              <span className="font-['Oswald'] font-bold text-amber-400 text-sm">{row.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="font-['Oswald'] text-xl sm:text-2xl font-bold uppercase tracking-tight mb-5">Частые вопросы</h2>
        <div className="space-y-4">
          {FAQ.map((item, i) => (
            <div key={i} className="border border-border/50 p-4 bg-card/20">
              <h3 className="font-['Oswald'] text-base font-bold uppercase tracking-wide mb-2 text-amber-400">{item.q}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Диагностика износа — перелинковка */}
      <section className="p-5 border border-amber-400/20 bg-amber-400/5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div>
            <div className="font-mono text-[9px] text-amber-400 tracking-widest mb-1">СВЯЗАННЫЙ МАТЕРИАЛ</div>
            <h3 className="font-['Oswald'] text-lg font-bold uppercase tracking-wider">Виды износа шин и что они означают</h3>
            <p className="text-muted-foreground text-xs mt-1">По характеру стирания протектора можно определить, какой именно угол нарушен ещё до замеров.</p>
          </div>
          <button
            onClick={() => navigate("/tire-wear")}
            className="flex-none flex items-center gap-2 px-4 py-2 border border-amber-400/40 text-amber-400 font-mono text-[11px] tracking-widest hover:bg-amber-400/10 transition-colors"
          >
            <Icon name="ArrowRight" size={12} />
            СМОТРЕТЬ
          </button>
        </div>
      </section>
    </ServicePageLayout>
  );
}
