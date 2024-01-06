import React, { useEffect, useState } from 'react'

function Func() {
    const [name, setName] = useState('Vinay')
    //componentdidmount
    useEffect(()=>{
        setTimeout(() => {
            setName('Sai')
        }, 2000);
        //unmounting
        return () =>{
            console.log('unmounting')
        }
    },[])

    // component didupdate
    useEffect(()=>{
       console.log('component did update')
    },[name])

    // every render executue
    useEffect(() => {
    console.log('every render')
    })

  return (
    <div>Func</div>
  )
}
export default React.memo(Func);