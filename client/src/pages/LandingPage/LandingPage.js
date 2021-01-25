import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useLocation, useParams } from 'react-router-dom';
import { confirmEmail } from '../../actions/auth';
import { toggleModal } from '../../actions/modal';
import LoginForm from '../Login/LoginForm';

const LandingPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { token } = useParams();

  const { from, red } = location.state || { from: { pathname: '/' } };
  const auth = useSelector((state) => state.auth);
  console.log(location.state);
  useEffect(() => {
    if (token) {
      dispatch(confirmEmail(token));
    }
    if (!auth.user && red === 'red') {
      dispatch(toggleModal('open', <LoginForm from={from} />));
    }

    // eslint-disable-next-line
  }, []);

  if (token) {
    return <Redirect to='/' />;
  }

  return (
    <section className='landing-page'>
      <div className='landing-container1'>
        <div className='land-content'>
          <h2>Learn English Anytime Anywhere</h2>
          <h1>Language Platform</h1>
          <button className='landing-btn effect01' target='_blank'>
            <span>Learn More</span>
          </button>
        </div>
      </div>
      <div className='divider'></div>
      <div className='landing-container2'></div>
    </section>
  );
};

export default LandingPage;
