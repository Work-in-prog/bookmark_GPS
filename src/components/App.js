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

	showLoginBox() {
		this.setState({ isLoggedIn: true, isRegistered: false });
	}

	showRegisterBox() {
		this.setState({ isRegistered: true, isLoggedIn: false });
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
	submitLogin = e => {};

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
		this.state = {
			username: '',
			email: '',
			password: '',
			errors: [],
			pwdState: null
		};
	}

	showValidationErr = (elm, msg) => {
		this.setState(prevState => ({
			errors: [
				...prevState.errors,
				{
					elm,
					msg
				}
			]
		}));
	};

	clearError = elm => {
		this.setState(prevState => {
			let newArr = [];
			for (let err of prevState.errors) {
				if (elm != err.elm) {
					newArr.push(err);
				}
			}
			return { errors: newArr };
		});
	};

	onUsernameChange(e) {
		this.setState({ username: e.target.value });
		this.clearError('username');
	}

	onEmailChange(e) {
		this.setState({ email: e.target.value });
		this.clearError('email');
	}

	onPasswordChange(e) {
		this.setState({ password: e.target.value });
		this.clearError('password');

		this.setState({ pwdState: 'weak' });
		if (e.target.value.length > 8) {
			this.setState({ pwdState: 'medium' });
		} else if (e.target.value.length > 12) {
			this.setState({ pwdState: 'strong' });
		}
	}

	submitRegister = e => {
		if (this.state.username == '') {
			this.showValidationErr('username', 'Username cannot be empty');
		}
		if (this.state.email == '') {
			this.showValidationErr('email', 'Email cannot be empty');
		}
		if (this.state.password == '') {
			this.showValidationErr('password', 'Password cannot be empty');
		}
	};

	render() {
		let usernameErr = null,
			passwordErr = null,
			emailErr = null;

		for (let err of this.state.errors) {
			if (err.elm == 'username') {
				usernameErr = err.msg;
			}
			if (err.elm == 'password') {
				passwordErr = err.msg;
			}
			if (err.elm == 'email') {
				emailErr = err.msg;
			}
		}

		let pwdWeak = false,
			pwdMedium = false,
			pwdStrong = false;

		if (this.state.pwdState == 'weak') {
			pwdWeak = true;
		} else if (this.state.pwdState == 'medium') {
			pwdWeak = true;
			pwdMedium = true;
		} else if (this.state.pwdState == 'strong') {
			pwdWeak = true;
			pwdMedium = true;
			pwdStrong = true;
		}
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
							onChange={this.onUsernameChange.bind(this)}
						/>
						<small className="danger-error">
							{usernameErr ? usernameErr : ''}
						</small>
					</div>

					<div className="input-group">
						<label htmlFor="email">Email</label>
						<input
							type="text"
							name="email"
							className="login-input"
							placeholder="Email"
							onChange={this.onEmailChange.bind(this)}
						/>
						<small className="danger-error">{emailErr ? emailErr : ''}</small>
					</div>

					<div className="input-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							className="login-input"
							placeholder="Password"
							onChange={this.onPasswordChange.bind(this)}
						/>
						<small className="danger-error">
							{passwordErr ? passwordErr : ''}
						</small>

						{this.state.password && (
							<div className="password-state">
								<div className={'pwd pwd-weak' + (pwdWeak ? 'show' : '')}></div>
								<div
									className={'pwd pwd-medium' + (pwdMedium ? 'show' : '')}
								></div>
								<div
									className={'pwd pwd-strong' + (pwdStrong ? 'show' : '')}
								></div>
							</div>
						)}
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
