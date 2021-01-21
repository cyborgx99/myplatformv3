import { combineReducers } from 'redux';
import authReducer from './auth';
import modalReducer from './modal';
import spinnerReducer from './spinner';
import profileReducer from './profile';
import expenseReducer from './expenseTracker';
import userReducer from './user';
import calendarReducer from './calendar';

const rootReducer = combineReducers({
  auth: authReducer,
  spinner: spinnerReducer,
  modal: modalReducer,
  profile: profileReducer,
  expenseTracker: expenseReducer,
  user: userReducer,
  calendar: calendarReducer,
});

export default rootReducer;
