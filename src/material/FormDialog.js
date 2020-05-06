import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import store from '../Redux/store';

export var username;
export var password;
export var fav, details;

export function FormDialog() {
	const [ open, setOpen ] = React.useState(false);
	const [ uname, setUname ] = React.useState('');
	const [ pword, setPword ] = React.useState('');

	username = useFormInput('');
	password = useFormInput('');

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		store.dispatch({
			type: 'favAdd',
			payload: {
				username: username,
				password: password
			}
		});
		fav = store.getState();
		console.log(fav[0].uname.value);
		details = fav[0];
		setUname(details.uname.value);
		setPword(details.pword.value);
	};

	return (
		<div>
			<Button variant="outlined" color="primary" onClick={handleClickOpen}>
				More About You
			</Button>
			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">More ABout You</DialogTitle>
				<DialogContent>
					<DialogContentText>Tell us more about you we will display your details...</DialogContentText>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						{...username}
						label="Favourite Book"
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
						label="Profession"
						type="text"
						id="password"
						autoComplete="current-password"
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						OK
					</Button>
				</DialogActions>
			</Dialog>

			<h3>{uname}</h3>
			<br />
			<h3>{pword}</h3>
		</div>
	);
}
const useFormInput = (initialValue) => {
	const [ value, setValue ] = useState(initialValue);

	const handleChange = (e) => {
		setValue(e.target.value);
		console.log(e.target.value);
	};
	return {
		value,
		onChange: handleChange
	};
};
