import { forwardRef } from "react";
import user from "../../images/user.svg";
import styled from "styled-components";
import { styles } from "../../styles/variables";

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
const Img = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;

const EmailInput = forwardRef<HTMLInputElement>((_, ref) => {
  return (
    <Div>
      <Img src={user} alt="userIcon" />
      <Input ref={ref} type="text" placeholder="Email address" />
    </Div>
  );
});

export default EmailInput;
