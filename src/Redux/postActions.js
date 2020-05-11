import * as actons from './actiontypes';

export const fetchPosts = () => (dispatch) => {
	console.log('fetching');
	fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then((posts) =>
		dispatch({
			type: actons.FETCH_POST,
			payload: posts
		})
	);
};

export const addPost = (postData) => (dispatch) => {
	console.log('action called');
	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'post',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(postData)
	})
		.then((res) => res.json())
		.then((post) =>
			dispatch({
				type: actons.NEW_POST,
				payload: post
			})
		);
};

export const addFavorites = (data) => {
	return {
		type: actons.favAdd,
		payload: data
	};
};
