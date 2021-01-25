import React, { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import LessonNavigation from '../../components/LessonComponents/LessonNavigation/LessonNavigation';
import A1A2Routes from './Courses/A1A2/A1A2Routes';
import EgzaminRoutes from './Courses/EgzaminMaturalny/EgzaminRoutes';
import PropTypes from 'prop-types';
import Video from './Video';
import Notes from '../../components/LessonComponents/Notes/Notes';

const CombineLessons = ({ socket }) => {
  const [page, setPage] = useState('page1');
  const [roomId, setRoomId] = useState('');
  const { path } = useRouteMatch();

  return (
    <div>
      <Route path={path}>
        <Video />
      </Route>
      <Route path={path}>
        <Notes socket={socket} />
      </Route>
      <Route path={path}>
        <LessonNavigation page={page} setPage={setPage} socket={socket} />
      </Route>
      <Switch>
        <A1A2Routes socket={socket} setRoomId={setRoomId} page={page} />
        <EgzaminRoutes setRoomId={setRoomId} page={page} />
      </Switch>
    </div>
  );
};

CombineLessons.propTypes = {
  socket: PropTypes.object.isRequired,
};

export default CombineLessons;
