import * as actions from './actiontypes';

const initialState = {
	items: [],
	item: {},
	favorites: []
};

export function postReducer(state = initialState, action) {
	switch (action.type) {
		case actions.FETCH_POST:
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

export function favReducer(state = initialState, action) {
	switch (action.type) {
		case actions.FAV_ADD:
			return {
				...state,
				favorites: action.payload
			};
		case actions.FAV_REMOVE:
			return { ...state };
		default:
			return state;
	}
}
