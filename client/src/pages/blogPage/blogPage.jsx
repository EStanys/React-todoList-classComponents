import React, { Component } from 'react';
import classes from './blogPage.module.css';
import BlogList from '../../components/blogList/blogList';

export default class BlogPage extends Component {
  render() {
    return (
      <section className={classes['blog-wrapper']}>
        <h2 className={classes['blog__header']}>Add new Blog post</h2>
        <div className={classes['blog-container']}>
          <BlogList />
        </div>
      </section>
    );
  }
}
