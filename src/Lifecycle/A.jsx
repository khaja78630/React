import React, { Component } from 'react'
import axios from 'axios';
import B from './B';

export class A extends Component {
    // Mounting
    constructor(props) {
        super(props);
        this.state = {
            name: 'Vinay',
            data: [],
            unmount : false,
            interval : null
        }
        console.log('From Construtor');
    }
    static getDerivedStateFromProps(nextprops, preState) {
        console.log('From getDerivedStateFromProps');
        return {
            name: nextprops.name
        }
    }
    //unsafe depricated methods

    // componentWillReceiveProps() {
    //     console.log('From componentWillReceiveProps');
    // }
    // componentWillUnmount(){

    // }

    componentDidMount() {
        console.log('From componentDidMount');
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => {
        //         this.setState({
        //             data: response.data
        //         })
        //     })
        //     .catch(error => {

        //     })

            // const button = document.getElementById('loadData');
            // button.addEventListener('click', loadPosts);
            // const interval = setInterval(() => {
            //     alert('you are about logoff')
            // }, 5000);
            // this.setState({
            //     interval : interval
            // })
    }

    loadPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({
                    data: response.data
                })
            })
            .catch(error => {

            })
    }
    

    unmount= () => {
        this.setState({
            unmount : true
        })
    }

    componentWillUnmount(){
        // console.log("from componentWillUnmount");
        // const button = document.getElementById('loadData');
        //     button.removeEventListener('click', loadPosts);
        // if(this.state.interval){
        //     clearInterval(this.state.interval);
        // }
    }
    render() {
        console.log('From render');
        return (
            !this.state.unmount && <div> Name : {this.state.name} Posts
                {
                    this.state.data.length > 0 && <div>
                        <ul>
                            {
                                this.state.data.map(post => <li>{post.body}</li>)
                            }
                        </ul>
                    </div>
                }
                <button onClick={this.loadPosts}>Load Posts</button>
                <button onClick={this.unmount}>Unmount</button>
                <B />

            </div>
        )
    }

}

export default A