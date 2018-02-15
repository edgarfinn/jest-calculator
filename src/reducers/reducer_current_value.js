import {INCREMENT_NUMBER} from '../actions';

export default (state = '23', action) => {
   switch(action.type) {
    case INCREMENT_NUMBER:
      return state.concat(action.payload);
    default: return state
  }
}
