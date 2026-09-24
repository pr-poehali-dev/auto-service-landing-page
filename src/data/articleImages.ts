// Пул тематических изображений для статей. Картинки подбираются автоматически
// под каждую статью по ключевым словам в заголовке.
export interface PoolImage {
  url: string;
  alt: string;
  keywords: string[];
}

const IMAGE_POOL: PoolImage[] = [
  {
    url: "https://cdn.poehali.dev/projects/46745fea-3775-44bf-b9bf-65fdd59d5b7d/files/a8fb120a-2d61-4484-a409-7db6354ba53d.jpg",
    alt: "Колесо автомобиля на 3D-стенде развал-схождения с измерительными датчиками",
    keywords: ["развал", "схождение", "стенд", "3d", "угл", "аккерман", "уук"],
  },
  {
    url: "https://cdn.poehali.dev/projects/46745fea-3775-44bf-b9bf-65fdd59d5b7d/files/7fdf9313-a937-4509-a6e4-9444759f29f3.jpg",
    alt: "Независимая подвеска автомобиля в разрезе: пружина, амортизатор, рычаги",
    keywords: ["независим", "зависим", "макферсон", "многорычаж", "подвеск"],
  },
  {
    url: "https://cdn.poehali.dev/projects/46745fea-3775-44bf-b9bf-65fdd59d5b7d/files/1ee1df90-cb1e-4511-b9c1-e86eb4c5a526.jpg",
    alt: "Новый газомасляный амортизатор в руках автомеханика",
    keywords: ["амортизатор", "демпфир", "газ", "масл", "прокач"],
  },
  {
    url: "https://cdn.poehali.dev/projects/46745fea-3775-44bf-b9bf-65fdd59d5b7d/files/183d411f-a8e8-40b7-b626-3e4db4874887.jpg",
    alt: "Пружина подвески автомобиля крупным планом",
    keywords: ["пружин", "рессор", "отбойник", "торсион"],
  },
  {
    url: "https://cdn.poehali.dev/projects/46745fea-3775-44bf-b9bf-65fdd59d5b7d/files/6aa10a9c-c131-4fda-99f5-0baf1e73666e.jpg",
    alt: "Рычаг подвески с резиновым сайлентблоком в руках механика",
    keywords: ["сайлентблок", "рычаг", "втулк", "полиуретан", "подрамник", "кулак"],
  },
  {
    url: "https://cdn.poehali.dev/projects/46745fea-3775-44bf-b9bf-65fdd59d5b7d/files/382460bc-7662-4ca7-acab-2fe31d7f7034.jpg",
    alt: "Ступичный подшипник колеса автомобиля на верстаке",
    keywords: ["ступич", "ступиц", "подшипник"],
  },
  {
    url: "https://cdn.poehali.dev/projects/46745fea-3775-44bf-b9bf-65fdd59d5b7d/files/64cae02b-ce49-4557-8948-27bc59c80f06.jpg",
    alt: "ШРУС автомобиля с разорванным пыльником в руках механика",
    keywords: ["шрус", "привод", "пыльник", "гранат"],
  },
  {
    url: "https://cdn.poehali.dev/projects/46745fea-3775-44bf-b9bf-65fdd59d5b7d/files/7442ff1d-ea21-4b60-9de5-4351a56e2bdc.jpg",
    alt: "Протектор автомобильной шины с неравномерным износом",
    keywords: ["шин", "резин", "износ", "протектор", "пилит", "колес"],
  },
  {
    url: "https://cdn.poehali.dev/projects/46745fea-3775-44bf-b9bf-65fdd59d5b7d/files/447d8600-94d9-42e7-ad27-3895da127163.jpg",
    alt: "Автомеханик осматривает подвеску автомобиля на подъёмнике",
    keywords: ["диагностик", "стук", "скрип", "осмотр", "признак", "провер", "хруст", "рыска", "вибрац"],
  },
  {
    url: "https://cdn.poehali.dev/projects/46745fea-3775-44bf-b9bf-65fdd59d5b7d/files/18afcf95-b605-4d5c-8392-5b8cd8d0f24c.jpg",
    alt: "Рулевая рейка и рулевые тяги автомобиля на верстаке",
    keywords: ["рулев", "рейк", "тяг", "наконечник", "руль"],
  },
  {
    url: "https://cdn.poehali.dev/projects/46745fea-3775-44bf-b9bf-65fdd59d5b7d/files/a03d85d7-fc15-4556-8ccc-4f0c33d7c02d.jpg",
    alt: "Пневматическая стойка подвески с резиновой пневмоподушкой",
    keywords: ["пневмо", "airmatic", "баллон"],
  },
  {
    url: "https://cdn.poehali.dev/projects/46745fea-3775-44bf-b9bf-65fdd59d5b7d/files/f33e6560-9977-4659-b5e9-ae36e3ac70b7.jpg",
    alt: "Бокс автосервиса с автомобилем на двухстоечном подъёмнике",
    keywords: ["сто", "сервис", "гараж", "оборудован", "подъёмник", "мастер"],
  },
  {
    url: "https://cdn.poehali.dev/projects/46745fea-3775-44bf-b9bf-65fdd59d5b7d/files/2934c158-a890-4177-836c-9c6270449707.jpg",
    alt: "Подвеска электромобиля крупным планом",
    keywords: ["электромобил", "tesla", "батаре", "электрокар"],
  },
  {
    url: "https://cdn.poehali.dev/projects/46745fea-3775-44bf-b9bf-65fdd59d5b7d/files/c85b4e99-64c2-4077-aa86-571afdca24a5.jpg",
    alt: "Шаровая опора подвески автомобиля в руках механика",
    keywords: ["шаров", "опор"],
  },
  {
    url: "https://cdn.poehali.dev/projects/46745fea-3775-44bf-b9bf-65fdd59d5b7d/files/0b87f745-5210-4617-a428-be49935f7375.jpg",
    alt: "Стойка стабилизатора поперечной устойчивости на подвеске автомобиля",
    keywords: ["стабилизатор", "стойк"],
  },
  {
    url: "https://cdn.poehali.dev/projects/46745fea-3775-44bf-b9bf-65fdd59d5b7d/files/c28ffb77-e763-49bf-ba89-a96a61893464.jpg",
    alt: "Монитор диагностического стенда с результатами развал-схождения",
    keywords: ["распечатк", "калибровк", "монитор", "отчет", "отчёт", "нивелир"],
  },
];

const FALLBACK_ORDER = [11, 8, 15, 1, 0];

export interface ArticleImage {
  url: string;
  alt: string;
}

/**
 * Подбирает 2 тематические картинки под статью: по совпадению ключевых слов
 * с заголовком, а если совпадений мало — добавляет картинки из ротации
 * (детерминировано по id статьи, чтобы порядок был стабильным).
 */
export function getArticleImages(title: string, articleId: number, count = 2): ArticleImage[] {
  const lower = title.toLowerCase();
  const scored = IMAGE_POOL.map((img, idx) => {
    const score = img.keywords.reduce((acc, kw) => (lower.includes(kw) ? acc + 1 : acc), 0);
    return { idx, score };
  })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score);

  const picked: number[] = [];
  for (const s of scored) {
    if (picked.length >= count) break;
    if (!picked.includes(s.idx)) picked.push(s.idx);
  }

  let fallbackCursor = articleId % FALLBACK_ORDER.length;
  while (picked.length < count) {
    const candidate = FALLBACK_ORDER[fallbackCursor % FALLBACK_ORDER.length];
    fallbackCursor++;
    if (!picked.includes(candidate)) picked.push(candidate);
    if (fallbackCursor > FALLBACK_ORDER.length + count) break;
  }

  return picked.slice(0, count).map((idx) => ({ url: IMAGE_POOL[idx].url, alt: IMAGE_POOL[idx].alt }));
}
