export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function autoIncrement(delay = 1000) {
  return dispatch => {
    setInterval(() => {
      dispatch(increment());
    }, delay)
  }
}

export function autoDecrement(delay = 1000) {
  return dispatch => {
    setInterval(() => {
      dispatch(decrement());
    }, delay)
  }
}
