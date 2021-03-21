import React, { useMemo } from 'react'
import styles from './counter.module.css'

import { useCount } from 'redux/hooks/count'
import CircularLoading from 'components/CircularLoading'

const Counter = () => {
  const { actions, value, incrementLoading, decrementLoading } = useCount()

  const loading = useMemo(() => incrementLoading || decrementLoading, [
    incrementLoading,
    decrementLoading,
  ])

  return (
    <div>
      <div className={styles.increment}>
        <button onClick={actions.increment} disabled={loading}>
          Increment
        </button>
        <button onClick={actions.incrementAsync} disabled={loading}>
          Increment after 2 seconds
        </button>
      </div>

      <div className={styles.decrement}>
        <button onClick={actions.decrement} disabled={loading}>
          Decrement
        </button>
        <button onClick={actions.decrementAsync} disabled={loading}>
          Decrement after 2 seconds
        </button>
      </div>
      <hr />
      <div className={styles.result}>
        <h1>Value: {value}</h1>
        <CircularLoading loading={loading} />
      </div>
    </div>
  )
}

export default Counter
