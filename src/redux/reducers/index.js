import { combineReducers } from 'redux';
import auth from './auth';
import contact from './contact';
import chat from './chat';
import conversation from './conversation';
import user from './user';

export default combineReducers({
  auth,
  contact,
  chat,
  conversation,
  user
});
