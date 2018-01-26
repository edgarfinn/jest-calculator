import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../../reducers'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React-Redux Calculator</h1>
        </header>
      </div>
    );
  }
}

export default App;
