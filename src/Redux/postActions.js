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
