import React, { Component } from 'react';
import './App.css';

import Calculator from './Calculator/calculator'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React-Redux Calculator</h1>
        </header>
        <Calculator />
      </div>
    );
  }
}

export default App;
