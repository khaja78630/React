import React, { useCallback, useState } from 'react'
import Counter from './Counter';

function Callback() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    // const countHandler = useCallback(
    //     () => {
    //         setCount(count + 1);

    //     }, [count]
    // )

    const getName = useCallback(() => {
        console.log('name', name)
    }, [name]);

    const changeNameHandler = (e) => {
        setName(e.target.value);
    }

    return (
        <div>

            <p>Enter Name: <input type="text" onChange={(e) => changeNameHandler(e)} value={name} /></p>
            

            <p> Entered Name : {name}</p>
            <p>Count {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>

            <Counter name={getName}/>
        </div>
    )
}

export default Callback