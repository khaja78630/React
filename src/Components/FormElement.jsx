import React, { Component } from 'react';

export default class FormElement extends Component {

    constructor(props) {
        console.log('constructor');
        super(props);
        this.state = {
            type: 'button',
            name: 'Increase Count',
            initialValue: 0
        }
        //  this.state.clickHandler = this.state.onClickHandler.bind(this);
    }
   
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps');
    }
    componentWillMount(state, props){
        console.log('componentWillMount');

    }

    inerval = null;
    componentDidMount(sate, props){
        console.log('componentDidMount');
    //  interval = setInterval(() => {
    //        console.log('Hi')
    //     }, 1000);
    }

    componentDidUpdate(stae, props){
        console.log('componentDidUpdate');
    }

   
    
    componentWillUnmount(){
        console.log('componentWillUnmount');
        //clearInterval(interval);
    }
    onClickHandler(){
        // this.state.initialValue = this.state.initialValue + 1;
        // this.setState({
        //     initialValue : this.state.initialValue + 1
        // })
        // console.log('count', this.state.initialValue);
        // if(this.state.initialValue % 2 === 0){
        //     alert('count is even');
        // }


        this.setState((prevstate, prevprops) => {
            const result = prevstate.initialValue + prevprops.step;
            if(result % 2 === 0){
                alert('count is even')
            }
            console.log(result);

            return {initialValue: result}
        });
      
    }
    render() {
        return (
            <div>
                Counter {this.state.initialValue}
                <input type={this.props.type} value={this.state.name} onClick={() => this.onClickHandler()}></input>
            </div>
            
        )
    }
}