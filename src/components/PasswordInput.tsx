import { useState, forwardRef } from "react";
import showIcon from "../assets/images/passwordField/show.svg";
import hideIcon from "../assets/images/passwordField/hide.svg";
import key from "../assets/images/passwordField/key.svg";
import styled from "styled-components";
import { styles } from "../assets/styles/variables";

const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  position: relative;
`;
const Input = styled.input`
  background: ${styles.clrSurface};
  width: 100%;
  height: 2.8rem;
  border: none;
  border-bottom: 0.1rem solid ${styles.clrPrimary};
  outline: none;
  font-size: 0.9rem;
  padding-left: 0.2rem;
  padding-right: 1.8rem;
  &:placeholder {
    font-family: ${styles.ffPrimary};
  }
`;
const Img = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;
const PasswordIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  position: absolute;
  right: 0;
  cursor: pointer;
`;

const PasswordInput = forwardRef<HTMLInputElement>((_, ref) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true);
  return (
    <Div>
      <Img src={key} alt="password" />
      <Input
        ref={ref}
        type={isPasswordHidden ? "password" : "text"}
        placeholder="Password"
      />
      {isPasswordHidden ? (
        <PasswordIcon
          onClick={() => {
            setIsPasswordHidden(false);
          }}
          src={hideIcon}
          alt="hide"
        />
      ) : (
        <PasswordIcon
          onClick={() => {
            setIsPasswordHidden(true);
          }}
          src={showIcon}
          alt="show"
        />
      )}
    </Div>
  );
});

export default PasswordInput;
