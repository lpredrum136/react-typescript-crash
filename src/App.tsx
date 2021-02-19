import React from 'react'
// import logo from './logo.svg';
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import UserList from './components/component-useState/UserList'
import Counter from './components/component-useContext/Counter'
import Theme from './components/useStateAndContext/Theme'
import Todos from './components/useStateAndContext/Todos'
import Posts from './components/useStateAndContext/Posts'

import CounterContextProvider from './contexts/CounterContext'
import ThemeContextProvider from './contexts/ThemeContext'
import TodoContextProvider from './contexts/TodoContext'
import AuthContextProvider from './contexts/AuthContext'
import PostContextProvider from './contexts/PostContext'

const App = () => {
  return (
    <div className='App'>
      <PostContextProvider>
        <AuthContextProvider>
          <TodoContextProvider>
            <ThemeContextProvider>
              <CounterContextProvider>
                <Router>
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/users' component={UserList} />
                    <Route exact path='/counter' component={Counter} />
                    <Route exact path='/theme' component={Theme} />
                    <Route exact path='/todos' component={Todos} />
                    <Route exact path='/posts' component={Posts} />
                  </Switch>
                </Router>
              </CounterContextProvider>
            </ThemeContextProvider>
          </TodoContextProvider>
        </AuthContextProvider>
      </PostContextProvider>
    </div>
  )
}

export default App
