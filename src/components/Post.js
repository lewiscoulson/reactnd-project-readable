import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PostVote from '../components/PostVote';

import {deletePost, votePost} from '../actions/postActions';

class Post extends Component {
	render() {
		const {post, votePost, deletePost} = this.props;

		return (
			<div className="list-group-item">
				<Link className="h3" to={`/post/${post.id}`}>{post.title}</Link>
				<div>author: {post.author}</div>
				<div>votes: {post.voteScore}</div>
				<div className="btn-group">
					<Link className="btn btn-default" to={`/createEdit/${post.id}`}>Edit</Link>
					<button className="btn btn-default" onClick={() => deletePost(post.id)}>Delete</button>
				</div>
				<PostVote
					handleVote={votePost}
					postID={post.id} />
			</div>
		)
	}
}

function mapStateToProps () {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {
  	deletePost: (postID) => dispatch(deletePost(postID)),
  	votePost: (postID, option) => dispatch(votePost(postID, option))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)