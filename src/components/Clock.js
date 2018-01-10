import React from 'react';
import ReactDOM from 'react-dom';

export default class Clock extends React.Component {
	constructor(props){
		super(props);
		this.state = { date: new Date() };
	}

	componentDidMount(){
		this.timerId = setInterval(
			() => {
				this.tick();
			}, 1000
		);
	}

	componentWillUnmount(){
		clearInterval(this.timerId);
	}

	tick(){
		this.setState({
			date: new Date()
		});
	}	

	render(){
		let pStyle = {
			border: 'dashed 2px pink'
		};

		return (
				<div style={pStyle}>
				<h1>Hellow, world!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		);
	}
}