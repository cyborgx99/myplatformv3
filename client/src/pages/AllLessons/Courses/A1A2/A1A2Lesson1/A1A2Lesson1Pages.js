import React from 'react';
import PropTypes from 'prop-types';

const A1A2Lesson1Pages = ({ page, socket }) => {
  return (
    <div>
      {page === 'page1' && <h1>page1</h1>}
      {page === 'page2' && <h1>page2</h1>}
      {page === 'page3' && <h1>page3</h1>}
      {page === 'page4' && <h1>page4</h1>}
    </div>
  );
};

A1A2Lesson1Pages.propTypes = {
  socket: PropTypes.object.isRequired,
  page: PropTypes.string.isRequired,
};

export default A1A2Lesson1Pages;
