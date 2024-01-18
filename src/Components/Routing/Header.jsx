import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../App.css';
export class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to="/" className="nav-link">Home</Link></li>
                        <li><Link to="/about" className="nav-link">About</Link></li>
                        <li><Link to="/contactus" className="nav-link">Contact</Link></li>
                        <li><Link to="/posts" className="nav-link">Posts</Link></li>
                        <li><Link to="/users" className="nav-link">Users</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header