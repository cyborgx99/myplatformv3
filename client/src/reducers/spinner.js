import { TOGGLE_SPINNER } from '../actions/types';

const initialState = {
  spinning: 'off',
};

export default function spinner(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_SPINNER:
      return {
        ...state,
        spinning: payload.spinning,
      };

    default:
      return state;
  }
}
