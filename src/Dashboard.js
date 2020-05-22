import React, { Suspense, lazy } from 'react';
import { getUser, removeUserSession } from './Utils/Common';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ErrorBoundary from './ErrorBoundary';
import Loading from 'react-loading-components';

import Example from './Redux/Posts/Grid';

function Dashboard(props) {
	const user = getUser();
	const FormDialog = lazy(() => import('./material/FormDialog'));
	const fallback = () => (
		<div style={{ marginLeft: 200 }}>
			Loading Please Wait<Loading type="three_dots" width={50} height={10} fill="blue" />
		</div>
	);
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
			<ErrorBoundary>
				<Suspense fallback={fallback()}>
					<FormDialog />
				</Suspense>
			</ErrorBoundary>
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
			<Example />
		</div>
	);
}

export default Dashboard;
