import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import Categories from '../components/Categories';
import Posts from '../components/Posts';

import {getCategories} from '../actions/categoryActions';
import {getPosts} from '../actions/postActions';

class Root extends Component {
	componentDidMount() {
		this.props.getCategories();
		this.props.getPosts();
	}

	render() {
		let {categories, posts} = this.props;
		
		return (
			<div>
				<Categories
					categories={categories} />

				<Posts
					posts={posts} />

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