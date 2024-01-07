import React, { Component } from 'react'

export class Home extends Component {

    componentWillUnmount(){
        console.log("home componentWillUnmount ")
    }
  render() {
    return (
      <div>Home</div>
    )
  }
}

export default Home

// life cycle mehtods 1. mounting 
// 1. constrctor, get derviedsatefromprops 3. render 4. componentdidmount(sutiable for api call) - componentwillrecieveprops componentwillmount(depricated)
// updating phase
// 1. static getderivedstatefromprops 2. compnentshouldupdate 3. render 4. getsnapshotbeforeupdate 5. componentdidupdate - componentwillrecieveprops componentwillupdate(depricated)
// unmounting phase
//1. componentwillunmount
// pure component - shallow comparison
// memo - export defalut React.memo(MemoComponent)

// componentdidcatch