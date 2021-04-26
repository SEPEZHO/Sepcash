import React from "react";
import dayjs from "dayjs";
import { connect } from "react-redux";
import { setHistoryExchange } from "src/Store/Actions/HistoryExchangeActions";

const HistoryExchange: React.FC = (props) => {
  let d = new Date()
  console.log('HystoryExchange')
  fetch("https://api.exchangeratesapi.io/history?start_at="+dayjs(d.setMonth(d.getMonth() - 1)).format("YYYY-MM-DD")+"&end_at="+dayjs().format("YYYY-MM-DD")+"&base="+props.exchangeParamsVal1+"&symbols="+props.exchangeParamsVal2, {
    "method": "GET",
  })
  .then(response => response.json())
  .then(response => {
    let result = {}
    Object.keys(response.rates).sort().forEach(e => {
      result[e] = response.rates[e][props.exchangeParamsVal2]
    })
    props.setHistoryExchange(result)
  })
  .catch(err => {
    console.log(err)
    props.setHistoryExchange({"error": "error"})
  });
  return null
}

const mapDispatchToProps = dispatch => {
  return {
    setHistoryExchange: historyExchange => dispatch(setHistoryExchange(historyExchange))
  }
}

const exchangeCatch = state => {
  return {
    exchangeParamsVal1: state.exchangeParams.val1,
    exchangeParamsVal2: state.exchangeParams.val2
  }
}

export default connect(exchangeCatch, mapDispatchToProps)(HistoryExchange)