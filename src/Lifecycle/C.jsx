import React, { useState } from 'react'

function C() {
    const [user, setUser] = useState({
        name : 'test',
        id: 1,
        address : {
            pincode : '523456'
        }
    })
  return (
    <div>C

        <button onClick={() => {
          const copyobj = {...user};

            copyobj.id = copyobj.id + 1;
            copyobj.address.pincode = "123456"
            setUser(copyobj);

        }}> set ID </button>
        Id in C {user.id}
        pincode {user?.address?.pincode}
    </div>
  )
}

export default C