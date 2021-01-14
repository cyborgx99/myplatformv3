import { TOGGLE_MODAL } from '../actions/types';

const initialState = {
  toggle: 'closed',
  content: '',
};

export default function modal(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        toggle: payload.toggle,
        content: payload.content,
      };

    default:
      return state;
  }
}
