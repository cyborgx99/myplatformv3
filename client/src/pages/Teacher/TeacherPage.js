import React from 'react';
import FullCalendarComponent from '../../components/Calendar/FullCalendar';

const TeacherPage = () => {
  return (
    <div className='teacher-page-container'>
      <div className='swipeView'>
        <div className='swipeViewSection'>
          <FullCalendarComponent />
        </div>
      </div>
    </div>
  );
};

export default TeacherPage;
