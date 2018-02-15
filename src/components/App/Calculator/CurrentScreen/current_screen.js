import React, { Component } from 'react';
import './current_screen.css'

export default class CurrentScreen extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {currentValue} = this.props;
    return (
      <div className="current-screen">
        {currentValue}
      </div>
    )
  }
}
