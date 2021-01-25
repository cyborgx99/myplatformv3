import React, { useEffect } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';

const A1A2Lesson1 = ({ page, socket }) => {
  const { path } = useRouteMatch();
  const params = useParams();
  const roomId = `${path.split(':')[0]}${params.studentId}`;

  useEffect(() => {
    socket.emit('joinRoom', roomId);
  }, []);

  return (
    <div>
      {page === 'page1' && <h1>page1</h1>}
      {page === 'page2' && <h1>page2</h1>}
      {page === 'page3' && <h1>page3</h1>}
      {page === 'page4' && <h1>page4</h1>}
    </div>
  );
};

export default A1A2Lesson1;
