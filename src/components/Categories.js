import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Categories extends Component {
	componentDidMount() {
	}

	render() {
		let {categories} = this.props;
		return (
			<div>

				<div>controls</div>
				<ul>
					{categories && categories.map((item) => {
						return (<Link to={`/category/${item.name}`}>{item.name}</Link>)
					})}
				</ul>
			</div>
		)
	}
}

export default Categories;