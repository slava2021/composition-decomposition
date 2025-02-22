// При необходимости расширяем или удаляем props для каждого компонента индивидуально

import * as React from "react";

// Компопонент главное меню для новостей
// Получаем список ссылок <a href={link}>title</a>
export const LinksNavHeader = (props) => (
  <nav className="header-nav-news">header-nav-news</nav>
);

// Компопонент список новостей
// Получаем список ссылок <a href={link}>title</a>
export const LinksNewsHeader = (props) => (
  <div className="header-news-href">header-news-href</div>
);

// Компонент меню поиска
// Получаем список ссылок <a href={link}>title</a>
export const LinksNavSearch = (props) => (
  <div className="main-nav-search">main-nav-search</div>
);
