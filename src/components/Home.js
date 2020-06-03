import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export default class Home extends Component {
	render() {
		return (
			<h1>
				New Page
				<Link to="/">Go Back</Link>
			</h1>
		);
	}
}

