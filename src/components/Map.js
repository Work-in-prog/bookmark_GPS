/* global google */
import React from 'react';
import {
	withGoogleMap,
	GoogleMap,
	withScriptjs,
	Marker,
	DirectionsRenderer
} from 'react-google-maps';

class MapDirectionsRenderer extends React.Component {
	state = {
		directions: null,
		error: null,
		longitude: null,
		latitude: null,
		travelMode: 'DRIVING',
		origin: '',
		destination: ''
	};

	getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(this.getCoordinates);
		} else {
			alert('Geolocation not supported by this browser');
		}
	}
	getCoordinates(position) {
		console.log(position);
		this.setState({
			latitude: position.coords.latitude,
			longitude: position.coords.longitude
		});
	}

	render() {
		if (this.state.error) {
			console.log(this.state.error);
			return <h1>{this.state.error}</h1>;
		}
		return (
			this.state.directions && (
				<DirectionsRenderer directions={this.state.directions} />
			)
		);
	}
}

const Map = withScriptjs(
	withGoogleMap(props => (
		<GoogleMap
			defaultCenter={props.defaultCenter}
			defaultZoom={props.defaultZoom}
			onLoad={() => {
				console.log('Helooooo');
			}}
		>
			{props.markers.map((marker, index) => {
				const position = { lat: marker.latitude, lng: marker.longitude };
				return <Marker key={index} position={position} />;
			})}
			<MapDirectionsRenderer
				places={props.markers}
				travelMode={google.maps.TravelMode.DRIVING}
			/>
		</GoogleMap>
	))
);

export default Map;
