import { combineReducers } from 'redux';
import rootReducer from './reducer';

export default combineReducers({
	user: rootReducer
});
