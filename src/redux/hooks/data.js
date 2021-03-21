import { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getData, getDataLoading, getDataError } from '../selectors/data'
import dataActions from '../actions/data'

export const useData = () => {
  const data = useSelector(getData)
  const loading = useSelector(getDataLoading)
  const error = useSelector(getDataError)

  const dispatch = useDispatch()
  const actions = useMemo(() => bindActionCreators(dataActions, dispatch), [
    dispatch,
  ])

  return useMemo(
    () => ({
      actions,
      data,
      loading,
      error,
    }),
    [actions, data, loading, error]
  )
}
