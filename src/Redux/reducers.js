import actionTypes from './actiontypes';

const PostInitialState = {
	items: [],
	item: {},
	loading: true,
	error: ''
};

export function postReducer(state = PostInitialState, action) {
	switch (action.type) {
		case actionTypes.FETCH_POST:
			return {
				...state,
				loading: true,
				error: ''
			};
		case actionTypes.FETCH_POST_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			};
		case actionTypes.FETCH_POST_SUCCESS:
			return {
				...state,
				loading: false,
				items: action.payload,
				error: ''
			};
		case actionTypes.NEW_POST:
			return {
				...state,
				item: action.payload
			};
		default:
			return state;
	}
}

const FavoriteInitialState = {
	favorites: []
};
export function favReducer(state = FavoriteInitialState, action) {
	switch (action.type) {
		case actionTypes.FAV_ADD:
			return {
				...state,
				favorites: action.payload
			};
		case actionTypes.FAV_REMOVE:
			return { ...state };
		default:
			return state;
	}
}
