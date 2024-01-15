import React, { useEffect } from 'react'

function DisplayCount(props) {

    const user = {
        name : 'Vinay',
        id: 123
    }

  return (
    <div> <button onClick={() => props.setCount(props.count + 1 )}>Increment</button>
    <button onClick={() =>{
        props.setData(user);
    }}>Set User Details</button>
    </div>
  )
}

export default DisplayCount