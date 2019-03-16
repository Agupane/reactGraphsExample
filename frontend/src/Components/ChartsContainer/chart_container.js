import React, { Component } from 'react';
import Chart from "react-apexcharts";
import './Chart-container.css';
const CHART_TYPE_LINE = 'line';
const CHART_TYPE_BAR = 'bar';

class CharContainer extends Component {

  state = {
    options: {
      chart: {
        width: "100%",
        height: 380,
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
      title: {
        text: 'Virus spread by year',
        align: 'left'
      },
      tooltip: {
        enabled: false
      }
    },
    series: [
      {
        name: "Population infected",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ],
  };

  render() {

    const barChart = this.getChart(CHART_TYPE_BAR);
    const lineChart = this.getChart(CHART_TYPE_LINE);
    return (
      <div className="Chart-container">
        {barChart}
        {lineChart}
        <button onClick={this.setRandomValues}>Random values</button>
      </div>
    );
  }

  getChart = chartType => {
    let chart = null;
    if(chartType && (chartType === CHART_TYPE_LINE || chartType === CHART_TYPE_BAR)) {
      chart = (
        <Chart
          options={this.state.options}
          series={this.state.series}
          type={chartType}
        />
      )
    }
    return chart;
  };
  setRandomValues = () => {
    let randomData = [];
    for(let i = 0; i<8; i++){
      randomData[i] =  Math.floor(Math.random() * 50);
    }
    const newSeries = [
      {
        name: "Population infected",
        data: randomData
      }
    ];
    this.setState({
      series: newSeries
    });
  }
}

export default CharContainer;
