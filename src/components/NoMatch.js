import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class NoMatch extends Component {
	render() {
		return (
			<div>
				<p>Sorry this page was not found</p>
				Click <Link to='/'>here</Link> to go back to homepage
			</div>
		)
	}
}

export default NoMatch;