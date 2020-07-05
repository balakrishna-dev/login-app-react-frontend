import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './postActions';

const posts = (props) => {
	// constructor(props) {
	// 	super(props);
	// 	this.props.fetchPosts();
	// }

	// componentWillReceiveProps(nextProps) {
	// 	if (nextProps.newPost) this.props.posts.unshift(nextProps.newPost);
	// }
	useEffect(
		() => {
			props.fetchPosts();
			if (props.newPost) props.posts.unshift(props.newPost);
		},
		[ props.fetchPosts, props.newPost ]
	);

	const postItems = props.posts.map((post) => (
		<div key={post.id}>
			<h3>{post.title}</h3>
			<p>{post.body}</p>
		</div>
	));
	return (
		<div>
			<h1>Posts</h1>
			{postItems}
		</div>
	);
};

const mapStateToProps = (state) => ({
	posts: state.posts.items,
	newPost: state.posts.item
});

const mapDispatchToProps = (dispatch) => ({
	fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(posts);
