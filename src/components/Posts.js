import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Post from './Post';

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
		
		return (<div>
			<select value={sortMethod} onChange={(event) => {setPostsSortMethod(event.target.value)}}>
				<option value="voteScore">voteScore</option>
				<option value="timestamp">timestamp</option>
			</select>
			<ul>
				{sortedPosts && sortedPosts.filter(item => !item.deleted).map((item) => {
					return (<Post post={item} />)
				})}
			</ul>
		</div>)
	}
}

export default Posts;