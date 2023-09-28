import { IThemeType } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: { theme: IThemeType } = {
  theme: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const selectTheme = (state: { theme: typeof initialState }) =>
  state.theme.theme;

export const themeReducer = themeSlice.reducer;
export const { changeTheme } = themeSlice.actions;
