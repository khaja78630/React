
import './App.css';
import React, {createContext, useEffect, useState} from 'react'
// import Parent from './Lifecycle/Parent';
// import Parent from './Components/Parent';
// import Stylesheet from './Components/Stylesheet';
// import InlineStyleSheet from './Components/InlineStyleSheet';
// import CSSModule from './Components/CSSModule';
//import LoginForm from './Components/LoginForm';

// import FunctionBasedComponentWithState  from './Components/FunctionBasedComponentWithState';

// 

import Accordian from "./Components/accordian/Accordian";
// import Pure from './Components/PureComponent';
import Func from './Components/Func';
import Header from './Components/Routing/Header';

import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './Components/Routing/Routing';


import { Outlet } from 'react-router-dom';
// import Counter from './Components/context/Counter';

import A from './Components/context/A';
import UserContext from './Components/context/UserContext';
import axios from 'axios';


import B from './Components/context/A';
import C from './Components/context/A';
// import Counter from './Components/HOC/ButtonCounter';
// import HoverCounter from './Components/HO/HoverCounter';
// import ButtonCounter from './Components/HOC/ButtonCounter';

//RenderProps
import HoverCounter from './Components/RP/HoverCounter';
import ButtonCounter from './Components/RP/ButtonCounter';

import Counter from './Components/reduer/Counter';
import Memo from './Components/memo/Memo';
import UsersMemo from './Components/memo/UsersMemo';
import Callback from './Components/usecallback/Callback';
import UserForm from './Components/ref/UserForm';
import { Provider } from 'react-redux';


// redux
// import store from './Components/redux/store';
import {store} from './Components/reduxSaga/store';

import CounterUsingRedux from './Components/redux/counter/Counter';
import DisplayName from './Components/DisplayName';
import Users from './Components/redux/users/Users';
import ProductsDetails from './Components/reduxSaga/ProductsDetails';

function App() {
  // return <Stylesheet />
  // return <InlineStyleSheet />

  // return <CSSModule />
  // const user = {name : 'Vinay'};

const [user, setUser] = useState({userId: "", userName: ""})
  const [users, setUsers] = useState([]);

  const [count, setCount] = useState()
  const [isLoggedin, setIsLoggedin] = useState(false);

  // useEffect(() => {
  //   axios.post('http://localhost:3001/users', {"name" : 'Khaja'}).then(
  //     (response) => {
  //       console.log(response.data)
  //       setUsers(response.data)
      
  //     }

      
  //         )
  // },[]);


  // useEffect(() => {
  //   axios.post('http://localhost:3001/login', {
  //     "userId": 123,
  //     "pasword": "Test"
  //   }).then(
  //     (response) => {
  //       console.log(response.data)


  //     }


  //   )
  // }, [])

  useEffect(() => {
  //   //Cookie
  //   // if (document.cookie) {
  //   //   const cookieArray = document.cookie.split('=');
  //   //   if(cookieArray[0] === 'isLoggedin' && cookieArray[1] === 'true'){
  //   //     setIsLoggedin(true);
  //   //   }
  //   // }

  //   // //localstorage
  //   // const isLoggedin = localStorage.getItem('isLoggedin');
  //   // if(isLoggedin && isLoggedin === 'true'){
  //   //   setIsLoggedin(true);
  //   // }

  //   //seesion stoarage

    // const loginstring = sessionStorage.getItem('login');
    // const login = JSON.parse(loginstring); // convert string to json object 10:51
    // const currtime = new Date().getTime();

    // if(login && login.isLoggedin === true && login.expiry > currtime){
    //   setIsLoggedin(true);
    // }

  }, []);

  return (
    // <div>
    // <ButtonCounter />
    // <HoverCounter />
    // </div>
    
    // <Router>
    //   <div>
    //     <Header />
    //     <Routing isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>
    //   </div>
    // </Router>
    // <UserContext.Provider value={{posts: posts}}>

    //   <A />
    //   <B />
    //   <C />
    // </UserContext.Provider>


    // // Render props
    <div>
    {/* <div>
        <ButtonCounter />
       <HoverCounter />
     </div> */}

    {/* // useReducer hook */}

    {/* <div>
      <Counter />
    </div> */}

    {/* use memo */}
    {/* <Memo /> */}
    {/* <UsersMemo /> */}
    {/* <Callback /> */}
    {/* <UserForm /> */}

    <Provider store={store}>
      {/* <CounterUsingRedux />
      <DisplayName /> */}
      {/* <Users />  Test new feature bracnh */}
    

    </Provider>
   <button onClick={() => {

        axios.get('http://localhost:3001/users').then(response => {
          setUsers(response.data);
        })

      }}>Get Users</button>
      {
        users.map((user) => {
          return <div>
            <p>User Id : {user.userId}</p>
            <p>User Name : {user.userName}</p>
          </div>
        })
      }

      <div>
        <p> Enter user Name : <input type="text" value={user.userName} onChange={(e) => {setUser({...user, userName: e.target.value})}}/></p>
        <p> Enter user Id : <input type="text" value={user.userId} onChange={(e) => {setUser({...user, userId: e.target.value})}}/></p>
        <p><button onClick={() =>{

          axios.post('http://localhost:3001/addUser', user).then(response => {
            //setUsers(response.data);
          })

        }}>Save User</button></p>
      </div>
    </div>

  )


}

export default App;
