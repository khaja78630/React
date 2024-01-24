import React from 'react'

function Button(props) {
    console.log('from Button')
    return (
        <div>
            <button onClick={() => {
                
                console.log(props.inputRefUserName.curent);

                props.inputRefUserName.current.focus();
                
                }}>Set Focus</button>

        </div>
    )
}

export default Button