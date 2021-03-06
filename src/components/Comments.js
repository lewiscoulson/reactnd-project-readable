import React, {Component} from 'react';

import CommentVote from './CommentVote';
import EditCommentForm from './EditCommentForm';

class Comments extends Component {
	state = {
		author: '',
		body: ''
	}

	render() {
		let {comments, handleEdit, handleDelete, sortMethod, setCommentsSortMethod, handleVote, 
		handleUpdate, currentComment, isEditing, postID} = this.props;
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
				<h3>Comments</h3>
				<select className="form-control" value={sortMethod} onChange={(event) => {setCommentsSortMethod(event.target.value)}}>
					<option value="voteScore">voteScore</option>
					<option value="timestamp">timestamp</option>
				</select>
				<ul>
					{sortedComments && sortedComments.map((item, index) => {
						return (<div key={index}>
							{item.body} by {item.author}
							votes: {item.voteScore}
							time: {item.timestamp}
							<CommentVote commentID={item.id} postID={postID} handleVote={handleVote} />
							<div className="btn-group">
								<button className="btn btn-default" onClick={() => handleEdit(item, postID)}>edit</button>
								<button className="btn btn-default" onClick={() => handleDelete(item.id, postID)}>delete</button>
							</div>
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