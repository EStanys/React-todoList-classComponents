import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import TodoPage from './components/todoPage/todoPage'
import NavBar from './components/navBar/navBar'
import ContactsPage from './components/pages/contacts'
import AboutPage from './components/pages/about'
import HomePage from './components/pages/home'

// app styles
import classes from './app.module.css';

class App extends Component{
  state ={}
  render() {
    return (
      <div className={classes.App}>
        <NavBar />
        <div className={classes.container}>
          <Switch>
            <Route path="/todos" component={TodoPage}></Route>
            <Route path="/about" component={AboutPage}></Route>
            <Route path="/contacts" component={ContactsPage}></Route>
            <Route path="/" component={HomePage}></Route>
          </Switch>

          {/* <Route path="/" exact component={HomePage}></Route> */}
        </div>
      </div>
    );
  }
}

export default App