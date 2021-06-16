import React, { Component } from 'react';
import classes from './blogListEl.module.css';
import Button from '../appButton/appButton'


class BlogListEl extends Component {
  constructor() {
    super();
    this.blogUrl = 'http://localhost:3001/api/blog';
  }

  render() {
    const {title, author, postText, updatedAt, _id} = this.props.onePost
    const { imgLink } = this.props
    
    const postTextRef = postText
      .slice(0, 50)
      .split(' ')
      .slice(0, postText.length - 1)
      .join(' ') + '...'

    console.log('titleRef', postTextRef);
    
    return (
      <li className={classes['new-post__wrapper']}>
        <div className={classes['new-post__container']}>
          <img src={imgLink} alt="" />
          <h2>{title}</h2>
          <p>
            Author: <strong>{author}</strong>
          </p>
          <p>{postTextRef}</p>
          <Button>Read more</Button>
        </div>
      </li>
    );
  }
}

export default BlogListEl;

