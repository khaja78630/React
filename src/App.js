
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
import Counter from './Components/context/Counter';

import A from './Components/context/A';
import UserContext from './Components/context/UserContext';
import axios from 'axios';


import B from './Components/context/A';
import C from './Components/context/A';

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

  return (
    <Router>
      <div>
        <Header />
        <Routing isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>
      </div>
    </Router>
    // <UserContext.Provider value={{posts: posts}}>

    //   <A />
    //   <B />
    //   <C />
    // </UserContext.Provider>

  )


}

export default App;
