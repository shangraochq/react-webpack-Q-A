import React from 'react';

export default class QuestionForm extends React.Component {

	onsubmit(e) {
		e.preventDefault();
		let addQ = {};
		addQ.title = this.refs.title.value;
		addQ.description = this.refs.description.value;
		this.props.addNewQuestion(addQ);
		console.log(1);
	}

	render() {
		let style = {
				display : this.props.formDisplay ? 'block' : 'none'
			}
		return (
			
			<div>
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