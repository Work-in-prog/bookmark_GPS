import React, { Component } from 'react';
import Home from './Home.js';
import { Link } from 'react-router-dom';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Arthur'
		};
	}
	render() {
		return (
			<div className="Page-wrapper">
				<Link to="/home">Go to Other Page</Link>
				<h2>This is the home page</h2>
				<Home />
			</div>
		);
	}
}
