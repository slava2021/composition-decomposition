import { Children } from "react";
import { Banner } from "./Banner";
import * as React from "react";

// Компопнент Header выводит в секции Header все Children компоненты,
export const Header = ({ children }) => {
  return (
    <header className="header-container">
      <div className="header-news">
        {Children.map(children, (child) => (
          <>{child}</>
        ))}
      </div>
      <Banner />
    </header>
  );
};
