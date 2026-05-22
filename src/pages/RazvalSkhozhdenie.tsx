import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import ServicePageLayout from "@/components/ServicePageLayout";

const STEPS = [
  { num: "01", title: "Установка на стенд", desc: "Автомобиль заезжает на подъёмник, на колёса крепятся мишени Technovector" },
  { num: "02", title: "Измерение углов", desc: "Система автоматически фиксирует развал, схождение, кастер для каждого колеса" },
  { num: "03", title: "Анализ и регулировка", desc: "Мастер регулирует углы в соответствии с допусками завода-изготовителя. Опыт специалиста — более 10 лет" },
  { num: "04", title: "Контрольный замер", desc: "Повторное измерение подтверждает точность. Клиент получает распечатку до/после" },
];

const FAQ = [
  {
    q: "Как часто нужно делать развал-схождение?",
    a: "Рекомендуется проверять каждые 15 000–20 000 км или после значительных ударов о бордюр, ямы, ДТП. Также обязательно — после замены деталей подвески или рулевого управления.",
  },
  {
    q: "Делаете ли развал-схождение для ВАЗ, Lada Granta, Приора, Самара?",
    a: "Да, мы специализируемся на регулировке развала, схождения и кастера для всех переднеприводных автомобилей ВАЗ: Lada Granta, Приора, Самара, Калина, Веста и других моделей.",
  },
  {
    q: "Можно ли сделать спортивный развал на переднеприводную Ладу?",
    a: "Да. Мы вытянем ходовую вашего автомобиля таким образом, чтобы он уверенно держал дорогу и стабильно входил в повороты. Приезжайте — обсудим параметры под ваш стиль езды.",
  },
  {
    q: "Сколько времени занимает процедура?",
    a: "Полная проверка и регулировка двух осей занимает 40–60 минут. Если требуется дополнительный ремонт деталей подвески — обсуждается отдельно.",
  },
  {
    q: "Что будет, если не делать развал-схождение?",
    a: "Неравномерный износ шин (стоимость новой резины — от 10 000 ₽), рост расхода топлива на 10–15%, ухудшение управляемости и нагрузка на подшипники и рычаги.",
  },
];

export default function RazvalSkhozhdenie() {
  const navigate = useNavigate();

  return (
    <ServicePageLayout
      currentPath="/razvalskhozhdenie"
      title="Развал-Схождение 3D в Санкт-Петербурге — AGS Автосервис"
      subtitle="Поверенный и калиброванный стенд Техно Вектор. Точность до 0.01°. Кастер, развал и схождение передней и задней оси. Недорого."
      price="от 2 500 ₽"
      relatedLinks={[
        { title: "Ремонт Ходовой Части", path: "/remont-hodovoy", desc: "Диагностика, замена амортизаторов, шаровых опор, рычагов и сайлентблоков." },
        { title: "Виды износа шин", path: "/tire-wear", desc: "По характеру стирания протектора определяем нарушения геометрии подвески." },
        { title: "Ремонт Рулевых Реек", path: "/remont-rulevyh-reek", desc: "Восстановление рулевой рейки без замены. Гарантия и качество всех видов работ и запчастей." },
      ]}
    >

      {/* ── БЛОК 1: Стенд Техно Вектор ── */}
      <article className="mb-10">
        <h2 className="font-['Oswald'] text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-5">
          3D-стенд Техно Вектор — поверенный и калиброванный
        </h2>
        <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
          <p>
            У нас поверенный и калиброванный стенд <strong className="text-foreground">3D развала-схождения Техно Вектор</strong>. Он обеспечивает идеальную точность и скорость регулировки как передней, так и задней оси. <strong className="text-foreground">3D Техно Вектор</strong> сканирует ваши диски и углы наклона колёс с точностью до миллиметра — и сравнивает их между собой, а не со стандартом «идеального» автомобиля из базы данных.
          </p>
          <p>
            Мы делаем <strong className="text-foreground">развал-схождение и регулируем кастер</strong> на переднеприводных автомобилях <strong className="text-foreground">ВАЗ Lada</strong>: Granta (Гранта), Самара, Приора (Priora), а также выполняем диагностику и ремонт ходовой. <strong className="text-foreground">Недорого.</strong>
          </p>
          <p>
            Если вы хотите сделать <strong className="text-foreground">спортивный развал-схождение</strong> на свою переднеприводную Ладу — приезжайте. Мы вытянем вашу ходовую таким образом, что автомобиль будет уверенно держать дорогу и стабильно входить в повороты.
          </p>
        </div>

        {/* Акцентный блок с ценой */}
        <div className="mt-6 p-4 border border-amber-400/30 bg-amber-400/5 flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
          <div className="flex items-center gap-3">
            <Icon name="Star" size={16} className="text-amber-400 flex-none" />
            <p className="text-sm font-medium text-foreground">
              У нас очень демократичные цены на ремонт подвески, ТО и сервис —{" "}
              <a href="tel:+79117478057" className="text-amber-400 hover:underline">позвони и проверь прямо сейчас</a>
            </p>
          </div>
          <a
            href="tel:+79117478057"
            className="flex-none flex items-center gap-2 px-4 py-2 bg-amber-400 text-background font-['Oswald'] font-semibold text-sm uppercase tracking-widest hover:bg-amber-300 transition-colors"
          >
            <Icon name="Phone" size={14} />
            Позвонить
          </a>
        </div>
      </article>

      {/* ── БЛОК 2: Если машина ведёт себя не так ── */}
      <article className="mb-10">
        <h2 className="font-['Oswald'] text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-5">
          Если машина ведёт себя не так...
        </h2>
        <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
          <p>
            <strong className="text-foreground">Слушайте свой автомобиль.</strong> Если он шуршит при поворотах, едет неровно или расходует больше топлива — это не просто «проблема дня». Это сигнал о том, что его геометрия нарушена.
          </p>
          <p>
            Мы используем для диагностики и измерения углов развала и схождения <strong className="text-foreground">3D-стенд Техно Вектор</strong>. Регулировку углов схождения выполняет специалист-мастер с опытом более <strong className="text-foreground">10 лет</strong>.
          </p>
        </div>

        {/* Почему важно — иконки */}
        <h3 className="font-['Oswald'] text-lg font-bold uppercase tracking-wider mt-6 mb-4">Почему это важно?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: "CircleAlert",
              title: "Шины изнашиваются неравномерно",
              desc: "Центральная или боковая часть протектора быстро стирается — замена резины обойдётся от 10 000 ₽",
            },
            {
              icon: "Fuel",
              title: "Расход топлива растёт",
              desc: "Машина «тратит» больше энергии на неэффективное движение — потери до 10–15% от нормы",
            },
            {
              icon: "ShieldAlert",
              title: "Безопасность снижается",
              desc: "Нарушенная геометрия и углы развала колёс влияют на управляемость и реакцию авто",
            },
          ].map((item) => (
            <div key={item.title} className="p-4 border border-border/50 bg-card/30 backdrop-blur-sm">
              <div className="w-8 h-8 flex items-center justify-center border border-amber-400/30 bg-amber-400/5 mb-3">
                <Icon name={item.icon} size={14} className="text-amber-400" />
              </div>
              <h4 className="font-['Oswald'] text-sm font-bold uppercase tracking-wide mb-1">{item.title}</h4>
              <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
          <p>
            Мы не просто настраиваем углы схождения. Мы начинаем с <strong className="text-foreground">полной диагностики ходовой части</strong>, чтобы найти и устранить изношенные детали, которые могут создавать люфты и искажать результат настройки.
          </p>
          <p>
            Если вы игнорируете проблему, стоимость новой резины может составить <strong className="text-foreground">10 000–15 000 ₽ и более</strong>. Наша комплексная услуга развал-схождение на 3D-стенде — это инвестиция в безопасность и комфорт, которая стоит в разы дешевле.
          </p>
          <p className="font-medium text-foreground">
            Не ждите, пока проблема усугубится. Записывайтесь на диагностику прямо сейчас.
          </p>
        </div>
      </article>

      {/* ── ЭТАПЫ РАБОТЫ ── */}
      <section className="mb-10">
        <h2 className="font-['Oswald'] text-xl sm:text-2xl font-bold uppercase tracking-tight mb-5">
          Как проходит регулировка развала-схождения
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {STEPS.map((s) => (
            <div key={s.num} className="flex gap-4 p-4 border border-border/50 bg-card/30 backdrop-blur-sm">
              <div className="font-['Oswald'] text-3xl font-bold text-amber-400/30 leading-none flex-none">{s.num}</div>
              <div>
                <div className="font-['Oswald'] text-base font-bold uppercase tracking-wider mb-1">{s.title}</div>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ЦЕНЫ ── */}
      <section className="mb-10">
        <h2 className="font-['Oswald'] text-xl sm:text-2xl font-bold uppercase tracking-tight mb-5">
          Стоимость развала-схождения в СПб
        </h2>
        <div className="border border-border/60 overflow-hidden">
          {[
            { name: "Развал-схождение 3D (2 оси)", price: "от 2 500 ₽" },
            { name: "Развал-схождение + диагностика ходовой", price: "от 3 000 ₽" },
            { name: "Регулировка 1 оси", price: "от 1 500 ₽" },
            { name: "Кастер (регулировка, при наличии регулировки)", price: "уточняйте" },
            { name: "Распечатка протокола до/после", price: "включено" },
          ].map((row, i) => (
            <div key={i} className={`flex items-center justify-between px-4 py-3 ${i % 2 === 0 ? "bg-card/20" : "bg-background/20"} border-b border-border/30 last:border-0`}>
              <span className="text-sm text-foreground/80">{row.name}</span>
              <span className="font-['Oswald'] font-bold text-amber-400 text-sm">{row.price}</span>
            </div>
          ))}
        </div>
        <p className="font-mono text-[9px] text-muted-foreground/50 mt-2">
          * Точная стоимость зависит от марки и модели автомобиля. Цены уточняйте по телефону.
        </p>
      </section>

      {/* ── FAQ ── */}
      <section className="mb-10">
        <h2 className="font-['Oswald'] text-xl sm:text-2xl font-bold uppercase tracking-tight mb-5">
          Частые вопросы о развале-схождении
        </h2>
        <div className="space-y-3">
          {FAQ.map((item, i) => (
            <div key={i} className="border border-border/50 p-4 bg-card/20 backdrop-blur-sm">
              <h3 className="font-['Oswald'] text-sm sm:text-base font-bold uppercase tracking-wide mb-2 text-amber-400">{item.q}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ПЕРЕЛИНКОВКА — ИЗНОС ШИН ── */}
      <section className="p-5 border border-amber-400/20 bg-amber-400/5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div>
            <div className="font-mono text-[9px] text-amber-400 tracking-widest mb-1">СВЯЗАННЫЙ МАТЕРИАЛ</div>
            <h3 className="font-['Oswald'] text-lg font-bold uppercase tracking-wider">Виды износа шин и что они означают</h3>
            <p className="text-muted-foreground text-xs mt-1">По характеру стирания протектора можно определить, какой именно угол нарушен — ещё до замеров на стенде.</p>
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