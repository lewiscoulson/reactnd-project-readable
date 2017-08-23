import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Posts extends Component {
	render() {
		let {posts, sortMethod, setPostsSortMethod} = this.props;
		let sortedPosts; 

		if (posts) {
			sortedPosts = posts.sort((a,b) => {
				if (a[sortMethod] > b[sortMethod]) {
					return -1;
				}

				if (a[sortMethod] < b[sortMethod]) {
					return 1;
				}

				return 0;
			});
		}
		
		// TODO - sort posts by voteScore
		return (<div>
			<select value={sortMethod} onChange={(event) => {setPostsSortMethod(event.target.value)}}>
				<option value="voteScore">voteScore</option>
				<option value="timestamp">timestamp</option>
			</select>
			<ul>
				{sortedPosts && sortedPosts.map((item) => {
					return (<div>
						<div>published: {item.timestamp}</div>
						<div>votes: {item.voteScore}</div>
						<Link to={`/post/${item.id}`}>{item.title}</Link>
					</div>)
				})}
			</ul>
		</div>)
	}
}

export default Posts;