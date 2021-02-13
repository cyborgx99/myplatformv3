import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faUserPlus,
  faSignInAlt,
  faEnvelope,
  faDesktop,
  faSignOutAlt,
  faLaptop,
  faChalkboardTeacher,
  faBookOpen,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from '../../pages/Login/LoginForm';
import SignUpForm from '../../pages/SignUp/SignUpForm';
import { toggleModal } from '../../actions/modal';
import ContactUsForm from '../../pages/ContactUs/ContactUsForm';
import { logout } from '../../actions/auth';
import swal from 'sweetalert2';

const Navbar = (props) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const logoutWithConfirm = async () => {
    const result = await swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log me out',
    });

    if (result.isConfirmed === true) {
      dispatch(logout());
    }
  };

  const highlightedClass = (linkTo) => {
    if (linkTo === pathname) return 'highLighted';
  };

  const sharedLinks = (
    <>
      <li className={highlightedClass('/')}>
        <Link to='/'>
          <FontAwesomeIcon icon={faDesktop} /> Platform
        </Link>
      </li>
      <li onClick={() => dispatch(toggleModal('open', <ContactUsForm />))}>
        <FontAwesomeIcon icon={faEnvelope} /> Contact Us
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li onClick={() => dispatch(toggleModal('open', <LoginForm />))}>
        <FontAwesomeIcon icon={faSignInAlt} /> Login
      </li>
      <li onClick={() => dispatch(toggleModal('open', <SignUpForm />))}>
        <FontAwesomeIcon icon={faUserPlus} /> Register
      </li>
    </>
  );

  const studentLinks = (
    <>
      <li className={highlightedClass('/dashboard')}>
        <Link to='/dashboard'>
          <FontAwesomeIcon icon={faLaptop} /> Dashboard
        </Link>
      </li>
      <li className={highlightedClass('/flashcards')}>
        <Link to='/flashcards'>
          <FontAwesomeIcon icon={faBookOpen} /> Flashcards
        </Link>
      </li>
      <li onClick={() => logoutWithConfirm()}>
        <FontAwesomeIcon icon={faSignOutAlt} /> Logout
      </li>
    </>
  );

  const teacherLinks = (
    <>
      <li className={highlightedClass('/dashboard')}>
        <Link to='/dashboard'>
          <FontAwesomeIcon icon={faLaptop} /> Dashboard
        </Link>
      </li>
      <li className={highlightedClass('/teacher')}>
        <Link to='/teacher'>
          <FontAwesomeIcon icon={faChalkboardTeacher} /> Teacher Page
        </Link>
      </li>
      <li className={highlightedClass('/flashcards')}>
        <Link to='/flashcards'>
          <FontAwesomeIcon icon={faBookOpen} /> Flashcards
        </Link>
      </li>
      <li onClick={() => logoutWithConfirm()}>
        <FontAwesomeIcon icon={faSignOutAlt} /> Logout
      </li>
    </>
  );

  return (
    <div id='nav-container'>
      <nav id='main-navbar'>
        <ul>
          {sharedLinks}
          {!auth.user.isAuthenticated && guestLinks}
          {auth.user.role === 'student' && studentLinks}
          {auth.user.role === 'teacher' && teacherLinks}
        </ul>
      </nav>
      <button className='show-nav-btn'>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
};

export default Navbar;
