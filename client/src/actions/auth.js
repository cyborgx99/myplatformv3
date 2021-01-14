import axios from 'axios';
import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from './types';
// import swal from 'sweetalert';

export const register = (name, lastName, email, password) => async (
  dispatch
) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/v1/auth/register',
      { name, lastName, email, password },
      config
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    // dispatch({
    //   type: USER_LOGIN_SUCCESS,
    //   payload: data,
    // });
  } catch (error) {
    // console.log(error.response.data.errors);
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.message,
    });
    // swal({
    //   title:
    //     error.response && error.response.data.errors
    //       ? error.response.data.errors
    //       : error.message,
    //   icon: 'warning',
    // });
  }
};
