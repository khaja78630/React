import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const navigate = useNavigate();
   const [user, setUser] = useState({
    name : '',
    password: '',
    isInvalidUser : false
   })
    
    const handleClick = () =>{
        if(user.name === "Vinay" && user.password === "Vinay"){ // axios.post('/api/checkuserauthenticatiion', {username, passwrd)})
            props.setIsLoggedin(true);
        //     const now  = new Date();

        //     const time = now.getTime() + 1 * 60 * 100;

        //     now.setTime(time);
        //     now.toUTCString()


        //    document.cookie = 'isLoggedin=true;expires='+ now.toUTCString();

        // local storage
        // localStorage.setItem('isLoggedin', 'true');

        // session storage
        const date = new Date();
        const timems = date.getTime() + 1 * 60 * 100; //110000000

        const login =  {
            isLoggedin : true,
            expiry: timems
        }
        sessionStorage.setItem('login', JSON.stringify(login));

            navigate('/posts?token=1234567', { state: {username : user.name}})
        } else {
            // show error message for invalid username and password
            const currUser = { ...user };
            currUser.isInvalidUser = true;
            setUser(currUser);
            document.cookie = 'isLoggedin:false';
        }
       
    }
    const onChangeHandler = (e) => {
        const currUser = { ...user };
        currUser[e.target.name] = e.target.value;
        setUser(currUser);
    }
  return (
    <div>
        
        {user.isInvalidUser && <p>Please enter correct user name and password</p>}
        <p>
            User Name : <input type="text" name='name' onChange={onChangeHandler} value={user.name}/>
        </p>
        <p>
            Password : <input type="password" name='password' onChange={onChangeHandler} value={user.password} />
        </p>
        <p>
        <button onClick={handleClick}>Login</button>
        </p>
    </div>
  )
}

export default Login // this.props.history.push('/')