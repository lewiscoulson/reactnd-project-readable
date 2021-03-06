import React, {Component} from 'react';

class PostForm extends Component {
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
		window.location = '/';
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h3>Create new post</h3>
				<div>
					<label htmlFor="title">title</label>
					<input type="text" name="title" id="title" required />
				</div>
				<div>
					<label htmlFor="body">body</label>
					<textarea name="body" id="body" required></textarea>
				</div>
				<div>
					<label htmlFor="category">category</label>
					<input type="text" name="category" id="category" required />
				</div>
				<div>
					<label htmlFor="author">author</label>
					<input type="text" name="author" id="author" required />
				</div>
				<button type="submit">add post</button>
			</form>
		)
	}
}

export default PostForm;