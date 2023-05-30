import {
  delay,
  all,
  call,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { getPosts, fetchedPosts } from "../redux/posts";
import { getComments, fetchedComments } from "../redux/comments";
import {
  getUser,
  fetchedUser,
  getUserPosts,
  fetchedUserPosts,
} from "../redux/user";
import { searchPosts, fetchedSearchPosts } from "../redux/search";
import {
  getPostsApi,
  getCommentsApi,
  getUserApi,
  getUserPostsApi,
  searchPostsApi,
} from "../api";

function* getPostsSaga() {
  yield delay(500);

  yield put(fetchedPosts(yield call(getPostsApi)));
}

function* getCommentsSaga(action) {
  yield delay(500);

  yield put(fetchedComments(yield call(getCommentsApi, action.payload)));
}

function* getUserSaga(action) {
  yield delay(500);

  yield put(fetchedUser(yield call(getUserApi, action.payload)));
}

function* getUserPostsSaga(action) {
  yield delay(700);

  yield put(fetchedUserPosts(yield call(getUserPostsApi, action.payload)));
}

function* searchPostsSaga(action) {
	yield delay(500);
	
  yield put(fetchedSearchPosts(yield call(searchPostsApi, action.payload)));
}

function* watcherSaga() {
  yield all([
    yield takeEvery(getPosts.type, getPostsSaga),
    yield takeEvery(getComments.type, getCommentsSaga),
    yield takeEvery(getUser.type, getUserSaga),
    yield takeEvery(getUserPosts.type, getUserPostsSaga),
    yield takeLatest(searchPosts.type, searchPostsSaga),
  ]);
}

export function* rootSaga() {
  yield watcherSaga();
}
