import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './components/App';
import Clock from './components/Clock';

import Carousel from './components/Carousel';




ReactDOM.render(
	<App
		headerTitle="Welcome"
		contentTitle="Stranger"
		contentBody="Welcome to example app"
	/>,
	document.getElementById('root')
);

ReactDOM.render(
	<Clock />,
	document.getElementById('root2nd')
);

ReactDOM.render(
	<Carousel />,
	document.getElementById('root3rd')
);