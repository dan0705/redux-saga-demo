import COUNT_ACTION from './action'

export default function counter(
  state = { value: 0, incrementLoading: false, decrementLoading: false },
  action
) {
  switch (action.type) {
    case COUNT_ACTION.INCREMENT_REQUEST:
      return { value: state.value, incrementLoading: true }
    case COUNT_ACTION.INCREMENT:
      return { value: state.value + 1, incrementLoading: false }

    case COUNT_ACTION.DECREMENT_REQUEST:
      return { value: state.value, decrementLoading: true }
    case COUNT_ACTION.DECREMENT:
      return { value: state.value - 1, decrementLoading: false }
    default:
      return state
  }
}
