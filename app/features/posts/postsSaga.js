// src/features/posts/postsSaga.js
import { call, put, takeLatest } from "redux-saga/effects";
import { postsApi } from "../../api/postsApi";
import {
  fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure,
  createPostRequest, createPostSuccess, createPostFailure,
  updatePostRequest, updatePostSuccess, updatePostFailure,
  deletePostRequest, deletePostSuccess, deletePostFailure,
} from "../postsSlice";

// ---- WORKERS ----
function* fetchPostsSaga() {
  try {
    const { data } = yield call(postsApi.fetchAll);
    yield put(fetchPostsSuccess(data));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

function* createPostSaga(action) {
  try {
    const { data } = yield call(postsApi.create, action.payload);
    yield put(createPostSuccess(data));
  } catch (error) {
    yield put(createPostFailure(error.message));
  }
}

function* updatePostSaga(action) {
  try {
    const { id, values } = action.payload;
    const { data } = yield call(postsApi.update, id, values);
    yield put(updatePostSuccess(data));
  } catch (error) {
    yield put(updatePostFailure(error.message));
  }
}

function* deletePostSaga(action) {
  try {
    const id = action.payload;
    yield call(postsApi.remove, id);
    yield put(deletePostSuccess(id));
  } catch (error) {
    yield put(deletePostFailure(error.message));
  }
}

// ---- WATCHERS ----
export function* postsSaga() {
  yield takeLatest(fetchPostsRequest.type, fetchPostsSaga);
  yield takeLatest(createPostRequest.type, createPostSaga);
  yield takeLatest(updatePostRequest.type, updatePostSaga);
  yield takeLatest(deletePostRequest.type, deletePostSaga);
}
