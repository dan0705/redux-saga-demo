import React from 'react'
import styles from './App.module.css'

import Counter from './Counter/index.js'

import COUNT_ACTION from './action'

// App is a container for dispatching actions from Counter
function App({ store, data }) {
  return (
    <div className={styles.app}>
      <Counter
        data={data}
        onIncrementAsync={() =>
          store.dispatch({ type: COUNT_ACTION.INCREMENT_ASYNC })
        }
        onIncrement={() => store.dispatch({ type: COUNT_ACTION.INCREMENT })}
        onDecrement={() => store.dispatch({ type: COUNT_ACTION.DECREMENT })}
        onDecrementAsync={() =>
          store.dispatch({ type: COUNT_ACTION.DECREMENT_ASYNC })
        }
      />
    </div>
  )
}

export default App
