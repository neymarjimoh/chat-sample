import React from 'react'

import './TextContainer.css';

import TextContainerChild from '../TextContainerChild/TextContainerChild';

function TextContainer({ users }) {
    return (
        <div className='usersContainer'>
            {users.map((user, index) => <div key={index}><TextContainerChild user={user} /></div>)}
        </div>
    )
}

export default TextContainer;
