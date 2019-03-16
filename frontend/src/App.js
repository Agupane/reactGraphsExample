import React, { Component } from 'react';
import './App.css';
import CharContainer from "./Components/ChartsContainer/chart_container";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Charts example app</h1>
        </header>
        <div  className="App-body">
          <CharContainer/>
        </div>
      </div>
    );
  }
}

export default App;
