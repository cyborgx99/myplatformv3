import axios from 'axios';
import swal from 'sweetalert2';
import { toggleModal } from './modal';
import { toggleSpinner } from './spinner';
import {
  DELETE_FLASHCARD_FAIL,
  DELETE_FLASHCARD_SUCCESS,
  FLASHCARD_CREATE_FAIL,
  FLASHCARD_CREATE_SUCCESS,
  FLASHCARD_UPDATE_FAIL,
  FLASHCARD_UPDATE_SUCCESS,
  GET_FLASHCARDS_FAIL,
  GET_FLASHCARDS_SUCCESS,
} from './types';

export const createNewCard = (flashcardObject) => async (dispatch) => {
  try {
    dispatch(toggleSpinner('on'));
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      '/api/v1/flashcard/create',
      flashcardObject,
      config
    );
    dispatch(toggleModal('closed', ''));
    dispatch(toggleSpinner('off'));
    dispatch({
      type: FLASHCARD_CREATE_SUCCESS,
      payload: data.data,
    });
    swal.fire({
      icon: 'success',
      text: 'Flashcard has been created',
    });
  } catch (error) {
    // console.log(error.response.data.errors);
    dispatch({
      type: FLASHCARD_CREATE_FAIL,
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

//Get the current users flashcards
export const getAllFlashcards = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/v1/flashcard/flashcards');
    dispatch({
      type: GET_FLASHCARDS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_FLASHCARDS_FAIL,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.message,
    });
  }
};

export const deleteFlashcard = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/api/v1/flashcard/${id}`);
    dispatch({
      type: DELETE_FLASHCARD_SUCCESS,
      payload: data.data,
    });
    swal.fire({
      icon: 'success',
      text: 'Flashcard has been deleted',
    });
  } catch (error) {
    dispatch({
      type: DELETE_FLASHCARD_FAIL,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.message,
    });
  }
};

export const updateFlashcard = (flashcardObject, id) => async (dispatch) => {
  try {
    dispatch(toggleSpinner('on'));
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.put(
      `/api/v1/flashcard/${id}`,
      flashcardObject,
      config
    );
    dispatch(toggleModal('closed', ''));
    dispatch(toggleSpinner('off'));
    dispatch({
      type: FLASHCARD_UPDATE_SUCCESS,
      payload: data.data,
    });
    swal.fire({
      icon: 'success',
      text: 'Flashcard has been updated',
    });
  } catch (error) {
    // console.log(error.response.data.errors);
    dispatch({
      type: FLASHCARD_UPDATE_FAIL,
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
