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

	deleteQ() {
		let choose = confirm('确定要删除该问题');
		if (!choose) {
			return;
		}
		let questionKey = this.props.questionKey;
		this.props.deleteQuestion(questionKey);
	}

	render() {
		return(
			<div className = "vote">
				<div className = "votePoint">
					<button className="btn btn-default up" onClick={this.voteUp.bind(this)}>
						<span className = "glyphicon glyphicon-chevron-up"></span>
						<span className = "vote-count">{this.props.voteCount}</span>
					</button>
					<button className="btn btn-default down" onClick={this.voteDown.bind(this)}>
						<span className = "glyphicon glyphicon-chevron-down"></span>
					</button>
				</div>
				<div className = "vote-main">
					<h4 className = "vote-title">{this.props.title}</h4>
					<p className = "vote-content">{this.props.description}</p>
					<button type="button" className="btn btn-danger" onClick = {this.deleteQ.bind(this)}>删除问题</button>
				</div>
			</div>
			)
	}
}