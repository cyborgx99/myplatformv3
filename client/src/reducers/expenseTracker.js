import {
  DELETE_TRANSACTION_FAIL,
  DELETE_TRANSACTION_SUCCESS,
  GET_TRANSACTIONS_FAIL,
  GET_TRANSACTIONS_SUCCESS,
  TRANSACTION_CREATE_FAIL,
  TRANSACTION_CREATE_SUCCESS,
  TRANSACTION_UPDATE_FAIL,
  TRANSACTION_UPDATE_SUCCESS,
} from '../actions/types';

const initialState = {
  transactions: [],
  loading: true,
  error: '',
};

export default function expenseReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TRANSACTION_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        transactions: [...state.transactions, payload],
      };

    case TRANSACTION_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        transactions: state.transactions.map((transaction) =>
          transaction._id === payload._id ? payload : transaction
        ),
      };

    case GET_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        transactions: payload,
      };

    case DELETE_TRANSACTION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== payload
        ),
      };

    case TRANSACTION_CREATE_FAIL:
    case GET_TRANSACTIONS_FAIL:
    case TRANSACTION_UPDATE_FAIL:
    case DELETE_TRANSACTION_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
