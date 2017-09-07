import React, {Component} from 'react';
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
			<select className="form-control" value={sortMethod} onChange={(event) => {setPostsSortMethod(event.target.value)}}>
				<option value="voteScore">voteScore</option>
				<option value="timestamp">timestamp</option>
			</select>
			<ul className="list-group">
				{sortedPosts && sortedPosts.filter(item => !item.deleted).map((item, index) => {
					return (<Post key={index} post={item} />)
				})}
			</ul>
		</div>)
	}
}

export default Posts;