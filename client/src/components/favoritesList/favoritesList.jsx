import React, { Component, Fragment } from 'react'
import classes from './favoritesList.module.css'
import AppButton from '../appButton/appButton'
import FavoritesListEl from '../favoritesListEl/favoritesListEl'

class FavoritesList extends Component {
  render() {
    return (
      <Fragment>
        <div onClick={this.props.onFavoritesVisibilityHandler} className={classes['favorites-backdrop']}></div>
        <ul className={classes['favorites-container']}>
          <div>
            <h2>Favorites</h2>
            {this.props.favorites.map((todo) => (
              <FavoritesListEl
                todo={todo}
                key={todo.id}
                className={classes['favorites__list-item']}
                onHandleFavoriteDelete={this.props.onHandleFavoriteDelete}
              />
            ))}
          </div>
          <AppButton callback={this.props.onFavoritesVisibilityHandler} classs={classes['favorites-btn']}>
            Close
          </AppButton>
        </ul>
      </Fragment>
    );
    
  }
}

export default FavoritesList;