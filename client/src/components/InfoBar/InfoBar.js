import React from 'react';

import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';

import './InfoBar.css';

const InfoBar = ({ room }) => {
    return (
        <div className='InfoBar'>
            <div className='leftInnerContainer'>
                <img style={{width:'5px'}} className='onlineIcon' src={onlineIcon} alt="online icon" />
                <h3>{room}</h3>
            </div>
            <div className='rightInnerContainer'>
                <a href='/' ><img style={{width:'10px'}} className='closeIcon' src={closeIcon} alt="close icon" /></a>
            </div>
        </div>
    )
}

export default InfoBar;