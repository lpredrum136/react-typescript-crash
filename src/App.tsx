import React from 'react'
// import logo from './logo.svg';
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import UserList from './components/UserList'

import CounterContextProvider from './contexts/CounterContext'
import ThemeContextProvider from './contexts/ThemeContext'

const App = () => {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <CounterContextProvider>
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/users' component={UserList} />
            </Switch>
          </Router>
        </CounterContextProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App
