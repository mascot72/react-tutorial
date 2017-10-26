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
					<Header/>
					<Content/>
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
					</div>
			);
	}
}



export default App;