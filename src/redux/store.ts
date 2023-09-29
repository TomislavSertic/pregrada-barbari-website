import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./features/theme.slice";
import { localizationReducer } from "./features/localization.slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    localization: localizationReducer,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
