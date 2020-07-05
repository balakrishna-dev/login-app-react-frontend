const addPostToApi = async (postData) => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'post',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(postData)
	});
	const data = await res.json();
	if (res.status >= 400) throw new Error(data.error);
	return data;
};

export default addPostToApi;
