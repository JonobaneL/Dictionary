import { useRef } from "react";
import logo from "../../images/logo.svg";
import standartStyles from "./LogIn.module.scss";
import { styles } from "../../styles/variables";
import EmailInput from "../../components/EmailInput/EmailInput";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import styled from "styled-components";
import Button from "../../components/UI/Button/Button";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
const Span = styled.span`
  font-size: ${styles.fs400};
  font-weight: 500;
  color: ${styles.clrPrimary};
  align-self: flex-end;
  margin-bottom: 1rem;
  cursor: pointer;
`;
const SignUp = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  p {
    font-size: ${styles.fs400};
  }
`;
const SignUpButton = styled.button`
  color: ${styles.clrPrimary};
  background: transparent;
  padding: 0.4rem 0.7rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: ${styles.clrAccent};
  }
`;
const LogIn = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Log In");
  };
  return (
    <div className={standartStyles["log-in"]}>
      <div className={standartStyles.content}>
        <img className={standartStyles.logo} src={logo} alt="" />
        <Form onSubmit={submitHandler}>
          <EmailInput ref={emailRef} />
          <PasswordInput ref={passwordRef} />
          <Span>Forgot Password?</Span>
          <Button mode="primary" width="60%">
            Log In
          </Button>
        </Form>
        <SignUp>
          <p>Don't have an account</p>
          <SignUpButton>Sign Up</SignUpButton>
        </SignUp>
      </div>
    </div>
  );
};

export default LogIn;
