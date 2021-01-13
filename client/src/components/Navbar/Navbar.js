import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div id='nav-container'>
      <nav id='main-navbar'>
        <ul>
          <li>Platform</li>
          <li>Contact Us</li>
          <li>Login</li>
          <li>Register</li>
        </ul>
      </nav>
      <button className='show-nav-btn'>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
};

export default Navbar;
