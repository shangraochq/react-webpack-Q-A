import React from 'react';

export default class ShowAddButton extends React.Component {
	render() {
		return (
			<button type="button" className="btn btn-primary" onClick = {this.props.displayButton}>添加问题</button>
			);
	}
}