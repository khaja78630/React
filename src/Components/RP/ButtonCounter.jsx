import React  from 'react'
import Counter from './Counter'

function ButtonCounter(props) {
    
  return (
    <Counter render={(count, increment) => <button onClick={increment}>Button Count {count}</button>} />

   
  )
}

export default ButtonCounter