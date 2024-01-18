import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Users() {
    return (
        <div>


            <nav>
                <ul>

                    <li><Link to="/users/internal" className="nav-link">Internal Users</Link></li>
                    <li><Link to="/users/external" className="nav-link">External Users</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Users