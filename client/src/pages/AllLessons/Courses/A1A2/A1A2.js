import React from 'react';
import A1A2Lesson1 from '../A1A2/A1A2Lesson1/A1A2Lesson1';
import A1A2Lesson2 from '../A1A2/A1A2Lesson2/A1A2Lesson2';

const A1A2 = ({ socket, page, roomId, studentId }) => {
  return (
    <>
      {roomId === `/lessons/a1a2/lesson1/${studentId}` && (
        <A1A2Lesson1 socket={socket} page={page} roomId={roomId} />
      )}
      {roomId === `/lessons/a1a2/lesson2/${studentId}` && (
        <A1A2Lesson2 socket={socket} page={page} roomId={roomId} />
      )}
    </>
  );
};

export default A1A2;
