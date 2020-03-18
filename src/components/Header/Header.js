import React from 'react';
import logo from '../../images/logo.ico';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt=""/>
            <nav>
                <a href="/home">Home</a>
                <a href="/friends">Friends</a>
                <a href="/profile">Profile</a>
            </nav>
        </div>
    );
};

export default Header;