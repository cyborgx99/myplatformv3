import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import ProtectedRoute from '../../../../routing/ProtectedRoute';
import Egzamin2015Basic from './Egzamin2015Basic/Egzamin2015Basic';

const EgzaminRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <ProtectedRoute
      path={`${path}/egzamin/lesson1/:studentId`}
      roles={['teacher']}
    >
      <Egzamin2015Basic />
    </ProtectedRoute>
  );
};

export default EgzaminRoutes;
