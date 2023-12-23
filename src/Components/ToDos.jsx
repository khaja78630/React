import React, {Component} from 'react';

class ToDos extends Component {
    constructor(props){
        super(props);
        this.state = {
            num1 : 10,
            num2 : 20,
            result : 0
        }
    }
    render(){
        return <h1>ToDos for {this.state.name} {this.state.num1 + this.state.num2 } url {this.props.userName}</h1>
    }
}

// function ToDos() { // state, event handler, react life cycle methods


//     const [name, setName] = useState('Vinay');
//    const [num1, setNum1] = useState(10);
//   const [num2, setNum2] = useState(20)
//     return (
//         <h1>ToDos 1</h1>
//     );
// }

export default ToDos;

