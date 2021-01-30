import React from 'react';
import { Switch } from 'react-router-dom';
import A1A2Routes from './Courses/A1A2/A1A2Routes';
import EgzaminRoutes from './Courses/EgzaminMaturalny/EgzaminRoutes';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const CombineLessons = () => {
  return (
    <div>
      <Switch>
        <DndProvider backend={HTML5Backend}>
          <A1A2Routes />
          <EgzaminRoutes />
        </DndProvider>
      </Switch>
    </div>
  );
};

export default CombineLessons;
