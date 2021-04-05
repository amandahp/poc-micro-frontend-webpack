import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import {Home, Login, Dashboard} from './pages/index'



const App = () => {


  return(
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          </Route>
          <Route exact path="/login">
            <Suspense fallback={<div>Loading...</div>}>
              <Login />
            </Suspense>
          </Route>
          <Route exact path="/dashboard">
            <Suspense fallback={<div>Loading...</div>}>
              <Dashboard />
            </Suspense>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

