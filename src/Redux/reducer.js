import * as actions from './actiontypes';
import { username, password } from '../material/FormDialog';

const initialState = {
	items: [],
	item: {},
	form: {
		username: '',
		password: ''
	}
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case actions.favAdd:
			return [
				...state,
				{
					uname: username,
					pword: password
				}
			];
		case actions.favRemoved:
			return [];
		case actions.FETCH_POST:
			console.log('rducer');
			return {
				...state,
				items: action.payload
			};
		default:
			return state;
	}
}
