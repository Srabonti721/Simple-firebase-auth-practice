import React from 'react';
import { NavLink } from 'react-router';
import './header.css'
const Header = () => {
    return (
        <div>
       <NavLink to={'/'}>Home</NavLink>
       <NavLink to="/login">Login</NavLink>
        </div>
    );
};

export default Header;