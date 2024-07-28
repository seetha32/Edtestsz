import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const Header = () => (
  <header>
    <nav>
      <ul className='container'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
        <li><Link to="/booking">Book Appointment</Link></li>
        <li><Link to="/history">Appointment History</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
