import { takeLatest, call, put, fork } from 'redux-saga/effects'

import { getDataAPI } from 'apis/dataApi'

import Actions, { DATA_ACTIONS } from 'redux/actions/data'

export function* fetchData(action) {
  try {
    const resp = yield call(getDataAPI, action.payload)
    yield put(Actions.setData(resp))
  } catch (e) {
    yield put(Actions.setError(e))
  }
}
export function* watchData() {
  yield takeLatest(DATA_ACTIONS.FETCH_DATA, fetchData)
}

export default function* data() {
  yield fork(watchData)
}
