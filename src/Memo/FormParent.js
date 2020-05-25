import React, { useState, useRef, useEffect } from 'react';
import FormChild from './FormChild';

function FormParent() {
	const [ done, setDone ] = useState(false);
	const ref = useRef(0);
	const firstname = useFormInput('');
	const lastname = useFormInput('');
	useEffect(() => {
		ref.current.focus();
		return () => {};
	}, []);
	const handleClose = () => {
		setDone(true);
	};
	return (
		<div>
			{done ? (
				<p>Form Submitted successfully!</p>
			) : (
				<div>
					<br />
					<h2> Form</h2>
					<br />
					<FormChild name={firstname} ref={ref} placeholder="First Name" />
					<FormChild name={lastname} placeholder="Last Name" />
					<button value="submit" type="submit" onClick={handleClose}>
						Submit
					</button>
				</div>
			)}
		</div>
	);
}
const useFormInput = (initialValue) => {
	const [ value, setValue ] = useState(initialValue);

	const handleChange = (e) => {
		setValue(e.target.value);
	};
	return {
		value,
		onChange: handleChange
	};
};
export default FormParent;
