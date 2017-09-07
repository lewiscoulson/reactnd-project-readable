import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {getCategories} from '../actions/categoryActions';

class Categories extends Component {
	componentDidMount() {
	    this.props.getCategories();
	}

	render() {
		let {categories} = this.props;
		return (
			<nav>
				<ul className="nav">
					<li className="nav-item"><Link className="nav-link" to={'/'}>All</Link></li>
					{categories && categories.map((item, index) => {
						return (<li key={index} className="nav-item">
							<Link className="nav-link" to={`/category/${item.name}`}>{item.name}</Link>
						</li>)
					})}
				</ul>
			</nav>
		)
	}
}

function mapStateToProps ({categories}) {
  return {
  	categories: categories.categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
  	getCategories: () => dispatch(getCategories())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);