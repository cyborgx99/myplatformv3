import {} from '../actions/types';

const initialState = {
  avatar: '',
  skype: '',
};

export default function profileReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    // case TOGGLE_MODAL:
    //   return {
    //     ...state,
    //     toggle: payload.toggle,
    //     content: payload.content,
    //     type: payload.type,
    //   };
    default:
      return state;
  }
}
