import React, { Component } from "react";
import Person from './Person';

export default class Persons extends Component {
    render() {
        return (<table>
            <tr>
                <th>Name</th>
                <th>age</th>
            </tr>
            {
                this.props.data.map(person => <Person name={person.name} age={person.age}/>)
            }
        </table>);
    }
}