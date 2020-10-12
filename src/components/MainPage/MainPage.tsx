import React from "react";

import s from "./Style/MainPage.module.sass"
import Sidewindow from "./Sidewindow/Sidewindow"
import MainList from "./MainList/MainList"
import MainListFilter from "./MainListFilter/MainListFilter"

const MainPage: React.FC = () => {
  return (
    <div className={s.container}>
        <div className={s.mainPage}>
          <Sidewindow />
          <MainList />
          <MainListFilter />
        </div>
    </div>
  );
}

export default MainPage
