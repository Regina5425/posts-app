import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../sagas";
import postsReducer from "./posts";
import commentsReducer from "./comments";
import userReducer from "./user";
import errorReducer from "./errors";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
    user: userReducer,
    error: errorReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware);
  },
});

sagaMiddleware.run(rootSaga);

export default store;
