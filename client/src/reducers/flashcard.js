import {
  DELETE_FLASHCARD_FAIL,
  DELETE_FLASHCARD_SUCCESS,
  FLASHCARD_CREATE_FAIL,
  FLASHCARD_CREATE_SUCCESS,
  FLASHCARD_UPDATE_SUCCESS,
  GET_FLASHCARDS_FAIL,
  GET_FLASHCARDS_SUCCESS,
} from '../actions/types';

const initialState = {
  flashcards: [],
};

export default function flashcardReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FLASHCARD_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        flashcards: [...state.flashcards, payload],
      };

    case GET_FLASHCARDS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        flashcards: payload,
      };

    case FLASHCARD_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        flashcards: state.flashcards.map((flashcard) =>
          flashcard._id === payload._id ? payload : flashcard
        ),
      };

    case DELETE_FLASHCARD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        flashcards: state.flashcards.filter(
          (flashcard) => flashcard._id !== payload
        ),
      };

    case FLASHCARD_CREATE_FAIL:
    case GET_FLASHCARDS_FAIL:
    case DELETE_FLASHCARD_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
