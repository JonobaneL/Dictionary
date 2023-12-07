import { ReactNode, ComponentPropsWithoutRef } from "react";
import ValidathioMessage from "./ValidathionMessage";
import Field from "./Field";

type FieldProps = {
  input: {
    validathionMessages: string[];
    isValid: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    isDurty: boolean;
  };
  fieldIcon: ReactNode;
} & ComponentPropsWithoutRef<"input">;

const ValidatedField = ({ input, fieldIcon, ...props }: FieldProps) => {
  return (
    <>
      <ValidathioMessage
        durty={input.isDurty}
        validathionMessages={input.validathionMessages}
      >
        <Field
          fieldIcon={fieldIcon}
          onChange={(e) => input.onChange(e)}
          onBlur={() => input.onBlur()}
          value={input.value}
          {...props}
        />
      </ValidathioMessage>
    </>
  );
};

export default ValidatedField;
