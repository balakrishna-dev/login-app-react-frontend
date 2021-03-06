import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import axios from 'axios';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './Utils/Common';
import Loading from 'react-loading-components';
import ErrorBoundary from './ErrorBoundary';
import * as Styles from './AllStyles';
import NotFound from './NotFound';

const posts = lazy(() => import('./Redux/Posts/posts'));
const Dashboard = lazy(() => import('./Dashboard'));
const signin = lazy(() => import('./signin'));
const Home = lazy(() => import('./Home'));
const postForm = lazy(() => import('./Redux/Posts/postform'));

const fallback = () => (
	<div style={{ marginLeft: 200 }}>
		Loading Please Wait<Loading type="three_dots" width={50} height={10} fill="blue" />
	</div>
);

function App() {
	const { AppUseStyles, Appcontent } = Styles;
	const classes = AppUseStyles();

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
				console.log(error);
			});
	}, []);

	if (authLoading && getToken()) {
		return <div className="content">Checking Authentication...</div>;
	}

	return (
		<div className={classes.root}>
			<BrowserRouter>
				<ErrorBoundary>
					<Suspense fallback={fallback()}>
						<AppBar position="static">
							<Toolbar>
								<div className={classes.root}>
									<Typography variant="h6" className={classes.title}>
										<table>
											<thead>
												<tr>
													<th>
														<NavLink
															exact
															activeClassName="active"
															to="/"
															style={Appcontent}
														>
															<b>Home</b>
														</NavLink>
													</th>
													<th>
														<NavLink
															activeClassName="active"
															to="/signin"
															style={Appcontent}
														>
															<b>Signin</b>
														</NavLink>
													</th>
													<th>
														<NavLink
															activeClassName="active"
															to="/dashboard"
															style={Appcontent}
														>
															<b>Dashboard</b>
														</NavLink>
													</th>
													<th>
														<NavLink
															to={'/posts'}
															activeClassName="active"
															style={Appcontent}
														>
															<b>Posts</b>
														</NavLink>
													</th>
													<th>
														<NavLink to={'/addPost'} style={Appcontent}>
															<b>Add Post</b>
														</NavLink>
													</th>
												</tr>
											</thead>
										</table>
									</Typography>
								</div>
							</Toolbar>
						</AppBar>
						<Switch>
							<Route exact path="/" component={Home} />
							<PublicRoute exact path="/signin" component={signin} />
							<PrivateRoute exact path="/dashboard" component={Dashboard} />
							<PrivateRoute exact path="/posts" component={posts} />
							<PrivateRoute exact path="/addPost" component={postForm} />
							<PublicRoute path="/*" component={NotFound} />
						</Switch>
					</Suspense>
				</ErrorBoundary>
			</BrowserRouter>
		</div>
	);
}

export default App;
