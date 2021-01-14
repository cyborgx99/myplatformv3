import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../actions/types';

const initialState = {
  token: '',
  loading: false,
  isAuthenticated: false,
  user: null,
  userActivated: null,
  registering: null,
  resetLink: null,
};

export default function auth(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: payload,
      };
    case USER_REGISTER_FAIL:
      console.log(payload);
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}
