import React, { useState } from "react";
import { connect } from "react-redux";

import MainContentGraph from "./MainContentGraph/MainContentGraph"

import arrow from "src/Static/Img/Arrow";

import s from "./Style/MainContent.module.sass"

const MainContent: React.FC = (props) => {
  const [val1, setVal1] = useState()
  const [val2, setVal2] = useState()
  import(`src/Static/Img/Сurrency/${props.exchangeParams.val1}`).then(i => setVal1(i.default))
  import(`src/Static/Img/Сurrency/${props.exchangeParams.val2}`).then(i => setVal2(i.default))
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.MainContent}>
          <div className={s.exchangeRate}>
            <span>
              {props.exchange}
            </span>
            <div className={s.imgVal}>
              <img src={val1} alt="#" />
            </div>
            <img src={arrow} className={s.arrow} alt="#" />
            <div className={s.imgVal}>
              <img src={val2} alt="#" />
            </div>
          </div>
          <MainContentGraph />
        </div>
      </div>
    </div>
  );
}

const exchangeCatch = state => {
  return {
    exchange: state.exchange,
    exchangeParams: state.exchangeParams
  }
}

export default connect(exchangeCatch)(MainContent)