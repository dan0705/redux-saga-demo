import produce from 'immer'

import { DATA_ACTIONS } from '../actions/data'
import { DEFAULT_DATA } from '../default/data'

const initialState = {
  data: DEFAULT_DATA,
  loading: false,
  error: null,
}

const dataReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    const { type, payload } = action

    switch (type) {
      case DATA_ACTIONS.FETCH_DATA:
        draft.loading = true
        draft.error = null
        break
      case DATA_ACTIONS.FETCH_DATA_OK:
        draft.data = payload
        draft.loading = false
        break
      case DATA_ACTIONS.FETCH_DATA_ERR:
        draft.loading = false
        draft.error = payload
        break
      default:
        break
    }
  })

export default dataReducer
