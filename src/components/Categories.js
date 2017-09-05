import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Categories extends Component {
	render() {
		let {categories} = this.props;
		return (
			<div>
				<ul>
					<Link to={'/'}>All</Link>
					{categories && categories.map((item) => {
						return (<Link to={`/category/${item.name}`}>{item.name}</Link>)
					})}
				</ul>
			</div>
		)
	}
}

export default Categories;