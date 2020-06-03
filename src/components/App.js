import React, { Component } from 'react';
import Home from './Home.js';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';
import Map from '../components/Map.js';
const googleMapsApiKey = 'AIzaSyCskdHri23YrHhmv4dJ5zwKm6WpCXPY9BE';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Arthur'
		};
	}
	render() {
		return (
			<>
				<div className="Page-wrapper">
					<Link to="/home">Go to Other Page</Link>
					<h2>This is the home page</h2>
					<Home />
					<AppMap defaultZoom={7} />
				</div>
				<div className="Page-wrapper">
					<AppMap defaultZoom={7} />
				</div>
			</>
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
				loadingElement={loadingElement || <div style={{ height: `100%` }} />}
				containerElement={
					containerElement || <div style={{ height: `100vh` }} />
				}
				mapElement={mapElement || <div style={{ height: `100%` }} />}
				defaultCenter={defaultCenter || { lat: 25.798939, lng: -80.291409 }}
				defaultZoom={defaultZoom || 11}
			/>
		);
	}
}

render(<AppMap defaultZoom={7} />, document.getElementById('root'));
