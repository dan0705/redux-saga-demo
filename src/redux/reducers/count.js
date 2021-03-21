import { COUNT_ACTIONS } from '../actions/count'

const initialState = {
  value: 0,
  incrementLoading: false,
  decrementLoading: false,
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNT_ACTIONS.INCREMENT_ASYNC:
      return { value: state.value, incrementLoading: true }
    case COUNT_ACTIONS.INCREMENT:
      return { value: state.value + 1, incrementLoading: false }

    case COUNT_ACTIONS.DECREMENT_ASYNC:
      return { value: state.value, decrementLoading: true }
    case COUNT_ACTIONS.DECREMENT:
      return { value: state.value - 1, decrementLoading: false }
    default:
      return state
  }
}

export default counterReducer
