import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from '../../../../../components/LessonComponents/AudioPlayer/AudioPlayer';
import Table from '../../../../../components/LessonComponents/Table/Table';
import { tableData } from './A1A1Lesson2Assets';

console.log('A1A2Lesson2');

const A1A2Lesson2 = ({ page, socket, roomId, setTotalPages }) => {
  useEffect(() => {
    setTotalPages({
      p: [1, 2],
      hw: [1, 2],
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className='lesson-pages-container scroll-style-1'>
      {page === 'page1' && <h1>LESSON 2</h1>}
      {page === 'page2' && (
        <AudioPlayer
          socket={socket}
          eventPlay={'play1'}
          eventChange={'change1'}
          source='https://res.cloudinary.com/cyborgx999/video/upload/v1603472600/sayprivet/Egzamin/LEsson1/Page1/2018_basic_level_Introduction_i2naet.mp3'
        />
      )}
      {page === 'page3' && (
        <Table
          page={page}
          roomId={roomId}
          socket={socket}
          tableData={tableData}
        />
      )}
    </div>
  );
};

A1A2Lesson2.propTypes = {
  socket: PropTypes.object.isRequired,
  page: PropTypes.string.isRequired,
};

export default A1A2Lesson2;
