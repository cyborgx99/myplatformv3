import { combineReducers } from 'redux';
import authReducer from './auth';
import modalReducer from './modal';
import spinnerReducer from './spinner';

const rootReducer = combineReducers({
  auth: authReducer,
  spinner: spinnerReducer,
  modal: modalReducer,
});

export default rootReducer;
