import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import CommentVote from './CommentVote';
import EditCommentForm from './EditCommentForm';

class Comments extends Component {
	state = {
		author: '',
		body: ''
	}

	render() {
		let {comments, handleEdit, handleDelete, sortMethod, setCommentsSortMethod, handleVote, handleUpdate,
		currentComment, isEditing, postID} = this.props;
		let sortedComments;

		if (comments) {
			sortedComments = comments.sort((a,b) => {
				if (a[sortMethod] > b[sortMethod]) {
					return -1;
				}

				if (a[sortMethod] < b[sortMethod]) {
					return 1;
				}

				return 0;
			});
		}

		return (
			<div>

				<div>comments</div>
				<select value={sortMethod} onChange={(event) => {setCommentsSortMethod(event.target.value)}}>
					<option value="voteScore">voteScore</option>
					<option value="timestamp">timestamp</option>
				</select>
				<ul>
					{comments && comments.map((item) => {
						return (<div>
							{item.body} by {item.author}
							votes: {item.voteScore}
							time: {item.timestamp}
							<CommentVote commentID={item.id} postID={postID} handleVote={handleVote} />
							<button onClick={() => handleEdit(item, postID)}>edit</button>
							<button onClick={() => handleDelete(item.id, postID)}>delete</button>

							{(currentComment && isEditing) && item.id === currentComment.id && <EditCommentForm
								handleUpdate={handleUpdate}
								comment={item}
								postID={postID} />}
						</div>)
					})}
				</ul>
			</div>
		)
	}
}

export default Comments;