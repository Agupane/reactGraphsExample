import React, { Component } from 'react';
import Chart from "react-apexcharts";
import axios from 'axios';
import './Chart-container.css';
import openSocket from 'socket.io-client';
const CHART_TYPE_LINE = 'line';
const CHART_TYPE_BAR = 'bar';
const BACKEND_URL = 'http://localhost:3000';
const chartUpdateEvent = 'ChartUpdate';

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

  componentDidMount = async () => {
    let initialData = await axios.get(BACKEND_URL+'/chart');
    this.setState({
      series: initialData.data.series
    });
    // Configures websocket
    const socket = openSocket(BACKEND_URL);
    socket.on(chartUpdateEvent, data => {
      if(data.action === 'update') {
        this.setState({
          series: data.data.series
        });
      }
    })
  };

  render() {

    const barChart = this.getChart(CHART_TYPE_BAR);
    const lineChart = this.getChart(CHART_TYPE_LINE);
    return (
      <>
        <div className="Chart-container">
          {barChart}
          {lineChart}
        </div>
        <button onClick={this.setRandomValues}>Random values</button>
      </>
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
            className="chartItem"
          />
      )
    }
    return chart;
  };
  setRandomValues = async () => {
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
    let result = await axios.put(BACKEND_URL+'/chart', newSeries);
    console.log("Update backend result ", result.data);
    this.setState({
      series: newSeries
    });
  }
}

export default CharContainer;
