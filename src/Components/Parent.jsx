import React, { Component } from 'react';
import Child from './Child';
import { List } from './ListsRendering';
export default class Parent extends Component {
    render() {
        return (
            <div>
                <h1>Parent</h1>
                <Child name='Vinay' age='25' />
                <List />
            </div>
        
        );
    }
}