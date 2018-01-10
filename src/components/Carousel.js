import React from 'react';
import ReactDOM from 'react-dom';

import ReactSwipe from 'react-swipe';

export default class Carousel extends React.Component {
	render() {
		let pStyle = {
			backgroundColor: 'aquamarine'
		};

		return (
			<ReactSwipe className="carousel" swipeOptions={{ continuous: false }}>
				<div style={pStyle}>PANE 1</div>
				<div style={pStyle}>PANE 2</div>
				<div style={pStyle}>PANE 3</div>
			</ReactSwipe>
		);
	}
}