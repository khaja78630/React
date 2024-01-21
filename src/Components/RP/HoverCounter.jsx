import React from 'react'
import Counter from './Counter'

function HoverCounter(props) {
  
  return (
    <div>
      <Counter render={
        (count, increment ) => {
          return (
            <h4 onMouseOver={increment}>Mouse over {count}</h4>
          )
        }}

      />
    </div>
  )
}

export default HoverCounter