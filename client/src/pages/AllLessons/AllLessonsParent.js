import React, { useEffect, useRef, useState } from 'react';
import CombineLessons from './CombineLessons';
import io from 'socket.io-client';

const AllLessonsParent = () => {
  // Initialize socket connection
  const socket = useRef(io.connect('/main'));
  console.log(socket);
  return <CombineLessons socket={socket.current} />;
};

export default AllLessonsParent;
