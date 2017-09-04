import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class EditPostForm extends Component {
	state = {
		title: '',
		body: '',
		category: '',
		author: ''
	}

	componentWillReceiveProps(props) {
		this.setState({
			title: props.post.title,
			body: props.post.body,
			category: props.post.category,
			author: props.post.author
		});
	}

	handleChangeTitle = (event) => {
		this.setState({
			title: event.target.value
		})
	}

	handleChangeBody = (event) => {
		this.setState({
			body: event.target.value
		})
	}

	handleChangeCategory = (event) => {
		this.setState({
			category: event.target.value
		})
	}

	handleChangeAuthor = (event) => {
		this.setState({
			author: event.target.value
		})
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
		const {post} = this.props;

		return (
			<form onSubmit={this.handleSubmit}>
				<h3>Edit post</h3>
				<div>
					<label htmlFor="title">title</label>
					<input type="text" name="title" id="title" value={this.state.title} onChange={this.handleChangeTitle} />
				</div>
				<div>
					<label htmlFor="body">body</label>
					<textarea name="body" id="body" value={this.state.body} onChange={this.handleChangeBody}></textarea>
				</div>
				<div>
					<label htmlFor="category">category</label>
					<input type="text" name="category" id="category" value={this.state.category} onChange={this.handleChangeCategory} />
				</div>
				<div>
					<label htmlFor="author">author</label>
					<input type="text" name="author" id="author" value={this.state.author} onChange={this.handleChangeAuthor} />
				</div>
				<button type="submit">add post</button>
			</form>
		)
	}
}

export default EditPostForm;