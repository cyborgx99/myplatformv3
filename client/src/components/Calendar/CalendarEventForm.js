import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent } from '../../actions/calendar';
import { getStudents } from '../../actions/user';

const CalendarEventForm = ({ event }) => {
  const [newEvent, setNewEvent] = useState('');
  const [eventType, setEventType] = useState('');

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getStudents());
    // eslint-disable-next-line
  }, []);

  const addCalendarEvent = () => {
    if (eventType === 'recurring') {
      const eventObject = {
        teacherId: auth.user._id,
        studentId: newEvent.split('/', 2)[1],
        title: newEvent.split('/', 2)[0],
        startTime: event.start.toString().slice(16, 21),
        endTime: event.end.toString().slice(16, 21),
        daysOfWeek: [event.start.getDay()],
      };
      dispatch(createEvent(eventObject));
    } else {
      const eventObject = {
        teacherId: auth.user._id,
        studentId: newEvent.split('/', 2)[1],
        title: newEvent.split('/', 2)[0],
        start: event.start,
        end: event.end,
        daysOfWeek: null,
      };
      dispatch(createEvent(eventObject));
    }
  };

  return (
    <div>
      <h2>Add Calendar Event</h2>
      <label>Student</label>
      <select onChange={(e) => setNewEvent(e.target.value)} value={newEvent}>
        <option disabled></option>
        {user.students.map((student) => (
          <option
            key={student._id}
            value={`${student.name} ${student.lastName}/${student._id}`}
          >
            {student.name} {student.lastName}
          </option>
        ))}
      </select>
      <label>Event</label>
      <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
        <option disabled></option>
        <option value='recurring'>Recurring</option>
        <option value='onetime'>One time</option>
      </select>
      <button onClick={() => addCalendarEvent()}>Add Event</button>
    </div>
  );
};

export default CalendarEventForm;
