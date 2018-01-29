
export default (state = 0, action) => {
   switch(action.type) {
    case 'NUMBER_PRESSED':
      return action.payload;
    default: return state
  }
}
