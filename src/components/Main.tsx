import * as React from "react";
import { Children } from "react";

// Компопнент Main выводит в секции Main все Children компоненты поиска Search,
export const Main = ({ children }) => {
  return (
    <aside className="main-container-search">
      {Children.map(children, (child) => (
        <>{child}</>
      ))}
    </aside>
  );
};
