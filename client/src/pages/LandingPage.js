import React from 'react';

const LandingPage = () => {
  const handleClick = () => {
    console.log('clicked');
  };

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
