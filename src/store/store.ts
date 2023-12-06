import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";

const rootReducer = combineReducers({ userReducer: userReducer });
export const setupStore = () => configureStore({ reducer: rootReducer });

export type RootStore = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
