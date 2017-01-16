import React from 'react';

export default class QuestionItem extends React.Component{

	voteUp() {
		
	}

	voteDown() {
		
	}

	render() {
		return(
			<div>
				<div className = "vote">
					<button className="btn btn-default" onClick={this.voteUp}>
						<span className = "vote-count">{this.props.voteCount}</span>
						<span className = "glyphicon glyphicon-chevron-up"></span>
					</button>
					<button className="btn btn-default" onClick={this.voteDown}>
						<span className = "glyphicon glyphicon-chevron-up"></span>
					</button>
				</div>
				<div className = "vote-main">
					<h4 className = "vote-title">{this.props.title}</h4>
					<p className = "vote-content">{this.props.description}</p>
				</div>
			</div>
			)
	}
}