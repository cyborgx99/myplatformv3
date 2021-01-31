import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../LessonComponents.css';

const LessonNavigation = ({ socket, setPage, eventName, page }) => {
  useEffect(() => {
    socket.on(eventName, (msg) => {
      setPage(msg);
    });
    // eslint-disable-next-line
  }, []);

  const setSetPage = (e) => {
    setPage(e.target.name);
    const data = {
      eventName,
      value: e.target.name,
    };
    socket.emit('inputs', data);
  };

  return (
    <nav className='lesson-nav'>
      <button
        className={page === 'page1' ? 'selected-ls' : 'ls'}
        name='page1'
        onClick={(e) => setSetPage(e)}
      >
        Page 1
      </button>
      <button
        className={page === 'page2' ? 'selected-ls' : 'ls'}
        name='page2'
        onClick={(e) => setSetPage(e)}
      >
        Page 2
      </button>
      <button
        className={page === 'page3' ? 'selected-ls' : 'ls'}
        name='page3'
        onClick={(e) => setSetPage(e)}
      >
        Page 3
      </button>
      <button
        className={page === 'page4' ? 'selected-ls' : 'ls'}
        name='page4'
        onClick={(e) => setSetPage(e)}
      >
        Page 4
      </button>
      <button
        className={page === 'page5' ? 'selected-ls' : 'ls'}
        name='page5'
        onClick={(e) => setSetPage(e)}
      >
        Page 5
      </button>
      <button
        className={page === 'page6' ? 'selected-ls' : 'ls'}
        name='page6'
        onClick={(e) => setSetPage(e)}
      >
        Page 6
      </button>
      <button
        name='homework1'
        className={page === 'homework1' ? 'selected-hw' : 'hw'}
        onClick={(e) => setSetPage(e)}
      >
        Homework 1
      </button>
      <button
        className={page === 'homework2' ? 'selected-hw' : 'hw'}
        name='homework2'
        onClick={(e) => setSetPage(e)}
      >
        Homework 2
      </button>
      <button
        className={page === 'homework3' ? 'selected-hw' : 'hw'}
        name='homework3'
        onClick={(e) => setSetPage(e)}
      >
        Homework 3
      </button>
      <button
        className={page === 'homework4' ? 'selected-hw' : 'hw'}
        name='homework4'
        onClick={(e) => setSetPage(e)}
      >
        Homework 4
      </button>
    </nav>
  );
};

LessonNavigation.propTypes = {
  socket: PropTypes.object.isRequired,
};

export default LessonNavigation;
