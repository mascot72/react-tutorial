//@flow

import React from 'react';
import Content from './Content';

class App extends React.Component {
	sayHey(){
		alert("hey");
	}

	render(){
			let text = "Dev-server",
			pStyle = {
				color:'aqua',
				backgroundColor:'black'
			};

			return (
				<div>
					<Header title={ this.props.headerTitle } />
					<Content title={this.props.contentTitle }
										body={this.props.contentBody} />
					<h1>{this.props.title}</h1>
				</div>
			);
			// return (
			// 		<div>
			// 			<h1>Hello React Skeleton</h1>
			// 			<h2>Welcome to {text}</h2>
			// 			<button onClick={this.sayHey}>Click Me</button>
			// 			<p style={pStyle}>{1 === 1 ? 'True' : 'False'}</Np>
			// 		</div>
			// );
	}
}

App.defaultProps = {
	headerTitle: 'Default header',
	contentTitle: 'Default contentTitle',
	contentBody: 'Defaut contentBody'
};

/* App.React.alert(()=>{"hoho"});

type Storage = {
	set(key: string, value: any) : void,
	get(key): any,
	remove(key): void
};

const storage: Storage = {
	set(key, value){
		st[key] = JSON.stringify(value);
	},
	get(hey){
		if (!st[key]) return null;
	}
}; */


const key = localStorage.getItem("key");



class Header extends React.Component {
	render(){
			return (
					<h1>Header</h1>
			);
	}
}

/* class Content extends React.Component {
	render() {
		return (
			<div>
				<h2>Content</h2>
				<p> Hey! </p>
				<h2>{this.props.title}</h2>
				<p>{this.props.body}</p>
			</div>
		);
	}
} */

export default App;