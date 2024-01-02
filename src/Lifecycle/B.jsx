import React, { Component } from 'react'

export class B extends Component {
    constructor(props){
        super(props);
        console.log("B component constructor")
    }
    static getDerivedStateFromProps(nextprops, preState) {
        console.log("B component getDerivedStateFromProps")
        return {
            
        }
    }
    componentDidMount(){
        console.log("B component componentDidMount")
    }
  render() {
    console.log("B component render")
    return (
      <div>B</div>
    )
  }
}

export default B