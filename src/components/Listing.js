import React from 'react';
//import '../../public/css/Listing.css';

const googleMapsApiKey = 'AIzaSyCskdHri23YrHhmv4dJ5zwKm6WpCXPY9BE';

//div for displaying an individual bookmark
class BookmarkCard extends React.Component {
	constructor() {
		super();
		this.state = {
			address: '',
			lat: 0,
			lon: 0,
			bookmarks: []
		};
	}

	STB() {
		this.props.scrollToBookmark(lat, lon, address);
		console.log('STB() was called');
	}

	render() {
		const {
			lat,
			lon,
			address,
			complete,
			scrollToBookmark,
			updateBookmark,
			deleteBookmark,
			id,
			index,
			bookmark
		} = this.props;
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
				<p>
					{() => {
						if (complete) {
							return 'Visited';
						} else {
							return 'Not Yet Visited';
						}
					}}
				</p>
				<button onClick={updateBookmark(bookmark)}>Update</button>
				<button
					onClick={() => {
						deleteBookmark(id, index);
					}}
				>
					Delete
				</button>
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
			bookmarks: [],
			address: '',
			lat: 0,
			lon: 0
		};
		this.deleteBookmark = this.deleteBookmark.bind(this);
	}

	componentDidMount() {
		this.getData();
	}

	getData = () => {
		fetch('/bookmarks')
			.then(response => response.json())
			.then(data => {
				this.setState({ bookmarks: data });
			});
	};

	handleChange = event => {
		this.setState({ [event.target.id]: event.target.value });
	};

	handleSubmit = event => {
		event.preventDefault();
		console.log('Listing Component handleSubmit Accessed');
		fetch('/bookmarks', {
			body: JSON.stringify({
				address: this.state.address,
				lat: this.state.lat,
				lon: this.state.lon,
				complete: false
			}),
			method: 'POST',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			}
		})
			.then(response => response.json())
			.then(newBookmark => {
				this.setState({
					bookmarks: [newBookmark, ...this.state.bookmarks],
					address: '',
					lat: 0,
					lon: 0
				});
				console.log(this.state);
			});
	};

	deleteBookmark = (id, index) => {
		fetch(`/bookmarks/${id}`, {
			method: 'DELETE'
		}).then(response => {
			this.setState({
				bookmarks: [
					...this.state.bookmarks.slice(0, index),
					...this.state.bookmarks.slice(index + 1)
				]
			});
		});
	};

	updateBookmark = bookmark => {
		bookmark.complete = !bookmark.complete;
		fetch(`/bookmarks/${bookmark._id}`, {
			body: JSON.stringify(bookmark),
			method: 'PUT',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			}
		})
			.then(response => response.json())
			.then(data => {
				this.getData();
			});
	};

	componentDidMount() {
		//set pinList to the masterlist received from database
		console.log('Listing mounted', this.props);
	}

	render() {
		const { scrollToBookmark } = this.props;
		const deleteBookmark = this.deleteBookmark;
		const updateBookmark = this.updateBookmark;
		return (
			<div>
				{/* //entry form */}
				<div>
					<h3>Entry Form</h3>
					<form onSubmit={this.handleSubmit}>
						<label htmlFor="address">Address</label>
						<input
							type="text"
							value={this.state.address}
							onChange={this.handleChange}
							id="address"
						/>
						<input type="submit" />
					</form>
				</div>
				{/* //a box to contain all the bookmarks */}
				<div>
					{/* a list of procedurally generated bookmarks */}
					{this.state.bookmarks.map((bookmark, index) => {
						return (
							<BookmarkCard
								lat={bookmark.lat}
								lon={bookmark.lon}
								address={bookmark.addess}
								complete={bookmark.complete}
								bookmark={bookmark}
								scrollToBookmark={scrollToBookmark}
								deleteBookmark={deleteBookmark}
								updateBookmark={updateBookmark}
								id={bookmark._id}
								index={index}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}
