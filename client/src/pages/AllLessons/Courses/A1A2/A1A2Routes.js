import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import ProtectedRoute from '../../../../routing/ProtectedRoute';
import A1A2Lesson1 from './A1A2Lesson1/A1A2Lesson1';

const A1A2Routes = () => {
  const { path } = useRouteMatch();

  return (
    <ProtectedRoute
      exact
      path={`${path}/a1a2/lesson1/:studentId`}
      roles={['teacher']}
    >
      <A1A2Lesson1 />
    </ProtectedRoute>
  );
};

export default A1A2Routes;
