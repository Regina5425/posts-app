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
import { getPostsError, getCommentsError, getUserError } from "../redux/errors";
import {
  getPostsApi,
  getCommentsApi,
  getUserApi,
  getUserPostsApi,
  searchPostsApi,
} from "../api";

function* getPostsSaga() {
  try {
    yield delay(500);

    yield put(fetchedPosts(yield call(getPostsApi)));
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
