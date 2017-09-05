import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import Categories from '../components/Categories';
import Posts from '../components/Posts';

import {getCategories} from '../actions/categoryActions';
import {getPosts, setPostsSortMethod} from '../actions/postActions';

class Root extends Component {
	componentDidMount() {
		this.props.getCategories();
		this.props.getPosts();
	}

	render() {
		let {categories, posts, sortMethod, setPostsSortMethod} = this.props;

		return (
			<div>
				<Categories
					categories={categories} />

				<Posts
					sortMethod={sortMethod}
					setPostsSortMethod={setPostsSortMethod}
					posts={posts} />

				<Link className="btn btn-primary" to="/createEdit">Add new post</Link>
			</div>
		)
	}
}

function mapStateToProps ({categories, posts}) {
  return {
  	categories: categories.categories,
  	posts: posts.posts,
  	sortMethod: posts.sortMethod
  }
}

function mapDispatchToProps (dispatch) {
  return {
  	getCategories: () => dispatch(getCategories()),
  	getPosts: () => dispatch(getPosts()),
  	setPostsSortMethod: (sortMethod) => dispatch(setPostsSortMethod(sortMethod))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)