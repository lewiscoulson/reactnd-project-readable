import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Categories from '../components/Categories';
import Posts from '../components/Posts';

import {getCategories} from '../actions/categoryActions';
import {getPosts, getCategoryPosts, setPostsSortMethod} from '../actions/postActions';

class Category extends Component {
	componentDidMount() {
		let category = this.props.match.params.name;
		this.props.getCategoryPosts(category);
		this.props.getCategories();
	}

	componentWillUpdate(nextProps) {
		if (nextProps.match.params.name !== this.props.match.params.name) {
			let category = nextProps.match.params.name;
			this.props.getCategoryPosts(category);
			this.props.getCategories();
		}
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

				<Link to="/createEdit">Add new post</Link>
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
  	getCategoryPosts: (category) => dispatch(getCategoryPosts(category)),
  	setPostsSortMethod: (sortMethod) => dispatch(setPostsSortMethod(sortMethod))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category)