import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {getPost} from '../actions/postActions';

class Post extends Component {
	componentDidMount() {
		let postID = this.props.match.params.id;
		this.props.getPost(postID);
	}

	render() {
		let {currentPost} = this.props;

		return (
			<div>
				{currentPost && <div>
					<h2>{currentPost.title}</h2>
					<p>{currentPost.body}</p>
				</div>}
				<Link to="/createEdit/1">Edit</Link>
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
)(Post)