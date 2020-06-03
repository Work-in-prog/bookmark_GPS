import React, { Component } from 'react';
import Home from './Home.js';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
class App extends Component {
=======
export default class App extends Component {
>>>>>>> 2b003cb12fb3616c7941adf1f56394ee7b26b8c1
	constructor() {
		super();
		this.state = {
			name: 'Arthur'
		};
	}
	render() {
		return (
			<div className="Page-wrapper">
<<<<<<< HEAD
				<Link to="/home">Go Back</Link>
				<h2>ada app</h2>
=======
				<Link to="/home">Go to Other Page</Link>
				<h2>This is the home page</h2>
>>>>>>> 2b003cb12fb3616c7941adf1f56394ee7b26b8c1
				<Home />
			</div>
		);
	}
}
