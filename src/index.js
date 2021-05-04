import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initNavigation, setKeyMap } from '@noriginmedia/react-spatial-navigation';

initNavigation();

// Optional
setKeyMap({
	left: 9001,
	up: 9002,
	right: 9003,
	down: 9004,
	enter: 9005
});

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
