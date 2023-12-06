import { useEffect, useState } from "react";
import { ValidathionsProps } from "../models/ValidathionProps";
import { generateValidationMessage } from "../utils/validationMessages";

export const useValidathion = (
  value: string,
  validathions: ValidathionsProps,
  fieldName?: string
) => {
  const [validathionMessages, setValidathionMessages] = useState<string[]>([]);

  const removeValidathionMessage = (message: string) => {
    setValidathionMessages((p) => {
      return p.filter((item) => item !== message);
    });
  };
  const addValidationMessage = (message: string) => {
    if (validathionMessages.find((item) => item === message)) return;
    setValidathionMessages((p) => [...p, message]);
  };

  useEffect(() => {
    if (!validathions) return;
    for (const validathion in validathions) {
      const validathionMessage = generateValidationMessage(
        validathion,
        fieldName || "",
        validathions[validathion as keyof typeof validathions] || 0
      );
      switch (validathion) {
        case "isEmpty":
          if (!value) {
            addValidationMessage(validathionMessage);
            continue;
          }
          removeValidathionMessage(validathionMessage);
          break;
        case "isEmail":
          const reg =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          const check = reg.test(String(value).toLocaleLowerCase());
          if (!check) {
            addValidationMessage(validathionMessage);
            continue;
          }
          removeValidathionMessage(validathionMessage);

          break;
        case "minLength":
          if (value.length < (validathions[validathion] || 0)) {
            addValidationMessage(validathionMessage);
            continue;
          }
          removeValidathionMessage(validathionMessage);
          break;
        case "maxLength":
          if (value.length > (validathions[validathion] || 0)) {
            addValidationMessage(validathionMessage);
            continue;
          }
          removeValidathionMessage(validathionMessage);
          break;
      }
    }
  }, [value]);

  const isValid = validathionMessages.length === 0 ? true : false;
  return {
    validathionMessages,
    isValid,
  };
};
