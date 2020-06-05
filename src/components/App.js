import React, { Component } from 'react';
import Home from './Home.js';
import { Link, Switch, Route } from 'react-router-dom';
import { render } from 'react-dom';
import Map from '../components/Map.js';
import axios from 'axios';


const googleMapsApiKey = 'AIzaSyCskdHri23YrHhmv4dJ5zwKm6WpCXPY9BE';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'test',
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
				<Link to="/home">Go to Other Page</Link>
				<h2>This is the home page</h2>
				<form onSubmit={this.handleLogin}>
					<input id="email" type="email" onChange={this.handleChange}></input>
					<input
						id="password"
						type="password"
						onChange={this.handleChange}
					></input>
					<input type="submit" value="login"></input>
				</form>
				<Log />
				{this.state.isLoggedIn ? (
					<h1>We are logged in</h1>
				) : (
					<h1>Sorry you are not logged in</h1>
				)}
				<Home />
				<h2>This is the home page</h2>
				<AppMap defaultZoom={7} />
			</div>
		);
	}
}

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
			<Map
				googleMapURL={
					'https://maps.googleapis.com/maps/api/js?key=' +
					googleMapsApiKey +
					'&libraries=geometry,drawing,places'
				}
				markers={this.state.places}
				loadingElement={
					loadingElement || <div style={{ height: `500px`, width: `500px` }} />
				}
				containerElement={
					containerElement || (
						<div style={{ height: `500px`, width: `500px` }} />
					)
				}
				mapElement={
					mapElement || <div style={{ height: `500px`, width: `500px` }} />
				}
				defaultCenter={defaultCenter || { lat: 25.798939, lng: -80.291409 }}
				defaultZoom={defaultZoom || 11}
			/>
		);
	}
}

class Log extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: true,
			isRegistered: false
		};
	}
	showRegisterBox() {
		this.setState({ isRegistered: true, isLoggedIn: false });
	}

	showLoginBox() {
		this.setState({ isLoggedIn: true, isRegistered: false });
	}
	render() {
		return (
			<div className="root-container">
				<div className="box-controller">
					<div
						className={
							'controller' +
							(this.state.isLoggedIn ? 'selected-controller' : '')
						}
						onClick={this.showLoginBox.bind(this)}
					>
						Login
					</div>
					<div
						className={
							'controller' +
							(this.state.isRegistered ? 'selected-controller' : '')
						}
						onClick={this.showRegisterBox.bind(this)}
					>
						Register
					</div>
				</div>

				<div className="box-container">
					{this.state.isLoggedIn && <LoginBox />}
					{this.state.isRegistered && <RegisterBox />}
				</div>
			</div>
		);
	}
}

class LoginBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	submitLogin = e => {
		this;
	};

	render() {
		return (
			<div className="inner-container">
				<div className="header">Login</div>
				<div className="box">
					<div className="input-group">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							name="username"
							className="login-input"
							placeholder="Username"
						/>
					</div>

					<div className="input-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							className="login-input"
							placeholder="Password"
						/>
					</div>

					<button
						type="button"
						className="login-btn"
						onClick={this.submitLogin.bind(this)}
					>
						Login
					</button>
				</div>
			</div>
		);
	}
}

class RegisterBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	submitRegister = e => {
		this;
	};

	render() {
		return (
			<div className="inner-container">
				<div className="header">Register</div>
				<div className="box">
					<div className="input-group">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							name="username"
							className="login-input"
							placeholder="Username"
						/>
					</div>

					<div className="input-group">
						<label htmlFor="email">Email</label>
						<input
							type="text"
							name="email"
							className="login-input"
							placeholder="Email"
						/>
					</div>

					<div className="input-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							className="login-input"
							placeholder="Password"
						/>
					</div>

					<button
						type="button"
						className="login-btn"
						onClick={this.submitRegister.bind(this)}
					>
						Register
					</button>
				</div>
			</div>
		);
	}
}
