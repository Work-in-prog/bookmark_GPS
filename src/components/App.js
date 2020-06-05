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
			password: '',
			currentPin: {
				lat: 0,
				lon: 0,
				address: ''
			}
		};
		this.scrollToBookmark = this.scrollToBookmark.bind(this);
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

	scrollToBookmark(lat, lon, address) {
		//get info from a bookmark and send it to the map
		console.log('scrollToBookmark() was called', lat, lon, address);
		// this.setState({
		// 	currentPin: {
		// 		lat: lat,
		// 		lon: lon,
		// 		address: address
		// 	}
		// });

		// const myLatlng = new google.maps.LatLng(lat, lon);
		// const mapOptions = {
		// 	zoom: 4,
		// 	center: myLatlng
		// };
		// const map = new google.maps.Map(
		// 	document.getElementById('mainmap'),
		// 	mapOptions
		// );

		// var marker = new google.maps.Marker({
		// 	position: myLatlng,
		// 	title: 'Hello World!'
		// });

		// marker.setMap(map);
	}

	render() {
		return (
			<div className="Page-wrapper">
				<Link to="/home">Go to Other Page</Link>
				<Link to="/listing">See All Bookmarks</Link>

				<h2>This is the home page.</h2>
				<form onSubmit={this.handleLogin}>
					<input id="email" type="email" onChange={this.handleChange}></input>
					<input
						id="password"
						type="password"
						onChange={this.handleChange}
					></input>
					<input type="submit" value="login"></input>
				</form>
				{this.state.isLoggedIn ? (
					<h1>We are logged in</h1>
				) : (
					<h1>Sorry you are not logged in</h1>
				)}
				<Home />
				<h2>This is the home page</h2>
				<AppMap
					id="mainmap"
					defaultZoom={7}
					defaultCenter={{
						lat: this.state.currentPin.lat,
						lng: this.state.currentPin.lon
					}}
				/>
				<hr />
				<h1>{this.state.currentPin.address}</h1>
				<hr />
				<Listing scrollToBookmark={this.scrollToBookmark} />
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
