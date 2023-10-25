/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './Header.css';


export default ({ black }) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className='header--logo'>
                <a href='/'>
                    <img src='./ταινία.png' alt='Netflix'></img>
                </a>

            </div>
            <div className='header--user'>
                <a href='/'>
                    <img src='./avatar.png' alt='Usuário' />
                </a>

            </div>

        </header>

    )
}
