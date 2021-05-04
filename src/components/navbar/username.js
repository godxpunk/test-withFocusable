import React, { Component } from 'react';
class Username extends Component {
	state = { username: 'Danny' };
	render() {
		return <div>Hi {this.state.username}</div>;
	}
}

export default Username;
