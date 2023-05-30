import { delay, all, call, put, takeEvery } from "redux-saga/effects";
import { getPosts, fetchedPosts } from "../redux/posts";
import { getPostsApi } from "../api";

//! работа с запросами, api (workerSaga)
function* getPostsSaga() {
	yield delay(500);

  yield put(
			fetchedPosts(yield call(getPostsApi))
		);
}

//!слежение за action (watcherSaga)
function* watcherSaga() {
  yield all([
		yield takeEvery(getPosts.type, getPostsSaga)
	]);
}

//! корневая saga
export function* rootSaga() {
  yield watcherSaga();
}

//! take блокирует запрос пока не будет выполнен action и срабатывает только один раз
//! takeEvery срабатывает каждый раз
