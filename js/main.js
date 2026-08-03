'use strict';

/* ===== Данные ===== */

var PROJECTS = [
  { id: 'taiga',   name: 'Тайга',   area: 214, floors: 2, beds: 4, material: 'брус',      size: '14,6 × 11,2 м', price: 12840000, img: 'house-taiga.jpg',   tag: 'Хит продаж', alt: 'Двухэтажный дом-шале из бруса с панорамной верандой' },
  { id: 'ladoga',  name: 'Ладога',  area: 236, floors: 2, beds: 5, material: 'газобетон', size: '15,8 × 12,4 м', price: 14632000, img: 'house-ladoga.jpg',  tag: 'Для большой семьи', alt: 'Двухэтажный светлый дом с деревянным навесом среди елей' },
  { id: 'onega',   name: 'Онега',   area: 186, floors: 2, beds: 5, material: 'каркас',    size: '13,2 × 10,8 м', price: 9672000,  img: 'house-onega.jpg',   tag: '', alt: 'Двухэтажный дом со светлым фасадом и широкой верандой' },
  { id: 'valday',  name: 'Валдай',  area: 168, floors: 1, beds: 3, material: 'каркас',    size: '18,4 × 9,6 м',  price: 8400000,  img: 'house-valday.jpg',  tag: 'Быстрая сборка', alt: 'Одноэтажный дом с тёмным фасадом и гаражом на две машины' },
  { id: 'seliger', name: 'Селигер', area: 245, floors: 2, beds: 4, material: 'газобетон', size: '16,2 × 12,8 м', price: 15680000, img: 'house-seliger.jpg', tag: '', alt: 'Двухэтажный белый дом с крыльцом и пристроенным гаражом' },
  { id: 'baikal',  name: 'Байкал',  area: 132, floors: 1, beds: 3, material: 'каркас',    size: '15,2 × 9,4 м',  price: 6732000,  img: 'house-baikal.jpg',  tag: '', alt: 'Одноэтажный дом со светлым сайдингом на молодом участке' },
  { id: 'sosna',   name: 'Сосна',   area: 124, floors: 1, beds: 3, material: 'газобетон', size: '15,4 × 9,8 м',  price: 7068000,  img: 'house-sosna.jpg',   tag: 'Одноэтажный', alt: 'Одноэтажный дом с крытой террасой и мебелью' },
  { id: 'yasen',   name: 'Ясень',   area: 142, floors: 1, beds: 3, material: 'кирпич',    size: '16,8 × 10,2 м', price: 9372000,  img: 'house-yasen.jpg',   tag: 'С гаражом', alt: 'Одноэтажный дом с гаражом и черепичной кровлей' },
  { id: 'nord',    name: 'Норд',    area: 96,  floors: 1, beds: 2, material: 'брус',      size: '10,8 × 8,4 м',  price: 4992000,  img: 'house-nord.jpg',    tag: 'Дешевле всех', alt: 'Компактный тёмный дом из бруса с травяной кровлей' },
  { id: 'priboy',  name: 'Прибой',  area: 205, floors: 2, beds: 4, material: 'газобетон', size: '14,8 × 11,6 м', price: 12300000, img: 'house-priboy.jpg',  tag: '', alt: 'Двухэтажный дом в современном стиле среди зелени' },
  { id: 'vuoksa',  name: 'Вуокса',  area: 158, floors: 1, beds: 4, material: 'кирпич',    size: '17,2 × 10,6 м', price: 10744000, img: 'house-vuoksa.jpg',  tag: 'Кирпич под ключ', alt: 'Одноэтажный кирпичный дом с эркером и гаражом' },
  { id: 'ilmen',   name: 'Ильмень', area: 192, floors: 2, beds: 4, material: 'брус',      size: '13,8 × 10,4 м', price: 11136000, img: 'house-ilmen.jpg',   tag: '', alt: 'Двухэтажный деревянный дом с балконом в открытом поле' }
];

var FAQ = [
  {
    q: 'Можно ли построить дом в ипотеку?',
    a: 'Да, работаем с ипотекой на ИЖС. Мы аккредитованы в четырёх банках, поэтому заявку рассматривают быстрее. Помогаем собрать пакет документов и подготовить смету в том виде, в каком её принимает банк, — это бесплатно и ни к чему вас не обязывает.'
  },
  {
    q: 'За сколько реально построить дом?',
    a: 'Одноэтажный дом до 140 м² — 6–7 месяцев, двухэтажный от 180 м² — 9–11 месяцев. Срок считается от начала земляных работ и фиксируется в договоре: за каждую неделю просрочки по нашей вине предусмотрена неустойка.'
  },
  {
    q: 'Строите ли вы зимой?',
    a: 'Да, круглый год. Зимой ведём земляные работы и фундамент с прогревом бетона, кладку — на противоморозных добавках по технологической карте. Зимой площадки свободнее, а цены материалов ниже, чем в разгар сезона.'
  },
  {
    q: 'Что будет, если цены на материалы вырастут?',
    a: 'Ничего: цена в договоре фиксированная. Основные материалы закупаются в первый месяц и хранятся на нашем складе, рост цен — наш риск, а не ваш. Смета меняется только если вы сами просите изменить состав работ.'
  },
  {
    q: 'Можно ли изменить планировку готового проекта?',
    a: 'Можно и нужно. Перенос перегородок, изменение количества спален, добавление котельной или второго санузла входят в стоимость проекта. Изменения, затрагивающие несущие стены и габариты, пересчитываем — покажем разницу до подписания.'
  },
  {
    q: 'Какая гарантия и что она покрывает?',
    a: 'Десять лет на несущие конструкции — фундамент, стены, перекрытия, стропильную систему. Два года на кровельное покрытие, инженерные системы и отделку. Гарантийные обращения принимаем письменно, выезд мастера — в течение трёх рабочих дней.'
  }
];

/* Коэффициенты и базовые ставки — вынесены отдельно, чтобы менялись в одном месте */
var WALLS = {
  frame:   { label: 'Каркас, 200 мм', rate: 13500, term: 0 },
  aerated: { label: 'Газобетон D400', rate: 17200, term: 1 },
  brick:   { label: 'Кирпич с утеплением', rate: 24800, term: 2 },
  timber:  { label: 'Клеёный брус', rate: 21600, term: 1 }
};
var FOUNDATION = {
  pile:  { label: 'Свайно-ростверковый фундамент', rate: 5400, term: 0 },
  strip: { label: 'Ленточный монолитный фундамент', rate: 8200, term: 1 },
  slab:  { label: 'Утеплённая шведская плита', rate: 11500, term: 1 }
};
var ROOF = {
  metal: { label: 'Кровля: металлочерепица', rate: 6300, term: 0 },
  soft:  { label: 'Кровля: мягкая черепица', rate: 7400, term: 0 },
  seam:  { label: 'Кровля: фальцевая', rate: 9100, term: 1 }
};
var FINISH = {
  none:  { label: 'Отделка не выполняется', rate: 0, term: 0 },
  rough: { label: 'Черновая отделка', rate: 6800, term: 1 },
  full:  { label: 'Чистовая отделка под ключ', rate: 15400, term: 3 }
};
var UTILS = {
  none: { label: 'Инженерия не выполняется', rate: 0, term: 0 },
  base: { label: 'Инженерия: вода, канализация, электрика', rate: 4900, term: 1 },
  full: { label: 'Инженерия: плюс отопление и вентиляция', rate: 8600, term: 2 }
};
/* Окна, двери и обязательные работы не выбираются — входят всегда */
var WINDOWS_RATE = 3900;

var STAGES = [
  { name: 'Проект и геология', what: 'Бурение скважин, привязка к участку, рабочая документация', term: '3 недели', share: 10 },
  { name: 'Фундамент',         what: 'Земляные работы, армирование, бетонирование, гидроизоляция', term: '4 недели', share: 20 },
  { name: 'Коробка',           what: 'Стены, перегородки, перекрытия, лестница', term: '8–10 недель', share: 30 },
  { name: 'Кровля и контур',   what: 'Стропильная система, покрытие, окна, входная дверь', term: '5 недель', share: 20 },
  { name: 'Инженерия',         what: 'Разводка воды, канализации, электрики, отопление', term: '4 недели', share: 12 },
  { name: 'Отделка и сдача',   what: 'Отделочные работы, уборка, приёмка, документы', term: '6 недель', share: 8 }
];

/* ===== Ссылки на DOM ===== */

var root = document.documentElement;
var themeToggle = document.getElementById('theme-toggle');
var burger = document.getElementById('burger');
var mobileNav = document.getElementById('mobile-nav');

var hcImg = document.getElementById('hc-img');
var hcTag = document.getElementById('hc-tag');
var hcName = document.getElementById('hc-name');
var hcPrice = document.getElementById('hc-price');
var hcArea = document.getElementById('hc-area');
var hcFloors = document.getElementById('hc-floors');
var hcBeds = document.getElementById('hc-beds');
var hcMat = document.getElementById('hc-mat');
var hcCount = document.getElementById('hc-count');
var hcPrev = document.getElementById('hc-prev');
var hcNext = document.getElementById('hc-next');

var filters = document.getElementById('filters');
var filtersReset = document.getElementById('filters-reset');
var catalogGrid = document.getElementById('catalog-grid');
var catalogCount = document.getElementById('catalog-count');
var catalogEmpty = document.getElementById('catalog-empty');

var estimateForm = document.getElementById('estimate-form');
var eArea = document.getElementById('e-area');
var eAreaOut = document.getElementById('e-area-out');
var breakdownBody = document.getElementById('breakdown-body');
var estimateTotal = document.getElementById('estimate-total');
var estimatePerm = document.getElementById('estimate-perm');
var estimateTerm = document.getElementById('estimate-term');

var mortgageForm = document.getElementById('mortgage-form');
var mSum = document.getElementById('m-sum');
var mDown = document.getElementById('m-down');
var mDownOut = document.getElementById('m-down-out');
var mTerm = document.getElementById('m-term');
var mTermOut = document.getElementById('m-term-out');
var mRate = document.getElementById('m-rate');
var mPayment = document.getElementById('m-payment');
var mDownSum = document.getElementById('m-down-sum');
var mLoan = document.getElementById('m-loan');
var mOver = document.getElementById('m-over');

var stagesBody = document.getElementById('stages-body');
var accordion = document.getElementById('accordion');
var leadForm = document.getElementById('lead-form');
var fProject = document.getElementById('f-project');
var toast = document.getElementById('toast');

/* ===== Утилиты ===== */

var rubFmt = new Intl.NumberFormat('ru-RU');

function rub(value) {
  return rubFmt.format(Math.round(value)) + ' ₽';
}

/* Сумма сметы, которую подхватывают ипотека и таблица траншей */
var currentEstimate = 0;

var toastTimer = null;
function showToast(text) {
  toast.textContent = text;
  toast.hidden = false;
  // перерисовка перед добавлением класса, иначе перехода не будет
  requestAnimationFrame(function () {
    requestAnimationFrame(function () { toast.classList.add('is-visible'); });
  });
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    toast.classList.remove('is-visible');
    setTimeout(function () { toast.hidden = true; }, 300);
  }, 2600);
}

/* ===== Тема ===== */

var THEME_KEY = 'kedr-dom-theme';

(function initTheme() {
  var saved = null;
  try { saved = localStorage.getItem(THEME_KEY); } catch (e) { /* приватный режим */ }
  if (saved !== 'dark' && saved !== 'light') {
    saved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  root.setAttribute('data-theme', saved);
})();

themeToggle.addEventListener('click', function () {
  var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* приватный режим */ }
});

/* ===== Мобильное меню ===== */

burger.addEventListener('click', function () {
  var open = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', String(!open));
  mobileNav.hidden = open;
});

mobileNav.addEventListener('click', function (event) {
  if (event.target.tagName !== 'A') return;
  burger.setAttribute('aria-expanded', 'false');
  mobileNav.hidden = true;
});

/* ===== Карточка проекта в хиро ===== */

var heroIndex = 0;

function renderHeroCard() {
  var p = PROJECTS[heroIndex];
  hcImg.src = 'img/' + p.img;
  hcImg.alt = p.alt;
  hcName.textContent = p.name;
  hcPrice.textContent = rub(p.price);
  hcArea.textContent = p.area + ' м²';
  hcFloors.textContent = String(p.floors);
  hcBeds.textContent = String(p.beds);
  hcMat.textContent = p.material;
  hcCount.textContent = (heroIndex + 1) + ' / ' + PROJECTS.length;
  hcTag.textContent = p.tag || (p.floors === 1 ? 'Одноэтажный' : 'Двухэтажный');
}

hcPrev.addEventListener('click', function () {
  heroIndex = (heroIndex - 1 + PROJECTS.length) % PROJECTS.length;
  renderHeroCard();
});
hcNext.addEventListener('click', function () {
  heroIndex = (heroIndex + 1) % PROJECTS.length;
  renderHeroCard();
});

/* ===== Каталог ===== */

var AREA_RANGES = {
  s:  function (a) { return a < 120; },
  m:  function (a) { return a >= 120 && a < 180; },
  l:  function (a) { return a >= 180 && a < 240; },
  xl: function (a) { return a >= 240; }
};

function plural(n, one, few, many) {
  var mod10 = n % 10;
  var mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
  return many;
}

function getFilters() {
  var data = new FormData(filters);
  return {
    area: data.get('area'),
    floors: data.get('floors'),
    beds: data.get('beds'),
    material: data.get('material'),
    sort: data.get('sort')
  };
}

function applyFilters() {
  var f = getFilters();
  var list = PROJECTS.filter(function (p) {
    if (f.area !== 'any' && !AREA_RANGES[f.area](p.area)) return false;
    if (f.floors !== 'any' && p.floors !== Number(f.floors)) return false;
    if (f.beds !== 'any') {
      // «5» в фильтре означает «пять и больше»
      if (f.beds === '5' ? p.beds < 5 : p.beds !== Number(f.beds)) return false;
    }
    if (f.material !== 'any' && p.material !== f.material) return false;
    return true;
  });

  list.sort(function (a, b) {
    if (f.sort === 'price-asc') return a.price - b.price;
    if (f.sort === 'price-desc') return b.price - a.price;
    if (f.sort === 'area-asc') return a.area - b.area;
    return b.area - a.area;
  });

  return list;
}

function buildCard(p) {
  var card = document.createElement('article');
  card.className = 'card';
  // Атрибуты для проверок: селекторы тестов не зависят от вёрстки
  card.dataset.id = p.id;
  card.dataset.area = String(p.area);
  card.dataset.floors = String(p.floors);
  card.dataset.beds = String(p.beds);
  card.dataset.price = String(p.price);

  var media = document.createElement('div');
  media.className = 'card__media';
  var img = document.createElement('img');
  img.src = 'img/' + p.img;
  img.alt = p.alt;
  img.loading = 'lazy';
  img.width = 1400;
  img.height = 933;
  media.appendChild(img);

  var overlay = document.createElement('span');
  overlay.className = 'card__overlay';
  overlay.setAttribute('aria-hidden', 'true');
  media.appendChild(overlay);

  var cta = document.createElement('span');
  cta.className = 'card__cta';
  cta.setAttribute('aria-hidden', 'true');
  cta.textContent = 'Выбрать проект';
  media.appendChild(cta);

  if (p.tag) {
    var tag = document.createElement('span');
    tag.className = 'card__tag';
    tag.textContent = p.tag;
    media.appendChild(tag);
  }

  var body = document.createElement('div');
  body.className = 'card__body';

  var name = document.createElement('h3');
  name.className = 'card__name';
  name.textContent = p.name;

  var sub = document.createElement('p');
  sub.className = 'card__sub';
  sub.textContent = p.size + ' · ' + p.material;

  var meta = document.createElement('ul');
  meta.className = 'card__meta';
  [
    p.area + ' м²',
    p.floors + ' ' + plural(p.floors, 'этаж', 'этажа', 'этажей'),
    p.beds + ' ' + plural(p.beds, 'спальня', 'спальни', 'спален'),
    (p.beds >= 4 ? 3 : 2) + ' ' + plural(p.beds >= 4 ? 3 : 2, 'санузел', 'санузла', 'санузлов')
  ].forEach(function (text) {
    var li = document.createElement('li');
    li.textContent = text;
    meta.appendChild(li);
  });

  var foot = document.createElement('div');
  foot.className = 'card__foot';
  var price = document.createElement('p');
  price.className = 'card__price';
  price.textContent = rub(p.price);
  var perm = document.createElement('p');
  perm.className = 'card__perm';
  perm.textContent = rub(p.price / p.area) + ' за м²';
  foot.appendChild(price);
  foot.appendChild(perm);

  // Кнопка перекрывает карточку целиком: курсор-указатель на всей площади
  // и доступ с клавиатуры. Обернуть карточку в <button> нельзя — заголовок
  // и списки не являются фразовым содержимым.
  var link = document.createElement('button');
  link.className = 'card__link';
  link.type = 'button';
  link.setAttribute('aria-label', 'Выбрать проект «' + p.name + '» и рассчитать смету');
  link.addEventListener('click', function () { pickProject(p); });

  body.appendChild(name);
  body.appendChild(sub);
  body.appendChild(meta);
  body.appendChild(foot);

  card.appendChild(media);
  card.appendChild(body);
  card.appendChild(link);
  return card;
}

function renderCatalog() {
  var list = applyFilters();

  catalogGrid.textContent = '';
  list.forEach(function (p) { catalogGrid.appendChild(buildCard(p)); });

  catalogEmpty.hidden = list.length > 0;
  catalogCount.textContent = list.length
    ? 'Показано ' + list.length + ' ' + plural(list.length, 'проект', 'проекта', 'проектов')
    : 'Ничего не найдено';
}

filters.addEventListener('change', renderCatalog);
filtersReset.addEventListener('click', function () {
  // reset срабатывает после обработчика, поэтому перерисовываем следующим тиком
  setTimeout(renderCatalog, 0);
});

/* Выбор проекта из каталога: подставляем площадь в смету и проект в форму */
function pickProject(p) {
  eArea.value = String(Math.min(Number(eArea.max), Math.max(Number(eArea.min), Math.round(p.area / 10) * 10)));
  var wallsMap = { 'газобетон': 'aerated', 'кирпич': 'brick', 'каркас': 'frame', 'брус': 'timber' };
  document.getElementById('e-walls').value = wallsMap[p.material];
  renderEstimate();

  fProject.value = p.id;

  showToast('Проект «' + p.name + '» подставлен в смету');
  document.getElementById('estimate').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ===== Смета ===== */

function readEstimate() {
  var area = Number(eArea.value);
  var walls = WALLS[document.getElementById('e-walls').value];
  var foundation = FOUNDATION[document.getElementById('e-foundation').value];
  var roof = ROOF[document.getElementById('e-roof').value];
  var finish = FINISH[document.getElementById('e-finish').value];
  var utils = UTILS[document.getElementById('e-utils').value];

  var rows = [
    { label: foundation.label, sum: foundation.rate * area },
    { label: 'Коробка: ' + walls.label, sum: walls.rate * area },
    { label: roof.label, sum: roof.rate * area },
    { label: 'Окна, двери, обязательные работы', sum: WINDOWS_RATE * area }
  ];
  if (finish.rate) rows.push({ label: finish.label, sum: finish.rate * area });
  if (utils.rate) rows.push({ label: utils.label, sum: utils.rate * area });

  var total = rows.reduce(function (acc, r) { return acc + r.sum; }, 0);

  // База 5 месяцев плюс надбавки за сложность разделов и за площадь свыше 150 м²
  var term = 5 + walls.term + foundation.term + roof.term + finish.term + utils.term
    + Math.max(0, Math.ceil((area - 150) / 60));

  return { area: area, rows: rows, total: total, term: term };
}

function renderEstimate() {
  var e = readEstimate();
  eAreaOut.textContent = String(e.area);

  breakdownBody.textContent = '';
  e.rows.forEach(function (r) {
    var tr = document.createElement('tr');
    var th = document.createElement('th');
    th.scope = 'row';
    th.textContent = r.label;
    var td = document.createElement('td');
    td.textContent = rub(r.sum);
    tr.appendChild(th);
    tr.appendChild(td);
    breakdownBody.appendChild(tr);
  });

  estimateTotal.textContent = rub(e.total);
  estimatePerm.textContent = rub(e.total / e.area);
  estimateTerm.textContent = e.term + ' ' + plural(e.term, 'месяц', 'месяца', 'месяцев');

  currentEstimate = e.total;
  mSum.value = rubFmt.format(e.total);
  renderMortgage();
  renderStages();
}

estimateForm.addEventListener('input', renderEstimate);
estimateForm.addEventListener('change', renderEstimate);

/* ===== Ипотека ===== */

function parseSum(text) {
  var digits = String(text).replace(/\D/g, '');
  return digits ? Number(digits) : 0;
}

function renderMortgage() {
  var sum = parseSum(mSum.value);
  var downShare = Number(mDown.value) / 100;
  var years = Number(mTerm.value);
  var rate = Number(mRate.value) / 100;

  mDownOut.textContent = mDown.value;
  mTermOut.textContent = mTerm.value;

  var down = sum * downShare;
  var loan = sum - down;
  var months = years * 12;
  var monthRate = rate / 12;

  // Аннуитет; при нулевой ставке формула вырождается в деление на срок
  var payment = monthRate > 0
    ? loan * monthRate / (1 - Math.pow(1 + monthRate, -months))
    : loan / months;
  if (!isFinite(payment) || loan <= 0) payment = 0;

  mPayment.textContent = rub(payment);
  mDownSum.textContent = rub(down);
  mLoan.textContent = rub(loan);
  mOver.textContent = rub(Math.max(0, payment * months - loan));
}

mortgageForm.addEventListener('input', renderMortgage);
mortgageForm.addEventListener('change', renderMortgage);

// Поле суммы держим форматированным, но без потери позиции курсора при вводе
mSum.addEventListener('blur', function () {
  mSum.value = rubFmt.format(parseSum(mSum.value));
});

/* ===== Этапы и транши ===== */

function renderStages() {
  stagesBody.textContent = '';
  STAGES.forEach(function (s) {
    var tr = document.createElement('tr');

    var th = document.createElement('th');
    th.scope = 'row';
    th.textContent = s.name;

    var what = document.createElement('td');
    what.className = 'stages__what';
    what.textContent = s.what;

    var term = document.createElement('td');
    term.textContent = s.term;

    var share = document.createElement('td');
    share.className = 'stages__share';
    share.textContent = s.share + '%';

    var sum = document.createElement('td');
    sum.className = 'stages__sum';
    sum.textContent = rub(currentEstimate * s.share / 100);

    tr.appendChild(th);
    tr.appendChild(what);
    tr.appendChild(term);
    tr.appendChild(share);
    tr.appendChild(sum);
    stagesBody.appendChild(tr);
  });
}

/* ===== Аккордеон ===== */

function renderFaq() {
  FAQ.forEach(function (item, i) {
    var wrap = document.createElement('div');
    wrap.className = 'acc__item';

    var btn = document.createElement('button');
    btn.className = 'acc__btn';
    btn.type = 'button';
    btn.id = 'acc-btn-' + i;
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', 'acc-panel-' + i);

    var label = document.createElement('span');
    label.textContent = item.q;

    var icon = document.createElement('span');
    icon.className = 'acc__icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.innerHTML = '<svg viewBox="0 0 20 20" width="18" height="18"><path d="M10 4v12M4 10h12"/></svg>';

    btn.appendChild(label);
    btn.appendChild(icon);

    // Обёртка-грид анимирует высоту через grid-template-rows 0fr → 1fr:
    // единственный способ плавно раскрыть блок неизвестной высоты без JS-замеров.
    var slot = document.createElement('div');
    slot.className = 'acc__slot';

    var panel = document.createElement('div');
    panel.className = 'acc__panel';
    panel.id = 'acc-panel-' + i;
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-labelledby', 'acc-btn-' + i);

    var text = document.createElement('p');
    text.className = 'acc__text';
    text.textContent = item.a;
    panel.appendChild(text);
    slot.appendChild(panel);

    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      // одновременно открыт только один вопрос
      accordion.querySelectorAll('.acc__btn').forEach(function (other) {
        other.setAttribute('aria-expanded', 'false');
      });
      accordion.querySelectorAll('.acc__item').forEach(function (other) {
        other.classList.remove('is-open');
      });
      if (!open) {
        btn.setAttribute('aria-expanded', 'true');
        wrap.classList.add('is-open');
      }
    });

    wrap.appendChild(btn);
    wrap.appendChild(slot);
    accordion.appendChild(wrap);
  });
}

/* ===== Форма заявки ===== */

function fillProjectSelect() {
  var any = document.createElement('option');
  any.value = 'any';
  any.textContent = 'Ещё не выбрали';
  fProject.appendChild(any);
  PROJECTS.forEach(function (p) {
    var opt = document.createElement('option');
    opt.value = p.id;
    opt.textContent = p.name + ' · ' + p.area + ' м²';
    fProject.appendChild(opt);
  });
}

function setError(input, errorEl, isError) {
  input.classList.toggle('is-error', isError);
  errorEl.hidden = !isError;
  if (isError) input.setAttribute('aria-invalid', 'true');
  else input.removeAttribute('aria-invalid');
}

leadForm.addEventListener('submit', function (event) {
  event.preventDefault();

  var name = document.getElementById('f-name');
  var nameErr = document.getElementById('f-name-err');
  var phone = document.getElementById('f-phone');
  var phoneErr = document.getElementById('f-phone-err');

  var nameBad = name.value.trim().length < 2;
  var digits = phone.value.replace(/\D/g, '');
  var phoneBad = !(digits.length === 11 && (digits[0] === '7' || digits[0] === '8'));

  setError(name, nameErr, nameBad);
  setError(phone, phoneErr, phoneBad);

  if (nameBad || phoneBad) {
    (nameBad ? name : phone).focus();
    return;
  }

  leadForm.reset();
  fProject.value = 'any';
  showToast('Заявка принята — перезвоним в течение рабочего дня');
});

leadForm.addEventListener('input', function (event) {
  var el = event.target;
  if (el.id === 'f-name') setError(el, document.getElementById('f-name-err'), false);
  if (el.id === 'f-phone') setError(el, document.getElementById('f-phone-err'), false);
});

/* ===== Появление блоков ===== */

function initReveal() {
  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      items.forEach(function (el) { io.observe(el); });
    });
  });
}

/* ===== Плавные якоря ===== */

document.addEventListener('click', function (event) {
  var link = event.target.closest('a[href^="#"]');
  if (!link) return;
  var id = link.getAttribute('href').slice(1);
  if (!id) return;
  var target = document.getElementById(id);
  if (!target) return;
  event.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

/* ===== Старт ===== */

renderHeroCard();
renderCatalog();
fillProjectSelect();
renderFaq();
renderEstimate();
initReveal();
