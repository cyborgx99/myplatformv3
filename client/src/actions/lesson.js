import axios from 'axios';
import {
  GET_LESSON_DATA_FAIL,
  GET_LESSON_DATA_SUCCESS,
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

//Get current lesson Data
export const getCurrentLessonData = (lessonName) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      '/api/v1/lesson/get-lesson',
      { lessonName },
      config
    );
    console.log(data);
    dispatch({
      type: GET_LESSON_DATA_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_LESSON_DATA_FAIL,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.message,
    });
  }
};
