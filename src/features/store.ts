import type { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import waves from "./waves";

export const rootReducer = combineReducers({
  waves,
});

export const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});

// https://redux-toolkit.js.org/usage/usage-with-typescript
export type RootState = Readonly<ReturnType<typeof rootReducer>>;
export type AppDispatch = typeof store.dispatch;
export type ExtraArgument = Readonly<null>;

/* eslint-disable @typescript-eslint/no-invalid-void-type */
export type AppThunk<R = void> = ThunkAction<
  Promise<R>,
  RootState,
  ExtraArgument,
  AnyAction
>;
