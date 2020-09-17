import React from 'react'


function TextContainerChild({ user: { user }}) {
    return (
        <div>
            <p>{user}</p>
        </div>
    )
}

export default TextContainerChild;