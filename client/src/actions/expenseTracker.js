import { toggleModal } from './modal';
import { toggleSpinner } from './spinner';
import {
  GET_TRANSACTIONS_FAIL,
  GET_TRANSACTIONS_SUCCESS,
  TRANSACTION_CREATE_FAIL,
  TRANSACTION_CREATE_SUCCESS,
  TRANSACTION_UPDATE_FAIL,
  TRANSACTION_UPDATE_SUCCESS,
  DELETE_TRANSACTION_SUCCESS,
  DELETE_TRANSACTION_FAIL,
} from './types';
import axios from 'axios';
import swal from 'sweetalert2';

export const createTransaciton = (transactionObject) => async (dispatch) => {
  try {
    dispatch(toggleSpinner('on'));
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      '/api/v1/expense-tracker/create',
      transactionObject,
      config
    );
    dispatch(toggleModal('closed', ''));
    dispatch(toggleSpinner('off'));
    dispatch({
      type: TRANSACTION_CREATE_SUCCESS,
      payload: data.data,
    });
    swal.fire({
      icon: 'success',
      text: 'Transaction has been created',
    });
  } catch (error) {
    // console.log(error.response.data.errors);
    dispatch({
      type: TRANSACTION_CREATE_FAIL,
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

export const updateTransaciton = (transactionObject, id) => async (
  dispatch
) => {
  try {
    dispatch(toggleSpinner('on'));
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.put(
      `/api/v1/expense-tracker/${id}`,
      transactionObject,
      config
    );
    dispatch(toggleModal('closed', ''));
    dispatch(toggleSpinner('off'));
    dispatch({
      type: TRANSACTION_UPDATE_SUCCESS,
      payload: data.data,
    });
    swal.fire({
      icon: 'success',
      text: 'Transaction has been updated',
    });
  } catch (error) {
    // console.log(error.response.data.errors);
    dispatch({
      type: TRANSACTION_UPDATE_FAIL,
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

//Get the current users profile
export const getAllTransactions = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/v1/expense-tracker/transactions');
    dispatch({
      type: GET_TRANSACTIONS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_TRANSACTIONS_FAIL,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.message,
    });
  }
};

export const deleteTransaction = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/api/v1/expense-tracker/${id}`);
    dispatch({
      type: DELETE_TRANSACTION_SUCCESS,
      payload: data.data,
    });
    swal.fire({
      icon: 'success',
      text: 'Transaction has been deleted',
    });
  } catch (error) {
    dispatch({
      type: DELETE_TRANSACTION_FAIL,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.message,
    });
  }
};
