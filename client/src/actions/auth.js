import axios from 'axios';
import {
  USER_REGISTER_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  USER_REGISTER_SUCCESS,
  USER_CONFIRM_EMAIL_SUCCESS,
  USER_CONFIRM_EMAIL_FAIL,
} from './types';
import swal from 'sweetalert2';
import { toggleModal } from './modal';
import { toggleSpinner } from './spinner';

export const register = (name, lastName, email, password) => async (
  dispatch
) => {
  try {
    dispatch(toggleSpinner('on'));
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
    swal.fire({
      icon: 'success',
      title: 'Please confirm your email',
      html: data.data,
    });
    dispatch(toggleModal('closed', ''));
    dispatch(toggleSpinner('off'));
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // console.log(error.response.data.errors);
    dispatch({
      type: USER_REGISTER_FAIL,
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

export const confirmEmail = (token) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      '/api/v1/auth/activation',
      { token },
      config
    );
    swal.fire({
      icon: 'success',
      html: data.message,
    });
    dispatch({
      type: USER_CONFIRM_EMAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: USER_CONFIRM_EMAIL_FAIL,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.message,
    });
    swal.fire({
      icon: 'warning',
      html: error.response.data.errors.split(',').join('<br>'),
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/v1/auth/login',
      { email, password },
      config
    );

    dispatch(toggleModal('closed', ''));

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // console.log(error.response.data.errors);
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.message,
    });

    swal.fire({
      icon: 'warning',
      html: error.response.data.errors.split(',').join('<br>'),
    });
  }
};

//Load USer if cookie/ token valid gets user data
export const loadUser = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/v1/auth/getme');
    dispatch({
      type: USER_LOADED_SUCCESS,
      //user from the route
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_LOADED_FAIL,
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

export const contactUs = (name, email, message) => async (dispatch) => {
  try {
    dispatch(toggleSpinner('on'));
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      '/api/v1/auth/contact-us',
      { email, name, message },
      config
    );
    swal.fire({
      icon: 'success',
      html: data.data,
    });
    dispatch(toggleModal('closed', ''));
    dispatch(toggleSpinner('off'));
  } catch (error) {
    console.log(error);
    swal.fire({
      icon: 'warning',
      html: error.response.data.errors.split(',').join('<br>'),
    });
    dispatch(toggleSpinner('off'));
  }
};
