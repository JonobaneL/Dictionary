import { useState, ChangeEvent } from "react";
import { useValidathion } from "./useValidathion";
import { ValidathionsProps } from "../models/ValidathionProps";

export const useInput = (
  inithialValue: string,
  validathions: ValidathionsProps,
  fieldName?: string
) => {
  const [value, setValue] = useState(inithialValue);
  const [isDurty, setIsDurty] = useState(false);
  const valid = useValidathion(value, validathions, fieldName);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onBlur = () => {
    setIsDurty(true);
  };
  return { value, onChange, onBlur, isDurty, ...valid };
};
