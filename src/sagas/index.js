import { delay, all, call, put, takeEvery } from "redux-saga/effects";
import { getPosts, fetchedPosts } from "../redux/posts";
import { getComments, fetchedComments } from "../redux/comments";
import {
  getUser,
  fetchedUser,
  getUserPosts,
  fetchedUserPosts,
} from "../redux/user";
import { getPostsError, getCommentsError, getUserError } from "../redux/errors";
import {
  getPostsApi,
  getCommentsApi,
  getUserApi,
  getUserPostsApi,
} from "../api";

function* getPostsSaga(action) {
  try {
    yield delay(500);

    yield put(fetchedPosts(yield call(getPostsApi, action.payload)));
  } catch {
    yield put({
      type: getPostsError.type,
      payload: "Ошибка при загрузке постов",
    });
  }
}

function* getCommentsSaga(action) {
  try {
    yield delay(500);

    yield put(fetchedComments(yield call(getCommentsApi, action.payload)));
  } catch {
    yield put({
      type: getCommentsError.type,
      payload: "Ошибка при загрузке комментариев",
    });
  }
}

function* getUserSaga(action) {
  try {
    yield delay(500);

    yield put(fetchedUser(yield call(getUserApi, action.payload)));
  } catch {
    yield put({
      type: getUserError.type,
      payload: "Ошибка при загрузке пользователя",
    });
  }
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
