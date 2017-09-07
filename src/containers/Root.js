import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import Posts from '../components/Posts';

import {getPosts, setPostsSortMethod} from '../actions/postActions';

class Root extends Component {
	componentDidMount() {
		this.props.getPosts();
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
  	getPosts: () => dispatch(getPosts()),
  	setPostsSortMethod: (sortMethod) => dispatch(setPostsSortMethod(sortMethod))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)