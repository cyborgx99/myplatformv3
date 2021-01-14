import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faUserPlus,
  faSignInAlt,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import LoginForm from '../../pages/LoginForm';
import SignUpForm from '../../pages/SignUpForm';
import { toggleModal } from '../../actions/modal';

const Navbar = (props) => {
  const dispatch = useDispatch();

  return (
    <div id='nav-container'>
      <nav id='main-navbar'>
        <ul>
          <li>Platform</li>
          <li>Contact Us</li>
          <li onClick={() => dispatch(toggleModal('open', <LoginForm />))}>
            <FontAwesomeIcon icon={faSignInAlt} /> Login
          </li>
          <li onClick={() => dispatch(toggleModal('open', <SignUpForm />))}>
            {' '}
            <FontAwesomeIcon icon={faUserPlus} /> Register
          </li>
        </ul>
      </nav>
      <button className='show-nav-btn'>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
};

export default Navbar;
