import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Notes from '../../components/LessonComponents/Notes/Notes';
import LessonNavigation from '../../components/LessonComponents/LessonNavigation/LessonNavigation';
import VideoCall from '../../components/LessonComponents/VideoCall/VideoCall';
import socket from '../../components/LessonComponents/socketInit';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import A1A2 from './Courses/A1A2/A1A2';

const CombineLessons = () => {
  const { pathname } = useLocation();
  const roomId = pathname;

  const [page, setPage] = useState(
    sessionStorage.getItem(`${roomId}/selectedPage`) || 'page1'
  );
  const [totalPages, setTotalPages] = useState({
    p: [],
    hw: [],
  });

  useEffect(() => {
    socket.emit('joinRoom', roomId);
    // eslint-disable-next-line
  }, []);

  console.log('Combine lessons');

  return (
    <div className='lesson-container'>
      <div className='lesson-notes-nav'>
        <LessonNavigation
          totalPages={totalPages}
          roomId={roomId}
          socket={socket}
          eventName='pageChange'
          page={page}
          setPage={setPage}
        />
        <Notes socket={socket} eventName='notes' />
      </div>
      <VideoCall roomId={roomId} />
      <DndProvider backend={HTML5Backend}>
        <A1A2
          setTotalPages={setTotalPages}
          socket={socket}
          page={page}
          roomId={roomId}
        />
      </DndProvider>
    </div>
  );
};

export default CombineLessons;
