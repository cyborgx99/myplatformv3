import React from 'react';
import PropTypes from 'prop-types';
import PictureGallery from '../../../../../components/LessonComponents/PictureGallery/PictureGallery';
import AudioPlayer from '../../../../../components/LessonComponents/AudioPlayer/AudioPlayer';
import Table from '../../../../../components/LessonComponents/Table/Table';
import {
  answ,
  P1Pictures,
  P2tableData,
  galleryData,
  P2exerciseData,
  P2exercise2Data,
} from './A1A1Lesson1Assets';
import Exercise from '../../../../../components/LessonComponents/Exercise/Exercise';

console.log('A1A2Lesson1');

const A1A2Lesson1 = ({ page, socket, roomId }) => {
  return (
    <div className='lesson-pages-container scroll-style-3'>
      {page === 'page1' && (
        <PictureGallery
          socket={socket}
          page={page}
          roomId={roomId}
          galleryData={galleryData}
          answers={answ}
          pictures={P1Pictures}
        />
      )}
      {page === 'page2' && (
        <>
          <h3>I / You / We / They - Do</h3>
          <h3>He / She / It - Does</h3>
          <Table
            socket={socket}
            roomId={roomId}
            page={page}
            tableHead={P2tableData.tableHead}
            tableRowData={P2tableData.tableRowData}
          />
          <Exercise
            socket={socket}
            roomId={roomId}
            page={page}
            exerciseData={P2exerciseData}
          />
          <p>Do you like to swim?</p>
          <p>Does he like to read?</p>
          <p> Do you like to listen to music? </p>
          <p>Does she like to drive a car?</p>
        </>
      )}
      {page === 'page3' && (
        <Table
          socket={socket}
          roomId={roomId}
          page={page}
          tableHead={P2tableData.tableHead}
          tableRowData={P2tableData.tableRowData}
        />
      )}
    </div>
  );
};

A1A2Lesson1.propTypes = {
  socket: PropTypes.object.isRequired,
  page: PropTypes.string.isRequired,
};

export default A1A2Lesson1;
