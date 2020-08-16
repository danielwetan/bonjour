import { combineReducers } from 'redux';
import auth from './auth';
import contact from './contact';
import chat from './chat';

export default combineReducers({
  auth,
  contact,
  chat
});
