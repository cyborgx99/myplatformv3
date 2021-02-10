import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../LessonComponents.css';

const LessonNavigation = ({
  socket,
  setPage,
  eventName,
  page,
  roomId,
  totalPages,
}) => {
  useEffect(() => {
    socket.on(eventName, (msg) => {
      sessionStorage.setItem(`${roomId}/selectedPage`, msg);
      setPage(msg);
    });
    // eslint-disable-next-line
  }, []);

  const setSetPage = (e) => {
    sessionStorage.setItem(`${roomId}/selectedPage`, e.target.name);
    setPage(e.target.name);
    const data = {
      eventName,
      value: e.target.name,
    };
    socket.emit('inputs', data);
  };

  console.log('Navigation');

  return (
    <nav className='lesson-nav'>
      {totalPages.p &&
        totalPages.p.map((data, i) => (
          <button
            className={page === `page${i + 1}` ? 'selected-ls' : 'ls'}
            name={`page${i + 1}`}
            onClick={(e) => setSetPage(e)}
          >
            {`Page ${i + 1}`}
          </button>
        ))}
      {totalPages.hw &&
        totalPages.hw.map((data, i) => (
          <button
            name={`homework${i + 1}`}
            className={page === `homework${i + 1}` ? 'selected-hw' : 'hw'}
            onClick={(e) => setSetPage(e)}
          >
            {`Homework ${i + 1}`}
          </button>
        ))}
    </nav>
  );
};

LessonNavigation.propTypes = {
  socket: PropTypes.object.isRequired,
};

export default LessonNavigation;
