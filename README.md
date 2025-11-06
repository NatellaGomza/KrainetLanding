# KrainetLanding

## Демо

[Открыть сайт на GitHub Pages](https://natellagomza.github.io/KrainetLanding)

## Как запустить проект

### 1. Клонируйте репозиторий
git clone https://github.com/NatellaGomza/KrainetLanding.git
cd KrainetLanding

### 2. Установите зависимости
npm install

### 3. Запустите форматирование и линтинг (опционально)
npm run format
npm run lint:css

### 4. Скомпилируйте и минифицируйте стили и скрипты
npm run build:css
npm run build:js

### 5. Запустите локальный сервер
http-server -c-1

### 6. Откройте в браузере адрес, указанный в терминале (обычно http://localhost:8080)

- **-c-1** отключает кэширование, чтобы изменения отображались сразу
- Не открывайте **index.html** напрямую — интерактивные модули требуют HTTP-контекста

## Особенности

- **Модульная SCSS-структура**: `base`, `layout`, `components` — всё разделено и масштабируемо
- **Модульный JavaScript**: компоненты разбиты по назначению, подключаются через `import`/`export`
- **SVG-иконки через JS**: вставка, управление состоянием, адаптация под интерактивные элементы
- **Минификация CSS и JS**: через `postcss` и `terser`, без Webpack
- **Кастомный слайдер**: с динамическим offset и pixel-perfect наложением
- **Бургер-меню**: с закрытием при клике вне области и переходе по ссылке
- **Yandex Maps API**: с кастомной меткой и адаптивной инициализацией
- **Учет высоты header при скролле**: через `scroll-margin-top` и JS-скролл
- **Lazy loading**: для всех изображений
- **GitHub Pages**: деплой без сборщика, с ручной оптимизацией путей

## Технологии

- HTML5, SCSS, JavaScript (ES6+)
- Yandex Maps API
- Stylelint, Prettier, Terser, PostCSS
- GitHub Pages

## Скрипты

```json
{
  "scripts": {
    "format": "prettier \"app/scripts/**/*.js\" --config config/.prettierrc --write",
    "lint:css": "stylelint \"app/styles/**/*.scss\" --config config/.stylelintrc.json",
    "build:css": "postcss app/styles/main.css --config config/postcss.config.js -o app/styles/main.min.css",
    "build:js": "terser app/scripts/main.js -o app/scripts/main.min.js --compress --mangle"
  }
} 
```

- **format** — автоформатирование JS/TS
- **lint:css** — проверка SCSS по стандарту-
- **build:css** — минификация CSS через cssnano
- **build:js** — минификация JS через terser


## Структура проекта

```
├── app/
│   ├── assets/           # Статичные изображения, WebP, PNG, SVG
│   ├── fonts/            # Подключаемые шрифты (woff2, woff)
│   ├── scripts/          # JS-модули
│   │   ├── components/   # UI-логика: бургер, слайдер, карта
│   │   ├── svg/          # SVG-иконки, маски, вставка через JS
│   │   └── main.js       # Точка входа, импорт и инициализация
│   ├── styles/           # SCSS-модули
│   │   ├── base/         # Сброс, переменные, типографика
│   │   ├── layout/       # Сетка, header, footer, секции
│   │   ├── components/   # Кнопки, карточки, интерактивные элементы
│   │   ├── main.scss     # Точка входа для сборки
│   │   ├── main.css      # Скомпилированный CSS
│   │   ├── main.css.map  # Source map для отладки
│   │   ├── main.min.css  # Минифицированный CSS
│   │   └── main.min.css.map # Source map минифицированной версии
├── config/               # Настройки форматирования и линтинга
│   ├── .prettierrc       # Конфигурация Prettier
│   ├── .prettierignore   # Исключения для форматирования
│   ├── .stylelintrc.json # Конфигурация Stylelint
│   └── postcss.config.js # Настройки PostCSS + cssnano
├── index.html            # Главная страница, точка входа
├── README.md             # Документация проекта
├── .gitignore            # Исключения для Git
├── package.json          # Скрипты и зависимости
├── package-lock.json     # Зафиксированные версии npm
└── node_modules/         # Установленные библиотеки (dev only)
```