import axios from 'axios';
import { toggleModal } from './modal';
import { toggleSpinner } from './spinner';
import swal from 'sweetalert2';
import {
  PROFILE_CREATE_FAIL,
  PROFILE_CREATE_SUCCESS,
  PROFILE_UPDATE_FAIL,
  PROFILE_UPDATE_SUCCESS,
} from './types';

export const createUserProfile = (profileObject) => async (dispatch) => {
  try {
    dispatch(toggleSpinner('on'));
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      '/api/v1/profile/create',
      profileObject,
      config
    );
    swal.fire({
      icon: 'success',
      title: 'Profile has been created',
    });
    dispatch(toggleModal('closed', ''));
    dispatch(toggleSpinner('off'));
    dispatch({
      type: PROFILE_CREATE_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    // console.log(error.response.data.errors);
    dispatch({
      type: PROFILE_CREATE_FAIL,
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

export const updateUserProfile = (profileObject, id) => async (dispatch) => {
  try {
    dispatch(toggleSpinner('on'));
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.put(
      `/api/v1/profile/${id}`,
      profileObject,
      config
    );
    swal.fire({
      icon: 'success',
      title: 'Profile has been updated',
    });
    dispatch(toggleModal('closed', ''));
    dispatch(toggleSpinner('off'));
    dispatch({
      type: PROFILE_UPDATE_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    // console.log(error.response.data.errors);
    dispatch({
      type: PROFILE_UPDATE_FAIL,
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
