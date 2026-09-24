// Пул тематических изображений для статей. Картинки подбираются автоматически
// под каждую статью по ключевым словам в заголовке, с балансировкой,
// чтобы одна и та же картинка не повторялась слишком часто.
import { ARTICLES } from "./articles";
import { ARTICLE_CONTENTS } from "./articleContents";

export interface PoolImage {
  url: string;
  alt: string;
  keywords: string[];
}

const IMAGE_POOL: PoolImage[] = [
  {
    url: "/media78/img/articles/a8fb120a-2d61-4484-a409-7db6354ba53d.webp",
    alt: "Колесо автомобиля на 3D-стенде развал-схождения с измерительными датчиками",
    keywords: ["развал-схождение", "стенд", "3d-стенд", "уук", "угл"],
  },
  {
    url: "/media78/img/articles/7fdf9313-a937-4509-a6e4-9444759f29f3.webp",
    alt: "Независимая подвеска автомобиля в разрезе: пружина, амортизатор, рычаги",
    keywords: ["независим", "зависим", "макферсон", "многорычаж", "подвеск"],
  },
  {
    url: "/media78/img/articles/1ee1df90-cb1e-4511-b9c1-e86eb4c5a526.webp",
    alt: "Новый газомасляный амортизатор в руках автомеханика",
    keywords: ["амортизатор", "демпфир", "газомасл"],
  },
  {
    url: "/media78/img/articles/183d411f-a8e8-40b7-b626-3e4db4874887.webp",
    alt: "Пружина подвески автомобиля крупным планом",
    keywords: ["пружин", "торсион"],
  },
  {
    url: "/media78/img/articles/6aa10a9c-c131-4fda-99f5-0baf1e73666e.webp",
    alt: "Рычаг подвески с резиновым сайлентблоком в руках механика",
    keywords: ["сайлентблок", "рычаг", "втулк", "полиуретан", "подрамник", "кулак"],
  },
  {
    url: "/media78/img/articles/382460bc-7662-4ca7-acab-2fe31d7f7034.webp",
    alt: "Ступичный подшипник колеса автомобиля на верстаке",
    keywords: ["ступич", "ступиц"],
  },
  {
    url: "/media78/img/articles/64cae02b-ce49-4557-8948-27bc59c80f06.webp",
    alt: "ШРУС автомобиля с разорванным пыльником в руках механика",
    keywords: ["шрус", "привод", "пыльник шрус", "гранат", "натяг"],
  },
  {
    url: "/media78/img/articles/7442ff1d-ea21-4b60-9de5-4351a56e2bdc.webp",
    alt: "Протектор автомобильной шины с неравномерным износом",
    keywords: ["шин", "резин", "износ", "протектор", "пилит", "сезон"],
  },
  {
    url: "/media78/img/articles/447d8600-94d9-42e7-ad27-3895da127163.webp",
    alt: "Автомеханик осматривает подвеску автомобиля на подъёмнике",
    keywords: ["диагностик", "стук", "скрип", "осмотр", "признак", "провер", "хруст", "рыска", "вибрац"],
  },
  {
    url: "/media78/img/articles/18afcf95-b605-4d5c-8392-5b8cd8d0f24c.webp",
    alt: "Рулевая рейка и рулевые тяги автомобиля на верстаке",
    keywords: ["рулев", "рейк", "тяг", "наконечник"],
  },
  {
    url: "/media78/img/articles/a03d85d7-fc15-4556-8ccc-4f0c33d7c02d.webp",
    alt: "Пневматическая стойка подвески с резиновой пневмоподушкой",
    keywords: ["пневмо", "airmatic", "баллон"],
  },
  {
    url: "/media78/img/articles/f33e6560-9977-4659-b5e9-ae36e3ac70b7.webp",
    alt: "Бокс автосервиса с автомобилем на двухстоечном подъёмнике",
    keywords: ["сто", "сервис", "гараж", "оборудован", "мастер"],
  },
  {
    url: "/media78/img/articles/2934c158-a890-4177-836c-9c6270449707.webp",
    alt: "Подвеска электромобиля крупным планом",
    keywords: ["электромобил", "tesla", "батаре", "электрокар"],
  },
  {
    url: "/media78/img/articles/c85b4e99-64c2-4077-aa86-571afdca24a5.webp",
    alt: "Шаровая опора подвески автомобиля в руках механика",
    keywords: ["шаров", "опор"],
  },
  {
    url: "/media78/img/articles/0b87f745-5210-4617-a428-be49935f7375.webp",
    alt: "Стойка стабилизатора поперечной устойчивости на подвеске автомобиля",
    keywords: ["стабилизатор", "стойк"],
  },
  {
    url: "/media78/img/articles/c28ffb77-e763-49bf-ba89-a96a61893464.webp",
    alt: "Монитор диагностического стенда с результатами развал-схождения",
    keywords: ["монитор", "нивелир"],
  },
  {
    url: "/media78/img/articles2/f5e89d22-b2de-40a6-8ac0-56cb3f20e428.webp",
    alt: "Оптический лазерный датчик развал-схождения на колесе автомобиля",
    keywords: ["оптическ", "лазер", "архаизм"],
  },
  {
    url: "/media78/img/articles2/0fc4b594-0a6b-4c84-aae8-0b78e4dc517d.webp",
    alt: "Мишень 3D-стенда развал-схождения на колесе автомобиля",
    keywords: ["мишен", "компенсац", "биени", "3d-стенд"],
  },
  {
    url: "/media78/img/articles2/767ad0aa-89ae-419f-b656-08ebd5cc95c4.webp",
    alt: "Распечатка результатов развал-схождения в руках мастера",
    keywords: ["распечатк", "процедур"],
  },
  {
    url: "/media78/img/articles2/be3c2be5-0793-42c3-bc35-84369342866d.webp",
    alt: "Калибровка датчика угла поворота руля на рулевой колонке",
    keywords: ["датчик угла", "калибровк", "sas", "круиз-контрол", "радар"],
  },
  {
    url: "/media78/img/articles2/465aa80f-eea0-453d-a88f-2827bc8a8d96.webp",
    alt: "Развальный камбер-болт с эксцентриковой шайбой в руках механика",
    keywords: ["камбер-болт", "эксцентрик", "проставк", "кастер", "не предусмотрено"],
  },
  {
    url: "/media78/img/articles2/df1ae6a9-3c08-4d08-b692-00f8f35c0b13.webp",
    alt: "Балка задней полузависимой подвески автомобиля на подъёмнике",
    keywords: ["задн", "мост", "балк", "полузависим"],
  },
  {
    url: "/media78/img/articles2/75428090-4036-4a0b-b2ff-48b2b61f6f27.webp",
    alt: "Тяга Панара на задней оси автомобиля",
    keywords: ["панара", "реактивн"],
  },
  {
    url: "/media78/img/articles2/b59d33de-9f38-4765-abfb-edefe952586c.webp",
    alt: "Рессора коммерческого автомобиля крупным планом",
    keywords: ["рессор", "коммерческ"],
  },
  {
    url: "/media78/img/articles2/80ead884-8797-4341-94ce-0a366354dba0.webp",
    alt: "Подвеска коммерческого фургона снизу",
    keywords: ["газел", "фургон"],
  },
  {
    url: "/media78/img/articles2/f9b24a65-2934-4400-867c-80cb4c44cc77.webp",
    alt: "Мастер проверяет положение руля и показания диагностического монитора",
    keywords: ["криво", "гид", "клиент", "мифы", "дилер"],
  },
  {
    url: "/media78/img/articles2/566ffec1-28b5-4bc7-b2b0-a5db1c415b01.webp",
    alt: "Погнутый подрамник и рычаг подвески после ДТП",
    keywords: ["дтп", "деформац", "кузов", "невозможно"],
  },
  {
    url: "/media78/img/articles2/d8a48a3d-203d-4d9f-979f-e97322a9b9bd.webp",
    alt: "Проверка давления в шине автомобиля манометром",
    keywords: ["давлени", "манометр"],
  },
  {
    url: "/media78/img/articles2/48af1d50-8d15-437b-958f-617e51adbc21.webp",
    alt: "Багаж и пассажиры в салоне автомобиля влияют на развал задней оси",
    keywords: ["загрузк", "багаж", "пассажир", "вес автомобиля"],
  },
  {
    url: "/media78/img/articles2/ba06bbda-5949-488b-ad70-ce9afbee60bf.webp",
    alt: "Спортивный автомобиль с отрицательным развалом колёс на треке",
    keywords: ["спортивн", "трек", "домиком", "отрицательн"],
  },
  {
    url: "/media78/img/articles2/2bbdf1c7-3576-48d5-a7fd-14211c917c05.webp",
    alt: "Переднее колесо автомобиля вывернуто до упора, геометрия поворота",
    keywords: ["аккерман", "поворот руля", "вывернут"],
  },
  {
    url: "/media78/img/articles2/f8283ecb-72ac-4978-a815-4aad87c7e53f.webp",
    alt: "Лифтованная подвеска внедорожника с увеличенным клиренсом",
    keywords: ["лифт", "внедорожник", "клиренс"],
  },
  {
    url: "/media78/img/articles2/beb6e9f1-30e4-4576-b5a6-fec9a0bf94d8.webp",
    alt: "Проржавевшие болты крепления подвески на подрамнике",
    keywords: ["оцинкован", "прикипан", "коррози", "болты развала"],
  },
  {
    url: "/media78/img/articles2/91879439-762c-4b7c-bf0e-b0e9ae07ce39.webp",
    alt: "Литой диск и тормозной суппорт автомобиля, геометрия вылета колеса",
    keywords: ["плечо обкатки", "вылет диска", "суппорт"],
  },
  {
    url: "/media78/img/articles2/c940dee6-c3ff-4054-91cd-fe53e4ebc7b9.webp",
    alt: "Сравнение двух распечаток развал-схождения в руках мастера",
    keywords: ["развод", "сравнен", "дважды в год", "сезонный сход"],
  },
  {
    url: "/media78/img/articles2/56e7bcf0-7bcc-4022-86aa-b1b8ab632bff.webp",
    alt: "Сравнение оригинального и китайского амортизаторов на верстаке",
    keywords: ["оригинал", "oem", "китай", "выбрать амортизатор"],
  },
  {
    url: "/media78/img/articles2/7f4b0258-d961-4ff4-9f31-419102835a5e.webp",
    alt: "Установка нового амортизатора на автомобиль руками механика",
    keywords: ["установк", "парой на оси", "заменить амортизатор"],
  },
  {
    url: "/media78/img/articles2/c3992599-7169-4993-aac4-691a926fdb96.webp",
    alt: "Опорный подшипник стойки подвески в разобранном виде",
    keywords: ["опорн", "подшипник", "хрустят"],
  },
];

export interface ArticleImage {
  url: string;
  alt: string;
}

interface Assignment {
  indices: number[];
}

// Предвычисляем распределение картинок по всем готовым статьям один раз при
// загрузке модуля: сначала подбираем совпадения по ключевым словам, при
// равном счёте отдаём приоритет наименее использованной картинке. Так одна
// и та же картинка не «залипает» на десятках статей подряд.
const assignmentByArticleId = new Map<number, Assignment>();

function buildAssignments() {
  const usage = new Array(IMAGE_POOL.length).fill(0);
  const readyArticles = ARTICLES.filter((a) => ARTICLE_CONTENTS[a.slug]).sort((a, b) => a.id - b.id);
  let prevIndices: number[] = [];

  for (const article of readyArticles) {
    const lower = article.title.toLowerCase();
    const scoreOf = (idx: number) =>
      IMAGE_POOL[idx].keywords.reduce((acc, kw) => (lower.includes(kw) ? acc + 1 : acc), 0);

    // Картинки соседней (предыдущей) статьи полностью исключаем из выбора —
    // чтобы одна и та же иллюстрация не повторялась у статей подряд.
    const pickOrder = (excluded: Set<number>) =>
      [...IMAGE_POOL.keys()]
        .filter((idx) => !excluded.has(idx))
        .sort((a, b) => scoreOf(b) - scoreOf(a) || usage[a] - usage[b] || a - b);

    const picked: number[] = [];
    const excluded = new Set(prevIndices);
    for (let slot = 0; slot < 2; slot++) {
      const order = pickOrder(excluded);
      const best = order[0];
      picked.push(best);
      excluded.add(best);
    }

    picked.forEach((idx) => (usage[idx] += 1));
    assignmentByArticleId.set(article.id, { indices: picked });
    prevIndices = picked;
  }
}

buildAssignments();

/**
 * Возвращает картинки, закреплённые за статьёй. Распределение вычислено
 * заранее так, чтобы соседние статьи не показывали одинаковые изображения.
 * Параметр title сохранён для обратной совместимости вызовов.
 */
export function getArticleImages(_title: string, articleId: number, count = 2): ArticleImage[] {
  const assignment = assignmentByArticleId.get(articleId);
  const indices = assignment ? assignment.indices : [0, 1];
  return indices.slice(0, count).map((idx) => ({ url: IMAGE_POOL[idx].url, alt: IMAGE_POOL[idx].alt }));
}