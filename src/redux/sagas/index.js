import { fork } from 'redux-saga/effects'
import data from './data'
import count from './count'

export default function* root() {
  yield fork(data)
  yield fork(count)
}
