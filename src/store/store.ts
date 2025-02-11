import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./reducers/userSlice";
import puzzleReducer from "./reducers/puzzleSlice";
import quizReducer from "./reducers/QuizSlice";
import quizzesReducer from "./reducers/QuizzesSlice";
import NotificationReducer from "./reducers/NotificationsSlice";

const puzzlePersistConfig = {
  key: "puzzle",
  storage,
};
const quizPersistConfig = {
  key: "quiz",
  storage,
};

const rootReducer = combineReducers({
  userReducer: userReducer,
  puzzleReducer: persistReducer(puzzlePersistConfig, puzzleReducer),
  quizReducer: persistReducer(quizPersistConfig, quizReducer),
  quizzesReducer: quizzesReducer,
  NotificationReducer: NotificationReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
export default store;

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
