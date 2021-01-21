import React, { useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { toggleModal } from '../../actions/modal';
import CalendarEventForm from './CalendarEventForm';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEvents, updateEventTime } from '../../actions/calendar';

const FullCalendarComponent = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const calendar = useSelector((state) => state.calendar);
  const { events } = calendar;

  useEffect(() => {
    dispatch(getAllEvents(auth.user._id));
    // eslint-disable-next-line
  }, []);

  const dropToChangeTime = (e) => {
    //   one time event time update
    if (e.event._def.recurringDef !== null) {
      const eventObject = {
        startTime: e.event.start.toString().slice(16, 21),
        endTime: e.event.end.toString().slice(16, 21),
        daysOfWeek: [e.event.start.getDay()],
      };
      const id = e.event.extendedProps._id;
      dispatch(updateEventTime(eventObject, id));
    } else {
      // recurring event time update
      const eventObject = {
        start: e.event.start,
        end: e.event.end,
        daysOfWeek: null,
      };
      const id = e.event.extendedProps._id;
      dispatch(updateEventTime(eventObject, id));
    }
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
      initialView='timeGridWeek'
      headerToolbar={{
        right: 'prev,next today',
        center: 'title',
        left: '',
      }}
      selectable={true}
      select={(e) =>
        dispatch(toggleModal('open', <CalendarEventForm event={e} />))
      }
      editable={true}
      allDaySlot={false}
      selectOverlap={false}
      selectMirror={true}
      weekends={true}
      eventOverlap={false}
      eventDrop={(e) => dropToChangeTime(e)}
      events={events}
      eventContent={renderEventContent}
    />
  );
};

const renderEventContent = (eventInfo) => {
  return (
    <div className='calendarEvents'>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </div>
  );
};

export default FullCalendarComponent;
