import React, { Component } from 'react';
import FormElement from './FormElement';


// Parent to child 
export default class Counter extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         type : 'button',
    //         name: 'Increase Count',
    //         initialValue : 0
    //     }
    //    //  this.state.clickHandler = this.state.onClickHandler.bind(this);
    // }
    
    // onClickHandler(){
    //     // this.state.initialValue = this.state.initialValue + 1;
    //     this.setState({
    //         initialValue : this.state.initialValue + 1
    //     })
    // }
    render() {
        return (
            <div>
                {/* <h1>Counter {this.state.initialValue}</h1>
                <FormElement type={this.state.type} initialValue={this.state.initialValue} name={this.state.name} clickHandler={()=> this.onClickHandler()} />
                <input type='button' value='Another Counter' onClick={()=> this.onClickHandler()}></input>
                <FormElement type={this.state.type} initialValue={this.state.initialValue} name={this.state.name} clickHandler={()=> this.onClickHandler()} /> */}

                <FormElement step={1} type="button"/>
                {/* <FormElement step={2} type="button"/>
                <FormElement  step={3} type="button"/> */}
            </div>
        )
    }
}