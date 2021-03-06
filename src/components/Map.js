/* global google */
import React from 'react';
import {
	withGoogleMap,
	GoogleMap,
	withScriptjs,
	Marker,
	DirectionsRenderer,
	InfoWindow
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
			options={props.options}
		>
			{props.markers.map((marker, index) => {
				const position = { lat: marker.latitude, lng: marker.longitude };
				return (
					<Marker key={index} name={'current location'} position={position}>
						<InfoWindow onCloseClick={props.handleCloseCall}>
							<span>Current location</span>
						</InfoWindow>
					</Marker>
				);
			})}
		</GoogleMap>
	))
);

export default Map;
