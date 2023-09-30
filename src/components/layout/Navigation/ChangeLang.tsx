"use client";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  ReactEventHandler,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { ELocalizationLang, TLocalizationLang } from "@/types/types.d";
import { changeLang } from "@/redux/features/localization.slice";
export const ChangeLang = () => {
  const [selectedLang, setSelectedLang] = useState(ELocalizationLang["ENG"]);
  const dispatch = useDispatch();
  const selectLanguageHandler: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const value = e.target.value;
    if (value === "HRV") {
      dispatch(changeLang(value));
    }
  };
  return (
    <select onChange={selectLanguageHandler} value={selectedLang}>
      {Object.values(ELocalizationLang).map((value) => {
        return <option key={value}>{value}</option>;
      })}
    </select>
  );
};
