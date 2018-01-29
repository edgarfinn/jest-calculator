export const INCREMENT_NUMBER = 'INCREMENT_NUMBER';

export const incrementNumber(value) => {
  return {
    type: INCREMENT_NUMBER,
    payload: value
  }
}
