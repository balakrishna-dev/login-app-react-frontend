import { takeEvery, call, put } from 'redux-saga/effects';
import actiontypes from '../Redux/actiontypes';
import fetchData from '../API/fetchData';
import { fetchPostsSuccess, fetchPostsError, addPostSuccess } from '../Redux/Posts/postActions';
import actionTypes from '../Redux/actiontypes';
import addPostToApi from '../API/addPostToApi';

function* fetchPostsSaga() {
	try {
		console.log('fetching posts');
		const posts = yield call(fetchData);
		yield put(fetchPostsSuccess(posts));
	} catch (error) {
		yield put(fetchPostsError(error.toString()));
	}
}

function* addPostSaga() {
	try {
		console.log('adding post');
		const newPost = yield call(addPostToApi(postData));
		yield put(addPostSuccess(newPost));
	} catch (error) {
		yield put(fetchPostsError(error.toString()));
	}
}

function* postSaga() {
	yield takeEvery(actiontypes.FETCH_POST, fetchPostsSaga);
	yield takeEvery(actionTypes.NEW_POST, addPostSaga);
}

export default postSaga;
