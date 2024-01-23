import React, { useReducer } from 'react'

function Counter() {
    const countReducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return { count: state.count + action.payload} 
            case 'decrement':
                return { count: state.count - action.payload }
            default:
                return state;
        }

    }

    const getPosts = async (payload) => {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${payload}`).then(response => {
            return response.data;

        });
    }

    const [counter, dispatch] = useReducer(countReducer, { count: 0 });

    return (
        <div>
            <p>Count {counter.count}</p>
            <p><button onClick={() => dispatch({ type: 'increment', payload: 2 })}>Increment </button></p>
            <p><button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>decrement </button></p>
            {/* <p><button onClick={() => dispatch({type : 'getPosts' , payload: 1})}>Get Posts </button></p> */}
        </div>
    )
}

export default Counter