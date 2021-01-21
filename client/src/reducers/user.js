import { GET_STUDENTS_FAIL, GET_STUDENTS_SUCCESS } from '../actions/types';

const initialState = {
  students: [],
  loading: true,
  error: '',
};

export default function userReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_STUDENTS_SUCCESS:
      return {
        students: payload,
        loading: false,
        error: '',
      };

    case GET_STUDENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
