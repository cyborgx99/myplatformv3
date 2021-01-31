import React, { useEffect, useState } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import Notes from '../../../../../components/LessonComponents/Notes/Notes';
import LessonNavigation from '../../../../../components/LessonComponents/LessonNavigation/LessonNavigation';
import VideoCall from '../../../../../components/LessonComponents/VideoCall/VideoCall';
import A1A2Lesson1Pages from './A1A2Lesson1Pages';
import socket from '../../../../../components/LessonComponents/socketInit';
import InputWdropArea from '../../../../../components/LessonComponents/Input/InputWdropArea';
import PictureGallery from '../../../../../components/LessonComponents/PictureGallery/PictureGallery';

const A1A2Lesson1 = () => {
  const [page, setPage] = useState('page1');
  const { path } = useRouteMatch();
  const params = useParams();
  const roomId = `${path.split(':')[0]}${params.studentId}`;

  useEffect(() => {
    socket.emit('joinRoom', roomId);
    // eslint-disable-next-line
  }, []);

  const pages = {
    ls: 6,
    hw: 4,
  };

  return (
    <div className='lesson-container'>
      <div className='lesson-notes-nav'>
        <LessonNavigation
          socket={socket}
          eventName='pageChange'
          page={page}
          pages={pages}
          setPage={setPage}
        />
        <Notes socket={socket} eventName='notes' />
      </div>
      <A1A2Lesson1Pages socket={socket} page={page} />
      <VideoCall roomId={roomId} />
    </div>
  );
};

export default A1A2Lesson1;
