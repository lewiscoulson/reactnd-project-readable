import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class PostForm extends Component {
	componentDidMount() {
	}

	render() {
		const {post} = this.props;

		return (
			<form>
				create edit
				<input type="text" value={post ? post.title : ''} />
				<textarea value={post ? post.body : ''}></textarea>
			</form>
		)
	}
}

export default PostForm;