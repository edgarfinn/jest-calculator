import React from 'react';
import './button_panel.css';
import Button from './Button/button'


export default () => {

  const buttonValues = ['7','8','9','÷','4','5','6','x','1','2','3','-','0','.','=','+'];

  const buttonsArray = buttonValues.map((symbol) => {
    return (
      <Button
        symbol={symbol}
      />
    )
  })



  return (
    <div className="button-panel">
      {buttonsArray}
    </div>
  )
}

/*

<this.renderButton onButtonPress={this.props.onButtonPress} value='7' symbol='7'/>

*/
