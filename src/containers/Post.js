import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Comments from '../components/Comments';
import PostVote from '../components/PostVote';
import CommentForm from '../components/CommentForm';

import {getPost, deletePost, votePost} from '../actions/postActions';
import {getComments, setCommentsSortMethod, voteComment, addComment} from '../actions/commentActions';

class Post extends Component {
	componentDidMount() {
		let postID = this.props.match.params.id;		
		this.props.getPost(postID);
		this.props.getComments(postID);
	}

	render() {
		let {currentPost, currentComments, sortMethod, setCommentsSortMethod,
		deletePost, votePost, voteComment, addComment} = this.props;
		let formattedTime;

		if (currentPost) {
			formattedTime = new Date(currentPost.timestamp);
		}

		return (
			<div>
				{currentPost && <div>
					<h2>{currentPost.title}</h2>
					<span>by {currentPost.author}</span>
					<span>posted {formattedTime.toJSON()}</span><br />
					<span>{currentPost.voteScore}</span>
					<p>{currentPost.body}</p>
					<Link to={`/createEdit/${currentPost.id}`}>Edit</Link>
					<PostVote
						handleVote={votePost}
						postID={currentPost.id} />
					<button onClick={() => deletePost(currentPost.id)}>Delete</button>
				</div>}

				{currentComments && <Comments
					handleVote={voteComment}
					sortMethod={sortMethod}
					setCommentsSortMethod={setCommentsSortMethod}
					comments={currentComments} />}

				{currentPost && <CommentForm post={currentPost} addComment={addComment} />}
			</div>
		)
	}
}

function mapStateToProps ({posts, comments}) {
  return {
  	currentPost: posts.currentPost,
  	currentComments: comments.currentComments,
  	sortMethod: comments.sortMethod
  }
}

function mapDispatchToProps (dispatch) {
  return {
  	getPost: (postID) => dispatch(getPost(postID)),
  	deletePost: (postID) => dispatch(deletePost(postID)),
  	votePost: (postID, option) => dispatch(votePost(postID, option)),
  	addComment: (options) => dispatch(addComment(options)),
  	voteComment: (commentID, option) => dispatch(voteComment(commentID, option)),
  	getComments: (postID) => dispatch(getComments(postID)),
  	setCommentsSortMethod: (sortMethod) => dispatch(setCommentsSortMethod(sortMethod))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)