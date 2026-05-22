import ServicePageLayout from "@/components/ServicePageLayout";

export default function RemontRulevyhReek() {
  return (
    <ServicePageLayout
      currentPath="/remont-rulevyh-reek"
      title="Ремонт Рулевых Реек в Санкт-Петербурге"
      subtitle="Восстановление рулевой рейки без замены агрегата. Экономия до 70% от стоимости новой детали. Гарантия и качество всех видов работ и запчастей."
      price="от 5 000 ₽"
      relatedLinks={[
        { title: "Развал-Схождение", path: "/razvalskhozhdenie", desc: "После ремонта рулевой рейки необходима регулировка углов колёс." },
        { title: "Ремонт Ходовой", path: "/remont-hodovoy", desc: "Диагностика и замена элементов подвески. Гарантия и качество всех видов работ и запчастей." },
        { title: "Заправка Кондиционеров", path: "/zapravka-kondicionera", desc: "Заправка фреоном R134a / R1234yf с проверкой герметичности." },
      ]}
    >
      {/* SEO-текст */}
      <article className="mb-10">
        <h2 className="font-['Oswald'] text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-4">
          Ремонт рулевой рейки — альтернатива дорогостоящей замене
        </h2>
        <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
          <p>
            <strong className="text-foreground">Рулевая рейка</strong> — ключевой элемент рулевого управления, который преобразует вращение рулевого колеса в перемещение передних колёс. Со временем в рейке изнашиваются сальники, втулки и зубчатое зацепление, что приводит к течи масла, стукам и люфту руля.
          </p>
          <p>
            В автосервисе <strong className="text-foreground">AGS</strong> мы специализируемся на восстановительном ремонте рулевых реек — это позволяет сохранить оригинальный агрегат и сэкономить <strong className="text-foreground">до 70%</strong> по сравнению с покупкой новой или контрактной рейки. В процессе ремонта полностью разбираем рейку, дефектуем все детали, заменяем изношенные элементы ремонтным комплектом и проводим испытания под давлением.
          </p>
          <p>
            Симптомы неисправной рулевой рейки: стук при повороте руля или проезде неровностей, увеличенный люфт руля, подтёки масла под автомобилем в районе рейки, тугой руль или его неравномерное усилие. При появлении хотя бы одного из этих признаков рекомендуем не откладывать диагностику — неисправная рейка влияет на безопасность управления автомобилем.
          </p>
          <p>
            Принимаем рейки как в сборе с тягами, так и отдельно. Срок ремонта: 1–3 рабочих дня в зависимости от сложности. Адрес: <strong className="text-foreground">Санкт-Петербург, ул. Симонова, 15</strong>, заезд с Суздальского проспекта.
          </p>
        </div>
      </article>

      {/* Что делаем */}
      <section className="mb-10">
        <h2 className="font-['Oswald'] text-xl sm:text-2xl font-bold uppercase tracking-tight mb-5">
          Что входит в ремонт
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { num: "01", title: "Диагностика рейки", desc: "Полная разборка, дефектовка корпуса, штока, зубчатого зацепления и всех уплотнений" },
            { num: "02", title: "Замена ремкомплекта", desc: "Замена сальников, втулок, уплотнительных колец и при необходимости рейки шестерни" },
            { num: "03", title: "Сборка и регулировка", desc: "Сборка с правильным преднатягом зубчатого зацепления согласно техническим нормам" },
            { num: "04", title: "Испытание", desc: "Проверка на герметичность под давлением, проверка хода рейки и усилия на штоке" },
          ].map((s) => (
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
        <h2 className="font-['Oswald'] text-xl sm:text-2xl font-bold uppercase tracking-tight mb-5">Стоимость</h2>
        <div className="border border-border/60 overflow-hidden">
          {[
            { name: "Диагностика рулевой рейки", price: "бесплатно при ремонте" },
            { name: "Ремонт рейки механической", price: "от 5 000 ₽" },
            { name: "Ремонт рейки с ГУР", price: "от 7 000 ₽" },
            { name: "Ремонт рейки с ЭУР", price: "от 8 000 ₽" },
            { name: "Замена рулевых тяг и наконечников", price: "от 1 500 ₽" },
          ].map((row, i) => (
            <div key={i} className={`flex items-center justify-between px-4 py-3 ${i % 2 === 0 ? "bg-card/20" : "bg-background"} border-b border-border/30 last:border-0`}>
              <span className="text-sm text-foreground/80">{row.name}</span>
              <span className="font-['Oswald'] font-bold text-amber-400 text-sm">{row.price}</span>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-xs mt-3 font-mono">* Стоимость указана за работу. Стоимость расходных материалов и запчастей — по согласованию.</p>
      </section>

      {/* Гарантия */}
      <section className="p-5 border border-amber-400/20 bg-amber-400/5">
        <h3 className="font-['Oswald'] text-lg font-bold uppercase tracking-wider mb-3 text-amber-400">Гарантия и качество</h3>
        <ul className="space-y-2">
          {[
            "Гарантия и качество всех видов работ и запчастей.",
            "При повторном обращении в гарантийный период — ремонт за наш счёт",
            "Используем только качественные ремонтные комплекты от проверенных поставщиков",
            "После ремонта обязательно рекомендуем сделать развал-схождение",
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