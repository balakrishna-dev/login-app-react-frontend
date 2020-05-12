import { combineReducers } from 'redux';
import rootReducer from './reducer';

export default combineReducers({
	posts: rootReducer
});
