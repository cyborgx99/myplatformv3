import axios from 'axios';
import { GET_STUDENTS_FAIL, GET_STUDENTS_SUCCESS } from './types';

// get all students (only by teachers)
export const getStudents = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/v1/user/students');
    dispatch({
      type: GET_STUDENTS_SUCCESS,
      //user from the route
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_STUDENTS_FAIL,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.message,
    });

    // swal.fire({
    //   icon: 'warning',
    //   html: error.response.data.errors.split(',').join('<br>'),
    // });
  }
};
