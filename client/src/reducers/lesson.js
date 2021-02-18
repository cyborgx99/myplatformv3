import {
  GET_LESSON_DATA_FAIL,
  GET_LESSON_DATA_SUCCESS,
  NOTES_SAVED_FAIL,
  NOTES_SAVED_SUCCESS,
  PAGES_SAVED_FAIL,
  PAGES_SAVED_SUCCESS,
} from '../actions/types';

const initialState = {
  lessonName: '',
  pages: [],
  error: '',
  sharedNotes: '',
  privateNotes: '',
  loading: true,
};

export default function lessonReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_LESSON_DATA_SUCCESS:
      return {
        ...state,
        lessonName: payload.lessonName,
        privateNotes: payload.privateNotes,
        sharedNotes: payload.sharedNotes,
        pages: payload.pages,
        loading: false,
        error: '',
      };

    case NOTES_SAVED_SUCCESS:
      return {
        ...state,
        privateNotes: payload.privateNotes,
        sharedNotes: payload.sharedNotes,
        error: '',
      };

    case PAGES_SAVED_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        pages: payload.pages,
      };

    case GET_LESSON_DATA_FAIL:
    case NOTES_SAVED_FAIL:
    case PAGES_SAVED_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
