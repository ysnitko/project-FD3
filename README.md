# Выпускной проект - SPA "Streaming Service"

![ScreenShot](https://raw.github.com/ysnitko/project-FD3/main/src/helpers/img/Screenshot%202023-09-07%20at%2023.16.17.png)

## Как запустить проект?

1. Создать директорию, в которой будет размещен проект.

2. С помощью терминала, запущенного из используемой среды разработки, перейти в созданную директорию и выполнить команду `git clone https://github.com/ysnitko/project-FD3.git`.

3. В терминале выполнить команду `cd project-FD3`.

4. Для загрузки необходимых библиотек, используемых в проекте, в терминале выполните команду `npm i`.

5. После заугрузки библиотек и зависимостей запускаем сборку проекта, используя команду `serve -s build`.

6. Проект запустится автоматически в браузере либо будет доступен по адресу [http://localhost:3000](http://localhost:3000).

## Пояснения по критериям оценки

### 1. Динамичность веб-страниц.

Веб-страницы подстраиваются под действия пользователя, под ситуацию - изменяется вёрстка элементов.

Реализован условный рендер кнопки бокового меню 'Избранное', которая оповещает пользователя о том, что в список избранного добавлены фильмы, а также кнопки добавления и удаления из избранного.

![ScreenShot](https://raw.github.com/ysnitko/project-FD3/main/src/helpers/img/Screenshot%202023-09-08%20at%2000.12.49.png)

Текст страницы рендерится на языке в зависимости от выбранной пользователем локализации (доступен английский и русский язык). По умолчанию выбран английский язык. Реализовано при помощи плагина react-i18n.

![ScreenShot](https://raw.github.com/ysnitko/project-FD3/main/src/helpers/img/Screenshot%202023-09-08%20at%2000.42.20.png)

Содержимое страницы с фильмами рендерится динамически в зависимости от выбранной пользователем категории и сортировки по наименованию либо рейтингу.

![ScreenShot](https://raw.github.com/ysnitko/project-FD3/main/src/helpers/img/Screenshot%202023-09-08%20at%2001.11.25.png)

### 2. Производительность отрисовки.

Заметных задержек при перестраивании веб-страниц, роутинге не установлено. Данные для приложения (каталог фильмов, информация о них) предосталяются посредством обращения к API. Задержки отрисовки страниц могут быть вызваны различными условиями доступа к API.

### 3. Навигация в приложении.

Кнопки 'вперед', 'назад', 'освежить' работают корректно. Роутинг реализован средствами react-routing и описан в файле [PageRouter.js](https://github.com/ysnitko/project-FD3/blob/main/src/routes/PageRouter.js).
Используется вложенный роутинг (фильмы -> о фильме -> идентификатор фильма, фильмы -> категория -> cтраница).
Текущая позиция пользователя в приложении передается в URL.

![ScreenShot](https://raw.github.com/ysnitko/project-FD3/main/src/helpers/img/Screenshot%202023-09-08%20at%2002.02.37.png)

В компоненте [Pagination](https://github.com/ysnitko/project-FD3/blob/main/src/components/Pagination/Pagination.js) реализована пагинация. Количество отображаемых фильмов задается переменной perPage в компоненте (по умолчанию 15), активная страница выделяется рамкой.

![ScreenShot](https://raw.github.com/ysnitko/project-FD3/main/src/helpers/img/Screenshot%202023-09-08%20at%2002.19.42.png)

### 4. Кроссбраузерность.

Приложение сохраняет свою функциональность в браузерах Chrome, IE, Opera, Firefox, в браузере Safari наблюдаются различия в стилях таких элементов html как select.

Приложение адаптировано к мобильным устройствам на ОС Android и iOS:

![ScreenShot](https://raw.github.com/ysnitko/project-FD3/main/src/helpers/img/Screenshot%202023-09-08%20at%2002.51.16.png)

![ScreenShot](https://raw.github.com/ysnitko/project-FD3/main/src/helpers/img/Screenshot%202023-09-08%20at%2002.51.34.png)

![ScreenShot](https://raw.github.com/ysnitko/project-FD3/main/src/helpers/img/Screenshot%202023-09-08%20at%2002.51.50.png)

Для демонстрации работы приложения необходимо перейти по [ссылке](https://streaming-serv.netlify.app/) с мобильных устройств.

### 5. Коммуникации.

Веб-приложение широко использует AJAX для загрузки контента, данных, ресурсов.
Основной контент для приложения (фильмы, информация о них) при помощи метода fetch загружается с сервера `https://api.tvmaze.com` (реализовано в компонентах [MovieList](https://github.com/ysnitko/project-FD3/blob/main/src/pages/MoviesList/MoviesList.js), [About](https://github.com/ysnitko/project-FD3/blob/main/src/pages/About/About.js)).
В момент запроса данных отображается индикатор загрузки.

![ScreenShot](https://raw.github.com/ysnitko/project-FD3/main/src/helpers/img/Screenshot%202023-09-08%20at%2001.23.35.png)

### 6. Модель данных.

Для управления состоянием приложения используется модель данных redux. Основная логика работы с redux расположена в папке [redux](https://github.com/ysnitko/project-FD3/tree/main/src/redux). Результирующий reducer приведен в файле [index.js](https://github.com/ysnitko/project-FD3/blob/main/src/redux/reducers/index.js) и посредством использования метода combineReducers собирает вложенные редьюсеры в единый объект.

### 7. Сборка проекта.

Для автоматической сборки приложения в терминале необходимо выполнить команду `npm run build`. Приложение развернуто на сервисе [Netlify](https://streaming-serv.netlify.app/), который интегрирован с github репозиторием. Любые изменения в функционале приложения после его сборки будут обновлены в резвернутом проекте.
