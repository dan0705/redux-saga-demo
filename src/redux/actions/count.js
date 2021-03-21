export const COUNT_ACTIONS = {
  // INCREMENT_REQUEST: 'INCREMENT_REQUEST',
  INCREMENT: 'INCREMENT',
  INCREMENT_ASYNC: 'INCREMENT_ASYNC',

  // DECREMENT_REQUEST: 'DECREMENT_REQUEST',
  DECREMENT: 'DECREMENT',
  DECREMENT_ASYNC: 'DECREMENT_ASYNC',
}

export const increment = () => ({
  type: COUNT_ACTIONS.INCREMENT,
})

export const incrementAsync = () => ({
  type: COUNT_ACTIONS.INCREMENT_ASYNC,
})

export const decrement = () => ({
  type: COUNT_ACTIONS.DECREMENT,
})

export const decrementAsync = () => ({
  type: COUNT_ACTIONS.DECREMENT_ASYNC,
})

const Actions = {
  increment,
  decrement,
  incrementAsync,
  decrementAsync,
}

export default Actions
