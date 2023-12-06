import { useState } from "react";
import styled from "styled-components";
import { styles } from "../assets/styles/variables";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { CgKeyhole } from "react-icons/cg";
import Field from "./UI/Field";

const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  position: relative;
`;

const Icon = styled.div`
  position: absolute;
  height: 1.5rem;
  right: 0;
  top: 50%;
  translate: 0 -50%;
  cursor: pointer;
`;
type PasswordProps = {
  password: {
    validathionMessages: string[];
    isValid: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    isDurty: boolean;
  };
};

const PasswordInput = ({ password }: PasswordProps) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true);
  return (
    <Div>
      <Field
        value={password.value}
        onChange={(e) => password.onChange(e)}
        onBlur={() => password.onBlur()}
        fieldIcon={<CgKeyhole size="1.5rem" color="#3f707d" />}
        placeholder="Password"
        type={isPasswordHidden ? "password" : "text"}
      />
      {isPasswordHidden ? (
        <Icon>
          <IoEyeOutline
            size="1.5rem"
            color={styles.clrPrimary}
            onClick={() => {
              setIsPasswordHidden(false);
            }}
          />
        </Icon>
      ) : (
        <Icon>
          <IoEyeOffOutline
            size="1.5rem"
            color={styles.clrPrimary}
            onClick={() => {
              setIsPasswordHidden(true);
            }}
          />
        </Icon>
      )}
    </Div>
  );
};

export default PasswordInput;
