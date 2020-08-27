import React from 'react';
import logo from '../../images/logo.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className="header text-center">

            <img src={logo} alt="" />
            <nav>
                <a href="/courses">Courses</a>
                <a href="/order">Ordered Courses </a>
                <a href="/about">About</a>
            </nav>
            <div className="search-box">
                <input type="text" name="" placeholder="Search Any Courses" />
                <button>Search</button>
            </div>
        </div>
    );
};

export default Header;