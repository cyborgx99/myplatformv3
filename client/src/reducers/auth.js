import { USER_REGISTER_SUCCESS } from '../actions/types';

const initialState = {
  token: '',
  isAuthenticated: false,
  user: null,
  userActivated: null,
  registering: null,
  resetLink: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    //   case ACTIVATION_ERROR:
    //     return {
    //       ...state,
    //       userActivated: false,
    //       loading: false
    //     };

    default:
      return state;
  }
}
