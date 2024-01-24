
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

function App() {
  // return <Stylesheet />
  // return <InlineStyleSheet />

  // return <CSSModule />
  const user = {name : 'Vinay'};

  const [posts, setPosts] = useState()
  const [count, setCount] = useState()
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(
      (response) => setPosts(response.data)
    )
  },[])

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
    <UserForm />
   </div>

  )


}

export default App;
