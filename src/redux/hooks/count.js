import { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  getCount,
  getDecrementLoading,
  getIncrementLoading,
} from '../selectors/count'
import countActions from '../actions/count'

export const useCount = () => {
  const value = useSelector(getCount)
  const incrementLoading = useSelector(getIncrementLoading)
  const decrementLoading = useSelector(getDecrementLoading)

  const dispatch = useDispatch()
  const actions = useMemo(() => bindActionCreators(countActions, dispatch), [
    dispatch,
  ])

  return useMemo(
    () => ({
      actions,
      value,
      incrementLoading,
      decrementLoading,
    }),
    [actions, value, incrementLoading, decrementLoading]
  )
}
