import React from 'react'
import { useState } from 'react'
import DisplayCount from './DisplayCount';

function Counter() {
    const [count, setCount] = useState(0);
    const [userData, setUserData] = useState(null);

    const setData = (data) => {
        setUserData(data);
    }
    return (
        <div>
            <h4>Count {count}</h4>
            <DisplayCount setCount={setCount} count={count} setData={setData} />
            User Detils
            {
                userData && <div>
                    <p>User Name {userData.name}</p>
                    <p>User Id {userData.id}</p>
                </div>
            }
        </div>
    )
}

export default Counter