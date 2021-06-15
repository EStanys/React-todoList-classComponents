import React, { Component } from 'react'
import classes from './navBar.module.css'

class NavBar extends Component{
render(){
  return (
    <nav className={classes.navbar}>
      <a className={classes['nav__logo']} href="/">
        ReactApp
      </a>
      <div className={classes['nav__links']}>
        <a className={classes['nav__link']} href="/">
          Home
        </a>
        <a className={classes['nav__link']} href="/todos">
          To-do
        </a>
        <a className={classes['nav__link']} href="/about">
          About
        </a>
        <a className={classes['nav__link']} href="/contacts">
          Contacts
        </a>
      </div>
    </nav>
  );
}
}

export default NavBar