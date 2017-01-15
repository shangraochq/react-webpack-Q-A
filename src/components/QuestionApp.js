require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ShowAddButton from './ShowAddButton';
import QuestionForm from './QuestionForm';
import QuetionList from './QuetionList';

class AppComponent extends React.Component {
	constructor(proos){
		var questions = [
			{
				id:1,
				title:'产品经理与程序员矛盾的本质是什么？',
				description:'理性探讨，请勿撕逼。产品经理的主要工作职责是产品设计。接受来自其他部门的需求，经过设计后交付研发。但这里有好些职责不清楚的地方。',
				voteCount:10
			},
			{
				id:2,
				title:'热爱编程是一种怎样的体验？',
				description:'别人对玩游戏感兴趣，我对写代码、看技术文章感兴趣；把泡github、stackoverflow、v2ex、reddit、csdn当做是兴趣爱好；遇到重复的工作，总想着能不能通过程序实现自动化；喝酒的时候把写代码当下酒菜，边喝边想边敲；不给工资我也会来加班；做梦都在写代码。',
				voteCount:8
			},
			{
				id:3,
				title:'热爱编程是一种怎样的体验？',
				description:'别人对玩游戏感兴趣，我对写代码、看技术文章感兴趣；把泡github、stackoverflow、v2ex、reddit、csdn当做是兴趣爱好；遇到重复的工作，总想着能不能通过程序实现自动化；喝酒的时候把写代码当下酒菜，边喝边想边敲；不给工资我也会来加班；做梦都在写代码。',
				voteCount:5
			}
		];
		super(props);
		this.state = {questions: questions,
									formDisplay: false,
								 }		
	}

	displayButton() {
		this.setstate({
			formDisplay: !this.state.formDisplay
		})
	}

  render() {
    return (
      <div>
        <div className = "container">
        	<h4>React问答</h4>
        	<ShowAddButton />
        </div>
        <div className = "main container">
        	<QuestionForm />
        	<QuetionList />
        </div>
      </div>
    );
  }
}


export default AppComponent;
