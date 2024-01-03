import React, { Component } from 'react'
import A from './A';

import C from './C';

export default class Parent extends Component {
  constructor(props){
    super(props);
    this.state={
      name: "vinay",
      id: 1,
      address: {

      }
    }
  }
  render() {
    return (
      <div>
         <A name={this.state.name}/>
         <button onClick={()=> {
          
          const obj = this.state;
          obj.id = 2
          this.setState(obj)

          }}>set same name</button>
          id is {this.state.id}


          <C />
      </div>
     
    )
  }
}
