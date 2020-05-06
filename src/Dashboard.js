import React from 'react';
import { getUser, removeUserSession } from './Utils/Common';
import * as form from './material/FormDialog';

function Dashboard(props) {
	const user = getUser();

	const handleLogout = () => {
		removeUserSession();
		props.history.push('/signin');
	};

	return (
		<div>
			<h1> Welcome {user.name}!</h1>
			<br />
			<br />

			<form.FormDialog />
			<br />
			<p />
			<br />

			<input type="button" onClick={handleLogout} value="Logout" />
		</div>
	);
}

export default Dashboard;
