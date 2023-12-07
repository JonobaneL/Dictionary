import styles from "../assets/styles/pages/TestPage.module.scss";
import { LuUserCircle } from "react-icons/lu";
import { useTypeDispatch } from "../hooks/useTypeReduxHooks";
import Button from "../components/UI/Button";
import { logInUser, signOutUser } from "../store/reducers/userSlice";

import Field from "../components/UI/Field";
import { useInput } from "../hooks/useInput";
import ValidathioMessage from "../components/UI/ValidathionMessage";

const TestPage = () => {
  const userEmail = "signUptest@mail.com";
  const userPassword = "123456";
  const emailInput = useInput(
    "",
    { isEmpty: true, isEmail: true, minLength: 6 },
    "Email"
  );
  const dispatch = useTypeDispatch();
  const handler = () => {
    dispatch(logInUser({ email: userEmail, password: userPassword }));
  };
  const handler1 = () => {
    dispatch(signOutUser());
  };
  //code to get current log-ined user, move somewhere else

  // console.log(userInfo);
  return (
    <div className={styles["test-page"]}>
      <LuUserCircle size="1.5rem" color="#3f707d" />
      <Button mode="primary" height="3.5rem" onClick={() => handler()}>
        Log In
      </Button>
      <Button mode="primary" height="3.5rem" onClick={() => handler1()}>
        Log Out
      </Button>
      <ValidathioMessage
        durty={emailInput.isDurty}
        validathionMessages={emailInput.validathionMessages}
      >
        <Field
          fieldIcon={
            <LuUserCircle size="1.5rem" color="#3f707d" placeholder="Email" />
          }
          onBlur={() => emailInput.onBlur()}
          value={emailInput.value}
          onChange={(e) => emailInput.onChange(e)}
        />
      </ValidathioMessage>
    </div>
  );
};

export default TestPage;
