import { combineReducers } from 'redux'

import data from './data'
import count from './count'

const rootReducer = combineReducers({
  apiData: data,
  count,
})

export default rootReducer
