import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Header extends Component {
    render() {
        return (
            <div><ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contactus">Contact Us</Link></li>
                <li><Link to="/products">Products</Link></li>
            </ul>
            </div>
        )
    }
}

export default Header