import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      Unlimited: "Unlimited ",
      Entertainment: "Entertainment",
      "Movies, TVs shows, & More.": "Movies, TVs shows, & More.",
      Movie: "Movie",
      "Action, Drama": "Action, Drama",
      "SHOW NOW": "SHOW NOW",
      En: "En",
      Ru: "Ru",
      "SIGN IN": "SIGN IN",
      "ONLINE STREAMING": "ONLINE STREAMING",
      "Upcoming Movies": "Upcoming Movies",
    },
  },
  ru: {
    translation: {
      Unlimited: "Неограниченное количество ",
      Entertainment: "развлечений",
      "Movies, TVs shows, & More.": "Фильмы, телепередачи и многое другое",
      Movie: "Фильм",
      "Action, Drama": "Боевик, Драма",
      "SHOW NOW": "СМОТРЕТЬ",
      En: "Англ",
      Ru: "Рус",
      "ONLINE STREAMING": "СМОТРЕТЬ ОНЛАЙН",
      "Upcoming Movies": "Премьеры",
      All: "Все",
      Action: "Боевик",
      Crime: "Криминал",
      Drama: "Драма",
      Espionage: "Шпионаж",
      Fantasy: "Фэнтези",
      Horror: "Ужасы",
      Music: "Мьюзикл",
      Mystery: "Мистика",
      Romance: "Роман",
      Supernatural: "Сверхестественное",
      Thriller: "Триллер",
      category: "категория",
      "sort by": "сортировать по",
      "title A-Z": "названию A-Я",
      "title Z-A": "названию Я-А",
      Rating: "рейтингу",
      "To movies list": "Назад к фильмам",
      "NEW EPISODES": "НОВЫЙ ЭПИЗОД",
      Share: "Поделиться",
      Rate: "Рейтинг",
      "REMOVE FROM FAVORITES": "УДАЛИТЬ ИЗ ИЗБРАННОГО",
      "ADD TO FAVORITES": "ДОБАВИТЬ В ИЗБРАННОЕ",
      "Manage your favorite movies": "Управляте любимыми фильмами",
      "No favorite movies": "Нет любимымх фильмов",
      "Searching results": "Результаты поиска",
      "Oops...no results": "Упс...ничего не найдено",
      "Oops...Page not found": "Упс...страница не найдена",
      Home: "Главная",
      Favorites: "Избранное",
      LOGIN: "ВХОД",
      "SIGN IN": "РЕГИСТРАЦИЯ",
      or: "или",
      Login: "Логин",
      Password: "Пароль",
      Username: "Имя пользователя",
      Submit: "Войти",
      "Sign in": "Регистрация",
      "PERSON INFO": "Информация об актере",
      Gender: "Пол",
      Age: "Возраст",
      Birthday: "Дата рождения",
      "Born in": "Место рождения",
      Actors: "Актеры",
      "Movies with": "Фильмы с",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
