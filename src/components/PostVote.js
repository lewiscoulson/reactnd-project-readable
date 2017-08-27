import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PostVote extends Component {
	componentDidMount() {
	}

	render() {
		let {handleVote, postID} = this.props;

		return (
			<div>
				<button onClick={() => handleVote(postID, 'upVote')}>upvote</button>
				<button onClick={() => handleVote(postID, 'downVote')}>downvote</button>
			</div>
		)
	}
}

export default PostVote;