export const NUMBER_PRESSED = 'NUMBER_PRESSED';
export const FUNCTIONAL_PRESSED = 'FUNCTIONAL_PRESSED';

export default (state = null, action) => {
   switch(action.type) {
    case NUMBER_PRESSED:
      return action.payload;
    default: return state
  }
}
