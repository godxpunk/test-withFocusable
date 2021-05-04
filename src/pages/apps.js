import { initNavigation } from '@noriginmedia/react-spatial-navigation';
import withFocusable from '@noriginmedia/react-spatial-navigation/dist/withFocusable';
import React from 'react';

initNavigation();

// Optional
setKeyMap({
	left: 9001,
	up: 9002,
	right: 9003,
	down: 9004,
	enter: 9005
});

const Apps = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '80vh',
				color: 'white'
			}}
		>
			<h1>Apps</h1>
		</div>
	);
};

const AppsFocusable = withFocusable()(Apps);
export default AppsFocusable;
