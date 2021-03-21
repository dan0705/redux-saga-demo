import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import styles from './App.module.css'

import NotFound from './pages/NotFound'
import Count from './pages/Counter'
import Data from './pages/Data'

// App is a container for dispatching actions from Counter
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/data" component={Data} />
        <Route exact path="/count" component={Count} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
