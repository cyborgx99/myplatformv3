import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Notes from '../../components/LessonComponents/Notes/Notes';
import LessonNavigation from '../../components/LessonComponents/LessonNavigation/LessonNavigation';
import VideoCall from '../../components/LessonComponents/VideoCall/VideoCall';
import socket from '../../components/LessonComponents/socketInit';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import A1A2 from './Courses/A1A2/A1A2';

const CombineLessons = () => {
  const [page, setPage] = useState('page1');

  const location = useLocation();
  const { studentId } = useParams();
  const roomId = location.pathname;

  useEffect(() => {
    socket.emit('joinRoom', roomId);
    // eslint-disable-next-line
  }, []);

  const pages = {
    ls: 6,
    hw: 4,
  };
  console.log('Combine lessons');

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
      <VideoCall roomId={roomId} />
      <DndProvider backend={HTML5Backend}>
        <A1A2
          socket={socket}
          page={page}
          roomId={roomId}
          studentId={studentId}
        />
      </DndProvider>
    </div>
  );
};

export default CombineLessons;
