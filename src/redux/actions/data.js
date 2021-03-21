export const DATA_ACTIONS = {
  FETCH_DATA: 'data.FETCH_DATA',
  FETCH_DATA_OK: 'data.FETCH_DATA_OK',
  FETCH_DATA_ERR: 'data.FETCH_DATA_ERR',
}

export const fetchData = (params) => ({
  type: DATA_ACTIONS.FETCH_DATA,
  payload: params,
})

export const setData = (listData) => ({
  type: DATA_ACTIONS.FETCH_DATA_OK,
  payload: listData,
})

export const setError = (err) => ({
  type: DATA_ACTIONS.FETCH_DATA_ERR,
  payload: err,
})

const Actions = {
  fetchData,
  setData,
  setError,
}

export default Actions
