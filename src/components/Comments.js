import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Comments extends Component {
	componentDidMount() {
	}

	render() {
		let {comments, sortMethod, setCommentsSortMethod} = this.props;
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
						</div>)
					})}
				</ul>
			</div>
		)
	}
}

export default Comments;