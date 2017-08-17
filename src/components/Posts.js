import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Posts extends Component {
	render() {
		let {posts} = this.props;
		return (
			<ul>
				{posts && posts.map((item) => {
					return (<div>{item.title}</div>)
				})}
			</ul>
		)
	}
}

export default Posts;