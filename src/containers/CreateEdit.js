import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PostForm from '../components/PostForm';
import EditPostForm from '../components/EditPostForm';
import {getPost, createPost, editPost} from '../actions/postActions';

class CreateEdit extends Component {
	componentDidMount() {
		if (this.props.match.params.id) {
			this.props.getPost(this.props.match.params.id);
		}
	}

	render() {
		let {currentPost, createPost, editPost} = this.props;
		const isEditMode = this.props.match.params.id;

		return (
			<div>
				{!isEditMode && <PostForm createPost={createPost} />}
				{isEditMode && <EditPostForm post={currentPost} editPost={editPost} />}
			</div>
		)
	}
}

function mapStateToProps ({posts}) {
  return {
  	currentPost: posts.currentPost
  }
}

function mapDispatchToProps (dispatch) {
  return {
  	getPost: (postID) => dispatch(getPost(postID)),
  	createPost: (options) => dispatch(createPost(options)),
  	editPost: (postID, options) => dispatch(editPost(postID, options))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEdit)