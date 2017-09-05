import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Comments from '../components/Comments';
import PostVote from '../components/PostVote';
import CommentForm from '../components/CommentForm';

import {getPost, deletePost, votePost} from '../actions/postActions';
import {getComments, setCommentsSortMethod, voteComment, addComment, editComment, deleteComment, updateComment} from '../actions/commentActions';

class Post extends Component {
	state = {
		author: '',
		body: '',
		isEditingAuthor: false,
		isEditingBody: false
	}

	componentDidMount() {
		let postID = this.props.match.params.id;		
		this.props.getPost(postID);
		this.props.getComments(postID);
	}

	handleChangeAuthor = (event) => {
		this.setState({
			author: event.target.value,
			isEditingAuthor: true
		})
	}

	handleChangeBody = (event) => {
		this.setState({
			body: event.target.value,
			isEditingBody: true
		})
	}

	render() {
		let {currentPost, currentComment, currentComments, sortMethod, setCommentsSortMethod,
		deletePost, votePost, voteComment, addComment, editComment, deleteComment, updateComment, isEditing} = this.props;
		let formattedTime;

		if (currentPost) {
			formattedTime = new Date(currentPost.timestamp);
		}

		return (
			<div>
				<h1>Readable</h1>

				{currentPost && currentPost.deleted && <p>This post has been deleted.</p>}

				{currentPost && <div>
					<h2>{currentPost.title}</h2>
					<div>author: {currentPost.author}</div>
					<div>comments: {currentPost.comments}</div>
					<div>votes: {currentPost.voteScore}</div>
					<p>{currentPost.body}</p>
					<div className="btn-group">
						<Link className="btn btn-default" to={`/createEdit/${currentPost.id}`}>Edit</Link>
						<button className="btn btn-default" onClick={() => deletePost(currentPost.id)}>Delete</button>
					</div>
					<PostVote
						handleVote={votePost}
						postID={currentPost.id} />
				</div>}

				{currentPost && currentComments && <Comments
					postID={currentPost.id}
					handleVote={voteComment}
					handleEdit={editComment}
					handleDelete={deleteComment}
					handleUpdate={updateComment}
					sortMethod={sortMethod}
					setCommentsSortMethod={setCommentsSortMethod}
					currentComment={currentComment}
					isEditing={isEditing}
					comments={currentComments} />}

				{currentPost && <CommentForm
					post={currentPost}
					addComment={addComment} />}
			</div>
		)
	}
}

function mapStateToProps ({posts, comments}) {
  return {
  	currentPost: posts.currentPost,
  	currentComments: comments.currentComments,
  	currentComment: comments.currentComment,
  	isEditing: comments.isEditing,
  	sortMethod: comments.sortMethod
  }
}

function mapDispatchToProps (dispatch) {
  return {
  	getPost: (postID) => dispatch(getPost(postID)),
  	deletePost: (postID) => dispatch(deletePost(postID)),
  	votePost: (postID, option) => dispatch(votePost(postID, option)),
  	addComment: (options, postID) => dispatch(addComment(options, postID)),
  	voteComment: (commentID, option, postID) => dispatch(voteComment(commentID, option, postID)),
  	editComment: (comment, postID) => dispatch(editComment(comment, postID)),
  	deleteComment: (commentID, postID) => dispatch(deleteComment(commentID, postID)),
  	updateComment: (commentID, options, postID) => dispatch(updateComment(commentID, options, postID)),
  	getComments: (postID) => dispatch(getComments(postID)),
  	setCommentsSortMethod: (sortMethod) => dispatch(setCommentsSortMethod(sortMethod))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)