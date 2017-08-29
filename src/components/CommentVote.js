import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CommentVote extends Component {
	componentDidMount() {
	}

	render() {
		let {handleVote, commentID} = this.props;

		return (
			<div>
				<button onClick={() => handleVote(commentID, 'upVote')}>upvote</button>
				<button onClick={() => handleVote(commentID, 'downVote')}>downvote</button>
			</div>
		)
	}
}

export default CommentVote;