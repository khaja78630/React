import React, { useEffect, useMemo, useState } from 'react'
import axios
    from 'axios';
function UsersMemo() {
    const [users, setUsers] = useState([]);
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('')
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            setUsers(response.data);
        })
    }, [])

    const userDetailsByPhone = useMemo(() => {
        console.log('from userDetailsByPhone');
        const user = users.filter((user) => { return user.phone === phone }); // 123 12 [user1, user2]
        return user;
    }, [phone])

    const userDetailsByCity = useMemo(() => {
        console.log('from userDetailsByCity');
        const user = users.filter((user) => { return user.address.city === city }); // 123 12 [user1, user2]
        return user;
    }, [city])

    const sum = useMemo(() => {
        let sum = 0;
        for (let i = 0; i < 1000000; i++) {// 1+ 2+ +3
            sum = sum + i;

        }
        return sum;
    }, []);



    return (
        <div>
            <sum>Sum {sum}</sum>
            <p>Enter Phone Number :  <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}></input></p>
            <p>Users based on phone number</p>
            {
                phone && userDetailsByPhone && userDetailsByPhone.length > 0 && userDetailsByPhone.map(user => <p> user name {user.name}</p>)

            }

            <p>Enter City  :  <input type="text" value={city} onChange={(e) => setCity(e.target.value)}></input></p>

            <p>Users based on City Name</p>
            {
                phone && userDetailsByCity && userDetailsByCity.length > 0 && userDetailsByCity.map(user => <p> user name {user.name}</p>)
            }
            Users:
            {
                users && users.map(user => {
                    return <div><p>Phone number {user.phone}</p>
                        <p>user name {user.name}</p>
                        <p>city name {user.address.city}</p>
                    </div>
                })
            }

        </div>
    )
}

export default UsersMemo