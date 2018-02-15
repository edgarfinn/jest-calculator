import React, { Component } from 'react';

import './calculator.css';
import CurrentScreen from './CurrentScreen/current_screen'
import ButtonPanel from './ButtonPanel/button_panel'
import reducers from '../../../reducers';
import {incrementNumber} from '../../../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class Calculator extends Component {
  constructor(props) {
    super(props)

    // this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress(value) {
    console.log('button pressed ', value);
  }

  render() {
    return (
        <div className="calculator">
          <CurrentScreen currentValue={this.props.currentValue}/>
          <ButtonPanel
            onButtonPress={(value) => {this.onButtonPress(value)}}
          />
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentValue: state.currentValue
  }
}

const mapDispatchToprops = (dispatch) => {
  return bindActionCreators({incrementNumber})
}

export default connect(mapStateToProps,mapDispatchToprops)(Calculator)
