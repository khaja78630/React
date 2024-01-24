import Input from 'postcss/lib/input'
import React, { useRef, useState } from 'react'
import Button from '../Button';

function UserForm() {
const inputRefUserName = useRef();
const inputRefPassword = useRef();
const [phone, setPhone] = useState('');

let countRef= useRef(0);
let count = 0;


    const focusName = () => {
        inputRefUserName.current.focus();
        console.log(inputRefUserName.current.value);
        console.log(inputRefPassword.current.value);
    }
    return (
        <div>

<p>Enter Phone Number :  <input value={phone} onChange={(e) => {setPhone(e.target.value)} }type="text" /></p>


            <p> <input id='name' ref={inputRefUserName} type="text" /></p>
            <p> <input ref={inputRefPassword} type="password" /></p>
            count Ref : {countRef.current}
            <Button inputRefUserName={inputRefUserName} inputRefPassword={inputRefPassword}/>
            <button onClick ={() => {
                console.log(countRef);
                countRef.current = countRef.current + 1
                count = count + 1;
                
                }}> Increment</button>
            <button onClick={() => { alert(countRef.current);alert(count)}}>Show Count</button>
        </div>
    )
}

export default UserForm