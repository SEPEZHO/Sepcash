import React from "react";
import { connect } from "react-redux";
import { setExchange } from "src/Store/Actions/ExchangeActions";

const Exchange: React.FC = (props) => {
  fetch("https://api.exchangeratesapi.io/latest?base="+props.exchangeParamsVal1+"&symbols="+props.exchangeParamsVal2, {
    "method": "GET",
  })
  .then(response => response.json())
  .then(response => {
    props.setExchange(response.rates[props.exchangeParamsVal2].toFixed(2))
  })
  .catch(err => {
    console.log(err)
    props.setExchange('Error...')
  });
  return null
}

const mapDispatchToProps = dispatch => {
  return {
    setExchange: exchange => dispatch(setExchange(exchange))
  }
}

const exchangeCatch = state => {
  return {
    exchangeParamsVal1: state.exchangeParams.val1,
    exchangeParamsVal2: state.exchangeParams.val2
  }
}

export default connect(exchangeCatch, mapDispatchToProps)(Exchange)