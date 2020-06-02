import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { addPost } from './postActions';

function postForm(props) {
	const initialState = {
		title: '',
		body: '',
		done: false
	};
	const [ state, setState ] = useState(initialState);
	const onChange = (e) => {
		setState({ [e.target.name]: e.target.value });
	};
	const onSubmit = (e) => {
		e.preventDefault();
		setState({ done: true });
		const post = {
			title: state.title,
			body: state.body
		};
		props.addPost(post);
	};
	if (state.done) return <h4 style={{ color: 'green' }}>Post Added successfully</h4>;
	else
		return (
			<div>
				<div>
					<h1>Add Post</h1>
					<form onSubmit={onSubmit}>
						<label>Title: </label>
						<br />
						<input type="text" name="title" onChange={onChange} />
						<br />
						<br />
						<label>Body: </label>
						<br />
						<input type="text" name="body" onChange={onChange} />
						<br />
						<br />
						<button type="submit">Submit</button>
					</form>
				</div>
			</div>
		);
}

// class postForm extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			title: '',
// 			body: ''
// 		};
// 		this.onChange = this.onChange.bind(this);
// 		this.onSubmit = this.onSubmit.bind(this);
// 	}
// 	onChange(e) {
// 		this.setState({ [e.target.name]: e.target.value });
// 	}
// 	onSubmit(e) {
// 		e.preventDefault();
// 		const post = {
// 			title: this.state.title,
// 			body: this.state.body
// 		};
// 		this.props.addPost(post);
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<h1>Add Post</h1>
// 				<form onSubmit={this.onSubmit}>
// 					<label>Title: </label>
// 					<br />
// 					<input type="text" name="title" onChange={this.onChange} value={this.state.title} />
// 					<br />
// 					<br />
// 					<label>Body: </label>
// 					<br />
// 					<input type="text" name="body" onChange={this.onChange} value={this.state.body} />
// 					<br />
// 					<br />
// 					<button type="submit">Submit</button>
// 				</form>
// 			</div>
// 		);
// 	}
// }

postForm.propTypes = {
	addPost: propTypes.func.isRequired
};

export default connect(null, { addPost })(postForm);
