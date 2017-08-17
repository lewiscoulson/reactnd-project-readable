import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import PostForm from '../components/PostForm';

class CreateEdit extends Component {
	componentDidMount() {
	}

	render() {
		return (
			<div>
				CreateEdit
				<PostForm
					title="first post" />
			</div>
		)
	}
}

export default CreateEdit;