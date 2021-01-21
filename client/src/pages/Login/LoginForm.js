import React, { useState } from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../actions/modal';
import SignUpForm from '../SignUp/SignUpForm';
import ResetPassForm from '../ResetPassword/ResetPassForm';
import { login } from '../../actions/auth';
import { useHistory } from 'react-router-dom';

const LoginForm = ({ from }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login(email, password));
    history.replace(from);
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
        <span
          className='text-primary pointer'
          onClick={() => dispatch(toggleModal('open', <SignUpForm />))}
        >
          Sign Up
        </span>
      </p>
      <p>
        Forgot your password?{' '}
        <span
          className='text-primary pointer'
          onClick={() => dispatch(toggleModal('open', <ResetPassForm />))}
        >
          Reset
        </span>
      </p>
    </div>
  );
};

LoginForm.defaultProps = {
  from: '/dashboard',
};

export default LoginForm;
