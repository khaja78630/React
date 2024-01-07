
import './App.css';
import React from 'react'
// import Parent from './Lifecycle/Parent';
// import Parent from './Components/Parent';
// import Stylesheet from './Components/Stylesheet';
// import InlineStyleSheet from './Components/InlineStyleSheet';
// import CSSModule from './Components/CSSModule';
//import LoginForm from './Components/LoginForm';

// import FunctionBasedComponentWithState  from './Components/FunctionBasedComponentWithState';

// 

// import Accordian from "./Components/accordian/Accordian";
// import Pure from './Components/PureComponent';
import Func from './Components/Func';
import Header from './Components/Routing/Header';

import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './Components/Routing/Routing';



function App() {
  // return <Stylesheet />
  // return <InlineStyleSheet />

  // return <CSSModule />
  return (
    <Router>
      <div>
        <Header />
        <Routing />
      </div>
    </Router>)


}

export default App;
