import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export default class Home extends Component {
	render() {
		return (
<<<<<<< HEAD
			<div className="Page">
				<Link to="/">Go Back</Link>
				<div className="column">
					<h2 className="heading winnie">Winnie</h2>
					<ul id="winnie-list">
						<li>1 Card</li>
						<li>43 Card</li>
					</ul>
					<button onClick={this.addWinnie}>Add A Card</button>
				</div>
				<div className="column">
					<h2 className="heading bob">Bob</h2>
					<ul id="bob-list">
						<li>1 Card</li>
						<li>3 Card</li>
					</ul>
					<button onClick={this.addBob}>Add A Card</button>
				</div>
				<div className="column">
					<h2 className="heading thomas">Thomas</h2>
					<ul id="thomas-list">
						<li>1 Card</li>
						<li>2 Card</li>
					</ul>
					<button onClick={this.addThomas}>Add A Card</button>
				</div>
				<div class="column">
					<h2 className="heading george">George</h2>
					<ul id="george-list">
						<li>1 Card</li>
						<li>2 Card</li>
					</ul>
					<button onClick={this.addGeorge}>Add A Card</button>
				</div>
			</div>
=======
			<h1>
				New Page
				<Link to="/">Go Back</Link>
			</h1>
>>>>>>> 2b003cb12fb3616c7941adf1f56394ee7b26b8c1
		);
	}
}
