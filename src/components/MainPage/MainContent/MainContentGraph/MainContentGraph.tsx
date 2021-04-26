import React, { useState, useEffect} from "react";
import { connect } from "react-redux";
import Chart from 'chart.js'

import s from "../Style/MainContent.module.sass"

function addData(chart, label, data) {
  chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
  });
  chart.update();
}

const MainContentGraph: React.FC = (props) => {
  const [ctx, setCtx] = useState("")

  console.log('RERENDER')

  let myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: Object.keys(props.historyExchange),
      datasets: []
    },
    options: {
      scales: {
        xAxes: [{
            ticks: {
                callback: () => null
            }
        }]
      },
    }
  })

  useEffect(() => {
    // myChart.data.datasets.push(
    //     {
    //       label: props.exchangeParams.amount+" "+props.exchangeParams.val1+" to "+props.exchangeParams.val2,
    //       data: Object.values(props.historyExchange).map(e => (e*props.exchangeParams.amount).toFixed(2)),
    //       backgroundColor: [
    //         "rgba(192, 192, 192, 0.2)"
    //       ]
    //     }
    // )
    // myChart.options.tooltips = false
    // myChart.update()
  }, [props])

  return (
    <div className={s.MainContentGraph}>
      <canvas
        style={{ width: 800, height: 300 }}
        ref={node => (setCtx(node))}
      />
    </div>
  );
}

const exchangeCatch = state => {
  return {
    exchange: state.exchange,
    exchangeParams: state.exchangeParams,
    historyExchange: state.historyExchange
  }
}

export default connect(exchangeCatch)(MainContentGraph)
