import React, { useState } from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../actions/modal';
import LoginForm from '../Login/LoginForm';
import ResetPassForm from '../ResetPassword/ResetPassForm';
import { register } from '../../actions/auth';
import swal from 'sweetalert2';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      swal.fire({
        icon: 'warning',
        html: 'Passwords Do Not Match',
      });
    } else {
      dispatch(register(name, lastName, email, password));
    }
  };

  return (
    <div className='credentials-content'>
      <h1>
        <span className='text-primary'>Sign</span> Up
      </h1>
      <p>
        <FontAwesomeIcon icon={faUser} color='#17a2b8' /> Create Your Account
      </p>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          // required
        />
        <input
          type='text'
          placeholder='Last Name'
          name='lastName'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          // required
        />
        <input
          type='email'
          placeholder='Email Address'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // required
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          // minLength='6'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type='password'
          placeholder='Confirm Password'
          name='password2'
          // minLength='6'
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        <button type='submit' className='btn-long'>
          Sign Up
        </button>
      </form>
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

export default SignUpForm;
