import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../actions/modal';
import SignUpForm from './SignUpForm';
import ResetPassForm from './ResetPassForm';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    console.log('fFS');
  };

  return (
    <div className='credentials-content'>
      <h1>
        <span className='text-primary'>Sign</span> In
      </h1>
      <p>
        <FontAwesomeIcon color='#17a2b8' icon={faUser} /> Sign Into Your Account
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
        <input
          type='password'
          placeholder='Password'
          name='password'
          minLength='6'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' className='btn'>
          Login
        </button>
      </form>
      <p>
        Don't have an account?{' '}
        <Link
          className='text-primary'
          onClick={() => dispatch(toggleModal('open', <SignUpForm />))}
        >
          Sign Up
        </Link>
      </p>
      <p>
        Forgot your password?{' '}
        <Link
          className='text-primary'
          onClick={() => dispatch(toggleModal('open', <ResetPassForm />))}
        >
          Reset
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
