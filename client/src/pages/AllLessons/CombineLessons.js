import React from 'react';
import { Switch } from 'react-router-dom';
import A1A2Routes from './Courses/A1A2/A1A2Routes';
import EgzaminRoutes from './Courses/EgzaminMaturalny/EgzaminRoutes';

const CombineLessons = () => {
  return (
    <div>
      <Switch>
        <A1A2Routes />
        <EgzaminRoutes />
      </Switch>
    </div>
  );
};

export default CombineLessons;
