import { TOGGLE_MODAL } from './types';

export const toggleModal = (toggle, content) => async (dispatch) => {
  dispatch({
    type: TOGGLE_MODAL,
    payload: {
      toggle,
      content,
    },
  });
};
