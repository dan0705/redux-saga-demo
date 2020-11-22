import React from 'react'
import styles from './counter.module.css'

const Counter = ({
  data,
  onIncrement,
  onIncrementAsync,
  onDecrement,
  onDecrementAsync,
}) => {
  const loading = data.incrementLoading || data.decrementLoading
  return (
    <div>
      <div className={styles.increment}>
        <button onClick={onIncrement} disabled={loading}>
          Increment
        </button>
        <button onClick={onIncrementAsync} disabled={loading}>
          Increment after 2 seconds
        </button>
      </div>

      <div className={styles.decrement}>
        <button onClick={onDecrement} disabled={loading}>
          Decrement
        </button>
        <button onClick={onDecrementAsync} disabled={loading}>
          Decrement after 2 seconds
        </button>
      </div>
      <hr />
      <div className={styles.result}>
        <h1>Value: {data.value}</h1>
        {loading && <span className={styles.loading} />}
      </div>
    </div>
  )
}

export default Counter
