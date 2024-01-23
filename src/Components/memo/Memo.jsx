import React, { useMemo, useState } from 'react'

function Memo() {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const handleIncrement = () => {
        setCount1(count1 + 1);
    }
    const handleIncrement1 = () => {
        setCount2(count2 + 1);
    }
    const multiply = useMemo(() => {
        console.log('from multiply');
        let i = 0;
        while (i < 2000000000) { i++ }
        return count1 * 10
    }, [count1])

    return (
        <div>
            <p>Count1 {count1}</p>
            <p>Count2 {count2}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleIncrement1}>Increment1</button>
            <p> {`${count1} * 10 `} {multiply}</p>
        </div>
    )
}

export default Memo