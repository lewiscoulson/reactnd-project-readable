import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import Categories from '../components/Categories';
import Posts from '../components/Posts';

import {getCategories} from '../actions/categoryActions';
import {getPosts} from '../actions/postActions';

class Root extends Component {
	render() {
		let {categories, getCategories, posts, getPosts} = this.props;
		return (
			<div>
				Root
				<button onClick={getCategories}>get categories</button>
				<Categories
					categories={categories} />

				<Posts
					posts={posts} />
					
				<button onClick={getPosts}>get posts</button>
				<Link to="/createEdit">Add new post</Link>
			</div>
		)
	}
}

function mapStateToProps ({categories, posts}) {
  return {
  	categories: categories.categories,
  	posts: posts.posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
  	getCategories: () => dispatch(getCategories()),
  	getPosts: () => dispatch(getPosts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)