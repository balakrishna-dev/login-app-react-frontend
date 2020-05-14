import React from 'react';
import { getUser, removeUserSession } from './Utils/Common';
import * as form from './material/FormDialog';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

function Dashboard(props) {
	const user = getUser();
	const useStyles = makeStyles((theme) => ({
		margin: {
			margin: 100
		},
		extendedIcon: {
			marginRight: 100
		}
	}));

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
			<Button
				variant="contained"
				size="medium"
				color="primary"
				className={useStyles.margin}
				value={'Logout'}
				onClick={handleLogout}
				style={{ marginLeft: 50 }}
			>
				Logout
			</Button>
			{/* <Button fullWidth variant="contained" color="primary" className={useStyles.submit} type="submit" /> */}

			{/* <input type="button" onClick={} value="Logout" /> */}
		</div>
	);
}

export default Dashboard;
