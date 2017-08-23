import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PostForm from '../components/PostForm';
import {getPost} from '../actions/postActions';

class CreateEdit extends Component {
	componentDidMount() {
	}

	render() {
		let {currentPost} = this.props;
		const isEditMode = this.props.match.params.id;

		return (
			<div>
				CreateEdit
				<PostForm post={isEditMode ? currentPost : null} />
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
  	getPost: (postID) => dispatch(getPost(postID))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEdit)