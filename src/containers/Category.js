import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Posts from '../components/Posts';

import {getCategoryPosts, setPostsSortMethod} from '../actions/postActions';

class Category extends Component {
	componentDidMount() {
		let category = this.props.match.params.name;
		this.props.getCategoryPosts(category);
	}

	componentWillUpdate(nextProps) {
		if (nextProps.match.params.name !== this.props.match.params.name) {
			let category = nextProps.match.params.name;
			this.props.getCategoryPosts(category);
		}
	}

	render() {
		let {posts, sortMethod, setPostsSortMethod} = this.props;

		return (
			<div>
				<Posts
					sortMethod={sortMethod}
					setPostsSortMethod={setPostsSortMethod}
					posts={posts} />

				<Link className="btn btn-primary" to="/createEdit">Add new post</Link>
			</div>
		)
	}
}

function mapStateToProps ({posts}) {
  return {
  	posts: posts.posts,
  	sortMethod: posts.sortMethod
  }
}

function mapDispatchToProps (dispatch) {
  return {
  	getCategoryPosts: (category) => dispatch(getCategoryPosts(category)),
  	setPostsSortMethod: (sortMethod) => dispatch(setPostsSortMethod(sortMethod))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category)