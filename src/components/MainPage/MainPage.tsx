import React from "react";

import s from "./Style/MainPage.module.sass"
import MainContent from "./MainContent/MainContent"
import MainContentFilter from "./MainContentFilter/MainContentFilter"
import Exchange from "../../Logics/Exchange/Exchange"
import HistoryExchange from "../../Logics/Exchange/HistoryExchange"

const MainPage: React.FC = () => {
  return (
    <div className={s.container}>
        <div className={s.mainPage}>
          <MainContentFilter />
          <MainContent />
        </div>
        <Exchange />
        <HistoryExchange />
    </div>
  );
}

export default MainPage
