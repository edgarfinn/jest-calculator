import { combineReducers } from 'redux';
import currentValue from './reducer_current_value';

const rootReducer = combineReducers({
  currentValue
});

export default rootReducer;
