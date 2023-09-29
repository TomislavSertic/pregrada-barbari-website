export type IThemeType = "light" | "dark";
export type TLocalizationLang = "hrv" | "eng" | "zag";
export enum ELocalizationLang {
  HRV = "hrv",
  ENG = "eng",
  ZAG = "zag",
}
export type TNavLink = {
  [key in ELocalizationLang]: object[];
};
