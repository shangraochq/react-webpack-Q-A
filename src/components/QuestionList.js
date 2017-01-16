import React from 'react';
import QuestionItem from './QuestionItem';

export default class QuestionList extends React.Component {
	render() {
		let onVote = this.props.onVote,
			questions = this.props.questions,
			questionsArray = questions.map(function(q){
				return (
					<QuestionItem 
						key = {q.id}
						questionKey = {q.id}
						title = {q.title}
						description = {q.description}
						voteCount = {q.voteCount}
						onVote = {onVote}
					/>
				)
			});

		return (
			<div>
				{questionsArray}
			</div>
			);
	}
}