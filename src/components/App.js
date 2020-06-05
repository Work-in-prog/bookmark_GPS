import React, { Component } from 'react';
import Home from './Home.js';
import Listing from './Listing';
import { Link, Switch, Route } from 'react-router-dom';
import { render } from 'react-dom';
import Map from '../components/Map.js';

import axios from 'axios';

const googleMapsApiKey = 'AIzaSyCskdHri23YrHhmv4dJ5zwKm6WpCXPY9BE';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Arthur',
			isLoggedIn: false,
			email: '',
			password: ''
		};
	}
	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	};
	logout() {
		this.setState({ isLoggedIn: false });
	}

	handleLogin = event => {
		event.preventDefault();
		//make .post dynamic for heroku//
		axios

			.post('http://localhost:8080/users/login', {
				email: this.state.email,
				password: this.state.password
			})
			.then(response => {
				localStorage.setItem('token', response.data.token);
				this.setState({
					isLoggedIn: true
				});
			})
			.catch(err => console.error(err));
	};
	render() {
		return (
			<div className="Page-wrapper">
				{/* <Link to="/home">Go to Other Page</Link> */}

				{this.state.isLoggedIn ? (
					<Main />
				) : (
					<div className="container">
						<form onSubmit={this.handleLogin}>
							<div className="form-group">
								<label>Email address</label>
								<input
									id="email"
									type="email"
									onChange={this.handleChange}
								></input>
							</div>
							<div className="form-group">
								<label>Password</label>
								<input
									id="password"
									type="password"
									onChange={this.handleChange}
								></input>
							</div>
							<input type="submit" value="login"></input>
						</form>
					</div>
				)}
			</div>
		);
	}
}

///-----------------------------Main Page -------------------------------/////////
class Main extends React.Component {
	render() { 
		return (
			<>
				<h1>Main Page</h1>
				<AppMap defaultZoom={4} />
				<button onClick={() => window.location.reload(false)}>Log out</button>
			</>
		);
	}
}

///----------------------------------------------------------------------/////////
class AppMap extends React.Component {
	state = {
		places: [
			{ latitude: 25.8103146, longitude: -80.1751609 },
			{ latitude: 22.8103146, longitude: -80.1751609 }
		]
	};
	componentDidMount() {
		this.getLocation();
	}

	getLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(this.getCoordinates);
		} else {
			alert('Geolocation not supported by this browser');
		}
	};
	getCoordinates = position => {
		console.log(position);
		this.setState({
			places: [
				{
					latitude: position.coords.latitude,
					longitude: position.coords.longitude
				}
			]
		});
	};
	render() {
		const {
			loadingElement,
			containerElement,
			mapElement,
			defaultCenter,
			defaultZoom
		} = this.props;

		return (
			<>
				<Map
					googleMapURL={
						'https://maps.googleapis.com/maps/api/js?key=' +
						googleMapsApiKey +
						'&libraries=geometry,drawing,places'
					}
					markers={this.state.places}
					loadingElement={
						loadingElement || (
							<div style={{ height: `500px`, width: `700px` }} />
						)
					}
					containerElement={
						containerElement || (
							<div style={{ height: `500px`, width: `700px` }} />
						)
					}
					mapElement={
						mapElement || <div style={{ height: `500px`, width: `700px` }} />
					}
					center={{
						lat: 0,
						lng: -180
					}}
					defaultCenter={defaultCenter || { lat: 37.0902405, lng: -95.7128906 }}
					defaultZoom={defaultZoom}
				/>
			</>
		);
	}
}
