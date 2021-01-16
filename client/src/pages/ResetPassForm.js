import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
          <span
            className='text-primary pointer'
            onClick={() => dispatch(toggleModal('open', <LoginForm />))}
          >
            Sign In
          </span>
        </p>
        <p>
          Don't have an account?{' '}
          <span
            className='text-primary pointer'
            onClick={() => dispatch(toggleModal('open', <SignUpForm />))}
          >
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
};

export default ResetPassForm;
