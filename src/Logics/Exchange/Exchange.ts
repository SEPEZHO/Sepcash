const Exchange = (exchangeParams, setExchange) => {
  // fetch("https://rapidapi.p.rapidapi.com/query?function=CURRENCY_EXCHANGE_RATE&to_currency="+exchangeParams.val2+"&from_currency="+exchangeParams.val1, {
  fetch("https://free.currconv.com/api/v7/convert?q="+exchangeParams.val1+"_"+exchangeParams.val2+"&compact=ultra&apiKey=1447043c713439b06ffd", {
    "method": "GET",
    // "headers": {
    //   "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
    //   "x-rapidapi-key": "fa90193b39msh782757d5371a9b9p1b6030jsnd2a7c3fda822"
    // }
  })
  .then(response => response.json())
  .then(response => {
    setExchange((response[exchangeParams.val1+"_"+exchangeParams.val2]*exchangeParams.amount).toFixed(2))
    // setExchange(Number(response["Realtime Currency Exchange Rate"]["5. Exchange Rate"])*exchangeParams.amount)
  })
  .catch(err => {
    console.log(err)
    setExchange('Error...')
  });
}

export default Exchange
