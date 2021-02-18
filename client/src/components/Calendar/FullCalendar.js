import React, { useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { toggleModal } from '../../actions/modal';
import CalendarEventForm from './CalendarEventForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteCalendarEvent,
  getAllEvents,
  updateEventTime,
} from '../../actions/calendar';
import swal from 'sweetalert2';

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
    const eventObject = {};
    const id = e.event.extendedProps._id;

    if (e.event._def.recurringDef !== null) {
      //   one time event time update
      eventObject.startTime = e.event.start.toString().slice(16, 21);
      eventObject.endTime = e.event.end.toString().slice(16, 21);
      eventObject.daysOfWeek = [e.event.start.getDay()];
    } else {
      // recurring event time update
      eventObject.start = e.event.start;
      eventObject.end = e.event.end;
      eventObject.daysOfWeek = null;
    }
    dispatch(updateEventTime(eventObject, id));
  };

  const deleteOnClick = async (e) => {
    const confirmed = await swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it.',
    });
    const id = e.event.extendedProps._id;
    if (confirmed.isConfirmed === true) {
      dispatch(deleteCalendarEvent(id));
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
      eventResize={(e) => dropToChangeTime(e)}
      allDaySlot={false}
      selectOverlap={false}
      selectMirror={true}
      weekends={true}
      eventOverlap={false}
      stickyHeaderDates={true}
      eventDrop={(e) => dropToChangeTime(e)}
      eventClick={(e) => deleteOnClick(e)}
      events={events}
      eventContent={renderEventContent}
    />
  );
};

const renderEventContent = (eventInfo) => {
  return (
    <div className='calendarEvents'>
      <b>{eventInfo.timeText}</b>
      <p>{eventInfo.event.title}</p>
      <p>
        {eventInfo.event._def.recurringDef !== null ? 'Regular' : 'One time'}
      </p>
    </div>
  );
};

export default FullCalendarComponent;
