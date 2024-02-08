import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import addUser from './addUser';
import deleteUser from './deleteUser';
import userApiCall from './getUsers';


function Users() {
    const state = useSelector((state) => {
        return state.userReducer;
    })
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [id, setId] = useState('')


    useEffect(() =>{
        dispatch(userApiCall());
    }, []);


    return (
        <div>
            <div style={{ border: 'solid 2px', padding: '5px' }}>
                <b>Users List</b>
                {
                    state && state.users && state.users.map((user) => {
                        return (<div style={{ border: 'solid 1px', padding: '5px', margin: '5px' }}>
                            <p>Name : {user.name}</p>
                            <p>Id : {user.id}</p>
                        </div>)
                    })
                }
            </div>
            <div style={{ border: 'solid 2px', padding: '5px', margin: '15px' }}>
                <b> ADD USER</b>
                <table>
                    <tr>
                        <td><input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter User Name' /></td>
                    </tr>
                    <tr>
                        <td><input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder='Enter User Id' /></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => dispatch(addUser({ name: name, id: id }))}><b>Add User</b></button></td>
                    </tr>
                </table>
            </div>
            <div style={{ border: 'solid 2px', padding: '5px', margin: '15px' }}>
                <b> UPDATE USER NAME BASED ON ID</b>
                <table>
                    
                    <tr>
                        <td><input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder='Enter User Id' /></td>
                    </tr>
                    <tr>
                        <td><input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter User Name' /></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => dispatch(addUser({ name: name, id: id }))}><b>Update User</b></button></td>
                    </tr>
                </table>
            </div>
            <div style={{ border: 'solid 2px', padding: '5px', margin: '15px' }}>
                <b> DELETE USER</b>
                <table>
                    <tr>
                        <td><input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder='Enter User Id' /></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => dispatch(deleteUser(id))}><b>Delete User</b></button></td>
                    </tr>
                </table>
            </div>

        </div>
    )
}

export default Users;


// dispatch(deleteUser(id)) 