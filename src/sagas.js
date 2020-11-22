import { all, call, delay, put, takeEvery } from 'redux-saga/effects'

import COUNT_ACTION from './action'

export function helloSaga() {
  console.log('Start Saga!')
}

export function* incrementAsync() {
  yield put({ type: COUNT_ACTION.INCREMENT_REQUEST })
  yield delay(2000)
  yield put({ type: COUNT_ACTION.INCREMENT })
}

export function* watchIncrementAsync() {
  yield takeEvery(COUNT_ACTION.INCREMENT_ASYNC, incrementAsync)
}

function* decrementAsync() {
  yield put({ type: COUNT_ACTION.DECREMENT_REQUEST })
  yield delay(2000)
  yield put({ type: COUNT_ACTION.DECREMENT })
}

function* watchDecrementAsync() {
  yield takeEvery(COUNT_ACTION.DECREMENT_ASYNC, decrementAsync)
}

// single entry point to satart all Sagas at once
export default function* rootSaga() {
  yield all([
    call(helloSaga),
    call(watchIncrementAsync),
    call(watchDecrementAsync),
  ])
}
