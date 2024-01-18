import React, {useState} from 'react'
import counter from './counter';
function HoverCounter(props) {
    
  return (
    <h4 onMouseOver={props.increment}>Mouse over {props.count} times</h4>
  )
}

export default counter(HoverCounter)