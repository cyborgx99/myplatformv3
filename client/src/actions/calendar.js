import axios from 'axios';
import { toggleModal } from './modal';
import { toggleSpinner } from './spinner';
import swal from 'sweetalert2';
import {
  CALENDAR_EVENT_CREATE_FAIL,
  CALENDAR_EVENT_CREATE_SUCCESS,
  GET_CALENDAR_EVENTS_SUCCESS,
  GET_CALENDAR_EVENTS_FAIL,
  CALENDAR_EVENT_UPDATE_SUCCESS,
  CALENDAR_EVENT_UPDATE_FAIL,
} from './types';

// create calendar event (teacher / mastermind only)
export const createEvent = (eventObject) => async (dispatch) => {
  try {
    dispatch(toggleSpinner('on'));
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      '/api/v1/calendar/events/create',
      eventObject,
      config
    );
    dispatch(toggleModal('closed', ''));
    dispatch(toggleSpinner('off'));
    dispatch({
      type: CALENDAR_EVENT_CREATE_SUCCESS,
      payload: data.data,
    });
    swal.fire({
      icon: 'success',
      text: 'Event has been created',
    });
  } catch (error) {
    // console.log(error.response.data.errors);
    dispatch({
      type: CALENDAR_EVENT_CREATE_FAIL,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.message,
    });

    swal.fire({
      icon: 'warning',
      html: error.response.data.errors.split(',').join('<br>'),
    });
    dispatch(toggleSpinner('off'));
  }
};

//Get the current users profile
export const getAllEvents = (teacherId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/v1/calendar/events/${teacherId}`);
    dispatch({
      type: GET_CALENDAR_EVENTS_SUCCESS,
      payload: data.data,
    });
    console.log(data);
  } catch (error) {
    dispatch({
      type: GET_CALENDAR_EVENTS_FAIL,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.message,
    });
  }
};

export const updateEventTime = (eventObject, id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.put(
      `/api/v1/calendar/events/event/${id}`,
      eventObject,
      config
    );
    dispatch({
      type: CALENDAR_EVENT_UPDATE_SUCCESS,
      payload: data.data,
    });
    swal.fire({
      icon: 'success',
      text: 'Event has been updated',
    });
  } catch (error) {
    // console.log(error.response.data.errors);
    dispatch({
      type: CALENDAR_EVENT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.message,
    });
  }
};
