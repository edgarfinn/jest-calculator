export default (state = null, action) => {
  return switch(action.type) {
    case 'BUTTON_PRESSED':
      return action.payload;
    default: return state
  }
}
