import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { confirmEmail } from '../actions/auth';

const LandingPage = ({ history, match }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  let token = match.params.token;

  useEffect(() => {
    if (token) {
      dispatch(confirmEmail(token));
    }
    // eslint-disable-next-line
  }, []);

  if (token) {
    return <Redirect to='/' />;
  }
  if (auth.user.isAuthenticated) {
    return <Redirect to='/profile' />;
  }

  return (
    !auth.user.isAuthenticated && (
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
    )
  );
};

export default LandingPage;
