import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useLocation, useParams } from 'react-router-dom';
import swal from 'sweetalert2';
import { confirmEmail } from '../../actions/auth';
import { toggleModal } from '../../actions/modal';
import LoginForm from '../Login/LoginForm';
import SetNewPassword from '../ResetPassword/SetNewPassword';

const LandingPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { token, resetPassToken } = useParams();

  const auth = useSelector((state) => state.auth);

  const { from, red } = location.state || { from: { pathname: '/' } };
  console.log(auth);

  useEffect(() => {
    if (token) {
      dispatch(confirmEmail(token));
    }

    if (resetPassToken) {
      dispatch(
        toggleModal(
          'open',
          <SetNewPassword resetPasswordLink={resetPassToken} />
        )
      );
    }

    if (red === 'red' && !auth.user.isAuthenticated) {
      dispatch(toggleModal('open', <LoginForm from={from} />));
    } else if (red === 'red') {
      swal.fire({
        title: 'Not Authorized',
        icon: 'warning',
      });
    }

    // eslint-disable-next-line
  }, []);

  if (token || resetPassToken) {
    return <Redirect to='/' />;
  }

  return (
    <section className='landing-page'>
      <div className='landing-container'>
        <div className='landing-content'>
          <h2>Learn English Anytime Anywhere</h2>
          <h1>Language Platform</h1>
          <button className='landing-btn swipe-overlay'>
            <span>Learn More</span>
          </button>
        </div>
      </div>
      <div className='divider'></div>
    </section>
  );
};

export default LandingPage;
