import actiontypes from './actiontypes';

const addFavorites = (data) => (dispatch) => {
	console.log('favaction called', data);
	dispatch({
		type: actiontypes.FAV_ADD,
		payload: data
	});
};
export default addFavorites;
