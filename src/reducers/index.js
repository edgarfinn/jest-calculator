import { combineReducers } from 'redux';
import lastPressed from './reducer_last_pressed';

const rootReducer = combineReducers({
  lastPressed
});

export default rootReducer;
