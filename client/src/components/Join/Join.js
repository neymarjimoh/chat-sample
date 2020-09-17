import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('');

    useEffect(() => {
        setTimeout(() => {
            console.log(`Logging to console with ${name}`);
        }, 3000);
    })


    return(
        <div className='joinOuterContainer'>
            <div className="joinInsideContainer">
                <h1 className="heading">Join</h1>
                <div><input type='text' placeholder='Enter Username...' onChange={(event) => setName(event.target.value)} className='joinInput' /></div>
                <div><input type='text' placeholder='Enter Roomname...' onChange={(event) => setRoom(event.target.value)} className='joinInput mt-20' /></div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Sign In</button>
                </Link>
            </div>
        </div>
    )
}

export default Join;