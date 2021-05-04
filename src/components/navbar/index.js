import React from 'react';
import { Nav, NavMember, NavLink, NavMenu, NavBtnLink, SearchIcon } from './NavbarElements';
import { Clock } from './clock';
import { Wifi } from './wifi';
import Username from './username';
import withFocusable from '@noriginmedia/react-spatial-navigation/dist/withFocusable';
const axios = require('axios');

// Make a request for a user with a given ID
// const navData = axios.get('api_url')
// 	.then(function(response) {
// 		// handle success
// 		console.log(response);
// 	})
// 	.catch(function(error) {
// 		// handle error
// 		console.log(error);
// 	})
// 	.then(function() {
// 		// always executed, not needed here
// 	});

const Navbar = ({ focusOnNavBar, setFocusOnNavBar }) => {
	const innerRef = React.useRef(null);

	const navData = [
		{ to: '/search', content: <SearchIcon /> },
		{ to: '/home', content: 'Home' },
		{ to: '/movies', content: 'Movies' },
		{ to: '/shows', content: 'Shows' },
		{ to: '/live_tv', content: 'Live TV' },
		{ to: '/settings', content: 'Settings' },
		{ to: '/apps', content: 'Apps' }
	];

	const randomWifi = Math.floor(Math.random() * 4);

	return (
		<div ref={innerRef} tabIndex="-1">
			<Nav>
				<NavMenu>
					{navData.map((tab) => {
						return (
							<NavLink to={tab.to} activeStyle key={tab.to} id={tab.to}>
								{tab.content}
							</NavLink>
						);
					})}
				</NavMenu>
				<NavMember>
					<Username />
				</NavMember>
				<NavMember>
					<Wifi />
				</NavMember>
				<NavMember>
					<Clock />
				</NavMember>
				<NavMember>
					<img src="/images/alphonso_logo.png" height="30px" />
				</NavMember>
			</Nav>
		</div>
	);
};

//export default Navbar;

const NavbarFocusable = withFocusable()(Navbar);

export default NavbarFocusable;
