import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, RootStore } from "../store/store";
import { useSelector } from "react-redux";

export const useTypeDispatch = () => useDispatch<AppDispatch>();
export const useTypeSelector: TypedUseSelectorHook<RootStore> = useSelector;
