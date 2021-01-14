import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleModal } from '../actions/modal';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const ResetPassForm = () => {
  const [email, setEmail] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const dispatch = useDispatch();

  return (
    <div className='credentials-content'>
      <h1>
        <span className='text-primary'>Password</span> Reset
      </h1>
      <p>
        <FontAwesomeIcon icon={faEnvelope} color='#17a2b8' /> What is your
        email?
      </p>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type='email'
          placeholder='Email Address'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type='submit' className='btn' value='Request'>
          Request
        </button>
        <p>
          Already have an account?{' '}
          <Link
            className='text-primary'
            onClick={() => dispatch(toggleModal('open', <LoginForm />))}
          >
            Sign In
          </Link>
        </p>
        <p>
          Don't have an account?{' '}
          <Link
            className='text-primary'
            onClick={() => dispatch(toggleModal('open', <SignUpForm />))}
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default ResetPassForm;
