import React from 'react';
import { Route } from 'react-router-dom';
import Egzamin2015Basic from './Egzamin2015Basic/Egzamin2015Basic';

const EgzaminRoutes = ({ socket, page, roomId, setTotalPages }) => {
  return (
    <Route path='/lessons/egzamin-maturalny/lesson1/:studentId'>
      <Egzamin2015Basic
        socket={socket}
        page={page}
        roomId={roomId}
        setTotalPages={setTotalPages}
      />
    </Route>
  );
};

export default EgzaminRoutes;
