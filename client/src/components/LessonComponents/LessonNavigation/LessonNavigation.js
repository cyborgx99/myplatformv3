import React from 'react';
import PropTypes from 'prop-types';

const LessonNavigation = ({ socket, setPage, page }) => {
  return (
    <nav className='lesson-nav'>
      <ul>
        <li>
          <button onClick={(e) => setPage('page1')}>Page 1</button>
        </li>
        <li>
          <button onClick={(e) => setPage('page2')}>Page 1</button>
        </li>
        <li>
          <button>Page 3</button>
        </li>
        <li>
          <button>Page 4</button>
        </li>
        <li>
          <button>Page 5</button>
        </li>
        <li>
          <button>Page 6</button>
        </li>
        <li>
          <button>Homework 1</button>
        </li>
        <li>
          <button>Homework 2</button>
        </li>
        <li>
          <button>Homework 3</button>
        </li>
        <li>
          <button>Homework 4</button>
        </li>
      </ul>
    </nav>
  );
};

LessonNavigation.propTypes = {
  socket: PropTypes.object.isRequired,
};

export default LessonNavigation;
