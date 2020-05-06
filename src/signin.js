import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from './Utils/Common';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ResponsiveDialog from './material/ResponsiveDialog';
import Confirmation from './material/Confirmation';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));

export default function SignIn(props) {
	const classes = useStyles();

	const [ loading, setLoading ] = useState(false);
	const username = useFormInput('');
	const password = useFormInput('');
	// eslint-disable-next-line
	const [ error, setError ] = useState(null);

	const handleLogin = () => {
		setError(null);
		setLoading(true);
		axios
			.post('http://localhost:4000/users/signin', { username: username.value, password: password.value })
			.then((response) => {
				setLoading(false);
				setUserSession(response.data.token, response.data.user);
				props.history.push('/dashboard');
			})
			.catch((error) => {
				setLoading(false);
				if (error.response.status === 401) {
					setError(error.response.data.message);
					alert(error);
				} else setError('Something went wrong. Please try again later.');
			});
		if (username.value === '' || password.value === '') alert('Username and password are required');
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar} />
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						{...username}
						label="Email Address"
						name="username"
						autoComplete="email"
						autoFocus
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						{...password}
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					<FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						value={loading ? 'Loading...' : 'Login'}
						onClick={handleLogin}
						disabled={loading}
					>
						Sign In
					</Button>
					<Grid container>
						<Grid item xs>
							<Confirmation />
						</Grid>

						<Grid item>
							<ResponsiveDialog />
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={8}>
				<Copyright />
			</Box>
		</Container>
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
