import ServicePageLayout from "@/components/ServicePageLayout";

export default function ZapravkaKondicionera() {
  return (
    <ServicePageLayout
      currentPath="/zapravka-kondicionera"
      title="Заправка Кондиционера Автомобиля в СПб"
      subtitle="Заправка фреоном R134a и R1234yf. Проверка герметичности системы. Все марки авто. Без записи."
      price="от 3 000 ₽"
      relatedLinks={[
        { title: "Развал-Схождение", path: "/razvalskhozhdenie", desc: "Регулировка углов колёс на 3D-стенде Technovector. Точность до 0.01°." },
        { title: "Ремонт Ходовой", path: "/remont-hodovoy", desc: "Диагностика и замена элементов подвески. Гарантия 12 месяцев." },
        { title: "Ремонт Рулевых Реек", path: "/remont-rulevyh-reek", desc: "Восстановление рулевой рейки без замены агрегата." },
      ]}
    >
      {/* SEO-текст */}
      <article className="mb-10">
        <h2 className="font-['Oswald'] text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-4">
          Почему кондиционер перестаёт охлаждать и что с этим делать
        </h2>
        <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
          <p>
            <strong className="text-foreground">Кондиционер автомобиля</strong> теряет до 15–20% фреона в год даже при полной исправности системы — это нормальный процесс диффузии через уплотнения. Поэтому профилактическую заправку рекомендуется проводить <strong className="text-foreground">каждые 1–2 года</strong>, не дожидаясь полного отказа системы охлаждения.
          </p>
          <p>
            В автосервисе <strong className="text-foreground">AGS</strong> используем профессиональные станции для заправки кондиционеров. Работаем с обоими типами фреона: <strong className="text-foreground">R134a</strong> — для большинства автомобилей до 2017 года выпуска, и <strong className="text-foreground">R1234yf</strong> — для современных европейских моделей. Перед заправкой обязательно проверяем герметичность системы — это позволяет выявить утечки и устранить их до заправки.
          </p>
          <p>
            Признаки того, что пора заправить кондиционер: воздух из дефлекторов не холодный даже при максимальном режиме, компрессор часто включается и отключается, в салоне появился неприятный запах при включении кондиционера. Работаем без предварительной записи — приезжайте в удобное время.
          </p>
          <p>
            Адрес: <strong className="text-foreground">Санкт-Петербург, ул. Симонова, 15</strong>, заезд с Суздальского проспекта. Режим работы: ПН–СБ 8:00–20:00, ВС 9:00–18:00. Телефон: <strong className="text-foreground">+7 (911) 747-80-57</strong>.
          </p>
        </div>
      </article>

      {/* Этапы */}
      <section className="mb-10">
        <h2 className="font-['Oswald'] text-xl sm:text-2xl font-bold uppercase tracking-tight mb-5">
          Как проходит заправка
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { num: "01", title: "Диагностика давления", desc: "Подключаем манометрическую станцию и измеряем остаточное давление в системе" },
            { num: "02", title: "Проверка герметичности", desc: "Течеискателем проверяем все соединения, шланги и радиатор конденсатора" },
            { num: "03", title: "Откачка старого фреона", desc: "Если фреон загрязнён — откачиваем и утилизируем в соответствии с нормами" },
            { num: "04", title: "Заправка и проверка", desc: "Заправляем нужным типом фреона с маслом, проверяем температуру воздуха на выходе" },
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
            { name: "Диагностика системы кондиционирования", price: "бесплатно при заправке" },
            { name: "Заправка фреоном R134a", price: "от 3 000 ₽" },
            { name: "Заправка фреоном R1234yf", price: "от 4 500 ₽" },
            { name: "Проверка герметичности течеискателем", price: "включено" },
            { name: "Антибактериальная обработка системы", price: "от 1 500 ₽" },
          ].map((row, i) => (
            <div key={i} className={`flex items-center justify-between px-4 py-3 ${i % 2 === 0 ? "bg-card/20" : "bg-background"} border-b border-border/30 last:border-0`}>
              <span className="text-sm text-foreground/80">{row.name}</span>
              <span className="font-['Oswald'] font-bold text-amber-400 text-sm">{row.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Важно */}
      <section className="p-5 border border-border/50 bg-card/20">
        <h3 className="font-['Oswald'] text-lg font-bold uppercase tracking-wider mb-3">Полезно знать</h3>
        <ul className="space-y-2">
          {[
            "Смешивать R134a и R1234yf нельзя — заправляем только правильным для вашего авто типом фреона",
            "При обнаружении утечки сначала устраняем её, затем заправляем — иначе эффект будет временным",
            "Рекомендуем включать кондиционер раз в неделю даже зимой — это продлевает ресурс уплотнений",
            "Неприятный запах при включении кондиционера лечится антибактериальной обработкой испарителя",
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
