import * as actions from './actiontypes';
import { username, password } from '../material/FormDialog';

export default function reducer(state = [], action) {
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
		default:
			return state;
	}
}
