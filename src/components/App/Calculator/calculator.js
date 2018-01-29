import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../../../reducers';

import './calculator.css';
import CurrentScreen from './CurrentScreen/current_screen'
import ButtonPanel from './ButtonPanel/button_panel'

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

class Calculator extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <div className="calculator">
          <CurrentScreen />
          <ButtonPanel />
        </div>
      </Provider>
    )
  }



}

export default Calculator
