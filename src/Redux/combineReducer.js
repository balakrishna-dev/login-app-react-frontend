import { combineReducers } from 'redux';
import { postReducer, favReducer } from './reducers';

const rootReducer = combineReducers({
	posts: postReducer,
	favorite: favReducer
});
export default rootReducer;
