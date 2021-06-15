import React, { Component } from 'react'
import classes from './navBar.module.css'
import { Link } from 'react-router-dom'

class NavBar extends Component{
render(){
  return (
    <nav className={classes.navbar}>
      <Link className={classes['nav__logo']} to="/">
        ReactApp
      </Link>
      <div className={classes['nav__links']}>
        <Link className={classes['nav__link']} to="/">
          Home
        </Link>
        <Link className={classes['nav__link']} to="/todos">
          To-do
        </Link>
        <Link className={classes['nav__link']} to="/about">
          About
        </Link>
        <Link className={classes['nav__link']} to="/contacts">
          Contacts
        </Link>
      </div>
    </nav>
  );
}
}

export default NavBar