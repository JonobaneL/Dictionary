import { useState } from "react";
import styles from "../assets/styles/components/PasswordInput.module.scss";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { CgKeyhole } from "react-icons/cg";
import Field from "./UI/Field";
import ValidathioMessage from "./UI/ValidathionMessage";

type PasswordProps = {
  password: {
    validathionMessages: string[];
    isValid: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    isDurty: boolean;
  };
  placeholder?: string;
};

const PasswordInput = ({
  password,
  placeholder = "Password",
}: PasswordProps) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true);
  return (
    <ValidathioMessage
      durty={password.isDurty}
      validathionMessages={password.validathionMessages}
    >
      <div className={styles["password-input"]}>
        <Field
          value={password.value}
          onChange={(e) => password.onChange(e)}
          onBlur={() => password.onBlur()}
          fieldIcon={<CgKeyhole size="1.5rem" color="#3f707d" />}
          placeholder={placeholder}
          type={isPasswordHidden ? "password" : "text"}
        />
        <div className={styles.icon}>
          {isPasswordHidden ? (
            <IoEyeOutline
              size="1.5rem"
              color="#3f707d"
              onClick={() => {
                setIsPasswordHidden(false);
              }}
            />
          ) : (
            <IoEyeOffOutline
              size="1.5rem"
              color="#3f707d"
              onClick={() => {
                setIsPasswordHidden(true);
              }}
            />
          )}
        </div>
      </div>
    </ValidathioMessage>
  );
};

export default PasswordInput;
