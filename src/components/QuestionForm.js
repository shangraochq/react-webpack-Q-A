import React from 'react';

export default class ShowAddButton extends React.Component {
	render() {
		return (
			<div>
				<form role="form">
				  <div className="form-group">
				    <label for="quetitle">问题</label>
				    <input  className="form-control" id="quetitle" placeholder="请输入问题标题">
				  </div>
				  <div className="form-group">
				    <label for="quecontent">Password</label>
				    <textarea className="form-control" id="quecontent" placeholder="请输入问题">
				  </div>
				  
				  <button className="btn btn-default" onClick = {}>取消</button>
				  <button type="submit" className="btn btn-success" onClick = {this.onsubmit}>确定</button>
				</form>

			</div>	
			)
	}
}