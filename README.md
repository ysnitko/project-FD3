# Выпускной проект - SPA "Streaming Service"

![ScreenShot](https://raw.github.com/ysnitko/project-FD3/main/src/helpers/img/Screenshot%202023-09-07%20at%2023.16.17.png)

## Как запустить проект?

1. Создать директорию, в которой будет размещен проект.

2. С помощью терминала, запущенного из используемой среды разработки, перейти в созданную директорию и выполнить команду `git clone https://github.com/ysnitko/project-FD3.git`.

3. В терминале выполнить команду `cd project-FD3`.

4. Для загрузки необходимых библиотек, используемых в проекте, в терминале выполните команду `npm i`.

5. После заугрузки библиотек и зависимостей запускаем проект используя команду `npm run start`.

6. Проект запустится автоматически в браузере либо будет доступен по адресу [http://localhost:3000](http://localhost:3000).

## Пояснения по критериям оценки

### 1. Динамичность веб-страниц.

#### 1.1. Вид веб страниц меняется при роутинге.

#### 1.2. Веб-страницы подстраиваются под действия пользователя, под ситуацию - изменяется вёрстка элементов.

Реализован условный рендер кнопки бокового меню 'Избранное', которая оповещает пользователя о том, что в список избранного добавлены фильмы, а также кнопки добавления и удаления из избранного.

![ScreenShot](https://raw.github.com/ysnitko/project-FD3/main/src/helpers/img/Screenshot%202023-09-08%20at%2000.12.49.png)

Текст страницы рендерится на языке в зависимости от выбранной пользователем локализации (доступен английский и русский язык). По умолчанию выбран английский язык. Реализовано при помощи плагина react-i18n.

![ScreenShot](https://raw.github.com/ysnitko/project-FD3/main/src/helpers/img/Screenshot%202023-09-08%20at%2000.42.20.png)

Содержимое страницы с фильмами рендерится динамически в зависимости от выбранной пользователем категории и сортировки по наиманованию либо рейтингу.

![ScreenShot](https://raw.github.com/ysnitko/project-FD3/main/src/helpers/img/Screenshot%202023-09-08%20at%2001.11.25.png)

### 2. Производительность отрисовки.

Заметных задержек при перестраивании веб-страниц, роутинге не установлено. Данные для приложения (каталог фильмов, информация о них) предосталяются посредством обращения к API. Задержки отрисовки страниц могут быть вызваны различными условиями доступа к API. В момент загрузки данных отображается индикатор закгрузки.

![ScreenShot](https://raw.github.com/ysnitko/project-FD3/main/src/helpers/img/Screenshot%202023-09-08%20at%2001.23.35.png)

### 3. Навигация в приложении.

Кнопки 'вперед', 'назад', 'освежить' работают корректно. Роутинг реализован средствами react-routing и описан в файле [PageRouter.js](https://github.com/ysnitko/project-FD3/blob/main/src/routes/PageRouter.js).
Используется вложенный роутинг (фильмы -> о фильме -> идентификатор фильма, фильмы -> категория -> cтраница).
Роутинг дублируется

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
