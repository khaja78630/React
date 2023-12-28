import React, { Component } from 'react'

export default class InlineStyleSheet extends Component {

  constructor(props){
    super(props);
    this.state = {
      name : 'Vinay'
    }
  }
  greet(){
    console.log('Hello' + this.state.name);
  }
  render() {
    const style = {fontSize : '40px', color : 'red'};

    return (
      <div style={style}>InlineStyleSheet
      <button onClick={this.greet.bind(this)}>Greet</button>
      </div>
    )
  }
}

