import React, { Component } from 'react'

export default class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName : '',
            pwd: ''
        }

    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    submitForm = (e) => {
        e.preventDefault();
        alert(`User Name : ${this.state.userName} and password is ${this.state.pwd}`)
    }
  render() {
    return (
      <form onSubmit={(e) => this.submitForm(e)}>
        <p>
            <label htmlFor='userName'>User Name</label>
            <input name='userName' type ="text" value={this.state.userName} onChange={(e) => this.changeHandler(e)}/>
        </p>
        <p>
            <label htmlFor='pwd'>Password</label>
            <input name='pwd' type ="password" value={this.state.pwd} onChange={(e) => this.changeHandler(e)}/>
        </p>
        <p>
            <button>Login</button>
        </p>
        // text area, dropdown
      </form>
    )
  }
}
