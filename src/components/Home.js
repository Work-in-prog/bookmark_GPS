import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Listing from './Listing';
import Map from '../components/Map.js';

export default class Home extends Component {
	render() {
		return (
			<div>
				<h1>
					New Page
					<Link to="/">Go Back</Link>
				</h1>
			</div>
		);
	}
}
