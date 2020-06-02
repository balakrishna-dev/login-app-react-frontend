import { makeStyles } from '@material-ui/core/styles';

export const AppUseStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));

export const Appcontent = {
	color: 'white',
	margin: '20px',
	textDecoration: 'none'
};
export const FormDialogUseStyles = makeStyles((theme) => ({
	margin: {
		margin: 100
	},
	extendedIcon: {
		marginRight: 100
	}
}));

export const DashboarduseStyles = makeStyles((theme) => ({
	margin: {
		margin: 100
	},
	extendedIcon: {
		marginRight: 100
	}
}));

export const SignInUseStyles = makeStyles((theme) => ({
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
