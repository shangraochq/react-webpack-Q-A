import React from 'react';

export default class QuestionItem extends React.Component{

	voteUp() {

		this.props.onVote(this.props.questionKey, this.props.voteCount + 1);
	}

	voteDown() {
		if (this.props.voteCount == 0) {
			return;
		}
		this.props.onVote(this.props.questionKey, this.props.voteCount - 1);
	}

	render() {
		return(
			<div>
				<div className = "vote">
					<button className="btn btn-default" onClick={this.voteUp.bind(this)}>
						<span className = "vote-count">{this.props.voteCount}</span>
						<span className = "glyphicon glyphicon-chevron-up"></span>
					</button>
					<button className="btn btn-default" onClick={this.voteDown.bind(this)}>
						<span className = "glyphicon glyphicon-chevron-down"></span>
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