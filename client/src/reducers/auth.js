import {
  USER_CONFIRM_EMAIL_FAIL,
  USER_CONFIRM_EMAIL_SUCCESS,
  USER_LOADED_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
} from '../actions/types';

const initialState = {
  loading: true,
  user: '',
  registering: '',
  error: '',
};

export default function auth(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_REGISTER_SUCCESS:
    case USER_CONFIRM_EMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        registering: payload,
      };
    case USER_REGISTER_FAIL:
    case USER_LOGIN_FAIL:
    case USER_LOADED_FAIL:
    case USER_CONFIRM_EMAIL_FAIL:
      return {
        ...state,
        user: {},
        loading: false,
        error: payload,
      };

    case USER_LOGIN_SUCCESS:
    case USER_LOADED_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload.user,
      };

    default:
      return state;
  }
}
