import React from 'react';

class App extends React.Component {
	sayHey(){
		alert("hey");
	}

	render(){
			let text = "Dev-server";
			let pStyle={
				color:'aqua',
				backgroundColor:'black'
			};

			return (
				<div>
					<Header title={ this.props.headertitle }/>
					<Content title={this.props.contentTitle }
										body={this.props.contentBody}/>
					<h1>{this.props.title}</h1>
				</div>
			);
			// return (
			// 		<div>
			// 			<h1>Hello React Skeleton</h1>
			// 			<h2>Welcome to {text}</h2>
			// 			<button onClick={this.sayHey}>Click Me</button>
			// 			<p style={pStyle}>{1 === 1 ? 'True' : 'False'}</p>
			// 		</div>
			// );
	}
}

App.defaultProps = {
	headerTitle: 'Default header',
	contentTitle: 'Default contentTitle',
	contentBody: 'Defaut contentBody'
};

class Header extends React.Component {
	render(){
			return (
					<h1>Header</h1>
			);
	}
}

class Content extends React.Component {
	render(){
			return (
					<div>
							<h2>Content</h2>
							<p> Hey! </p>
							<h2>{this.props.title}</h2>
							<p>{this.props.body}</p>
					</div>
			);
	}
}



export default App;