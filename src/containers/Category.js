import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Posts from '../components/Posts';

import {getCategoryPosts} from '../actions/postActions';

class Category extends Component {
	componentDidMount() {
		let category = this.props.match.params.name;
		this.props.getCategoryPosts(category);
	}

	render() {
		let {posts} = this.props;

		return (
			<div>
				<Posts
					posts={posts} />
			</div>
		)
	}
}

function mapStateToProps ({posts}) {
  return {
  	posts: posts.posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
  	getCategoryPosts: (category) => dispatch(getCategoryPosts(category))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category)