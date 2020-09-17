import React from 'react';


import './Input.css';

const Input = ({ message, setMessage, sendMessage }) => {

    const handleButtonClick = (event) => {
        event.preventDefault();

        sendMessage(event);
    }

    return (
        <form className='form'>
            <input 
                type='text'
                className='input'
                value={message} 
                placeholder='Enter message here...'
                onChange={(event) => setMessage(event.target.value)} 
                onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null } 
            />

            <button className='sendButton' onClick={handleButtonClick}>Send</button>
        </form>
    )
}

export default Input;