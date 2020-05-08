import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink, Link } from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import signin from './signin';
import Dashboard from './Dashboard';
import Home from './Home';

import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './Utils/Common';
import posts from './Redux/posts';
import postForm from './Redux/postform';

const useStyles = makeStyles((theme) => ({
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

function App() {
	const classes = useStyles();
	const content = {
		color: 'white',
		margin: '20px',
		textDecoration: 'none'
	};

	const [ authLoading, setAuthLoading ] = useState(true);

	useEffect(() => {
		const token = getToken();
		if (!token) {
			return;
		}

		axios
			.get(`http://localhost:4000/verifyToken?token=${token}`)
			.then((response) => {
				setUserSession(response.data.token, response.data.user);
				setAuthLoading(false);
			})
			.catch((error) => {
				removeUserSession();
				setAuthLoading(false);
			});
	}, []);

	if (authLoading && getToken()) {
		return <div className="content">Checking Authentication...</div>;
	}

	return (
		<div className={classes.root}>
			<BrowserRouter>
				<AppBar position="static">
					<Toolbar>
						<div className={classes.root}>
							<Typography variant="h6" className={classes.title}>
								<table>
									<tr>
										<th>
											<NavLink exact activeClassName="active" to="/" style={content}>
												<b>Home</b>
											</NavLink>
										</th>
										<th>
											<NavLink activeClassName="active" to="/signin" style={content}>
												<b>Signin</b>
												<small> (Access without token only)</small>
											</NavLink>
										</th>
										<th>
											<NavLink activeClassName="active" to="/dashboard" style={content}>
												<b>Dashboard</b>
												<small> (Access with token only)</small>
											</NavLink>
										</th>
										<th>
											<Link to={'/posts'} activeClassName="active" style={content}>
												<b>Posts</b>
											</Link>
										</th>
										<th>
											<Link to={'/addPost'} activeClassName="active" style={content}>
												<b>Add Post</b>
											</Link>
										</th>
									</tr>
								</table>
							</Typography>
						</div>
					</Toolbar>
				</AppBar>
				<Switch>
					<Route exact path="/" component={Home} />
					<PublicRoute path="/signin" component={signin} />
					<PrivateRoute path="/dashboard" component={Dashboard} />
					<PrivateRoute exact path="/posts" component={posts} />
					<PrivateRoute exact path="/addPost" component={postForm} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
