import React from 'react';
import QuestionItem from './QuestionItem';

export default class QuestionList extends React.Component {
	render() {
		let onVote = this.props.onVote,
			deleteQuestion = this.props.deleteQuestion,
			questions = this.props.questions,

			//遍历questions数组，返回多个QuestionItem,并将相应数据传到QuestionItem的属性中去
			questionsArray = questions.map(function(q){
				return (
					<QuestionItem
						key = {q.id}
						questionKey = {q.id}
						title = {q.title}
						description = {q.description}
						voteCount = {q.voteCount}
						onVote = {onVote}
						deleteQuestion = {deleteQuestion}
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