const errorMessages = {
  isEmpty: `This field can't be empty`,
  minLength: "must be more than ",
  maxLength: "must be less than ",
  isEmail: "Enter valid email address",
} as const;

export const generateValidationMessage = (
  validathion: string,
  fieldName: string,
  value: number | boolean
) => {
  if (validathion == "minLength" || validathion == "maxLength")
    return `${fieldName} ` + errorMessages[validathion] + value + " characters";

  return errorMessages[validathion as keyof typeof errorMessages];
};
