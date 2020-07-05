import actiontypes from '../actiontypes';
import actionTypes from '../actiontypes';

const fetchPosts = () => ({
	type: actionTypes.FETCH_POST
});

const fetchPostsSuccess = (posts) => ({
	type: actiontypes.FETCH_POST_SUCCESS,
	payload: posts
});

const fetchPostsError = (error) => ({
	type: actionTypes.FETCH_POST_ERROR,
	payload: error
});

const addPostSuccess = (newPost) => ({
	type: actiontypes.NEW_POST_SUCCESS,
	payload: newPost
});
const addPost = (postData) => ({
	type: actiontypes.NEW_POST
});
// 	fetch('https://jsonplaceholder.typicode.com/posts', {
// 		method: 'post',
// 		headers: { 'content-type': 'application/json' },
// 		body: JSON.stringify(postData)
// 	})
// 		.then((res) => res.json())
// 		.then((post) =>
// 			dispatch({

// 			})
// 		);
// };

export { fetchPosts, fetchPostsError, fetchPostsSuccess, addPostSuccess, addPost };
