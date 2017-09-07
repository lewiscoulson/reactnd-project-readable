import React, {Component} from 'react';

class PostVote extends Component {
	render() {
		let {handleVote, postID} = this.props;

		return (
			<div className="btn-group">
				<button className="btn btn-default" onClick={() => handleVote(postID, 'upVote')}>upvote</button>
				<button className="btn btn-default" onClick={() => handleVote(postID, 'downVote')}>downvote</button>
			</div>
		)
	}
}

export default PostVote;