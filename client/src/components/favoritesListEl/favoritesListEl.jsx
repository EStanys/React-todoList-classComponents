import React, { Component } from 'react'

class FavoritesListEl extends Component{

  render(){
    const {todo: {title, id},
        } = this.props;
    
    return (
      <li className={this.props.className}>
        {title}
        <i
          style={{ color: 'rgb(195, 14, 14)', cursor: 'pointer'}}
          className="fa fa-trash"
          onClick={() => {
          this.props.onHandleFavoriteDelete(id);
          }}
        ></i>
      </li>
    );
  }
}

export default FavoritesListEl;