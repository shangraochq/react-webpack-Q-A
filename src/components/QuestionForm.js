import React from 'react';

export default class QuestionForm extends React.Component {

	onsubmit(e) {
		e.preventDefault();
		let value = this.refs.title.value;

		//如果没有输入标题，则不执行任何
		if (value === '') {
			alert('请输入一些内容');
			return;
		}

		let addQ = {};
		addQ.title = value;
		addQ.description = this.refs.description.value;

		//调用父组件的函数
		this.props.addNewQuestion(addQ);
		this.refs.title.value = '';
		this.refs.description.value = '';
	}

	render() {
		let style = {
				display : this.props.formDisplay ? 'block' : 'none'
			}
		return (
			
			<div className = "questionForm">
				<form role="form" style = {style}>
				  <div className="form-group">
				    <label htmlFor="quetitle">问题</label>
				    <input ref = 'title' className="form-control" id="quetitle" placeholder="请输入问题标题" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="quedescription"></label>
				    <textarea ref = 'description' className="form-control" id="quedescription" placeholder="请输入问题" />
				  </div>
				  
				  <button className="btn btn-info" onClick = {this.props.displayButton}>取消</button>
				  <button type="submit" className="btn btn-success" onClick = {this.onsubmit.bind(this)}>确定</button>
				</form>

			</div>
			)
	}
}