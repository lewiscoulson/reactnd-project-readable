import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Post extends Component {
	componentDidMount() {
	}

	render() {
		return (
			<div>
				Post

				<Link to="/createEdit/1">Edit</Link>
			</div>
		)
	}
}

export default Post;