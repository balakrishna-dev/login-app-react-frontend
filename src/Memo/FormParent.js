import React, { useState } from 'react';
import withFormData from './FormChild';

function FormParent({ results, loading, error }) {
	const [ done, setDone ] = useState(false);
	const handleSubmit = () => {
		setDone(true);
	};
	if (!done) {
		return (
			<div>
				<button type="submit" onClick={handleSubmit}>
					Fetch Data
				</button>
			</div>
		);
	}
	if (loading || error) {
		return loading ? 'Loading...' : error.message;
	}
	return (
		<div>
			<ul>
				{results.map((result) => (
					<li key={result.id}>
						{result.name} {result.mail}
					</li>
				))}
			</ul>
		</div>
	);
}

export default withFormData(FormParent)({
	url: 'https://api.github.com/users/royderks/repos'
});
