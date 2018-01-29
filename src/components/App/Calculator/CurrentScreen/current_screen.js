import React, {Component} from 'react';
import './current_screen.css'

export default class CurrentValue extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="current-screen">
        0
      </div>
    )
  }
}
