import React from 'react';

const FormChild = (props, ref) => {
	return (
		<div>
			<input type="text" name={props.name} ref={ref} placeholder={props.placeholder} {...props.name} />
			<br />
			<br />
		</div>
	);
};

const forwordref = React.forwardRef(FormChild);

export default forwordref;
