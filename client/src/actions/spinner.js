import { TOGGLE_SPINNER } from './types';
export const toggleSpinner = (spinning) => async (dispatch) => {
  dispatch({
    type: TOGGLE_SPINNER,
    payload: {
      spinning,
    },
  });
};
