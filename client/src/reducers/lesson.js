import {
  GET_NOTES_FAIL,
  GET_NOTES_SUCCESS,
  NOTES_SAVED_SUCCESS,
  PAGES_SAVED_SUCCESS,
} from '../actions/types';

const initialState = {
  currentLesson: {},
  error: '',
  sharedNotes: '',
  privateNotes: '',
};

export default function lessonReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_NOTES_SUCCESS:
      return {
        ...state,
        sharedNotes: payload.sharedNotes,
        privateNotes: payload.privateNotes,
        error: '',
      };

    case NOTES_SAVED_SUCCESS:
      if (payload.sharedNotes) {
        return {
          ...state,
          sharedNotes: payload.sharedNotes,
          error: '',
        };
      } else if (payload.privateNotes) {
        return {
          ...state,
          privateNotes: payload.privateNotes,
          error: '',
        };
      }
      return;

    case PAGES_SAVED_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        currentLesson: payload,
      };

    case GET_NOTES_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
