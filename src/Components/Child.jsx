import React, {Component} from 'react';

export default class Child extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : true,
            empType: 'Contract'
        }
    }
    render(){
        // console.log('props', this.props);
        // // Object destructering
        // const {name, age} = this.props;
        // return (
        //     <>
        //      <h1>Child</h1>
        //      <h2>Name : {name}</h2>
        //      <h2>Name : {age}</h2>
        //     </>
       
        // )
        // Conditional renderning using if and else
        // if (this.state.isLoggedIn) {
        //     return <h1>Welcome Vinay</h1>
        // } else {
        //     return <h1>Welcome Guest</h1>
        // }
        // if(this.state.empType === 'Permanent'){
        //     return <a>Employee Timesheet</a>
        // } else {
        //     return <a>Contractor Timesheet</a>
        // }


        // ternary operator
        // return this.state.empType === 'Permanent' ?  <a>Employee Timesheet</a> : <a>Contractor Timesheet</a>

        // Conditional rendering using varaiables
        // let  application = null;
        //  if(this.state.empType === 'Permanent'){
        //     application = <a>Employee Timesheet</a>
        // } else {
        //     application =  <a>Contractor Timesheet</a>
        // }
        // return <div>
        //     {application}
        // </div>

        //circuit switch
        return this.state.empType === 'Contract' && <a>Contractor Timesheet</a>



    }
}