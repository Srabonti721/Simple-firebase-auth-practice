import React from 'react';
import { NavLink } from 'react-router';
import './header.css'
const Header = () => {
    return (
        <nav>
       <NavLink to={'/'}>Home</NavLink>
       <NavLink to="/login">Login</NavLink>
       <NavLink to="/signIn">SignIn</NavLink>
        </nav>
    );
};

export default Header;