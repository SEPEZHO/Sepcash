import React from "react";
import { connect } from "react-redux";

import s from "./Style/MainList.module.sass"
import Exchange from "src/Logics/Exchange/Exchange"
import { setExchange } from "src/Store/Actions/ExchangeActions";

class MainList extends React.Component{
  // componentDidMount() {
  //   Exchange(this.props.exchangeParams, this.props.setExchange)
  // } 

  // componentWillReceiveProps() {
  // }

  render() {
    Exchange(this.props.exchangeParams, this.props.setExchange)
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.MainList}>
            MainList
            <br />
            {this.props.exchange}
            <br />
          </div>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    setExchange: exchange => dispatch(setExchange(exchange))
  }
}

const exchangeCatch = state => {
  return {
    exchange: state.exchange,
    exchangeParams: state.exchangeParams
  }
}

export default connect(exchangeCatch, mapDispatchToProps)(MainList)