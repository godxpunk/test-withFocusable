import React, { Component, useState } from 'react';

export const Wifi = () => {
	const urls = [ 'wifi_no_internet', 'wifi_not_connected', 'wifilevel0', 'wifilevel1', 'wifilevel2', 'wifilevel3' ];
	const getRandomUrl = () => {
		const randomIdx = Math.floor(Math.random() * 6);
		return `/images/${urls[randomIdx]}.png`;
	};

	const [ wifiUrl, setWifiLevel ] = useState(getRandomUrl());
	// const updateNetwork = () => setWifiLevel(getRandomUrl());

	// setInterval(updateNetwork, 10000);

	return (
		<div>
			<img src={wifiUrl} height="25px" />
		</div>
	);
};

export default Wifi;
