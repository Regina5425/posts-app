import { delay, all, call, put, takeEvery } from "redux-saga/effects";
import { getPosts, fetchedPosts } from "../redux/posts";
import { getComments, fetchedComments } from "../redux/comments";
import {
  getUser,
  fetchedUser,
  getUserPosts,
  fetchedUserPosts,
} from "../redux/user";
import {
  getPostsApi,
  getCommentsApi,
  getUserApi,
  getUserPostsApi,
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

function* watcherSaga() {
  yield all([
    yield takeEvery(getPosts.type, getPostsSaga),
    yield takeEvery(getComments.type, getCommentsSaga),
    yield takeEvery(getUser.type, getUserSaga),
    yield takeEvery(getUserPosts.type, getUserPostsSaga),
  ]);
}

export function* rootSaga() {
  yield watcherSaga();
}
