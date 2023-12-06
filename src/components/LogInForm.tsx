import styles from "../assets/styles/components/LogInForm.module.scss";
import { useInput } from "../hooks/useInput";
import Button from "./UI/Button";
import Field from "./UI/Field";
import ValidathioMessage from "./UI/ValidathionMessage";
import { LuUserCircle } from "react-icons/lu";
import PasswordInput from "./PasswordInput";
import { useTypeDispatch } from "../hooks/useTypeReduxHooks";
import { logInUser } from "../store/reducers/userSlice";
import { useNavigate } from "react-router-dom";

const LogInForm = () => {
  const email = useInput("", { isEmpty: true, isEmail: true });
  const password = useInput(
    "",
    { isEmpty: true, minLength: 6, maxLength: 20 },
    "Password"
  );
  const dispatch = useTypeDispatch();
  const navigate = useNavigate();
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await dispatch(
        logInUser({ email: email.value, password: password.value })
      );
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className={styles["log-in-form"]} onSubmit={submitHandler}>
      <ValidathioMessage
        durty={email.isDurty}
        validathionMessages={email.validathionMessages}
      >
        <Field
          value={email.value}
          onChange={(e) => email.onChange(e)}
          onBlur={() => email.onBlur()}
          fieldIcon={<LuUserCircle size="1.5rem" color="#3f707d" />}
          placeholder="Email address"
        />
      </ValidathioMessage>
      <ValidathioMessage
        durty={password.isDurty}
        validathionMessages={password.validathionMessages}
      >
        <PasswordInput password={password} />
      </ValidathioMessage>
      <span className={styles.forgot}>Forgot Password?</span>
      <Button
        mode="primary"
        width="60%"
        type="submit"
        disabled={email.isValid == false && password.isValid == false}
      >
        Log In
      </Button>
    </form>
  );
};

export default LogInForm;
