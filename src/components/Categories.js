import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Categories extends Component {
	render() {
		let {categories} = this.props;
		return (
			<nav>
				<ul className="nav">
					<li className="nav-item"><Link className="nav-link" to={'/'}>All</Link></li>
					{categories && categories.map((item) => {
						return (<li className="nav-item">
							<Link className="nav-link" to={`/category/${item.name}`}>{item.name}</Link>
						</li>)
					})}
				</ul>
			</nav>
		)
	}
}

export default Categories;