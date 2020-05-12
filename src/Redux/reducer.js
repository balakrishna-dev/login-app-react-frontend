import * as actions from './actiontypes';

const initialState = {
	items: [],
	item: {},
	form: {
		username: '',
		password: ''
	}
};

export default function rootReducer(state = initialState, action) {
	switch (action.type) {
		case actions.favAdd:
			console.log('ANKSakd');
			return {
				...state,

				form: action.payload
			};
		case actions.favRemoved:
			return {};
		case actions.FETCH_POST:
			console.log('rducer');
			return {
				...state,
				items: action.payload
			};
		case actions.NEW_POST:
			return {
				...state,
				item: action.payload
			};
		default:
			return state;
	}
}
