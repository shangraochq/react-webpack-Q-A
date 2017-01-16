import React from 'react';

export default class ShowAddButton extends React.Component {

	onsubmit() {

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
				    <input  className="form-control" id="quetitle" placeholder="请输入问题标题" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="quecontent"></label>
				    <textarea className="form-control" id="quecontent" placeholder="请输入问题" />
				  </div>
				  
				  <button className="btn btn-default" onClick = {this.props.displayButton}>取消</button>
				  <button type="submit" className="btn btn-success" onClick = {this.onsubmit}>确定</button>
				</form>

			</div>	
			)
	}
}