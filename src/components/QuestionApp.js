require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ShowAddButton from './ShowAddButton';
import QuestionForm from './QuestionForm';
import QuestionList from './QuestionList';

export default class AppComponent extends React.Component {
	constructor(props){
		var questions = [
			{
				id:1,
				title:'SNH48是什么？',
				description:'SNH48是由上海丝芭文化传媒有限公司打造的中国本土化大型女子偶像团体，取“上海”的“ShangHai”的拼音缩写从而组成“SNH48”，于2012年10月14日正式成立，有101名正式成员，分为SNH48 Team SII、SNH48 Team NII、SNH48 Team HII、SNH48 Team X、SNH48 Team XII五个队伍。2016年4月20日，SNH48姐妹团体BEJ48、GNZ48正式成立，BEJ48有35名正式成员，分为BEJ48 Team B、BEJ48 Team E两个队伍；GNZ48有33名正式成员，分为GNZ48 Team G、GNZ48 Team NⅢ两个队伍。BEJ48、GNZ48与SNH48统称为“SNH48团体”。',
				voteCount:10
			},
			{
				id:2,
				title:'曾艳芬是谁？',
				description:'曾艳芬，1991年1月30日出生于中国广东韶关，歌手、演员。女子偶像团体SNH48 TEAM NII成员，隶属于上海丝芭文化传媒有限公司[1] ,2013年8月18日，加入SNH48。11月2日，以《剧场女神》公演正式出道。11月11日，升格为SNH48、SNH48 Team NII正式成员。2015年7月25日，荣获SNH48第二届总选举第9位[2]  。2016年3月5日，以应援女神的身份正式加盟综艺《国民美少女》[3]  。7月30日，获得SNH48比翼齐飞第三届总选举第四名。',
				voteCount:8
			},
			{
				id:3,
				title:'华中科技大学是三本吗？',
				description:'华中科技大学（Huazhong University of Science and Technology），简称华中大[1]  。是一所位于湖北省武汉市的中国顶尖综合研究型大学 ，学校前身为1952年设立的华中工学院、1907年德国医师埃里希·宝隆博士创立的上海德文医学堂以及1898年张之洞建立的湖北工艺学堂。2000年由华中理工大学、同济医科大学和武汉城市建设学院合并成立。',
				voteCount:5
			},
			{
				id:4,
				title:'测试样式',
				description:'测试样式',
				voteCount:6
			}
		];
		super(props);
		this.state = {questions: questions,
									formDisplay: false
			};

		//解决事件监听callback中的this指向问题
		this.displayButton = this.displayButton.bind(this);
		this.onVote = this.onVote.bind(this);
		this.addNewQuestion = this.addNewQuestion.bind(this);
		this.deleteQuestion = this.deleteQuestion.bind(this);
	}

	onVote(key, newCount) {
		
		let questions = this.state.questions;

		//返回被点击的item的index
		let index = questions.findIndex(function(element){
			return element.id == key
		});

		questions[index].voteCount = newCount;

		//根据votecount对questions重新排序
		// questions = this.sortQuestion(questions);

		//更新状态
		this.setState({
			questions: questions
		});
	}

  //quesions排序函数
	/*sortQuestion(questions) {
		questions.sort(function(a,b){
			return b.voteCount - a.voteCount
		});
		return questions;
	}*/

	//questionForm显示与消失控制函数
	displayButton(e) {

		//阻止默认时间，防止刷新页面
		e.preventDefault();

		this.setState({
			formDisplay: !this.state.formDisplay
		});
	}

	//添加新问题
	addNewQuestion(q) {

		//新增的question的id取原本最后一个question的id加1
		q.id = this.state.questions[this.state.questions.length-1].id + 1;
		q.voteCount = 0;
		this.state.questions.push(q);
		this.setState({
			questions: this.state.questions,
			formDisplay: false
		})
	}

	//删除问题
	deleteQuestion(key) {

		let questions = this.state.questions;

		//返回被点击的item的index
		let index = questions.findIndex(function(element){
			return element.id == key;
		});

		//删除选中问题
		questions.splice(index, 1);
		this.setState({
			questions: questions
		})

	}

  render() {
    return (
      <div>
        <div className = "container header">
        	<h4>添加、删除、点赞问题</h4>
        	<ShowAddButton  displayButton = {this.displayButton}/>{/*bind(this)解决闭包*/}
        </div>
        <div className = "main container">
        	<QuestionForm displayButton = {this.displayButton} formDisplay = {this.state.formDisplay} addNewQuestion = {this.addNewQuestion}/>
        	<QuestionList questions = {this.state.questions} onVote = {this.onVote} deleteQuestion = {this.deleteQuestion}/>
        </div>

      </div>
    );
  }
}


