import { useRef } from "react";
import logo from "../assets/images/logo.svg";
import standartStyles from "../assets/styles/pages/LogIn.module.scss";
import { styles } from "../assets/styles/variables";
import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";
import styled from "styled-components";
import Button from "../components/UI/Button";

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
  padding: 0.5rem 0.8rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: rgba(84, 166, 141, 0.2);
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
        <p>Don't have an account?</p>
        <SignUpButton>Sign Up</SignUpButton>
      </SignUp>
    </div>
  );
};

export default LogIn;
