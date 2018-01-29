import React from 'react';
import './button_panel.css';

const Button = ({value, symbol}) => {
  return (
    <button className="button">
      <span>{symbol}</span>
    </button>
  )
}

export default () => {
  return (
    <div className="button-panel">
      <Button value='7' symbol='7'/>
      <Button value='8' symbol='8'/>
      <Button value='9' symbol='9'/>
      <Button value='/' symbol='÷'/>
      <Button value='4' symbol='4'/>
      <Button value='5' symbol='5'/>
      <Button value='6' symbol='6'/>
      <Button value='*' symbol='x'/>
      <Button value='1' symbol='1'/>
      <Button value='2' symbol='2'/>
      <Button value='3' symbol='3'/>
      <Button value='-' symbol='-'/>
      <Button value='0' symbol='0'/>
      <Button value='.' symbol='.'/>
      <Button value='=' symbol='='/>
      <Button value='+' symbol='+'/>
    </div>
  )

}
