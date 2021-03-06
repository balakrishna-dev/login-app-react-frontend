import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import addFavorites from '../Redux/favActions';
import * as Styles from '../AllStyles';

var fav;
function FormDialog({ favorites, addFavorites }) {
	const [ open, setOpen ] = useState(false);

	const { FormDialogUseStyles } = Styles;
	const username = useFormInput('');
	const password = useFormInput('');

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		fav = {
			book: username,
			profession: password
		};
		addFavorites(fav);
		console.log('hitt');
	};

	return (
		<div>
			<Button variant="outlined" color="primary" onClick={handleClickOpen} style={{ marginLeft: 40 }}>
				Add Your Favourites
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
			{username !== '' ? (
				<div>
					<Button
						variant="contained"
						size="medium"
						color="secondary"
						className={FormDialogUseStyles.margin}
						value=""
						style={{ marginLeft: 50, marginTop: 30 }}
					>
						{favorites.book.value}
					</Button>

					<Button
						variant="contained"
						size="medium"
						color="primary"
						className={FormDialogUseStyles.margin}
						value=""
						style={{ marginLeft: 50, marginTop: 30 }}
					>
						{favorites.profession.value}
					</Button>
				</div>
			) : (
				''
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

const mapStateToProps = (state) => {
	return {
		favorites: state.favorite.favorites
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addFavorites: () => dispatch(addFavorites(fav))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FormDialog);
