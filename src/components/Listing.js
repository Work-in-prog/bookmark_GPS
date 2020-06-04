import React from 'react';
import axios from 'axios';

const googleMapsApiKey = 'AIzaSyCskdHri23YrHhmv4dJ5zwKm6WpCXPY9BE';

//div for displaying an individual bookmark
class BookmarkCard extends React.Component {
	// state={
	//     lat:this.props.lat,
	//     lon:this.props.lon,
	//     address:this.props.address
	// }

	render() {
		const { lat, lon, address } = this.props;
		return (
			<div className="bookmark-box">
				<p>{address}</p>
				<p>
					Lat:{lat}, Lon:{lon}
				</p>
			</div>
		);
	}
}

export default class Listing extends React.Component {
	//Listing inherits scrollToBookmark function from the top-level
	//react class, with 'this' bound to that original class. it assigns
	//this function as the onClick event of individual bookmarks.
	//back in the top-level class, scrollToBookmark calls another function
	// sending data back to the map.

	constructor() {
		super();
		this.state = {
			bookmarksList: []
		};
	}

	componentDidMount() {
		//set pinList to the masterlist received from database
	}

	render() {
		return (
			//a box to contain all the bookmarks
			<div>
				<h1>This is a test card</h1>
				{/* a test bookmark */}
				<BookmarkCard
					lat={10}
					lon={20}
					address={'123 Main Street USA'}
					scrollToBookmark={this.state.scrollToBookmark}
				/>
				{/* a list of procedurally generated bookmarks */}
				{this.state.bookmarksList.map((bookmark, index) => {
					return (
						<BookmarkCard
							lat={bookmark.lat}
							lon={bookmark.lon}
							address={bookmark.addess}
							scrollToBookmark={this.state.scrollToBookmark}
						/>
					);
				})}
			</div>
		);
	}
}
