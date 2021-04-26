import React, { useState } from "react";
import { connect } from "react-redux";

import s from "./Style/MainContentFilter.module.sass"
import { setExchangeParams } from "src/Store/Actions/ExchangeActions";

const MainContentFilter: React.FC = (props) => {
  const [val1, setVal1] = useState(props.val1)
  const [val2, setVal2] = useState(props.val2)
  const [amount, setAmount] = useState(props.amount)
  const onClick = () => {
    let exchangeParams = {
      val1: val1,
      val2: val2,
      amount: amount
    }
    props.setExchangeParams(exchangeParams)
  }

  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.MainContentFilter}>
          <input placeholder={val1} onChange={(e)=>setVal1(e.target.value.toUpperCase())} />
          <input placeholder={val2} onChange={(e)=>setVal2(e.target.value.toUpperCase())} />
          <input placeholder={amount} onChange={(e)=>setAmount(e.target.value.toUpperCase())} />
          <button onClick={onClick}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    setExchangeParams: exchangeParams => dispatch(setExchangeParams(exchangeParams)),
  }
}

const exchangeCatch = state => {
  return {
    val1: state.exchangeParams.val1,
    val2: state.exchangeParams.val2,
    amount: state.exchangeParams.amount,
    historyExchange: state.historyExchange
  }
}

export default connect(exchangeCatch, mapDispatchToProps)(MainContentFilter)