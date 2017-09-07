import React, {Component} from 'react';

class CommentVote extends Component {
	render() {
		let {handleVote, commentID, postID} = this.props;

		return (
			<div className="btn-group">
				<button className="btn btn-default" onClick={() => handleVote(commentID, 'upVote', postID)}>upvote</button>
				<button className="btn btn-default" onClick={() => handleVote(commentID, 'downVote', postID)}>downvote</button>
			</div>
		)
	}
}

export default CommentVote;