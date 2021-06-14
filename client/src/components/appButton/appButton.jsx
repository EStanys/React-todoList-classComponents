import React, { Component } from 'react'
import classes from './appButton.module.css';

class AppButton extends Component {
  allClasses = classes.btn + ' ' + this.props.classs;
  render() {
    return (
      <button
        className={this.allClasses}
        style={{ background: this.props.background, color: this.props.color }}
        onClick={this.props.callback}
      >
        {this.props.children}
      </button>
    );
  }
}

export default AppButton