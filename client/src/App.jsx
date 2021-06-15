import React, { Component } from 'react'
import TodoPage from './components/todoPage/todoPage'
import NavBar from './components/navBar/navBar'
// app styles
import classes from './app.module.css';

class App extends Component{
  state ={}
  render() {
    return (<div className={classes.App}>
      <NavBar/>
      <TodoPage/>
    </div>)
  }
}

export default App