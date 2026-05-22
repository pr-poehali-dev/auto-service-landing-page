import ServicePageLayout from "@/components/ServicePageLayout";

const WORKS = [
  { icon: "Zap", name: "Амортизаторы", desc: "Диагностика и замена передних/задних амортизаторных стоек и вкладышей" },
  { icon: "Circle", name: "Шаровые опоры", desc: "Проверка люфта, замена шаровых опор нижних и верхних рычагов" },
  { icon: "Link", name: "Сайлентблоки", desc: "Замена сайлентблоков рычагов, балки, подрамника — прессовка на стенде" },
  { icon: "GitBranch", name: "Рычаги подвески", desc: "Замена верхних и нижних поперечных и продольных рычагов" },
  { icon: "Disc", name: "Ступичные подшипники", desc: "Диагностика гула, замена ступичных подшипников и ступиц" },
  { icon: "Layers", name: "Пружины и опоры", desc: "Замена пружин подвески, опорных подшипников стоек" },
];

export default function RemontHodovoy() {
  return (
    <ServicePageLayout
      currentPath="/remont-hodovoy"
      title="Ремонт Ходовой Части в Санкт-Петербурге"
      subtitle="Диагностика и ремонт подвески любой сложности. Все марки автомобилей. Гарантия 12 месяцев на работы."
      price="от 1 500 ₽"
      relatedLinks={[
        { title: "Развал-Схождение", path: "/razvalskhozhdenie", desc: "После ремонта ходовой обязательна регулировка углов колёс на 3D-стенде." },
        { title: "Ремонт Рулевых Реек", path: "/remont-rulevyh-reek", desc: "Восстановление рулевой рейки без замены. Гарантия 12 месяцев." },
        { title: "Заправка Кондиционеров", path: "/zapravka-kondicionera", desc: "Заправка фреоном R134a / R1234yf с проверкой герметичности." },
      ]}
    >
      {/* SEO-текст */}
      <article className="mb-10">
        <h2 className="font-['Oswald'] text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-4">
          Диагностика и ремонт подвески автомобиля
        </h2>
        <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
          <p>
            <strong className="text-foreground">Ходовая часть</strong> — один из самых нагруженных узлов автомобиля. Она принимает на себя все удары от дорожных неровностей, обеспечивает контакт колёс с дорогой и влияет на управляемость, комфорт и безопасность движения. Петербургские дороги особенно жёстко нагружают подвеску, поэтому регулярная диагностика здесь особенно важна.
          </p>
          <p>
            В автосервисе <strong className="text-foreground">AGS</strong> проводим полную диагностику ходовой части на подъёмнике: проверяем люфты шаровых опор, состояние сайлентблоков, амортизаторов, пружин и рычагов. По результатам диагностики мастер покажет, что требует замены, и озвучит точную стоимость до начала работ.
          </p>
          <p>
            Тревожные симптомы, при которых следует срочно проверить ходовую: стук или скрип при проезде неровностей, крен кузова при поворотах, вибрация руля на скорости, неравномерный износ шин, «провалы» при торможении. Игнорирование этих признаков может привести к потере управления и дорогостоящему ремонту.
          </p>
          <p>
            Мы находимся по адресу: <strong className="text-foreground">Санкт-Петербург, ул. Симонова, 15</strong>, заезд с Суздальского проспекта. Диагностика подвески — <strong className="text-foreground">бесплатно</strong> при заказе ремонта. Гарантия на все выполненные работы — <strong className="text-foreground">12 месяцев</strong>.
          </p>
        </div>
      </article>

      {/* Виды работ */}
      <section className="mb-10">
        <h2 className="font-['Oswald'] text-xl sm:text-2xl font-bold uppercase tracking-tight mb-5">
          Виды выполняемых работ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WORKS.map((w) => (
            <div key={w.name} className="p-4 border border-border/50 bg-card/30 hover:border-amber-400/30 transition-colors">
              <div className="w-8 h-8 flex items-center justify-center border border-amber-400/30 bg-amber-400/5 mb-3">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-400">
                  <circle cx="12" cy="12" r="10"/>
                </svg>
              </div>
              <h3 className="font-['Oswald'] text-base font-bold uppercase tracking-wide mb-1">{w.name}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Цены */}
      <section className="mb-10">
        <h2 className="font-['Oswald'] text-xl sm:text-2xl font-bold uppercase tracking-tight mb-5">Стоимость работ</h2>
        <div className="border border-border/60 overflow-hidden">
          {[
            { name: "Диагностика ходовой", price: "бесплатно при ремонте" },
            { name: "Замена амортизатора (1 шт.)", price: "от 1 500 ₽" },
            { name: "Замена шаровой опоры", price: "от 1 200 ₽" },
            { name: "Замена сайлентблока рычага", price: "от 900 ₽" },
            { name: "Замена ступичного подшипника", price: "от 2 000 ₽" },
            { name: "Замена рычага подвески", price: "от 2 500 ₽" },
          ].map((row, i) => (
            <div key={i} className={`flex items-center justify-between px-4 py-3 ${i % 2 === 0 ? "bg-card/20" : "bg-background"} border-b border-border/30 last:border-0`}>
              <span className="text-sm text-foreground/80">{row.name}</span>
              <span className="font-['Oswald'] font-bold text-amber-400 text-sm">{row.price}</span>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-xs mt-3 font-mono">* Точная стоимость зависит от марки автомобиля и сложности работ. Стоимость запчастей оговаривается отдельно.</p>
      </section>

      {/* Важно */}
      <section className="p-5 border border-border/50 bg-card/20">
        <h3 className="font-['Oswald'] text-lg font-bold uppercase tracking-wider mb-3">Важно знать</h3>
        <ul className="space-y-2">
          {[
            "После замены деталей подвески обязательна регулировка развала-схождения",
            "Используем только сертифицированные запчасти от проверенных поставщиков",
            "Работаем со всеми типами подвески: МакФерсон, многорычажная, торсионная балка",
            "Гарантия 12 месяцев на все виды работ и установленные запчасти",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-amber-400 flex-none mt-0.5">◈</span>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </ServicePageLayout>
  );
}
