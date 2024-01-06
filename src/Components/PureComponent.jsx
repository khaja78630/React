import React, { PureComponent } from 'react';
import axios from 'axios';

export class Pure extends PureComponent {
    constructor(props){
        super(props);
        this.state= {id : 1 , name : 'Vinay', address:{permannetaddress :{post : 12345}, cureentaddress:{}}}
        // {name : 'Vinay', id: 123, address:{permannetaddress :{post : 123456}, cureentaddress:{}}}
    }
componentDidMount(){

    setTimeout(() => {
        const currState = {... this.state}
        currState.address.postalCode = 1234567;

        this.setState(currState);
    }, 5000);
    window.addEventListener('scroll', (e)=> {console.log("scroll ",e)})
}

getSnapshotBeforeUpdate(nextProps, nestSate){
return '350'
}

    componentDidUpdate(preprops, prvstate, snapshot) {
        if (this.state.id !== prvstate.id) {
            axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
                .then(response => console.Purelog(response))
                .catch(error => console.log(error));
                
        }
    }
    onchangeHandler = (e) => {
        this.setState({ id: parseInt(e.target.value) });
        
    }
  render() {
    console.log("from render", this.state);
    return (
      <div>

        
        <label>Enter Id</label>
       <input type="text" onChange={this.onchangeHandler} />
       id : {this.state.id}
      </div>
    )
  }
}

export default Pure

// 