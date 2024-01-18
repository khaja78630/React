import React, {useState} from 'react'
import counter from './counter';

function ButtonCounter(props) {
    
  return (
    <button onClick={props.increment}>Clicked {props.count} times</button>
  )
}

export default counter(ButtonCounter)