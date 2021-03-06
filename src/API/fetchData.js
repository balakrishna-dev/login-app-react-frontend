const fetchData = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	const data = await res.json();
	if (res.status >= 400) throw new Error(data.error);
	return data;
};

export default fetchData;
