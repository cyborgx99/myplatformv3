import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import ProtectedRoute from '../../../../routing/ProtectedRoute';
import A1A2Lesson1 from './A1A2Lesson1/A1A2Lesson1';

const A1A2Routes = ({ page, setRoomId, socket }) => {
  const { path, url } = useRouteMatch();

  return (
    <ProtectedRoute
      path={`${path}/a1a2/lesson1/:studentId`}
      roles={['teacher']}
    >
      <A1A2Lesson1 socket={socket} page={page} setRoomId={setRoomId} />
    </ProtectedRoute>
  );
};

export default A1A2Routes;
