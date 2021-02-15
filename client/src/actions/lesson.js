import axios from 'axios';
import {
  GET_NOTES_FAIL,
  GET_NOTES_SUCCESS,
  NOTES_SAVED_FAIL,
  NOTES_SAVED_SUCCESS,
  PAGES_SAVED_FAIL,
  PAGES_SAVED_SUCCESS,
} from './types';

export const saveNotes = (notesObject) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      `/api/v1/lesson/save-notes`,
      notesObject,
      config
    );
    dispatch({
      type: NOTES_SAVED_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    // console.log(error.response.data.errors);
    dispatch({
      type: NOTES_SAVED_FAIL,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.message,
    });
  }
};

export const savePageData = (pagesObject) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      `/api/v1/lesson/save-pages`,
      pagesObject,
      config
    );
    dispatch({
      type: PAGES_SAVED_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    // console.log(error.response.data.errors);
    dispatch({
      type: PAGES_SAVED_FAIL,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.message,
    });
  }
};

//Get the current lesson notes
export const getAllNotes = (lessonName) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      '/api/v1/lesson/get-notes',
      { lessonName },
      config
    );
    dispatch({
      type: GET_NOTES_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_NOTES_FAIL,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.message,
    });
  }
};
