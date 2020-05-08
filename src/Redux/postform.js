import React, { Component } from 'react';

export default class postForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: ''
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	onSubmit(e) {
		e.preventDefault();
		const post = {
			title: this.state.title,
			body: this.state.body
		};
		console.log(post);
	}
	render() {
		return (
			<div>
				<h1>Add Post</h1>
				<form onSubmit={this.onSubmit}>
					<label>Title: </label>
					<br />
					<input type="text" name="title" onChange={this.onChange} value={this.state.title} />
					<br />
					<br />
					<label>Body: </label>
					<br />
					<input type="text" name="body" onChange={this.onChange} value={this.state.body} />
					<br />
					<br />
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}
