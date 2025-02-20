import { Header } from "./components/Header";
import { Main } from "./components/Main";
import {
  LinksNavHeader,
  LinksNewsHeader,
  LinksNavSearch,
} from "./components/Links";
import { TradingView } from "./components/TradingView";
import { Search } from "./components/Search";
import { WidgetsList } from "./components/WidgetsList";
import { Banner } from "./components/Banner";
import "./App.css";

// Можно вынести в отдельный файл
// type TabsLInksProps = {
//   type: string;
//   className: string;
//   href: string;
//   text: string;
// };

function App() {
  return (
    <>
      <div className="container">
        <Header>
          <LinksNavHeader />
          <LinksNewsHeader />
          <TradingView />
        </Header>
        <main className="main-container">
          <Main>
            <LinksNavSearch />
            <Search />
          </Main>
          <Banner />
          <WidgetsList />
        </main>
      </div>
    </>
  );
}

export default App;
