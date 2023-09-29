import { createSlice } from "@reduxjs/toolkit";
import { NAV_LINKS, ABOUT_TEXT, CONTACT_TEXT } from "@/constants";
import { TLocalizationLang } from "@/types/types";
const initialState = {
  nav_links: NAV_LINKS["hrv"],
  about: ABOUT_TEXT["hrv"],
  contact: CONTACT_TEXT["hrv"],
  currentLang: "hrv",
};

const localizationSlice = createSlice({
  name: "localization",
  initialState,
  reducers: {
    changeLang: (state, action: { payload: TLocalizationLang }) => {
      state.nav_links = NAV_LINKS[action.payload];
      state.about = ABOUT_TEXT[action.payload];
      state.contact = CONTACT_TEXT[action.payload];
    },
  },
});

export const selectNavLinks = (state: { localization: typeof initialState }) =>
  state.localization.nav_links;
export const selectAboutText = (state: { localization: typeof initialState }) =>
  state.localization.about;
export const selectContactText = (state: {
  localization: typeof initialState;
}) => state.localization.contact;

export const localizationReducer = localizationSlice.reducer;
export const { changeLang } = localizationSlice.actions;
