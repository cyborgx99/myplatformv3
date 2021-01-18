import { combineReducers } from 'redux';
import authReducer from './auth';
import modalReducer from './modal';
import spinnerReducer from './spinner';
import profileReducer from './profile';

const rootReducer = combineReducers({
  auth: authReducer,
  spinner: spinnerReducer,
  modal: modalReducer,
  profile: profileReducer,
});

export default rootReducer;
