import React from 'react';


class Content extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			date: new Date(),
			name: 'Isaac'
		};
	}

	render() {
		return (
			<div>
				<h2>Content</h2>
				<button onClick={() => {this.setState({name: 'Velopert'});}}>Click</button>
				<p> Hey! {this.state.name} !!!</p>
				<h2>{this.props.title}</h2>
				<p>{this.props.body}</p>
			</div>
		);
	}
}

/* Content.propTypes = {
	 title: React.PropTypes.string,
	 body: React.PropTypes.string.isRequired
}; */

export default Content;