import React, { useState } from 'react'
import {connect} from 'react-redux';

import increment from './incrementAction';
import decrement from './decrementAction';

function CounterUsingRedux(props) {
  const [counter, setCounter] = useState(0);

  return (
    <div>CounterUsingRedux

     <p> Count from store : {props.count}</p>
      <p>Name : {props.name}</p>

<p>
  <button onClick={() => props.increase(counter)}>Increase</button>
</p>
<p>
  <button onClick={props.decrease}>Decrease</button>
</p>
<input type="text" onChange={(e) => setCounter(parseInt(e.target.value))} value={counter}/>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    count: state.count,
    name: state.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increase: (counter) => dispatch(increment(counter)),
    decrease : () => dispatch(decrement())

  //   // dispatch({
  //     type : INCREMENT,
  //     payload: 2
  // })

  //   // dispatch({
  //     type : DECREMENT,
  //     payload: 2
  // })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterUsingRedux);

