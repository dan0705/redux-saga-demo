import { all, call, delay, fork, put, takeLatest } from 'redux-saga/effects'

import Actions, { COUNT_ACTIONS } from '../actions/count'

export function* increment() {
  yield call(Actions.increment)
}

export function* incrementAsync() {
  yield delay(2000)
  yield put(Actions.increment())
}

export function* decrement() {
  yield call(Actions.decrement)
}

export function* decrementAsync() {
  yield delay(2000)
  yield put(Actions.decrement())
}

export function* watchChangeAsync() {
  yield all([
    takeLatest(COUNT_ACTIONS.INCREMENT_ASYNC, incrementAsync),
    takeLatest(COUNT_ACTIONS.DECREMENT_ASYNC, decrementAsync),
  ])
}

export default function* count() {
  yield fork(watchChangeAsync)
}
