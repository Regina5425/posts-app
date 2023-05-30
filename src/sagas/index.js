import { delay, all, call, put, takeEvery } from "redux-saga/effects";
import { getPosts, fetchedPosts } from "../redux/posts";
import { getComments, fetchedComments } from "../redux/comments";
import { getPostsApi, getCommentsApi } from "../api";

//! работа с запросами, api (workerSaga)
function* getPostsSaga() {
	yield delay(500);

  yield put(
			fetchedPosts(yield call(getPostsApi))
		);
}

function* getCommentsSaga(action) {
	yield delay(500);
	
	yield put(fetchedComments(yield call(getCommentsApi, action.payload)))
}

//!слежение за action (watcherSaga)
function* watcherSaga() {
  yield all([
		yield takeEvery(getPosts.type, getPostsSaga),
		yield takeEvery(getComments.type, getCommentsSaga)
	]);
}

//! корневая saga
export function* rootSaga() {
  yield watcherSaga();
}

//! take блокирует запрос пока не будет выполнен action и срабатывает только один раз
//! takeEvery срабатывает каждый раз
