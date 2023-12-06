import { forwardRef } from "react";
import styled from "styled-components";
import { styles } from "../assets/styles/variables";
import { LuUserCircle } from "react-icons/lu";

const Input = styled.input`
  background: ${styles.clrSurface};
  width: 100%;
  height: 2.8rem;
  border: none;
  border-bottom: 0.1rem solid ${styles.clrPrimary};
  outline: none;
  font-size: 0.9rem;
  padding-left: 0.2rem;
  &:placeholder {
    font-family: ${styles.ffPrimary};
  }
`;
const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const EmailInput = forwardRef<HTMLInputElement>((_, ref) => {
  return (
    <Div>
      <LuUserCircle size="1.6rem" color={styles.clrPrimary} />
      <Input ref={ref} type="text" placeholder="Email address" />
    </Div>
  );
});

export default EmailInput;
