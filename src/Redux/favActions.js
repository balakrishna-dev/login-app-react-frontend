import * as actons from './actiontypes';

const addFavorites = (data) => (dispatch) => {
	console.log('favaction called', data);
	dispatch({
		type: actons.FAV_ADD,
		payload: data
	});
};
export default addFavorites;
