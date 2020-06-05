import React from 'react';
//import '../../public/css/Listing.css';

const googleMapsApiKey = 'AIzaSyCskdHri23YrHhmv4dJ5zwKm6WpCXPY9BE';

//div for displaying an individual bookmark
class BookmarkCard extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	STB() {
		this.props.scrollToBookmark(lat, lon, address);
		console.log('STB() was called');
	}

	render() {
		const { lat, lon, address, scrollToBookmark } = this.props;
		return (
			<div
				className="bookmark-box"
				onClick={() => {
					scrollToBookmark(lat, lon, address);
				}}
			>
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
		console.log('Listing mounted', this.props);
	}

	render() {
		const { scrollToBookmark } = this.props;
		return (
			//a box to contain all the bookmarks
			<div>
				<h1>This is a test card</h1>
				{/* a test bookmark */}
				<BookmarkCard
					lat={80}
					lon={-20}
					address={'123 Main Street USA'}
					scrollToBookmark={scrollToBookmark}
				/>
				<BookmarkCard
					lat={-80}
					lon={20}
					address={'456 Who Knows Where'}
					scrollToBookmark={scrollToBookmark}
				/>
				{/* a list of procedurally generated bookmarks */}
				{this.state.bookmarksList.map((bookmark, index) => {
					return (
						<BookmarkCard
							lat={bookmark.lat}
							lon={bookmark.lon}
							address={bookmark.addess}
							scrollToBookmark={scrollToBookmark}
						/>
					);
				})}
			</div>
		);
	}
}
