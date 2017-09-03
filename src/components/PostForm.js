import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class PostForm extends Component {
	componentDidMount() {
	}

	handleSubmit = (event) => {
		event.preventDefault();

		let elems = event.currentTarget.elements;
		let options = {};

		for (let i = 0; i < elems.length; i++) {
			options[elems[i].name] = elems[i].value;
		}

		options.id = Math.floor(Math.random() * 1000000);
		options.timestamp = new Date().getTime();

		this.props.createPost(options);
	}

	render() {
		const {createPost} = this.props;

		return (
			<form onSubmit={this.handleSubmit}>
				<h3>Create new post</h3>
				<div>
					<label htmlFor="title">title</label>
					<input type="text" name="title" id="title" />
				</div>
				<div>
					<label htmlFor="body">body</label>
					<textarea name="body" id="body"></textarea>
				</div>
				<div>
					<label htmlFor="category">category</label>
					<input type="text" name="category" id="category" />
				</div>
				<div>
					<label htmlFor="author">author</label>
					<input type="text" name="author" id="author" />
				</div>
				<button type="submit">add post</button>
			</form>
		)
	}
}

export default PostForm;