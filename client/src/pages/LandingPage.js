import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { confirmEmail } from '../actions/auth';

const LandingPage = ({ history, match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    let token = match.params.token;
    if (token) {
      dispatch(confirmEmail(token));
      history.push('/');
    }
    // eslint-disable-next-line
  }, []);

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
