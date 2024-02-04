import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import increment from './redux/counter/incrementAction';

// >=16.8 version
function DisplayName() {
    const state = useSelector((state) => {
        return state.counterReducer;
    });
    // const name = useSelector((state) => {
    //     return state.name
    // });
    // const count = useSelector((state) => {
    //     return state.count
    // });
    const dispatch = useDispatch();

  return (
    <div>DisplayName Name : {state.name}
    <button onClick={()=>dispatch(increment(3))}>Increase from Display name component</button>
    </div>
  )
}

export default DisplayName