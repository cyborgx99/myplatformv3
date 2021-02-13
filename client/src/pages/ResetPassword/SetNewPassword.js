import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert2';
import { setNewPasswordAction } from '../../actions/auth';
import { toggleModal } from '../../actions/modal';

const SetNewPassword = ({ resetPasswordLink }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const dispatch = useDispatch();

  const handleSetNewPassword = (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      swal.fire({
        title: 'Passwords Do Not Match',
        icon: 'warning',
      });
    } else {
      dispatch(setNewPasswordAction(resetPasswordLink, newPassword));
      dispatch(toggleModal('closed', ''));
    }
  };

  return (
    <div className='credentials-content'>
      <h1>
        <span className='text-primary'>New </span> Password
      </h1>
      <p>
        <FontAwesomeIcon icon={faKeyboard} color='#17a2b8' /> Please Set New
        Password
      </p>
      <form onSubmit={(e) => handleSetNewPassword(e)}>
        <input
          type='password'
          placeholder='New Password'
          name='password'
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          minLength='6'
        />
        <input
          type='password'
          placeholder='Confirm New Password'
          name='password'
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          required
          minLength='6'
        />
        <button type='submit' className='btn' value='Request'>
          Submit
        </button>
        {/* <p>
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
        </p> */}
      </form>
    </div>
  );
};

export default SetNewPassword;
