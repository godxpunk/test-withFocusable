import React, { Component, useState } from 'react';

export const Clock = () => {
	const getTime = () => {
		let hours = new Date().getHours();
		let minutes = new Date().getMinutes();
		let seconds = new Date().getSeconds();
		let amOrPm = hours < 12 ? 'AM' : 'PM';
		if (hours === 0) hours = 12;
		if (hours > 12) hours -= 12;
		if (hours < 10) hours = '0' + hours;
		if (minutes < 10) minutes = '0' + minutes;
		if (seconds < 10) seconds = '0' + seconds;
		return `${hours}:${minutes}`;
		//return `${hours}:${minutes}:${seconds}`;
	};

	const [ currentTime, setCurrentTime ] = useState(getTime());
	const updateTime = () => setCurrentTime(getTime());

	setInterval(updateTime, 1000);

	return <div> {currentTime} </div>;
};

export default Clock;
