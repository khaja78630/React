import React from 'react'

function Button(props) {
    return (
        <div>

            <button onClick={() => props.action()}>{props.name}</button>

        </div>
    )
}

export default Button