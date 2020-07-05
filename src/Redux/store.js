import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './combineReducer';
import RootSaga from '../Sagas/RootSaga';

function saveToLocalStorage(state) {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('state', serializedState);
	} catch (e) {
		console.log(e);
	}
}

function getStateFromLocalStorage() {
	try {
		const serializedState = localStorage.getItem('state');
		if (serializedState == null) return undefined;
		return JSON.parse(serializedState);
	} catch (e) {
		console.log(e);
		return undefined;
	}
}

const persistedState = getStateFromLocalStorage();

const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(
		rootReducer,
		persistedState,
		compose(
			applyMiddleware(sagaMiddleware),
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		)
	);

	sagaMiddleware.run(RootSaga);
	store.subscribe(() => saveToLocalStorage(store.getState()));
	return store;
};

export default configureStore;
