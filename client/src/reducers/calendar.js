import {
  CALENDAR_EVENT_CREATE_FAIL,
  CALENDAR_EVENT_CREATE_SUCCESS,
  CALENDAR_EVENT_UPDATE_FAIL,
  CALENDAR_EVENT_UPDATE_SUCCESS,
  GET_CALENDAR_EVENTS_FAIL,
  GET_CALENDAR_EVENTS_SUCCESS,
} from '../actions/types';

const initialState = {
  events: [],
  error: '',
  loading: true,
};

export default function calendarReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CALENDAR_EVENT_CREATE_SUCCESS:
      return {
        ...state,
        error: '',
        loading: false,
        events: [...state.events, payload],
      };

    case GET_CALENDAR_EVENTS_SUCCESS:
      return {
        ...state,
        error: '',
        loading: false,
        events: payload,
      };

    case CALENDAR_EVENT_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        events: state.events.map((event) =>
          event._id === payload._id ? payload : event
        ),
      };

    case CALENDAR_EVENT_CREATE_FAIL:
    case GET_CALENDAR_EVENTS_FAIL:
    case CALENDAR_EVENT_UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
