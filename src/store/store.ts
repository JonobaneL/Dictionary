import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import puzzleReducer from "./reducers/puzzleSlice";

const rootReducer = combineReducers({
  userReducer: userReducer,
  puzzleReducer: puzzleReducer,
});
export const setupStore = () => configureStore({ reducer: rootReducer });

export type RootStore = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
